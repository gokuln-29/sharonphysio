import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sharon Physiotherapy collects, uses and protects the personal information you share when contacting the clinic or booking an appointment.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-navy-500 mb-10">Last updated: 1 January 2026</p>

        <div className="space-y-6 text-navy-700 leading-relaxed">
          <p>
            This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;the clinic&rdquo;)
            collects, uses, stores and protects information you provide when you contact us through this website,
            book an appointment, or visit our clinic in {siteConfig.city}, {siteConfig.region}.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">1. Information we collect</h2>
          <p>When you fill in the contact or appointment form we collect:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Your name, email address and phone number</li>
            <li>Optional details: preferred treatment, date and time, and free-text notes about your condition</li>
            <li>Information shared during in-clinic consultation, including medical history relevant to physiotherapy care</li>
          </ul>
          <p className="text-sm">
            Information about a person&apos;s physical health is treated as <strong>sensitive personal data</strong> under
            India&apos;s Digital Personal Data Protection Act, 2023. We collect only what we need to provide care.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">2. How we use it</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>To respond to your enquiry and confirm appointments</li>
            <li>To deliver and document the physiotherapy services you request</li>
            <li>To meet legal, accounting and clinical record-keeping obligations</li>
          </ul>
          <p className="text-sm">We do not use your information for advertising and we do not sell it to third parties.</p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">3. Sharing</h2>
          <p className="text-sm">
            We share information only when necessary — with the form-delivery provider that routes your booking
            request to our clinic inbox, and with referring or treating clinicians where you have asked us to
            coordinate care. We may also disclose information when required by Indian law.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">4. Storage and security</h2>
          <p className="text-sm">
            Online enquiries are delivered to a secure clinic email account. Clinical records are stored in
            access-controlled files at the clinic. We retain records for the period required by professional
            and tax regulations and then dispose of them securely.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">5. Your rights</h2>
          <p className="text-sm">You may, at any time:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Ask what information we hold about you</li>
            <li>Ask us to correct anything that is wrong</li>
            <li>Withdraw consent and ask us to delete your data, subject to legal retention rules</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">6. Cookies & analytics</h2>
          <p className="text-sm">
            This website does not currently set advertising cookies. If we add analytics in the future to
            understand how visitors use the site, we will update this notice.
          </p>

          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">7. Contact</h2>
          <p className="text-sm">
            For any privacy question or to exercise your rights, write to us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary underline">{siteConfig.email}</a>{" "}
            or call <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-primary underline">{siteConfig.phone}</a>.
            Our address is {siteConfig.address}.
          </p>

          <p className="text-xs text-navy-500 pt-4 italic">
            This notice is provided for transparency. It is not a substitute for individual legal advice;
            for sensitive complaints please contact us directly.
          </p>
        </div>
      </div>
    </article>
  );
}
