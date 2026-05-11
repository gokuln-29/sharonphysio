"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-navy-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Book an appointment today and take the first step towards better health and mobility. Our expert team is ready to help you achieve your rehabilitation goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact#book">
                <Button size="lg" className="w-full sm:w-auto bg-white text-navy-900 hover:bg-teal-50 group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 group">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-sm">Madurai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-sm">Mon-Sat, 5:30PM - 8PM</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-sm">{siteConfig.phone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}