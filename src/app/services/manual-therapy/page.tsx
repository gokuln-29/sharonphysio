import type { Metadata } from "next";
import { ServiceArticle } from "@/components/services/service-article";

const title = "Manual Therapy in Madurai";
const description = "Ask about hands-on manual therapy, dry needling and electrotherapy used alongside exercise at Sharon Physiotherapy in Anaiyur, Madurai.";
const path = "/services/manual-therapy/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function ManualTherapyPage() {
  return (
    <ServiceArticle
      title={title}
      description={description}
      path={path}
      service="manual"
      intro="Manual therapy means hands-on techniques applied to joints and soft tissues, usually alongside exercise. Contact our Anaiyur clinic to discuss whether it suits your problem."
      sections={[
        {
          heading: "Techniques the clinic lists",
          paragraphs: ["Not every technique is right for every person. Your physiotherapist will assess you first and explain the options."],
          items: [
            "Joint mobilization",
            "Dry needling",
            "Electrotherapy",
            "K-taping",
            "PNF (proprioceptive neuromuscular facilitation) techniques",
            "Craniosacral therapy",
          ],
        },
        {
          heading: "Tell us before treatment",
          paragraphs: ["This helps the physiotherapist decide which techniques are safe for you."],
          items: [
            "Medicines you take, especially blood thinners",
            "A pacemaker or other implanted device",
            "Pregnancy",
            "Skin conditions, open wounds or allergies, for example to tape",
            "Recent injuries, fractures or surgery",
          ],
        },
        {
          heading: "Usually one part of a plan",
          paragraphs: ["Hands-on techniques are often combined with exercises, posture advice and changes to daily activities. Your assessment decides which parts are used and for how long."],
        },
      ]}
      safetyNote={{
        heading: "Get medical advice first if…",
        text: "you have severe pain after a fall or accident, new weakness or numbness, loss of bladder or bowel control, or pain with an unexplained fever. These need urgent medical assessment.",
      }}
      related={[
        { href: "/services/back-neck-pain/", label: "Back and neck pain physiotherapy" },
        { href: "/services/knee-pain/", label: "Knee pain physiotherapy" },
        { href: "/services/arthritis-treatment/", label: "Arthritis physiotherapy" },
      ]}
    />
  );
}
