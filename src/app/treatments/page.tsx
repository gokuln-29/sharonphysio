import type { Metadata } from "next";
import { Brain, Zap, Activity, Bone, Move, AlignCenter, CheckCircle, Baby, Hand, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Explore our comprehensive range of physiotherapy treatments including stroke rehabilitation, sports injury treatment, joint replacement recovery, and more in Madurai.",
};

const treatmentDetails = [
  {
    id: "stroke",
    icon: Brain,
    title: "Stroke Rehabilitation",
    category: "Neurological",
    description: "Our comprehensive stroke rehabilitation program focuses on restoring motor function, balance, and independence through evidence-based techniques and intensive therapy.",
    conditions: ["Hemiparesis", "Balance disorders", "Motor dysfunction", "Post-stroke mobility issues"],
    techniques: ["Neurodevelopmental treatment (NDT)", "Task-specific training", "Functional electrical stimulation"],
    duration: "8-16 weeks",
    color: "teal",
  },
  {
    id: "sports",
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    category: "Orthopedic",
    description: "Expert sports physiotherapy ensuring safe return to sport with customized rehabilitation protocols for athletes and active individuals.",
    conditions: ["ACL injuries", "Rotator cuff tears", "Ankle sprains", "Tennis elbow"],
    techniques: ["Sports-specific exercises", "Proprioception training", "K-taping", "Return-to-sport testing"],
    duration: "6-12 weeks",
    color: "navy",
  },
  {
    id: "cp",
    icon: Baby,
    title: "Cerebral Palsy Management",
    category: "Pediatric / Neuro",
    description: "Specialized pediatric rehabilitation for children with Cerebral Palsy, focusing on motor development, posture, and functional mobility.",
    conditions: ["Spastic CP", "Ataxic CP", "Motor developmental delay", "Pediatric gait issues"],
    techniques: ["Early intervention", "Neurodevelopmental Therapy", "Assistive device training", "Parent education"],
    duration: "Long-term / Ongoing",
    color: "teal",
  },
  {
    id: "back",
    icon: AlignCenter,
    title: "Back & Neck Pain Treatment",
    category: "Orthopedic",
    description: "Targeted treatment for chronic back pain, herniated discs, and cervical issues using advanced manual therapy and stabilization exercises.",
    conditions: ["Chronic back pain", "Herniated disc", "Cervical spondylosis", "Sciatica"],
    techniques: ["Manual therapy", "Spinal stabilization", "Dry needling", "Posture correction"],
    duration: "4-8 weeks",
    color: "navy",
  },
  {
    id: "women",
    icon: Heart,
    title: "Women’s Fitness Care",
    category: "Women's Health",
    description: "Specialized physiotherapy for women's health needs, including prenatal, postnatal, and overall physical wellness.",
    conditions: ["Pelvic floor dysfunction", "Prenatal discomfort", "Postnatal recovery", "Women's fitness"],
    techniques: ["Pelvic floor exercises", "Prenatal yoga/exercises", "Core strengthening", "Wellness counseling"],
    duration: "4-12 weeks",
    color: "teal",
  },
  {
    id: "manual",
    icon: Hand,
    title: "Manual Therapy & Advanced Tech",
    category: "Specialized Techniques",
    description: "Hands-on joint and soft tissue mobilization combined with advanced modalities like Electrotherapy, Dry Needling, and Craniosacral therapy.",
    conditions: ["Joint stiffness", "Muscle tension", "Chronic pain", "Post-surgical stiffness"],
    techniques: ["Joint mobilization", "Dry needling", "Electrotherapy", "Craniosacral therapy", "PNF"],
    duration: "Based on assessment",
    color: "navy",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              Our Treatment Services
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed">
              Comprehensive physiotherapy services tailored to your specific needs. From neurological rehabilitation to orthopedic care, we provide evidence-based treatments for optimal recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {treatmentDetails.map((treatment, index) => {
              const Icon = treatment.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={treatment.id}
                  id={treatment.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        treatment.color === "teal" ? "bg-teal-100 text-teal-700" : "bg-navy-100 text-navy-700"
                      }`}>
                        {treatment.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${treatment.color === "teal" ? "gradient-teal" : "gradient-navy"} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                        {treatment.title}
                      </h2>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-3">Conditions Treated</h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.conditions.map((condition) => (
                          <span key={condition} className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm">
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-navy-600">
                      <span className="font-medium">Treatment Duration:</span>
                      <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-700">{treatment.duration}</span>
                    </div>
                  </div>

                  <Card className={`${treatment.color === "teal" ? "bg-teal-50 border-teal-200" : "bg-navy-50 border-navy-200"}`}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-navy-900 mb-4">Treatment Techniques</h4>
                      <div className="space-y-3">
                        {treatment.techniques.map((technique) => (
                          <div key={technique} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 shrink-0 ${treatment.color === "teal" ? "text-teal-600" : "text-navy-600"}`} />
                            <span className="text-sm text-navy-700">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}