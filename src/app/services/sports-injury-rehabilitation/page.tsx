import type { Metadata } from "next";
import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";

const title = "Sports Injury Rehabilitation in Madurai";
const description =
  "Book a sports physiotherapy assessment in Anaiyur, Madurai. Sharon Physiotherapy offers rehabilitation for sports injuries and support with returning to activity.";
const path = "/services/sports-injury-rehabilitation/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function SportsInjuryRehabilitationPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/services/" className="font-medium text-primary underline">
        All physiotherapy services
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-navy-700">
        Sharon Physiotherapy in Anaiyur offers rehabilitation for sports
        injuries such as ankle sprains, ACL injuries, and shoulder injuries.
        Your assessment starts with the movements and activities you want to return to.
      </p>
      <Link href="/contact/?service=sports#book" data-contact-source="service" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">
        Request an assessment
      </Link>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-navy-900">
          What your rehabilitation can focus on
        </h2>
        <p className="text-navy-700">
          Dr. T. Stella Thangam can assess your movement and discuss the demands
          of your sport. Depending on the injury and your goals, your plan may
          include strengthening, balance training, sport-specific exercises,
          and tests to assess readiness to return to sport.
        </p>
        <p className="text-navy-700">
          When booking, select Sports Injury Rehabilitation. You can share how
          the injury happened and which sport or activity you want to resume.
        </p>
      </section>

      <VisitDetails service="sports" />
    </article>
  );
}
