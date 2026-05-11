import { NextResponse } from "next/server";

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  treatment?: string;
  preferredDate?: string;
  preferredSlot?: string;
  message?: string;
};

export async function POST(req: Request) {
  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").replace(/\s+/g, "");

  if (!name) return NextResponse.json({ error: "Name is required." }, { status: 400 });
  if (!EMAIL_PATTERN.test(email)) return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  if (!PHONE_PATTERN.test(phone)) return NextResponse.json({ error: "A valid 10-digit Indian mobile number is required." }, { status: 400 });

  const formspree = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const submission = {
    name,
    email,
    phone,
    treatment: payload.treatment || "",
    preferredDate: payload.preferredDate || "",
    preferredSlot: payload.preferredSlot || "",
    message: payload.message || "",
    submittedAt: new Date().toISOString(),
    source: "sharonphysio.com contact form",
  };

  if (formspree) {
    try {
      const upstream = await fetch(formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submission),
      });
      if (!upstream.ok) {
        const text = await upstream.text().catch(() => "");
        console.error("Formspree forward failed", upstream.status, text);
        return NextResponse.json({ error: "We couldn't deliver your request. Please call the clinic." }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Formspree forward error", err);
      return NextResponse.json({ error: "Network error. Please try again or call the clinic." }, { status: 502 });
    }
  }

  console.warn("[contact] FORMSPREE_ENDPOINT not configured. Logging submission only.", submission);
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Booking service is not configured yet. Please call us at the number on the page." },
      { status: 503 },
    );
  }
  return NextResponse.json({ ok: true, dev: true });
}
