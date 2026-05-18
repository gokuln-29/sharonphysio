"use client";

import { motion } from "framer-motion";
import { Brain, Bone, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specializations = [
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    description: "Expert care for stroke, spinal cord injuries, CP, ADHD, Autism, Dementia, and other neurological conditions using evidence-based techniques.",
    features: ["Neuroplasticity training", "Balance restoration", "Functional movement", "Cognitive rehabilitation"],
  },
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    description: "Comprehensive treatment for musculoskeletal conditions, joint problems, and post-surgical rehabilitation.",
    features: ["Joint mobilization", "Post-surgical care", "Fracture rehabilitation", "Arthritis management"],
  },
  {
    icon: Target,
    title: "Sports Medicine",
    description: "Specialized programs for athletes and sports enthusiasts to recover from injuries and enhance performance.",
    features: ["Injury prevention", "Performance training", "Return-to-sport protocols", "Sports-specific exercises"],
  },
  {
    icon: Heart,
    title: "Chronic Pain Management",
    description: "Holistic approach to managing chronic pain conditions, improving quality of life without medication dependency.",
    features: ["Pain education", "Movement therapy", "Lifestyle modifications", "Mind-body techniques"],
  },
];

export function Specializations() {
  return (
    <section className="py-24 bg-linear-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Specialized Expertise in Neurological & Orthopedic Care
            </h2>
            <p className="text-navy-700 leading-relaxed mb-8">
              Our clinic combines cutting-edge techniques with personalized care to deliver exceptional results. We specialize in complex neurological and orthopedic conditions that require dedicated, expert attention.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Advanced Neurological Expertise</h4>
                  <p className="text-sm text-navy-600 mt-1">Specialized training in stroke rehab, Parkinson&apos;s, and spinal cord injury management.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                  <Bone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Comprehensive Orthopedic Care</h4>
                  <p className="text-sm text-navy-600 mt-1">From sports injuries to joint replacements, we cover all orthopedic conditions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg text-navy-900 mb-2">
                            {spec.title}
                          </h3>
                          <p className="text-sm text-navy-600 mb-4">
                            {spec.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {spec.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}