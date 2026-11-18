import type { Metadata } from "next";
import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";

const title = "Back and Neck Pain Physiotherapy in Madurai";
const description =
  "Book a back or neck pain physiotherapy assessment at Sharon Physiotherapy in Anaiyur, Madurai. Discuss your symptoms, mobility, and recovery goals.";
const path = "/services/back-neck-pain/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function BackNeckPainPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/services/" className="font-medium text-primary underline">
        All physiotherapy services
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-navy-700">
        At Sharon Physiotherapy in Anaiyur, we assess back and neck pain and
        how it affects activities such as sitting, lifting, and turning your
        head. The clinic also sees patients with sciatica and disc-related symptoms.
      </p>
      <Link href="/contact/?service=back#book" data-contact-source="service" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">
        Request an assessment
      </Link>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-navy-900">
          What your rehabilitation can focus on
        </h2>
        <p className="text-navy-700">
          Dr. T. Stella Thangam can assess your movement and discuss which
          activities are difficult. Depending on the assessment, your plan may
          include mobility and strengthening exercises, spinal stabilization,
          or hands-on therapy.
        </p>
        <p className="text-navy-700">
          Select Back &amp; Neck Pain Physiotherapy when booking. You can tell
          us when the pain began and which activities it affects.
        </p>
      </section>

      <VisitDetails service="back" />
    </article>
  );
}
