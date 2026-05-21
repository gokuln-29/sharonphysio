"use client";

import { motion } from "framer-motion";
import { Brain, Activity, PersonStanding, Baby, Heart, Hand, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { treatments } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Activity,
  PersonStanding,
  Baby,
  Heart,
  Hand,
};

export function Treatments() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Comprehensive Treatment Solutions
          </h2>
          <p className="text-navy-700 leading-relaxed">
            We offer a wide range of specialized physiotherapy treatments tailored to your specific needs, ensuring optimal recovery and rehabilitation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => {
            const Icon = iconMap[treatment.icon] || Activity;
            return (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={treatment.href}>
                  <Card className="h-full hover:border-teal-300 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                        <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary transition-colors">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-navy-600 leading-relaxed mb-4">
                        {treatment.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}