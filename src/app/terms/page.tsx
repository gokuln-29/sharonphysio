import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Sharon Physiotherapy website and our online appointment-request service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-navy-500 mb-10">Last updated: 1 January 2026</p>

        <div className="space-y-6 text-navy-700 leading-relaxed">
          <p>
            These terms govern your use of the {siteConfig.name} website and any online appointment-request
            service provided through it. By using the site you agree to these terms.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">1. Information on this site</h2>
          <p className="text-sm">
            Content on this site — including blog articles and treatment descriptions — is provided for general
            information only. It is not a substitute for individual medical advice, diagnosis or treatment.
            Always consult a qualified healthcare professional about your specific condition.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">2. Appointment requests</h2>
          <p className="text-sm">
            Submitting the contact form is an enquiry, not a confirmed booking. We will contact you to confirm a
            specific date and time. Slots are subject to clinician availability. If you cannot attend a confirmed
            appointment please give us at least 24 hours&apos; notice.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">3. Acceptable use</h2>
          <p className="text-sm">
            Do not use this site to submit false information, attempt to interfere with its operation, or
            transmit unlawful or harmful content. We may decline service to anyone who misuses the site.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">4. Fees and payment</h2>
          <p className="text-sm">
            Treatment fees are discussed at the time of booking or assessment. Payment is due at the time of
            service unless other arrangements have been agreed in writing. We accept cash, cards, UPI and bank
            transfer.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">5. Intellectual property</h2>
          <p className="text-sm">
            All content on this website is the property of {siteConfig.name} unless otherwise stated. You may
            view and print pages for personal use; you may not republish content commercially without
            permission.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">6. Liability</h2>
          <p className="text-sm">
            To the extent permitted by Indian law, we are not liable for losses arising from reliance on
            general information published on this site, or from interruption of the site itself.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">7. Governing law</h2>
          <p className="text-sm">
            These terms are governed by the laws of India and the courts of {siteConfig.city}, {siteConfig.region}{" "}
            have exclusive jurisdiction over any dispute.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">8. Contact</h2>
          <p className="text-sm">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary underline">{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
