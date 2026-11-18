import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const src = fs.readFileSync(process.argv[2] || path.join(import.meta.dirname, "..", "docs", "callback-receiver.gs"), "utf8");

function makeEnv() {
  const rows = [["Enquiry ID"]]; // header
  const sent = [];
  const props = {};
  const sheet = {
    getLastRow: () => rows.length,
    appendRow: r => rows.push(r.slice()),
    getRange: (a, b, c, d) => {
      if (typeof a === "string") return { setNumberFormat() { return this; }, setValues() { return this; }, setFontWeight() { return this; } };
      if (c === undefined) return { setNumberFormat() { return this; }, setValue(v) { rows[a - 1][b - 1] = v; return this; } };
      return { getValues: () => rows.slice(a - 1, a - 1 + c).map(r => r.slice(b - 1, b - 1 + d)) };
    },
    setFrozenRows() {},
  };
  const ctx = {
    console,
    SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheetByName: () => sheet, insertSheet: () => sheet }) },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    PropertiesService: { getScriptProperties: () => ({ getProperties: () => ({ ...props }), deleteProperty: k => delete props[k], getProperty: k => props[k], setProperty: (k, v) => (props[k] = v) }) },
    MailApp: { sendEmail: m => sent.push(m) },
    Utilities: { formatDate: (d, tz, f) => { const p = n => String(n).padStart(2, "0"); const t = new Date(d.getTime() + 5.5 * 3600e3); const Y = t.getUTCFullYear(), M = p(t.getUTCMonth() + 1), D = p(t.getUTCDate()), h = p(t.getUTCHours()), m = p(t.getUTCMinutes()); return f === "yyyyMMdd" ? `${Y}${M}${D}` : f === "yyyyMMddHH" ? `${Y}${M}${D}${h}` : `${Y}-${M}-${D} ${h}:${m}`; } },
    ContentService: { MimeType: { JSON: "json" }, createTextOutput: s => ({ text: s, setMimeType() { return this; } }) },
  };
  vm.createContext(ctx);
  vm.runInContext(src + "\nthis.__doPost = doPost; this.__doGet = doGet;", ctx);
  return { post: body => JSON.parse(ctx.__doPost({ postData: { contents: JSON.stringify(body) } }).text), get: () => JSON.parse(ctx.__doGet().text), rows, sent, props };
}

const good = { name: "Test Person", phone: "+91 98765 43210", bestTime: "evening", service: "Knee Pain Physiotherapy", page: "/contact/", source: "google", campaign: "business_profile", website: "", elapsedMs: 8000 };
let pass = 0, fail = 0;
const check = (label, cond) => {
  if (cond) pass++;
  else {
    fail++;
    console.log("FAIL:", label);
  }
};

let e = makeEnv();
check("health check", e.get().ok === true);
let r = e.post(good);
check("valid request ok", r.ok === true);
check("row added with phone normalised", e.rows.length === 2 && e.rows[1][3] === "9876543210");
check("status New + channel", e.rows[1][11] === "New" && e.rows[1][9] === "Website callback form");
check("email sent to clinic", e.sent.length === 1 && e.sent[0].to === "appointment@sharonphysio.com" && /9876543210/.test(e.sent[0].subject));
check("duplicate within 10 min not re-added", e.post(good).ok === true && e.rows.length === 2 && e.sent.length === 1);
check("different number accepted", e.post({ ...good, phone: "9123456789" }).ok === true && e.rows.length === 3);

e = makeEnv();
check("honeypot looks ok but stores nothing", e.post({ ...good, website: "http://spam" }).ok === true && e.rows.length === 1 && e.sent.length === 0);
check("too fast rejected", e.post({ ...good, elapsedMs: 300 }).ok === false && e.rows.length === 1);
check("missing elapsed rejected", e.post({ ...good, elapsedMs: undefined }).ok === false);
check("bad phone rejected", e.post({ ...good, phone: "12345" }).ok === false);
check("landline-style rejected", e.post({ ...good, phone: "0452 1234567" }).ok === false);
check("missing name rejected", e.post({ ...good, name: "   " }).ok === false);
check("nothing stored for rejects", e.rows.length === 1);

e = makeEnv();
e.post({ ...good, name: "=HYPERLINK(\"http://x\")", service: "<script>", bestTime: "weird" });
check("formula text neutralised", e.rows[1][2].startsWith("'="));
check("unknown service blanked, bad time -> Any time", e.rows[1][5] === "" && e.rows[1][4] === "Any time");
e.post({ ...good, phone: "9000000001", name: "A".repeat(500) });
check("name length capped", e.rows[2][2].length === 80);

e = makeEnv();
let busy = 0;
for (let i = 0; i < 35; i++) { const out = e.post({ ...good, phone: "98" + String(10000000 + i) }); if (out.error === "busy") busy++; }
check("hourly cap stops after 30", busy === 5 && e.rows.length === 31);

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
