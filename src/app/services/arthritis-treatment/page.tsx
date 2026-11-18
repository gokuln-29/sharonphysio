import type { Metadata } from "next";
import { ServiceArticle } from "@/components/services/service-article";

const title = "Arthritis Physiotherapy in Madurai";
const description = "Discuss joint pain, stiffness and swelling with a physiotherapist at Sharon Physiotherapy in Anaiyur, Madurai. Request an arthritis assessment.";
const path = "/services/arthritis-treatment/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function ArthritisPage() {
  return (
    <ServiceArticle
      title={title}
      description={description}
      path={path}
      service="arthritis"
      intro="If joint pain or stiffness is making walking, stairs, gripping or getting out of bed harder, you can contact our Anaiyur clinic to discuss a physiotherapy assessment for arthritis."
      sections={[
        {
          heading: "What to discuss at your visit",
          paragraphs: ["Tell the physiotherapist which joints bother you, when they are stiffest (for example in the morning or after resting) and which everyday activities have become difficult."],
          items: [
            "Reports such as X-rays or blood tests, if you have them",
            "A list of your current medicines. Please do not change them without your doctor’s advice",
            "Previous injuries, joint surgery or treatments you have already tried",
          ],
        },
        {
          heading: "How physiotherapy can fit in",
          paragraphs: [
            "Physiotherapy for arthritis often focuses on keeping joints moving, strengthening the muscles that support them and planning daily activities so they are less tiring. What suits you depends on the type of arthritis and your assessment, so the physiotherapist will agree the next steps with you.",
            "The clinic lists arthritis treatment among its services and can discuss which approaches may suit you, including manual therapy and electrotherapy.",
          ],
        },
      ]}
      safetyNote={{
        heading: "See a doctor promptly if…",
        text: "a joint suddenly becomes hot, red and swollen, you have a fever with joint pain, or you have severe pain after a fall. These need medical assessment before physiotherapy.",
      }}
      related={[
        { href: "/services/knee-pain/", label: "Knee pain physiotherapy" },
        { href: "/services/manual-therapy/", label: "Manual therapy" },
        { href: "/blog/first-physiotherapy-appointment/", label: "Preparing for your first physiotherapy appointment" },
      ]}
    />
  );
}
