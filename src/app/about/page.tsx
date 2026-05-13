import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2009 by Dr. T. Stella Thangam (MPT Neurology), Sharon Physiotherapy has helped 8000+ Madurai patients recover from stroke, injury, and chronic pain. 14+ years of specialist neurological and orthopedic rehabilitation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sharon Physiotherapy | Madurai",
    description:
      "Founded in 2009 by Dr. T. Stella Thangam (MPT Neurology), Sharon Physiotherapy has helped 8000+ patients in Madurai.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
