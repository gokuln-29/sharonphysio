import type { Metadata } from "next";
import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";

const title = "Stroke Rehabilitation in Madurai";
const description =
  "Book a stroke physiotherapy assessment at Sharon Physiotherapy in Anaiyur, Madurai. Rehabilitation focuses on movement, walking, balance, and everyday tasks.";
const path = "/services/stroke-rehabilitation/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function StrokeRehabilitationPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/services/" className="font-medium text-primary underline">
        All physiotherapy services
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-navy-700">
        At Sharon Physiotherapy in Anaiyur, we work with people recovering from
        stroke on practical goals such as standing, walking, and moving more
        confidently during everyday activities.
      </p>
      <Link href="/contact/?service=stroke#book" data-contact-source="service" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">
        Request an assessment
      </Link>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-navy-900">
          What your rehabilitation can focus on
        </h2>
        <p className="text-navy-700">
          Dr. T. Stella Thangam, MPT Neurology, can assess your movement and
          discuss goals with you and your caregiver. Your plan may include
          practice with everyday movements, gait and balance training, and
          exercises tailored to your current mobility.
        </p>
        <p className="text-navy-700">
          When booking, you can select Stroke Rehabilitation and share which
          activities you want help with, such as getting up from a chair or
          walking with support.
        </p>
      </section>

      <VisitDetails service="stroke" />
    </article>
  );
}
