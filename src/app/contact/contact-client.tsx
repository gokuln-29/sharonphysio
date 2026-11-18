"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { trackContactIntent } from "@/components/layout/contact-analytics";
import { CallbackForm } from "@/components/contact/callback-form";
import { callbackEndpoint } from "@/lib/callback";
import { siteConfig } from "@/lib/utils";
import { appointmentMessage, appointmentTreatments, clinicToday, validateAppointment, type Appointment } from "@/lib/appointment";

const initialState: Appointment = { name: "", phone: "", treatment: "", preferredDate: "", preferredSlot: "", message: "" };
const selectClass = "flex h-11 w-full rounded-xl border border-input bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function ContactClient() {
  const [formState, setFormState] = useState<Appointment>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof Appointment, string>>>({});
  const [minDate, setMinDate] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    // Set after mount: the static export is built once, so the date must be computed in the visitor's browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(clinicToday());
    const service = new URLSearchParams(window.location.search).get("service");
    if (appointmentTreatments.some(([key]) => key === service)) setFormState(state => ({ ...state, treatment: service! }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(state => ({ ...state, [name]: value }));
    setErrors(state => ({ ...state, [name]: undefined }));
    if (!started) {
      setStarted(true);
      trackContactIntent("appointment_form_start", "appointment_form");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateAppointment(formState);
    setErrors(validation);
    if (Object.keys(validation).length) {
      const key = Object.keys(validation)[0];
      const field = e.currentTarget.elements.namedItem(key) as HTMLElement | null;
      if (field?.closest("details")) field.closest("details")!.open = true;
      field?.focus();
      return;
    }
    trackContactIntent("whatsapp_open", "appointment_form");
    window.location.assign(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(appointmentMessage(formState))}`);
  };

  const error = (key: keyof Appointment) => errors[key] ? <p id={`${key}-error`} role="alert" className="mt-1 text-sm text-red-700">{errors[key]}</p> : null;
  const fieldProps = (key: keyof Appointment) => ({ name: key, id: key, value: formState[key], onChange: handleChange, "aria-invalid": !!errors[key], "aria-describedby": errors[key] ? `${key}-error` : undefined });

  return (
    <>
      <section className="gradient-hero px-4 pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-semibold text-primary">Anaiyur, Madurai · Mon–Sat, 6:00 PM–9:00 PM</p>
          <h1 className="font-heading text-3xl font-bold text-navy-900 sm:text-5xl">Let’s arrange your first visit</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-700">Request an appointment on WhatsApp or call the clinic. We’ll confirm a suitable time with you.</p>
          <div className="mt-6 flex flex-wrap gap-4" data-contact-source="hero">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white"><Phone className="h-4 w-4" aria-hidden="true" />{siteConfig.phone}</a>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" data-contact-action="directions" className="inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 font-semibold text-primary"><MapPin className="h-4 w-4" aria-hidden="true" />Get directions</a>
            {callbackEndpoint && <a href="#callback" className="inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 font-semibold text-primary"><Phone className="h-4 w-4" aria-hidden="true" />Request a callback</a>}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
          <div className="rounded-2xl border border-teal-100 p-5 shadow-sm sm:p-8">
            <h2 id="book" className="scroll-mt-28 font-heading text-2xl font-bold text-navy-900">Request an appointment</h2>
            <p id="booking-help" className="mt-3 text-sm leading-relaxed text-navy-700">Only your name and mobile number are required. On the next screen, tap <strong>Send in WhatsApp</strong>. This is a request; your appointment is booked only when the clinic confirms it.</p>
            <form onSubmit={handleSubmit} noValidate aria-describedby="booking-help" className="mt-6 space-y-5">
              <div><label htmlFor="name" className="mb-2 block text-sm font-semibold">Your name *</label><Input {...fieldProps("name")} autoComplete="name" maxLength={80} required placeholder="Full name" />{error("name")}</div>
              <div><label htmlFor="phone" className="mb-2 block text-sm font-semibold">Mobile number *</label><Input {...fieldProps("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={18} required placeholder="10-digit number or +91" />{error("phone")}</div>
              <div><label htmlFor="treatment" className="mb-2 block text-sm font-semibold">Service (optional)</label><select {...fieldProps("treatment")} className={selectClass}><option value="">Choose a service, or leave blank</option>{appointmentTreatments.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></div>
              <details className="rounded-xl border border-teal-100 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-primary">Add a preferred time or scheduling note (optional)</summary>
                <div className="mt-4 space-y-4">
                  <div><label htmlFor="preferredDate" className="mb-2 block text-sm font-medium">Preferred date · Monday to Saturday</label><Input {...fieldProps("preferredDate")} type="date" min={minDate || undefined} />{error("preferredDate")}</div>
                  <div><label htmlFor="preferredSlot" className="mb-2 block text-sm font-medium">Preferred time · India time</label><select {...fieldProps("preferredSlot")} className={selectClass}><option value="">I’m flexible</option><option>6:00 PM - 7:00 PM</option><option>7:00 PM - 8:00 PM</option><option>8:00 PM - 9:00 PM</option></select></div>
                  <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Scheduling note</label><Textarea {...fieldProps("message")} maxLength={300} placeholder="For example: please call me after 6 PM" /><p className="mt-2 text-xs text-navy-700">Please discuss medical history and share reports directly with your clinician.</p></div>
                </div>
              </details>
              <p className="text-xs leading-relaxed text-navy-700">Continuing opens WhatsApp with the details you entered. They reach the clinic when you send the message. <Link href="/privacy/" className="underline">How your information is used</Link>.</p>
              <Button type="submit" size="lg" className="w-full"><Send className="mr-2 h-4 w-4" aria-hidden="true" />Continue to WhatsApp</Button>
              <p className="text-center text-sm text-navy-700">No WhatsApp? <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-semibold text-primary underline">Call the clinic</a> or <a href={`mailto:${siteConfig.email}?subject=Appointment%20enquiry`} className="font-semibold text-primary underline">email an enquiry</a>.</p>
            </form>
          </div>
          <CallbackForm />
          </div>
          <aside className="space-y-6 text-navy-700">
            <div className="rounded-2xl bg-teal-50 p-6"><MapPin className="mb-3 h-6 w-6 text-primary" aria-hidden="true" /><h2 className="font-heading text-xl font-bold text-navy-900">Visit our clinic</h2><p className="mt-3 text-sm leading-relaxed">{siteConfig.address}</p><a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" data-contact-action="directions" data-contact-source="location" className="mt-4 inline-block font-semibold text-primary underline">Open Google Maps</a></div>
            <div className="rounded-2xl bg-navy-50 p-6"><Clock className="mb-3 h-6 w-6 text-primary" aria-hidden="true" /><h2 className="font-heading text-xl font-bold text-navy-900">Before you travel</h2><p className="mt-3 text-sm leading-relaxed">Routine appointments: Monday–Saturday, 6:00 PM–9:00 PM. Please wait for the clinic to confirm your time.</p><p className="mt-3 text-sm">Ask about assessment fees, session length and any access needs when booking.</p></div>
            <div className="rounded-2xl border border-teal-100 p-6"><Mail className="mb-3 h-6 w-6 text-primary" aria-hidden="true" /><a href={`mailto:${siteConfig.email}`} className="break-all text-sm font-semibold text-primary underline">{siteConfig.email}</a><p className="mt-3 text-sm">You can enquire for yourself or a family member.</p></div>
          </aside>
        </div>
      </section>
      <section className="bg-teal-50 px-4 py-12"><div className="mx-auto max-w-5xl"><h2 className="mb-6 font-heading text-2xl font-bold">Find Sharon Physiotherapy in Anaiyur</h2><iframe src={siteConfig.mapEmbed} width="100%" height="380" className="rounded-2xl border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sharon Physiotherapy Location" /></div></section>
    </>
  );
}
