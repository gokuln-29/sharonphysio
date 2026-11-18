import type { Metadata } from "next";
import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";
const title = "Knee Pain Physiotherapy in Madurai";
const description = "Discuss knee pain, stiffness and everyday movement at Sharon Physiotherapy in Anaiyur, Madurai. Request a physiotherapy assessment.";
const path = "/services/knee-pain/";
export const metadata: Metadata = { title: { absolute: `${title} | Sharon Physiotherapy` }, description, alternates: { canonical: path }, openGraph: { title, description, url: path } };
export default function ServicePage() {
  return <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
    <Link href="/services/" className="font-medium text-primary underline">All physiotherapy services</Link>
    <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">{title}</h1>
    <p className="mt-5 text-lg leading-relaxed text-navy-700">If knee pain or stiffness is making walking, stairs or getting up from a chair difficult, contact our Anaiyur clinic to discuss an assessment.</p>
    <Link href="/contact/?service=knee#book" data-contact-source="service" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white">Request an assessment</Link>
    <section className="mt-10"><h2 className="font-heading text-2xl font-bold">What to discuss at your visit</h2><p className="mt-4 leading-relaxed text-navy-700">Describe when the difficulty started and which activities matter most to you. Bring relevant reports and tell the physiotherapist about previous injuries or surgery. Your assessment helps determine the next steps; treatment and session needs vary.</p></section>
    <VisitDetails service="knee" />
  </article>;
}
