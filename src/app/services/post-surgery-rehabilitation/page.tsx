import type { Metadata } from "next";
import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";
import { ServiceSchema } from "@/components/services/service-schema";
const title = "Post-Surgery Physiotherapy in Madurai";
const description = "Request a post-surgery physiotherapy assessment at Sharon Physiotherapy in Anaiyur, Madurai. Bring your discharge notes and surgeon’s instructions.";
const path = "/services/post-surgery-rehabilitation/";
export const metadata: Metadata = { title: { absolute: `${title} | Sharon Physiotherapy` }, description, alternates: { canonical: path }, openGraph: { title, description, url: path } };
export default function ServicePage() {
  return <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
    <Link href="/services/" className="font-medium text-primary underline">All physiotherapy services</Link>
    <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">{title}</h1>
    <p className="mt-5 text-lg leading-relaxed text-navy-700">Planning physiotherapy after surgery? Contact our Anaiyur clinic to discuss your operation, your treating team’s instructions and appointment availability.</p>
    <Link href="/contact/?service=post-surgery#book" data-contact-source="service" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white">Request an assessment</Link>
    <section className="mt-10"><h2 className="font-heading text-2xl font-bold">Preparing for your assessment</h2><p className="mt-4 leading-relaxed text-navy-700">Bring your discharge summary, operation details and any movement or weight-bearing restrictions from your surgeon. Share the activities you need help with, such as moving around your home. Rehabilitation planning depends on your procedure, clinical assessment and treating team’s instructions.</p></section>
    <ServiceSchema title={title} description={description} path={path} />
    <VisitDetails service="post-surgery" />
  </article>;
}
