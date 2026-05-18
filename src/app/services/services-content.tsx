"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Baby,
  AlignCenter,
  Heart,
  Hand,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTASection } from "@/components/home/cta";

const treatmentDetails = [
  {
    id: "stroke",
    icon: Brain,
    title: "Stroke Rehabilitation",
    category: "Neurological",
    description:
      "Our comprehensive stroke rehabilitation program focuses on restoring motor function, balance, and independence through evidence-based techniques and intensive therapy. We leverage neuroplasticity — the brain's remarkable ability to reorganize — to rebuild movement and communication pathways.",
    conditions: ["Hemiparesis", "Balance disorders", "Motor dysfunction", "Post-stroke mobility issues"],
    techniques: [
      "Neurodevelopmental treatment (NDT)",
      "Task-specific training",
      "Functional electrical stimulation",
      "Gait & balance retraining",
    ],
    duration: "8–16 weeks",
    color: "teal",
  },
  {
    id: "sports",
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    category: "Orthopedic",
    description:
      "Expert sports physiotherapy ensuring safe return to sport with customized rehabilitation protocols for athletes and active individuals. We combine biomechanical assessment with sport-specific training to restore peak performance and prevent re-injury.",
    conditions: ["ACL injuries", "Rotator cuff tears", "Ankle sprains", "Tennis elbow"],
    techniques: [
      "Sports-specific exercises",
      "Proprioception training",
      "K-taping",
      "Return-to-sport testing",
      "Cupping and soft tissue manipulation",
    ],
    duration: "6–12 weeks",
    color: "navy",
  },
  {
    id: "cp",
    icon: Baby,
    title: "Cerebral Palsy Management",
    category: "Pediatric / Neuro",
    description:
      "Specialized pediatric rehabilitation for children with Cerebral Palsy, focusing on motor development, posture, and functional mobility. Early intervention during critical developmental windows produces the most significant long-term gains.",
    conditions: ["Spastic CP", "Ataxic CP", "Motor developmental delay", "Pediatric gait issues"],
    techniques: [
      "Early intervention",
      "Neurodevelopmental Therapy (NDT)",
      "Assistive device training",
      "Parent coaching & education",
    ],
    duration: "Long-term / Ongoing",
    color: "teal",
  },
  {
    id: "back",
    icon: AlignCenter,
    title: "Back & Neck Pain Treatment",
    category: "Orthopedic",
    description:
      "Targeted treatment for chronic back pain, herniated discs, and cervical issues using advanced manual therapy and stabilization exercises. We identify the root cause rather than only treating symptoms, delivering lasting relief.",
    conditions: ["Chronic back pain", "Herniated disc", "Cervical spondylosis", "Sciatica"],
    techniques: [
      "Manual therapy",
      "Spinal stabilization exercises",
      "Dry needling",
      "Posture correction",
    ],
    duration: "4–8 weeks",
    color: "navy",
  },
  {
    id: "women",
    icon: Heart,
    title: "Women's Fitness Care",
    category: "Women's Health",
    description:
      "Specialized physiotherapy for women's health needs, including prenatal, postnatal, and overall physical wellness. We provide a safe, supportive environment for women at every stage of life.",
    conditions: [
      "Pelvic floor dysfunction",
      "Prenatal discomfort",
      "Postnatal recovery",
      "Women's fitness",
      "PCOD",
      "Primary dysmenorrhea treatment",
      "Obesity management"
    ],
    techniques: [
      "Pelvic floor rehabilitation",
      "Pre & postnatal exercises",
      "Core strengthening",
      "Wellness counseling",
    ],
    duration: "4–12 weeks",
    color: "teal",
  },
  {
    id: "manual",
    icon: Hand,
    title: "Manual Therapy & Advanced Techniques",
    category: "Specialized Techniques",
    description:
      "Hands-on joint and soft tissue mobilization combined with advanced modalities like Electrotherapy, Dry Needling, and Craniosacral therapy. These techniques provide rapid pain relief and improved mobility when used alongside active rehabilitation.",
    conditions: ["Joint stiffness", "Muscle tension", "Chronic pain", "Post-surgical stiffness"],
    techniques: [
      "Joint mobilization",
      "Dry needling",
      "Electrotherapy",
      "Craniosacral therapy",
      "PNF techniques",
    ],
    duration: "Based on assessment",
    color: "navy",
  },
];

const whyUs = [
  {
    icon: Award,
    title: "14+ Years of Expertise",
    description: "Dr. Stella brings over a decade of specialized clinical experience in neurological and musculoskeletal physiotherapy.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    description: "Every treatment protocol is grounded in current clinical research and internationally recognized guidelines.",
  },
  {
    icon: Users,
    title: "8000+ Patients Treated",
    description: "A proven track record of successful recoveries across a wide range of conditions and patient demographics.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export function ServicesContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(13,148,136,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Evidence-Based Physiotherapy
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Comprehensive Physiotherapy{" "}
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              From neurological rehabilitation to orthopedic care and women&apos;s health, we provide
              personalized, evidence-based treatments for optimal and lasting recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#book">
                <Button size="lg" className="w-full sm:w-auto group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+918248305206">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Our Treatments ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatment Details ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {treatmentDetails.map((treatment, index) => {
              const Icon = treatment.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={treatment.id}
                  id={treatment.id}
                  {...fadeUp}
                  className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24"
                >
                  {/* Text side */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        treatment.color === "teal"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-navy-100 text-navy-700"
                      }`}
                    >
                      {treatment.category}
                    </span>

                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                          treatment.color === "teal" ? "gradient-teal" : "gradient-navy"
                        }`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                        {treatment.title}
                      </h2>
                    </div>

                    <p className="text-navy-700 leading-relaxed mb-6">{treatment.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-3 text-sm uppercase tracking-wide">
                        Conditions Treated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.conditions.map((condition) => (
                          <span
                            key={condition}
                            className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm border border-teal-100 font-medium"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-teal-600" />
                        <span className="text-navy-600">Duration:</span>
                        <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-700 font-medium text-xs">
                          {treatment.duration}
                        </span>
                      </div>
                      <Link href="/contact#book">
                        <Button size="sm" className="group">
                          Book This Service
                          <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Techniques card side */}
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <Card
                      className={`h-full border-2 ${
                        treatment.color === "teal"
                          ? "bg-teal-50 border-teal-200"
                          : "bg-navy-50 border-navy-200"
                      }`}
                    >
                      <CardContent className="p-8">
                        <h4 className="font-heading font-semibold text-navy-900 mb-6 text-lg">
                          Treatment Techniques
                        </h4>
                        <div className="space-y-3">
                          {treatment.techniques.map((technique) => (
                            <div
                              key={technique}
                              className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm"
                            >
                              <CheckCircle
                                className={`w-5 h-5 shrink-0 mt-0.5 ${
                                  treatment.color === "teal" ? "text-teal-600" : "text-navy-600"
                                }`}
                              />
                              <span className="text-sm text-navy-700 font-medium">{technique}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
