import type { Metadata } from "next";
import { GraduationCap, Award, Users, BookOpen, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Dr. T. Stella Thangam — Chief Physiotherapist",
  description: "Dr. T. Stella Thangam, MPT (Neurology), is the chief physiotherapist at Sharon Physiotherapy Madurai with 14+ years of clinical experience in stroke, CP and ortho rehab.",
  alternates: { canonical: "/doctor" },
  openGraph: {
    title: "Dr. T. Stella Thangam | Sharon Physiotherapy Madurai",
    description: "Meet Dr. Stella, MPT (Neurology), Madurai's specialist in stroke and orthopedic rehabilitation.",
    url: "/doctor",
  },
};

const qualifications = [
  "MPT (Master of Physiotherapy) - Neurology specialization",
  "Specialist in Neurological Rehabilitation",
  "Stroke Rehabilitation Expert",
  "Cerebral Palsy Management Specialist",
  "Orthopedic & Pediatric Rehabilitation Expert",
  "Sports Physiotherapy & Women's Fitness Health Care",
];

const specializations = [
  "Stroke Rehabilitation",
  "Sports Injury Rehabilitation",
  "Back & Neck Pain Treatment",
  "Cerebral Palsy Management",
  "Arthritis Treatment",
  "Women’s Fitness Care",
  "Post Surgery Rehabilitation",
  "Electrotherapy",
  "Manual Therapy",
  "Dry Needling",
  "K-taping",
  "PNF",
  "Craniosacral Therapy",
];

const achievements = [
  { number: "8000+", label: "Patients Treated" },
  { number: "14+", label: "Years Experience" },
  { number: "15+", label: "Specialized Services" },
  { number: "MPT", label: "Neurology Specialist" },
];

const approach = [
  {
    title: "Patient-Centered Philosophy",
    description: "Every treatment plan is customized based on individual needs, goals, and lifestyle considerations.",
    icon: Heart,
  },
  {
    title: "Evidence-Based Practice",
    description: "All treatments are grounded in the latest research and clinical guidelines for optimal outcomes.",
    icon: BookOpen,
  },
  {
    title: "Continuous Learning",
    description: "Regularly updates skills through workshops, courses, and conferences to provide cutting-edge care.",
    icon: GraduationCap,
  },
];

export default function DoctorPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                  Chief Physiotherapist
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                  Dr. T. Stella Thangam
                </h1>
                <p className="text-lg text-navy-600 mb-6">
                  Expert in Neurological & Orthopedic Rehabilitation
                </p>
                <p className="text-navy-700 leading-relaxed mb-8">
                  With over 14 years of dedicated experience, Dr. Stella has become one of Madurai&apos;s most trusted physiotherapists. Her passion for helping patients regain their independence and quality of life drives her commitment to excellence in every treatment.
                </p>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-navy-600 ml-2">5.0 Rating (200+ reviews)</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl gradient-teal flex items-center justify-center">
                    <div className="w-full h-full rounded-3xl bg-white m-4 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                          <span className="text-white font-bold text-4xl font-heading">ST</span>
                        </div>
                        <p className="font-heading font-semibold text-navy-900">Dr. T. Stella Thangam</p>
                        <p className="text-sm text-teal-600 mt-1">MPT, MIAP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-6 mb-16">
            {achievements.map((stat) => (
              <Card key={stat.label} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-navy-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-teal-50 border-teal-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Education & Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700" dangerouslySetInnerHTML={{ __html: qual }} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-50 border-navy-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Areas of Specialization
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span key={spec} className="px-4 py-2 rounded-full bg-white border border-navy-200 text-navy-700 text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Treatment Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              My Approach to Care
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Combining clinical expertise with genuine compassion to deliver exceptional rehabilitation outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}