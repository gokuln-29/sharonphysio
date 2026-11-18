"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackContactIntent } from "@/components/layout/contact-analytics";
import { appointmentTreatments } from "@/lib/appointment";
import { callbackEndpoint, callbackTimes, sendCallback, validateCallback, type CallbackErrors, type CallbackRequest } from "@/lib/callback";
import { siteConfig } from "@/lib/utils";

const initialState: CallbackRequest = { name: "", phone: "", bestTime: "any", service: "" };
const selectClass = "flex h-11 w-full rounded-xl border border-input bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

type Status = "idle" | "sending" | "sent" | "failed";

export function CallbackForm() {
  const [state, setState] = useState<CallbackRequest>(initialState);
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const openedAt = useRef(0);
  const sentHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") sentHeading.current?.focus();
  }, [status]);

  if (!callbackEndpoint) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setState(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: undefined }));
    if (status === "failed") setStatus("idle");
    if (!started) {
      setStarted(true);
      trackContactIntent("callback_form_start", "callback_form");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const validation = validateCallback(state);
    setErrors(validation);
    if (Object.keys(validation).length) {
      (e.currentTarget.elements.namedItem(Object.keys(validation)[0]) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    const delivered = await sendCallback(state, honeypot, Date.now() - openedAt.current);
    if (delivered) {
      // Only counted once the clinic's sheet has confirmed it stored the request.
      trackContactIntent("callback_request", "callback_form");
      setStatus("sent");
    } else {
      setStatus("failed");
    }
  }

  const fieldError = (key: keyof CallbackErrors) =>
    errors[key] ? <p id={`cb-${key}-error`} role="alert" className="mt-1 text-sm text-red-700">{errors[key]}</p> : null;
  const describe = (key: keyof CallbackErrors) => (errors[key] ? `cb-${key}-error` : undefined);

  return (
    <div id="callback" className="mt-8 scroll-mt-28 rounded-2xl border border-teal-100 p-5 shadow-sm sm:p-8">
      {status === "sent" ? (
        <div role="status">
          <CheckCircle2 className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
          <h2 ref={sentHeading} tabIndex={-1} className="font-heading text-2xl font-bold text-navy-900 focus:outline-none">Your callback request has been sent</h2>
          <p className="mt-3 leading-relaxed text-navy-700">The clinic has your name and number and will call you back to arrange a suitable time. This is a request, not a confirmed appointment. We can’t promise an exact call time, so if it’s urgent please call us directly.</p>
          <a href={telHref} data-contact-source="link" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 font-semibold text-primary"><PhoneCall className="h-4 w-4" aria-hidden="true" />Call {siteConfig.phone}</a>
        </div>
      ) : (
        <>
          <h2 className="font-heading text-2xl font-bold text-navy-900">Prefer a phone call? Request a callback</h2>
          <p id="callback-help" className="mt-3 text-sm leading-relaxed text-navy-700">Leave your name and mobile number and the clinic will call you back to arrange a first visit. No message app needed.</p>
          <form onSubmit={handleSubmit} noValidate aria-describedby="callback-help" className="mt-6 space-y-5">
            <div>
              <label htmlFor="cb-name" className="mb-2 block text-sm font-semibold">Your name *</label>
              <Input id="cb-name" name="name" value={state.name} onChange={handleChange} autoComplete="name" maxLength={80} required placeholder="Full name" aria-invalid={!!errors.name} aria-describedby={describe("name")} />
              {fieldError("name")}
            </div>
            <div>
              <label htmlFor="cb-phone" className="mb-2 block text-sm font-semibold">Mobile number *</label>
              <Input id="cb-phone" name="phone" value={state.phone} onChange={handleChange} type="tel" autoComplete="tel" inputMode="tel" maxLength={18} required placeholder="10-digit number or +91" aria-invalid={!!errors.phone} aria-describedby={describe("phone")} />
              {fieldError("phone")}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cb-bestTime" className="mb-2 block text-sm font-semibold">Best time to call (optional)</label>
                <select id="cb-bestTime" name="bestTime" value={state.bestTime} onChange={handleChange} className={selectClass}>
                  {callbackTimes.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="cb-service" className="mb-2 block text-sm font-semibold">Service (optional)</label>
                <select id="cb-service" name="service" value={state.service} onChange={handleChange} className={selectClass}>
                  <option value="">Choose a service, or leave blank</option>
                  {appointmentTreatments.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
              </div>
            </div>
            {/* Honeypot: hidden from people and assistive technology; bots that fill it are ignored. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="cb-website">Leave this field empty</label>
              <input id="cb-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
            </div>
            <p className="text-xs leading-relaxed text-navy-700">The clinic uses your name and number only to call you back about an appointment. They are stored in the clinic’s private records, not shown publicly. <Link href="/privacy/" className="underline">How your information is used</Link>.</p>
            {status === "failed" && (
              <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">We couldn’t send your request, so the clinic has not received it. Please try again, or <a href={telHref} data-contact-source="link" className="font-semibold underline">call {siteConfig.phone}</a> or use WhatsApp above.</p>
            )}
            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />{status === "sending" ? "Sending…" : "Request a callback"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
