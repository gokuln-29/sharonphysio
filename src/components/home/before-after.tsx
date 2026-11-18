"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Illustrative examples of how goals are set, not patient results. No outcomes, figures or timeframes are implied.
const caseStudies = [
  {
    title: "Stroke rehabilitation",
    patient: "Example",
    challenge: "Difficulty standing, walking or using one side of the body after a stroke.",
    recovery: "Goals might include practising standing, walking and everyday tasks, set with you and your caregiver.",
    period: "Example only",
  },
  {
    title: "Sports injury rehabilitation",
    patient: "Example",
    challenge: "A knee that feels unstable after a sports injury.",
    recovery: "Goals might include rebuilding strength and control step by step, guided by your physiotherapist and your surgeon or doctor.",
    period: "Example only",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              How we work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              A Clear, Step-by-Step Approach
            </h2>
            <p className="text-navy-700 leading-relaxed mb-8">
              Rehabilitation starts with an assessment and goals agreed with you, and your progress is reviewed as you go. Every person’s plan and pace is different, and we cannot promise a particular result.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                <h4 className="font-bold text-navy-900 mb-2">Our Process</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-navy-700">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    Comprehensive initial assessment
                  </li>
                  <li className="flex items-center gap-3 text-sm text-navy-700">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    Goals agreed with you
                  </li>
                  <li className="flex items-center gap-3 text-sm text-navy-700">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    Progress reviewed during your plan
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading font-bold text-lg text-navy-900">{study.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-xs font-semibold">
                        {study.period}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-1">Starting point</div>
                        <p className="text-sm text-navy-700">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">Possible goals</div>
                        <p className="text-sm text-navy-700">{study.recovery}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
