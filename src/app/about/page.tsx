import type { Metadata } from "next";
import { Award, Users, Heart, Target, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sharon Physiotherapy & Rehabilitation Center - Madurai's premier physiotherapy clinic with 14+ years of experience in neurological and orthopedic rehabilitation.",
};

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
    description: "We continuously update our techniques and equipment to provide cutting-edge treatments.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Our evidence-based approaches ensure safe, effective, and reliable treatment outcomes.",
  },
];

const milestones = [
  { year: "2009", event: "Clinic founded with a mission to provide quality physiotherapy care in Madurai" },
  { year: "2014", event: "Expanded to include specialized neurological rehabilitation programs" },
  { year: "2018", event: "Introduced advanced rehabilitation equipment and technologies" },
  { year: "2022", event: "Milestone of 5000+ successful patient recoveries achieved" },
  { year: "2024", event: "Recognized as one of the top physiotherapy centers in Tamil Nadu" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              About Sharon Physiotherapy
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed">
              For over 14 years, we have been transforming lives through expert physiotherapy and rehabilitation services. Our commitment to excellence and patient-centered care has made us Madurai&apos;s trusted choice for neurological and orthopedic rehabilitation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy-900 mb-6">
                A Legacy of Healing Excellence
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sharon Physiotherapy & Rehabilitation Center was established with a simple yet powerful vision: to provide world-class physiotherapy services that make a real difference in people&apos;s lives. What started as a small clinic has grown into one of Madurai&apos;s most trusted rehabilitation centers.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Our founder, Dr. T. Stella Thangam, envisioned a place where patients receive not just treatment, but comprehensive care that addresses their physical, emotional, and psychological needs. This vision continues to guide every decision we make.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Today, we are proud to have helped over 8000 patients regain their mobility, independence, and quality of life. Our team of dedicated physiotherapists combines expertise with compassion to deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-teal-50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900">14+</h3>
                <p className="text-sm text-navy-600 mt-1">Years of Excellence</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-navy-50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-navy flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900">8000+</h3>
                <p className="text-sm text-navy-600 mt-1">Patients Treated</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-navy-50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-navy flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900">100%</h3>
                <p className="text-sm text-navy-600 mt-1">Patient Satisfaction</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-teal-50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900">Expert</h3>
                <p className="text-sm text-navy-600 mt-1">Care & Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Our core values shape every aspect of our practice, from patient interaction to treatment protocols.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-teal flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Milestones
            </h2>
            <p className="text-navy-700 leading-relaxed">
              A look at the key moments that have shaped our journey to becoming Madurai&apos;s premier physiotherapy center.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl gradient-teal flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-teal-200 pl-6 relative">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-teal-500" />
                  <p className="text-navy-700 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}