# Printed QR cards

Prepared 18 November 2026. Print only after the matching website upload is live (see "Before you print").

## Files

| File | What it is |
| --- | --- |
| `referral-cards-A6.pdf` | Page 1: patient card. Page 2: doctor-office card. A6 (105 × 148 mm), one card per page. |
| `wallet-cards-A4-sheet.pdf` | 10 wallet cards (90 × 55 mm) on one A4 sheet, with light dashed cut lines. |
| `qr-patient.svg`, `qr-doctor.svg`, `qr-wallet.svg` | The three QR codes on their own (vector) for signs, stickers or posters. |
| `build_cards.py` | Rebuilds everything above. Needs Python with `segno` (`pip install segno`) and Google Chrome. Run: `python build_cards.py <output folder>`. |

## How tracking works

Each QR encodes a short link, not the long tracked address. That keeps the code simple, so it scans more easily on budget phones and small cards, and it lets the destination change later without reprinting.

| Card | Short link on the QR | Redirects (302) to |
| --- | --- | --- |
| Patient A6 | `https://sharonphysio.com/go/patient` | `/contact/?utm_source=qr&utm_medium=print&utm_campaign=patient_card` |
| Doctor-office A6 | `https://sharonphysio.com/go/doctor` | `/contact/?utm_source=qr&utm_medium=print&utm_campaign=doctor_office` |
| Wallet card | `https://sharonphysio.com/go/wallet` | `/contact/?utm_source=qr&utm_medium=print&utm_campaign=wallet_card` |

The redirects live in `public/.htaccess` (section 3b). `/go/` is blocked in `robots.txt` so search engines do not index it.

- **GA4:** Reports > Acquisition > Traffic acquisition, then view "Session source / medium" (`qr / print`) and add "Session campaign" to separate the cards. GA4's default channel grouping may list this as "Unassigned"; that is normal for a custom medium.
- **Callback sheet:** the callback form stores `utm_source` and `utm_campaign` in the Source and Campaign columns, so each callback request shows which card it came from.
- Scans are visits and enquiry intent, not patients. Count real enquiries and attended first appointments in the callback sheet, as defined in `lead-generation-progress.md`.

To point a card somewhere else (for example a new campaign page), edit the matching `RewriteRule` in `public/.htaccess`, rebuild and upload. Already-printed cards keep working.

## Before you print

1. Upload the website build that contains the `/go/` redirects (and the `.htaccess` 404 fix). Open `https://sharonphysio.com/go/patient`, `/go/doctor` and `/go/wallet` in a browser: each should land on the contact page. If you see a "page not found", do not print yet.
2. Have the clinician read the wording (they are public claims): the services line, "Led by Dr. T. Stella Thangam, MPT (Neurology)" on the doctor card, address, hours and phone number.
3. Print **one** sheet first at 100% / "Actual size" (not "Fit to page"), then scan each code with at least three phones, including an older budget Android. Confirm each opens the contact page.
4. Use matt or satin stock (about 300 gsm for the A6 cards, 250 gsm or more for wallet cards). Avoid gloss or a laminate with glare over the QR. Do not recolour the QR or shrink it.

## Using the cards

- Keep the doctor-office card factual. Do not offer or accept payment, gifts or any incentive for referrals, and check the rules of the clinic's professional council and local advertising regulations before approaching doctors.
- Staff should still give the phone number first when someone cannot scan; it is printed on every card.
- Each QR also prints `sharonphysio.com/contact` underneath for people who prefer to type.

## Check results (18 Nov 2026, before upload)

- Every QR decodes to its exact short link from the print-resolution render (300 dpi): patient card, doctor card and all 10 wallet codes.
- A6 cards still decode with soft focus, heavy blur, noise and 7° / −12° tilt at 150 dpi. Wallet codes decode at normal print and camera resolution and with noise, glare and tilt, and fail only under severe blur or very low resolution, which was tested with OpenCV's decoder. That decoder is weaker than a phone's, so a real-phone test (step 3) is still required.
- The redirects were tested on a local Apache against the real built site: all six forms (`/go/x` and `/go/x/`) return 302 to the correct tracked page, and all 66 internal URLs still return 200.
- Testing found a bug that already existed: missing pages returned HTTP 500 instead of 404 on the live site, because a rewrite rule looped. That is fixed in the same `.htaccess` change (missing pages now return the site's 404 page).
