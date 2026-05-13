import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Stroke rehab, sports injury recovery, cerebral palsy management, back/neck pain, women's fitness, manual therapy, dry needling and more — evidence-based physiotherapy in Madurai.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Physiotherapy Services | Sharon Physiotherapy Madurai",
    description:
      "Stroke, sports, CP, back/neck, women's health and manual therapy programs at Madurai's specialist neuro-ortho clinic.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
