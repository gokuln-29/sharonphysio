import type { Metadata } from "next";
import { ServiceArticle } from "@/components/services/service-article";

const title = "Women’s Physiotherapy in Madurai";
const description = "Ask about prenatal, postnatal, pelvic floor and fitness physiotherapy for women at Sharon Physiotherapy in Anaiyur, Madurai. Request an assessment.";
const path = "/services/womens-fitness-care/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Sharon Physiotherapy` },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function WomensFitnessCarePage() {
  return (
    <ServiceArticle
      title={title}
      description={description}
      path={path}
      service="women"
      intro="Women’s physiotherapy can cover concerns such as discomfort in pregnancy, recovery after delivery, pelvic floor problems and general fitness. Contact our Anaiyur clinic to discuss whether an assessment would help."
      sections={[
        {
          heading: "Concerns you can raise",
          paragraphs: ["These are the concerns the clinic lists for this service. Ask whether physiotherapy suits your situation."],
          items: [
            "Prenatal discomfort",
            "Postnatal recovery",
            "Pelvic floor concerns",
            "Women’s fitness and core strength",
            "Period pain (primary dysmenorrhea)",
            "PCOD-related fitness and weight concerns",
          ],
        },
        {
          heading: "What to tell us at your visit",
          items: [
            "Whether you are pregnant, and how many weeks",
            "If you are postnatal: the type of delivery and any complications",
            "Any instructions from your obstetrician, gynecologist or other doctor",
            "What you would like to be able to do again or do more comfortably",
          ],
        },
        {
          heading: "Your comfort",
          paragraphs: ["If you have preferences about how your appointment is arranged, mention them when you request it and the clinic will let you know what is possible."],
        },
      ]}
      safetyNote={{
        heading: "Talk to your doctor first if you are pregnant or recently gave birth",
        text: "Check with your obstetrician before starting new exercise. Seek urgent medical advice for vaginal bleeding, severe pain, leaking fluid or reduced baby movements. Do not wait for a physiotherapy appointment.",
      }}
      related={[
        { href: "/services/back-neck-pain/", label: "Back and neck pain physiotherapy" },
        { href: "/blog/first-physiotherapy-appointment/", label: "Preparing for your first physiotherapy appointment" },
      ]}
    />
  );
}
