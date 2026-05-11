import { Hero } from "@/components/home/hero";
import { Treatments } from "@/components/home/treatments";
import { Specializations } from "@/components/home/specializations";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTASection } from "@/components/home/cta";
import { GoogleMap } from "@/components/home/google-map";
import { BeforeAfter } from "@/components/home/before-after";
import { BlogSection } from "@/components/home/blog";
import { siteConfig } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Treatments />
      <Specializations />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <GoogleMap />
      <CTASection />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Sharon Physiotherapy & Rehabilitation Center",
            "description": "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation.",
            "url": siteConfig.url,
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Temple Road, Near Vishalakshi Temple",
              "addressLocality": "Madurai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "625001",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": siteConfig.location.lat,
              "longitude": siteConfig.location.lng,
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "14:00",
              },
            ],
            "medicalSpecialty": [
              "Physiotherapy",
              "Neurological Rehabilitation",
              "Orthopedic Rehabilitation",
              "Sports Medicine",
            ],
            "priceRange": "$$",
          }),
        }}
      />
    </>
  );
}