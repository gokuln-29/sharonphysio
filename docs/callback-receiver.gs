/**
 * Sharon Physiotherapy: website callback request receiver.
 *
 * Container-bound Google Apps Script. Create a Google Sheet in the clinic's Google account,
 * open Extensions > Apps Script, paste this file, then Deploy > New deployment > Web app:
 *   Execute as: Me      Who has access: Anyone
 * Put the resulting /exec URL in NEXT_PUBLIC_CALLBACK_URL when building the website.
 *
 * Each valid request becomes a row in the "Callback requests" sheet (columns match
 * docs/lead-tracker-template.csv plus name, phone, best time and service) and an email
 * to NOTIFY_EMAIL. The website only shows "request sent" when this script returns ok:true.
 *
 * @OnlyCurrentDoc
 */

const NOTIFY_EMAIL = "appointment@sharonphysio.com";
const SHEET_NAME = "Callback requests";
const TIMEZONE = "Asia/Kolkata";
const MAX_PER_HOUR = 30;      // abuse cap across the whole site
const DUPLICATE_MINUTES = 10; // same number inside this window is treated as a repeat tap
const MIN_FILL_MS = 2500;     // faster than this is a bot, not a person

const TIMES = { any: "Any time", morning: "Morning", afternoon: "Afternoon", evening: "Evening" };
const SERVICES = [
  "", "Back & Neck Pain Physiotherapy", "Stroke Rehabilitation", "Sports Injury Rehabilitation",
  "Knee Pain Physiotherapy", "Post Surgery Rehabilitation", "Cerebral Palsy Management",
  "Arthritis Treatment", "Women’s Fitness Care", "Manual Therapy", "Other / I’m not sure",
];
const HEADERS = [
  "Enquiry ID", "Received date IST", "Name", "Phone", "Best time to call", "Service", "Source",
  "Campaign", "Landing page", "Channel", "New or returning patient", "Status",
  "First response date IST", "Appointment date IST", "Attended date IST", "Next follow-up date IST", "Staff owner",
];

function doGet() {
  return reply({ ok: true, service: "sharon-callback-receiver" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    if (data.website) return reply({ ok: true });                   // honeypot filled: act as if it worked
    if (!(Number(data.elapsedMs) >= MIN_FILL_MS)) return reply({ ok: false, error: "rejected" }); // also rejects missing/NaN

    const name = clean(data.name, 80);
    const phone = String(data.phone || "").replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    const bestTime = TIMES[data.bestTime] ? data.bestTime : "any";
    const service = SERVICES.indexOf(String(data.service || "")) >= 0 ? String(data.service || "") : "";
    if (!name || !/^[6-9]\d{9}$/.test(phone)) return reply({ ok: false, error: "invalid" });

    if (overHourlyCap()) return reply({ ok: false, error: "busy" });

    const sheet = ensureSheet();
    const now = new Date();
    if (isRecentDuplicate(sheet, phone, now)) return reply({ ok: true });

    const stamp = Utilities.formatDate(now, TIMEZONE, "yyyy-MM-dd HH:mm");
    const id = "CB-" + Utilities.formatDate(now, TIMEZONE, "yyyyMMdd") + "-" + String(sheet.getLastRow()).padStart(4, "0");
    const row = [
      id, stamp, safe(name), phone, TIMES[bestTime], safe(service), safe(clean(data.source, 60) || "direct"),
      safe(clean(data.campaign, 60)), safe(clean(data.page, 120)), "Website callback form", "", "New", "", "", "", "", "",
    ];
    sheet.appendRow(row);
    // Keep time and number as plain text: Sheets would otherwise re-parse them in the sheet's own timezone.
    const added = sheet.getLastRow();
    sheet.getRange(added, 2).setNumberFormat("@").setValue(stamp);
    sheet.getRange(added, 4).setNumberFormat("@").setValue(phone);

    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        name: "Sharon Physiotherapy website",
        subject: "New callback request: " + name + " (" + phone + ")",
        body:
          "A visitor asked the clinic to call them back.\n\n" +
          "Name: " + name + "\nPhone: " + phone + "\nBest time to call: " + TIMES[bestTime] +
          "\nService: " + (service || "not specified") + "\nReceived: " + stamp + " IST\nEnquiry ID: " + id +
          "\n\nThis is a request, not a booked appointment. Call the person, then update the Status column in the sheet.",
      });
    } catch (mailError) {
      console.error("Email failed (request is still saved in the sheet): " + mailError);
    }
    return reply({ ok: true });
  } catch (error) {
    console.error(error);
    return reply({ ok: false, error: "server" });
  } finally {
    lock.releaseLock();
  }
}

function ensureSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.getRange("B:B").setNumberFormat("@");
    sheet.getRange("D:D").setNumberFormat("@");
  }
  return sheet;
}

function overHourlyCap() {
  const props = PropertiesService.getScriptProperties();
  const key = "h" + Utilities.formatDate(new Date(), TIMEZONE, "yyyyMMddHH");
  Object.keys(props.getProperties()).forEach(function (k) { if (k.charAt(0) === "h" && k !== key) props.deleteProperty(k); });
  const count = Number(props.getProperty(key) || 0) + 1;
  if (count > MAX_PER_HOUR) return true;
  props.setProperty(key, String(count));
  return false;
}

function isRecentDuplicate(sheet, phone, now) {
  const last = sheet.getLastRow();
  if (last < 2) return false;
  const from = Math.max(2, last - 19);
  const rows = sheet.getRange(from, 2, last - from + 1, 3).getValues(); // columns B..D
  const cutoff = now.getTime() - DUPLICATE_MINUTES * 60000;
  return rows.some(function (r) {
    const when = r[0] instanceof Date ? r[0].getTime() : new Date(String(r[0]).replace(" ", "T") + ":00+05:30").getTime();
    return String(r[2]).replace(/\D/g, "") === phone && when >= cutoff;
  });
}

// Strip control characters and limit length.
function clean(value, max) {
  return String(value == null ? "" : value).replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

// Stop spreadsheet formula injection: text starting with = + - @ would otherwise be evaluated.
function safe(text) {
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(object) {
  return ContentService.createTextOutput(JSON.stringify(object)).setMimeType(ContentService.MimeType.JSON);
}
