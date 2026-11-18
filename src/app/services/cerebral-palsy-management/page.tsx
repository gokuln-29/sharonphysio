import type { Metadata } from "next";
import { ServiceArticle } from "@/components/services/service-article";

const title = "Cerebral Palsy Physiotherapy in Madurai";
const description = "Discuss your child’s movement, posture and daily activities with a physiotherapist at Sharon Physiotherapy in Anaiyur, Madurai. Request an assessment.";
const path = "/services/cerebral-palsy-management/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function CerebralPalsyPage() {
  return (
    <ServiceArticle
      title={title}
      description={description}
      path={path}
      service="cp"
      intro="If your child has cerebral palsy, or you have concerns about their movement or development, contact our Anaiyur clinic to discuss a physiotherapy assessment."
      sections={[
        {
          heading: "What to bring and discuss",
          items: [
            "Medical reports, scans and any hospital discharge summaries",
            "Instructions from your child’s pediatrician, neurologist or other therapists",
            "Any braces, splints or walking aids your child uses",
            "Which activities are hardest, such as sitting, standing, walking, dressing or play",
          ],
        },
        {
          heading: "How the plan is made",
          paragraphs: [
            "Physiotherapy for children is usually built around the child’s own goals and daily routine. Parents or caregivers are often part of it, for example by practicing exercises at home. The physiotherapist will assess your child and explain what they suggest. Plans and the number of sessions vary from child to child.",
            "The clinic is led by Dr. T. Stella Thangam, who holds an MPT in Neurology.",
          ],
        },
      ]}
      safetyNote={{
        heading: "If you are worried about your child’s development",
        text: "Do not wait for a physiotherapy appointment to raise your concerns. Talk to your child’s pediatrician. Seek urgent medical help for seizures, difficulty breathing or a sudden change in your child’s condition.",
      }}
      related={[
        { href: "/services/stroke-rehabilitation/", label: "Neurological rehabilitation: stroke" },
        { href: "/blog/first-physiotherapy-appointment/", label: "Preparing for your first physiotherapy appointment" },
      ]}
    />
  );
}
