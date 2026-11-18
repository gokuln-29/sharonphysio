# Sharon Physiotherapy lead generation

Updated 18 November 2026. Local implementation; production deployment is still pending.

## Completed locally

- Confirmed live homepage/contact page are older than the local project; live form requires email and uses ambiguous submit wording.
- Added labelled mobile Call, WhatsApp and Appointment actions, with space below content for the bar.
- Changed homepage heading to Anaiyur, Madurai; added hours, directions and direct call action.
- Reduced visible form to name, phone and optional service. Scheduling preferences are expandable.
- Added +91 phone normalization, Indian clinic-date validation, Sunday closure checks and accessible error messages.
- Preserved the WhatsApp handoff: sending the message and clinic confirmation are separate steps. No fake booking-success screen.
- Added source-labelled contact intent events and queued early clicks. No form values or WhatsApp destination URLs are included in custom analytics events.
- Added knee-pain and post-surgery assessment pages; improved existing back/neck, sports and stroke pages, service navigation and sitemap.
- Updated website privacy copy to describe actual WhatsApp/analytics behaviour.
- Bundled existing Inter, Outfit and Playfair Latin fonts from the previous export to remove build-time Google Fonts dependency.

## Pending account work

1. Deploy the validated export to the site's existing host; do not create a second production site. No deployment credentials/configuration are present in this checkout.
2. GA4 G-T5F2QL12ZV and GTM-5QXNX47H: inspect published GTM tags before changing ownership. Both loaders already existed. Check for duplicate page_view/contact events in Tag Assistant and GA4 DebugView. Do not count whatsapp_open as a received lead.
3. Review GA4 enhanced measurement and GTM auto-event rules so form values, free text and WhatsApp message URLs cannot be sent. Check data redaction, unwanted referrals and any advertising destinations.
4. Search Console: verify the production property, submit https://sharonphysio.com/sitemap.xml, inspect service-page indexing and record baseline clicks/impressions. A verification HTML file exists but does not establish account access or verification status.
5. Google Business Profile: confirm ownership, exact map pin, categories, clinic name, address, hours, phone, services and appointment link. Upload real clinic photographs and obtain a genuine review-request URL. Never invent reviews or use incentives/review gating.
6. Introduce the lead tracker in a restricted clinic workspace. CSV template is empty; it does not receive website enquiries automatically. Start with manual logging of actually received enquiries.
7. A callback form requires a secure, monitored delivery service/backend and verified recipient. Current call/email alternatives work without pretending to deliver a callback request.
8. Publish clinician-approved content drafts. No social posts, messages, review requests or ads have been sent.
9. Calendar booking requires actual appointment duration, capacity and confirmed hours. Do not offer fake live availability.
10. Ads require an agreed budget, location radius and working conversion measurement; no spend is authorized or configured yet.

## Clinic facts to confirm

- Assessment fee and normal session length; who answers calls/WhatsApp and when.
- Home-visit coverage, accessibility, practitioner credentials, 14+ years/8000+ patient claims.
- Evidence and patient permission for existing testimonials, outcome percentages and recovery stories; source/date for the About page's 5.0/200+ review claim.
- Review remaining clinical service/blog statements before publication. No clinical reviewer is claimed for new copy.

## Measurement definitions

Website session -> contact intent -> received enquiry -> confirmed appointment -> attended first appointment.

Record weekly: sessions; source/medium; contact intents by page and placement; unique enquiries received; appointments booked; first appointments attended; median initial response time; paid spend if used.

Enquiry-to-booking rate = booked appointments / received unique enquiries. Attendance rate = attended / booked appointments. Cost per attended first appointment = attributable ad spend / attended first appointments. Show N/A when the denominator is zero. Separate repeat patients and duplicates. Do not assign invented revenue values to contact clicks.

Use 14 days after deployment for a baseline before setting numeric growth targets. Account reports and clinic records are needed; no patient growth or ranking result has been measured yet.

## Documentation

- https://support.google.com/business/answer/7091
- https://developers.google.com/tag-platform/gtagjs/reference/parameters
- https://support.google.com/analytics/answer/6366371
- https://support.google.com/analytics/answer/9216061
- https://www.nhs.uk/tests-and-treatments/physiotherapy/

## Validation completed

- `npx next build --webpack`: passed; 27 generated build entries, including both new service pages. `npm run build:portable` repeats this build without Turbopack's restricted-port requirement.
- `node scripts/test-appointment.mjs`: 12 checks passed.
- Analytics harness: event queue, destination, exclusion of query parameters, button source and prevented-click handling passed.
- Export scan: 25 HTML files, zero missing internal files/anchors, 20 unique sitemap URLs.
- `git diff --check`: passed.
- Visual/mobile browser QA is pending: the local preview server could not bind a port under current environment permissions. Do not describe layout as visually verified.
- User is switching to the correct Chrome profile before account work resumes. Do not use the previously opened Chrome profile for clinic account changes.
- No production deployment, social publishing, account configuration, live analytics receipt test or ad launch completed.

## Account work — 18 November 2026

Verified Sharon Chrome profile and GA4 account 399078749 / property 542997603. Stream 15143365013 uses G-T5F2QL12ZV and reports data collection in the past 48 hours. Dashboard baseline shown for Last 30 days: 46 active users, 70 views, 194 events, zero key events. These are analytics counts, not verified patients.

Saved GA4 URL-query redaction for name, phone, mobile, email, message and text; existing email redaction remains enabled. Verified the stream summary displays six URL query parameter keys. No contact conversion definitions or GTM publishing yet.

## Callback form — 18 November 2026

- "Request a callback" card on /contact/ (name + mobile required; best time and service optional; no health details). A hero shortcut links to it.
- Delivery: Google Apps Script web app (source: `docs/callback-receiver.gs`) bound to a private Google Sheet in the clinic's Google account. Each valid request becomes a row on the "Callback requests" tab (lead-tracker columns plus name, phone, best time, service) and an email to appointment@sharonphysio.com. This Sheet is now the lead tracker; log new/returning, status, first response, appointment and attendance there.
- The website shows "request sent" only when the script confirms it stored the request. If delivery fails the visitor is told the clinic has not received it and is pointed to phone/WhatsApp.
- Analytics: `callback_form_start` and `callback_request` (fires only on confirmed delivery). `callback_request` is the first genuine received-enquiry signal; mark it as a GA4 key event once it appears in the Events list.
- The form only renders when `NEXT_PUBLIC_CALLBACK_URL` is set at build time. It lives in `.env.production.local` (git-ignored). A build without it silently hides the form, so keep that file when rebuilding.
- Protections: server-side validation, hidden honeypot field, minimum-fill-time check, 30 requests/hour cap, 10-minute duplicate suppression, spreadsheet formula-injection guard. 18 logic tests: `node scripts/test-callback-receiver.mjs`.
- Verified 18 Nov 2026: direct endpoint tests, a browser request from https://sharonphysio.com under the live CSP (CORS readable), and a real form submission end to end. Test rows were deleted afterwards. Production upload of the build containing the form is still pending.
- Open items: someone must read appointment@sharonphysio.com and the Sheet daily and call people back; privacy-page wording should be reviewed by the clinic; Apps Script email quota for a consumer Google account is limited (about 100 recipients/day), far above the 30/hour cap.
