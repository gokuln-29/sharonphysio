import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export function VisitDetails({ service }: { service: string }) {
  return (
    <section className="mt-12 rounded-2xl bg-teal-50 p-6 sm:p-8" data-contact-source="service">
      <h2 className="font-heading text-2xl font-bold">Arrange your assessment</h2>
      <p className="mt-3 leading-relaxed text-navy-700">Tell the clinic which activities you want help with. Bring relevant reports and any instructions from your treating clinician. Ask about the assessment fee, session length and access needs before you travel.</p>
      <p className="mt-4 text-sm text-navy-700">{siteConfig.address}<br />Monday–Saturday · 6:00 PM–9:00 PM</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/contact/?service=${service}#book`} className="rounded-xl bg-primary px-5 py-3 font-semibold text-white">Request an assessment</Link>
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="rounded-xl border border-primary px-5 py-3 font-semibold text-primary">Call {siteConfig.phone}</a>
        <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" data-contact-action="directions" className="px-2 py-3 font-semibold text-primary underline">Get directions</a>
      </div>
      <p className="mt-4 text-sm text-navy-700">The clinic will confirm availability. The number of sessions depends on your assessment and progress.</p>
      <Link href="/blog/first-physiotherapy-appointment/" className="mt-4 inline-block text-sm text-primary underline">Preparing for your first physiotherapy appointment</Link>
    </section>
  );
}
