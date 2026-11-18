import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = { title: "Website Privacy", description: "How callback requests, appointment requests and website analytics work on the Sharon Physiotherapy website.", alternates: { canonical: "/privacy/" } };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-32">
      <h1 className="font-heading text-4xl font-bold">Website privacy</h1>
      <p className="mt-3 text-sm text-navy-700">Updated 18 November 2026</p>
      <div className="mt-8 space-y-6 leading-relaxed text-navy-700">
        <p>This notice describes the appointment form and analytics on {siteConfig.name}’s website. For questions about records held by the clinic, contact us using the details below.</p>
        <h2 className="font-heading text-2xl font-semibold">Callback requests</h2>
        <p>If you use “Request a callback”, we ask for your name and mobile number. The best time to call and a service are optional. We also record the page you were on and, if the link you used carried one, its campaign tag. We do not ask for health details in this form.</p>
        <p>Your request is sent to the clinic and stored in a private Google Sheet and email inbox controlled by the clinic. Google provides that storage and email service and handles data under its own terms. The website does not keep a separate copy. The clinic uses your details to call you back and to manage your enquiry, and does not show them publicly. The form only tells you the request was sent after the clinic’s records confirm they stored it.</p>
        <h2 className="font-heading text-2xl font-semibold">Appointment requests on WhatsApp</h2>
        <p>The WhatsApp form asks for your name and mobile number. A service, preferred date, time and scheduling note are optional. The website prepares a WhatsApp message using those details; it does not save that form to a website database or send it to a clinic email account.</p>
        <p>When you continue, the details are included in a link opened by WhatsApp. The clinic receives the message when you tap Send. WhatsApp handles information under its own privacy terms. The clinic can then use your message to respond and arrange an appointment. Please discuss medical history and reports directly with your clinician.</p>
        <h2 className="font-heading text-2xl font-semibold">Calls, email and maps</h2>
        <p>Phone and email links open your chosen calling or email app. Google Maps is embedded on some pages and opens separately when you request directions. Those services may receive technical information such as your IP address when loaded.</p>
        <h2 className="font-heading text-2xl font-semibold">Website analytics</h2>
        <p>This website uses Google Analytics and Google Tag Manager to understand visits and contact actions. Analytics may use cookies and collect technical information about your browser, device and pages visited.</p>
        <p>Our custom contact events record actions such as opening WhatsApp, clicking a phone link or requesting directions, along with the page and button location. They do not include the name, mobile number or note entered in the appointment or callback forms. A contact click does not confirm that an enquiry was received or an appointment was booked.</p>
        <h2 className="font-heading text-2xl font-semibold">Contact and information requests</h2>
        <p>Ask the clinic about information it holds, corrections, deletion requests or its record-retention practices by emailing <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or calling <a className="text-primary underline" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>.</p>
        <p>{siteConfig.address}</p>
      </div>
    </article>
  );
}
