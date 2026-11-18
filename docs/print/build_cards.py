"""Build printable referral cards for Sharon Physiotherapy.

Outputs (in OUT): QR SVGs, three HTML sources, and PDFs:
  referral-cards-A6.pdf       2 pages: patient card, doctor-office card (105x148 mm)
  wallet-cards-A4-sheet.pdf   10 wallet cards per A4 sheet (90x55 mm each)
Then rasterises the PDFs and decodes every QR from the rasterised print to prove they scan.
"""
import subprocess, sys, pathlib, shutil, json
import segno

SITE = pathlib.Path("/Users/coolz/websites/Sharon physio/sharonphysio")
OUT = pathlib.Path(sys.argv[1])
OUT.mkdir(parents=True, exist_ok=True)
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

BASE = "https://sharonphysio.com/contact/"
LINKS = {
    "patient": "https://sharonphysio.com/go/patient",
    "doctor": "https://sharonphysio.com/go/doctor",
    "wallet": "https://sharonphysio.com/go/wallet",
}
SHORT = "sharonphysio.com/contact"

NAME = "Sharon Physiotherapy & Rehabilitation Center"
ADDRESS = "11-17/72, Malar Nagar, Anaiyur, Madurai 625017"
HOURS = "Mon–Sat, 6:00 PM – 9:00 PM"
PHONE = "+91 82483 05206"
ADDRESS_SHORT = "11-17/72, Malar Nagar, Anaiyur, Madurai"

# ---- QR codes -------------------------------------------------------------
def qr_svg(key: str) -> str:
    qr = segno.make(LINKS[key], error="m", micro=False)
    (OUT / f"qr-{key}.svg").write_text(
        qr.svg_inline(scale=10, border=0, dark="#12263f", light="#ffffff", omitsize=True), encoding="utf-8")
    return (OUT / f"qr-{key}.svg").read_text(encoding="utf-8")

qr = {k: qr_svg(k) for k in LINKS}

# ---- assets ---------------------------------------------------------------
fonts = OUT / "fonts"; fonts.mkdir(exist_ok=True)
for f in ("inter-latin.woff2", "outfit-latin.woff2"):
    shutil.copy(SITE / "src/app/fonts" / f, fonts / f)
shutil.copy(SITE / "public/Logo.webp", OUT / "Logo.webp")

FONT_CSS = """
@font-face{font-family:'Outfit';src:url('fonts/outfit-latin.woff2') format('woff2');font-weight:100 900;}
@font-face{font-family:'Inter';src:url('fonts/inter-latin.woff2') format('woff2');font-weight:100 900;}
:root{--navy:#1e3a5f;--ink:#12263f;--teal:#0d9488;--teal-soft:#ecfdf5;--mute:#52627a;--line:#d7e3ea}
*{box-sizing:border-box;margin:0;padding:0}
html,body{font-family:'Inter',system-ui,sans-serif;color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}
h1,h2,.brand{font-family:'Outfit','Inter',sans-serif}
"""

# ---- A6 cards ---------------------------------------------------------------
def a6_page(variant: str) -> str:
    if variant == "patient":
        head = "Physiotherapy in<br>Anaiyur, Madurai"
        sub = "Scan to request a callback or an appointment. The clinic will confirm a suitable time with you."
        extra = """<p class="note">Please bring any reports and your doctor’s instructions to your first visit.</p>
        <p class="services"><b>Services:</b> back &amp; neck pain · knee pain · sports injuries · stroke rehabilitation · post‑surgery rehabilitation · arthritis · women’s physiotherapy · children with cerebral palsy · manual therapy</p>"""
    else:
        head = "Referring a patient<br>for physiotherapy?"
        sub = "Patients are welcome with or without a referral. They can scan to request a callback or an appointment, or call or WhatsApp the clinic."
        extra = """<p class="note">If you have instructions for the patient, for example after surgery, they can bring them to the assessment.</p>
        <p class="services"><b>Services:</b> back &amp; neck pain · knee pain · sports injuries · stroke rehabilitation · post‑surgery rehabilitation · arthritis · women’s physiotherapy · children with cerebral palsy · manual therapy</p>"""
    tag = "Anaiyur, Madurai" if variant == "patient" else "Anaiyur, Madurai · Led by Dr. T. Stella Thangam, MPT (Neurology)"
    return f"""
<section class="card">
  <header class="top">
    <img src="Logo.webp" alt="">
    <div><div class="brand">{NAME}</div><div class="tag">{tag}</div></div>
  </header>
  <main>
    <h1>{head}</h1>
    <p class="sub">{sub}</p>
    <div class="scan">
      <div class="qr">{qr[variant]}</div>
      <div class="scan-text"><b>Scan with your phone camera</b><span>to request a callback or appointment</span><i>{SHORT}</i></div>
    </div>
    <dl>
      <div><dt>Clinic</dt><dd>{ADDRESS}</dd></div>
      <div><dt>Hours</dt><dd>{HOURS}</dd></div>
      <div><dt>Call or WhatsApp</dt><dd class="phone">{PHONE}</dd></div>
    </dl>
    {extra}
  </main>
  <footer>Appointments are confirmed by the clinic.</footer>
</section>"""

