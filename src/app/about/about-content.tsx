"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  Target,
  Lightbulb,
  Shield,
  GraduationCap,
  BookOpen,
  Star,
  CheckCircle,
  Brain,
  Activity,
  Baby,
  PersonStanding,
  Scissors,
  Stethoscope,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTASection } from "@/components/home/cta";

const qualifications = [
  "MPT (Master of Physiotherapy) — Neurology Specialization",
  "Experience in neurological rehabilitation",
  "Experience in stroke rehabilitation",
  "Experience in cerebral palsy management",
  "Experience in orthopedic and pediatric rehabilitation",
  "Experience in sports physiotherapy and women's fitness",
];

const achievements = [
  { number: "8000+", label: "Patients Treated", icon: Users },
  { number: "14+", label: "Years Experience", icon: Award },
  { number: "15+", label: "Specialized Services", icon: Target },
  { number: "MPT", label: "Neurology Specialist", icon: GraduationCap },
];

const approach = [
  {
    title: "Patient-Centered Philosophy",
    description:
      "Every treatment plan is customized based on individual needs, goals, and lifestyle.",
    icon: Heart,
  },
  {
    title: "Evidence-Based Practice",
    description:
      "Treatment is guided by current clinical practice and recognized guidelines, with safety in mind.",
    icon: BookOpen,
  },
  {
    title: "Continuous Learning",
    description:
      "Dr. Stella regularly attends workshops, courses, and conferences to keep her knowledge and techniques up to date.",
    icon: GraduationCap,
  },
];

const specializedAreas = [
  {
    title: "Neurological Rehabilitation",
    description:
      "Neurorehabilitation for stroke, Parkinson's, and spinal cord conditions using NDT and task-specific training.",
    icon: Brain,
    color: "teal",
  },
  {
    title: "Stroke Recovery",
    description:
      "Programs focused on mobility, coordination and daily independence after stroke, from the early to the later stages.",
    icon: Activity,
    color: "navy",
  },
  {
    title: "Cerebral Palsy Care",
    description:
      "Specialized paediatric physiotherapy for children with CP to improve motor development, posture, and functional skills.",
    icon: Baby,
    color: "teal",
  },
  {
    title: "Musculoskeletal Physiotherapy",
    description:
      "Care for joint pain, sports injuries, back/neck pain, and arthritis using manual therapy and targeted exercises.",
    icon: PersonStanding,
    color: "navy",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description:
      "Structured plans for rehabilitation after knee replacement, hip surgery and other operations, following your surgeon's instructions.",
    icon: Scissors,
    color: "teal",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan is customized to meet the unique needs and goals of each patient.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and functional improvements in every rehabilitation journey.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We aim to keep our techniques and equipment up to date.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "We aim to base our approaches on current evidence and to keep treatment safe.",
  },
];

const facilityHighlights = [
  "Modern treatment rooms with privacy",
  "Electrotherapy equipment",
  "Rehabilitation exercise area",
  "Comfortable patient waiting area",
  "Wheelchair accessible facilities",
  "Clean and hygienic environment",
  "Assessment and examination area",
  "Spacious exercise therapy area",
];

const milestones = [
  { year: "2012", event: "Dr. Stella began her clinical practice, focusing on comprehensive physiotherapy care" },
  { year: "2014", event: "Specialized in neurological rehabilitation, including stroke rehabilitation" },
  { year: "2018", event: "Expanded expertise to include structured paediatric CP early-intervention programmes" },
  { year: "2022", event: "Reached the milestone of 5000+ patients treated in her career" },
  { year: "2024", event: "Continued work in musculoskeletal and sports rehabilitation" },
  {
    year: "2025",
    event: "Crossed 8000+ patients treated across various physiotherapy specializations",
  },
  {
    year: "2026",
    event: "Sharon Physiotherapy & Rehabilitation Center was founded in Madurai",
  },
];

