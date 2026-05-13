import { Hero } from "@/components/home/hero";
import { Treatments } from "@/components/home/treatments";
import { Specializations } from "@/components/home/specializations";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTASection } from "@/components/home/cta";
import { GoogleMap } from "@/components/home/google-map";
import { BeforeAfter } from "@/components/home/before-after";
import { faqs, siteConfig } from "@/lib/utils";

export default function HomePage() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/Logo.webp`,
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    medicalSpecialty: [
      "Physiotherapy",
      "Neurological Rehabilitation",
      "Orthopedic Rehabilitation",
      "Sports Medicine",
    ],
    priceRange: "₹₹",
    sameAs: [siteConfig.facebook, siteConfig.instagram, siteConfig.googleMaps],
    physician: {
      "@type": "Physician",
      name: "Dr. T. Stella Thangam",
      medicalSpecialty: ["Physiotherapy", "NeurologicalExam"],
      jobTitle: "Chief Physiotherapist",
      url: `${siteConfig.url}/about`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Hero />
      <Treatments />
      <Specializations />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <GoogleMap />
      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