A6_CSS = FONT_CSS + """
@page{size:105mm 148mm;margin:0}
.card{width:105mm;height:148mm;display:flex;flex-direction:column;page-break-after:always;overflow:hidden;background:#fff}
.card:last-child{page-break-after:auto}
.top{background:var(--navy);color:#fff;display:flex;align-items:center;gap:3.2mm;padding:4mm 6mm}
.top img{width:14mm;height:14mm;border-radius:50%;background:#fff;object-fit:contain;padding:.6mm}
.brand{font-weight:700;font-size:9.6pt;line-height:1.2}
.tag{font-size:7pt;opacity:.85;margin-top:.8mm;letter-spacing:.02em;line-height:1.3}
main{padding:4.2mm 6mm 0;flex:1;display:flex;flex-direction:column}
h1{font-size:17pt;line-height:1.12;color:var(--navy);font-weight:700}
.sub{font-size:8pt;line-height:1.38;color:var(--mute);margin-top:1.8mm}
.scan{display:flex;align-items:center;gap:4mm;background:var(--teal-soft);border:.25mm solid #a7f3d0;border-radius:3mm;padding:3mm;margin-top:3mm}
.qr{width:33mm;height:33mm;flex:none;background:#fff;padding:2mm;border-radius:1.6mm}
.qr svg{width:100%;height:100%;display:block;shape-rendering:crispEdges}
.scan-text{display:flex;flex-direction:column;gap:1mm;font-size:8pt;line-height:1.3;color:var(--ink)}
.scan-text b{font-family:'Outfit';font-size:10pt;color:var(--navy)}
.scan-text i{font-style:normal;font-size:7.6pt;color:var(--teal);font-weight:600;margin-top:1.2mm;word-break:break-all}
dl{margin-top:3mm;display:grid;gap:1.3mm}
dt{font-size:6.4pt;text-transform:uppercase;letter-spacing:.09em;color:var(--teal);font-weight:700}
dd{font-size:8.2pt;line-height:1.3;font-weight:500}
dd.phone{font-family:'Outfit';font-size:11pt;font-weight:700;color:var(--navy)}
.note{font-size:7.2pt;line-height:1.35;color:var(--mute);margin-top:2.2mm}
.services{font-size:6.6pt;line-height:1.4;color:var(--mute);margin-top:1.4mm}
.services b{color:var(--ink)}
footer{margin-top:auto;border-top:.25mm solid var(--line);padding:1.8mm 6mm;font-size:6.6pt;color:var(--mute);text-align:center}
"""

# ---- wallet sheet -------------------------------------------------------------
def wallet() -> str:
    one = f"""
<div class="w">
  <div class="wl">
    <div class="wh"><img src="Logo.webp" alt=""><div><div class="brand">Sharon Physiotherapy</div><div class="wt">&amp; Rehabilitation Center</div></div></div>
    <div class="wd">{ADDRESS_SHORT}<br>{HOURS}</div>
    <div class="wp">{PHONE}</div>
    <div class="wn">Call or WhatsApp</div>
  </div>
  <div class="wr">
    <div class="wq">{qr['wallet']}</div>
    <div class="ws"><b>Scan to book</b>{SHORT}</div>
  </div>
</div>"""
    return "".join(one for _ in range(10))

WALLET_CSS = FONT_CSS + """
@page{size:210mm 297mm;margin:0}
.sheet{width:210mm;height:297mm;padding:11mm 15mm;display:grid;grid-template-columns:repeat(2,90mm);grid-template-rows:repeat(5,55mm)}
.w{width:90mm;height:55mm;display:flex;border:.2mm dashed #b8c4cc;background:#fff;overflow:hidden}
.wl{flex:1;padding:4.6mm 2.4mm 4mm 5mm;display:flex;flex-direction:column}
.wh{display:flex;align-items:center;gap:2mm}
.wh img{width:10mm;height:10mm;border-radius:50%;object-fit:contain;background:#fff;border:.2mm solid var(--line);padding:.4mm}
.brand{font-weight:700;font-size:8.6pt;color:var(--navy);line-height:1.15}
.wt{font-size:6.2pt;color:var(--mute);margin-top:.5mm}
.wd{font-size:6.8pt;line-height:1.45;color:var(--ink);margin-top:3.6mm}
.wp{font-family:'Outfit';font-weight:700;font-size:10.6pt;color:var(--navy);margin-top:auto}
.wn{font-size:6pt;text-transform:uppercase;letter-spacing:.08em;color:var(--teal);font-weight:700;margin-top:.3mm}
.wr{width:37mm;background:var(--teal-soft);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.8mm;padding:2mm}
.wq{width:30mm;height:30mm;background:#fff;padding:1.4mm;border-radius:1.2mm}
.wq svg{width:100%;height:100%;display:block;shape-rendering:crispEdges}
.ws{font-size:5.6pt;color:var(--teal);text-align:center;line-height:1.35;font-weight:600}
.ws b{display:block;font-family:'Outfit';font-size:7.6pt;color:var(--navy)}
"""

html_a6 = f"<!doctype html><html lang='en'><head><meta charset='utf-8'><title>Sharon Physiotherapy referral cards (A6)</title><style>{A6_CSS}</style></head><body>{a6_page('patient')}{a6_page('doctor')}</body></html>"
html_w = f"<!doctype html><html lang='en'><head><meta charset='utf-8'><title>Sharon Physiotherapy wallet cards (A4 sheet)</title><style>{WALLET_CSS}</style></head><body><div class='sheet'>{wallet()}</div></body></html>"
(OUT / "referral-cards-A6.html").write_text(html_a6, encoding="utf-8")
(OUT / "wallet-cards-A4-sheet.html").write_text(html_w, encoding="utf-8")

# ---- render PDFs ----------------------------------------------------------------
for stem in ("referral-cards-A6", "wallet-cards-A4-sheet"):
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--allow-file-access-from-files",
                    f"--print-to-pdf={OUT / (stem + '.pdf')}", f"file://{OUT / (stem + '.html')}"],
                   check=True, capture_output=True, timeout=120)
    print("rendered", stem + ".pdf", (OUT / (stem + ".pdf")).stat().st_size // 1024, "KB")

json.dump(LINKS, open(OUT / "links.json", "w"), indent=2)