const storyStats = [
  { icon: Award, value: "14+", label: "Years of Experience", bg: "bg-teal-50", gradient: "gradient-teal" },
  { icon: Users, value: "8000+", label: "Patients Treated", bg: "bg-navy-50", gradient: "gradient-navy" },
  { icon: Stethoscope, value: "15+", label: "Specialised Services", bg: "bg-navy-50", gradient: "gradient-navy" },
  { icon: ThumbsUp, value: "5.0★", label: "Google Rating", bg: "bg-teal-50", gradient: "gradient-teal" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export function AboutContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(13,148,136,0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Est. 2026 · Madurai&apos;s Trusted Physio Clinic
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              About Sharon Physiotherapy
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed max-w-2xl mx-auto">
              Sharon Physiotherapy & Rehabilitation Center provides precise and personalized physiotherapy
              with over 14 years of clinical expertise in neurological, musculoskeletal, and rehabilitation care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About the Clinic / Our Story ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <p className="text-navy-700 leading-relaxed mb-5">
                Established in 2026, Sharon Physiotherapy & Rehabilitation Center was founded with a simple yet powerful
                vision: to provide high-quality physiotherapy that supports people in Madurai
                with their own goals.
              </p>
              <p className="text-navy-700 leading-relaxed mb-5">
                Our founder, Dr. T. Stella Thangam, MPT - Neurology, brings over 14 years of dedicated clinical experience to the center.
                She envisioned a place where patients receive not just treatment, but care that considers
                their physical and emotional needs.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Throughout her career, she has treated over 8000 patients, working with them on their mobility,
                independence and quality of life.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 gap-5"
            >
              {storyStats.map((stat) => (
                <div key={stat.label} className={`text-center p-6 rounded-2xl ${stat.bg}`}>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat.gradient} flex items-center justify-center`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900">{stat.value}</h3>
                  <p className="text-sm text-navy-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Meet Your Physiotherapist ── */}
      <section className="py-20 bg-linear-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Expert Care
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Meet Your Physiotherapist
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Led by an MPT Neurology specialist with 14+ years of dedicated clinical experience in
              neurological and orthopedic rehabilitation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Doctor card */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Card className="w-full max-w-sm bg-white shadow-2xl border-0 overflow-hidden rounded-3xl">
                <div className="gradient-teal p-10 flex flex-col items-center text-white">
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center mb-5 ring-4 ring-white/30">
                    <span className="font-heading text-4xl font-bold">ST</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-1 text-center">
                    Dr. T. Stella Thangam
                  </h3>
                  <p className="text-teal-100 text-sm font-medium mb-4">Chief Physiotherapist · MPT, MIAP</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    ))}
                    <span className="text-xs text-teal-100 ml-2">5.0 rating on Google</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[
                      "14+ Years Clinical Experience",
                      "MPT – Neurology Specialization",
                      "Stroke rehabilitation experience",
                      "Cerebral palsy management",
                      "Orthopedic & pediatric rehab",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-sm text-navy-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Doctor bio */}
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}>
              <p className="text-navy-700 leading-relaxed text-lg mb-8">
                With over 14 years of dedicated experience, Dr. Stella has treated patients across a
                wide range of conditions. Her aim is to help each patient work towards their own goals for
                independence and quality of life.
              </p>

              <div className="mb-8">
                <h4 className="font-heading text-lg font-semibold text-navy-900 mb-5 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  Education & Certifications
                </h4>
                <div className="space-y-3">
                  {qualifications.map((qual, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700 leading-relaxed">{qual}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact#book">
                <Button size="lg" className="group">
                  Book an Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience & Expertise ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Track Record
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Experience & Expertise
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Over 14 years of dedicated clinical practice spanning neurological, orthopedic, pediatric,
              and sports physiotherapy.
            </p>
          </motion.div>

          {/* Achievement stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {achievements.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:border-teal-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-teal flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-navy-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Approach cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full gradient-teal flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialized Treatments ── */}
      <section className="py-20 bg-linear-to-b from-navy-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Core Specializations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Specialized Treatments
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Our clinic works with complex conditions that need focused clinical attention
              and carefully planned rehabilitation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {specializedAreas.map((spec, i) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:border-teal-300 group h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center ${
                        spec.color === "teal" ? "gradient-teal" : "gradient-navy"
                      }`}
                    >
                      <spec.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy-900 mb-3 group-hover:text-primary transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{spec.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Why Sharon Physiotherapy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Our core values shape every aspect of our practice, from patient interaction to
              treatment plans, so your experience is consistent.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-teal flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Clinic Facilities */}
          <motion.div {...fadeUp}>
            <div className="bg-teal-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3">
                  Our Clinic Facilities
                </h3>
                <p className="text-navy-700 max-w-xl mx-auto">
                  Modern, accessible, and fully equipped to deliver the highest standard of patient care.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {facilityHighlights.map((highlight, i) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-700 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-20 bg-linear-to-b from-teal-50/50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Key Milestones
            </h2>
            <p className="text-navy-700 leading-relaxed">
              A look at the defining moments of Dr. Stella&apos;s clinical career leading up to the foundation of
              Sharon Physiotherapy.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-6 mb-8"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl gradient-teal flex items-center justify-center shadow-md">
                    <span className="font-heading font-bold text-white text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-teal-200 pl-6 relative">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-teal-500 shadow-sm" />
                  <p className="text-navy-700 leading-relaxed pt-1">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
