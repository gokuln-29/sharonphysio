import Link from "next/link";
import { VisitDetails } from "@/components/services/visit-details";
import { ServiceSchema } from "@/components/services/service-schema";

export type ServiceSection = { heading: string; paragraphs?: string[]; items?: string[] };
export type ServiceRelated = { href: string; label: string };

type Props = {
  title: string;
  description: string;
  path: string;
  /** Matches an option in appointmentTreatments so the contact form is pre-filled. */
  service: string;
  intro: string;
  sections: ServiceSection[];
  /** Plain-language "see a doctor first" guidance for this service. */
  safetyNote?: { heading: string; text: string };
  related: ServiceRelated[];
};

// Shared layout for service pages. Content is assessment-focused: no outcome claims, no guarantees.
export function ServiceArticle({ title, description, path, service, intro, sections, safetyNote, related }: Props) {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/services/" className="font-medium text-primary underline">All physiotherapy services</Link>
      <h1 className="mt-6 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-navy-700">{intro}</p>
      <Link href={`/contact/?service=${service}#book`} data-contact-source="service" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white">Request an assessment</Link>

      {sections.map(section => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-navy-900">{section.heading}</h2>
          {section.paragraphs?.map(text => <p key={text} className="mt-4 leading-relaxed text-navy-700">{text}</p>)}
          {section.items && (
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-navy-700">
              {section.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

      {safetyNote && (
        <section className="mt-10 rounded-2xl border border-teal-100 bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-navy-900">{safetyNote.heading}</h2>
          <p className="mt-3 leading-relaxed text-navy-700">{safetyNote.text}</p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-navy-900">Related</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {related.map(link => <li key={link.href}><Link href={link.href} className="font-medium text-primary underline">{link.label}</Link></li>)}
        </ul>
      </section>

      <ServiceSchema title={title} description={description} path={path} />
      <VisitDetails service={service} />
    </article>
  );
}
