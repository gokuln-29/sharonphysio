import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description: `Book a physiotherapy appointment at Sharon Physiotherapy, ${siteConfig.locality}, ${siteConfig.city}. Call ${siteConfig.phone} or send us your details — we'll confirm within hours.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Sharon Physiotherapy Madurai",
    description: `Book an appointment or call ${siteConfig.phone}.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
