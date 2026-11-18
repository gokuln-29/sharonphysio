"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "8000+", label: "Patients Treated" },
  { value: "Mon–Sat", label: "Open Evenings" },
];

const features = [
  "Expert neurological rehabilitation",
  "Advanced orthopedic treatments",
  "Personalized recovery plans",
  "State-of-the-art equipment",
  "Convenient location in Madurai",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          fetchPriority="low"
          decoding="async"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,148,136,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Sharon Physiotherapy and Rehab center
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6 text-balance">
              Physiotherapy in{" "}
              <span className="text-primary block">Anaiyur, Madurai</span>
            </h1>
            
            <p className="text-lg text-navy-700 leading-relaxed mb-8 max-w-xl">
              We provide neurological and orthopedic rehabilitation in Anaiyur, Madurai, to help you regain mobility, strength, and independence.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-navy-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/#book" data-contact-source="hero">
                <Button size="lg" className="w-full sm:w-auto group">
                  Request an Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} data-contact-source="hero" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3 font-semibold text-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call the Clinic
              </a>
            </div>
            <p className="mt-4 text-sm text-navy-700">Mon–Sat · 6:00 PM–9:00 PM · Appointment subject to confirmation</p>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" data-contact-action="directions" data-contact-source="hero" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary underline">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Get directions to our Anaiyur clinic
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] mx-auto lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-3 rounded-3xl gradient-teal opacity-20 animate-float" />
              <img
                src="/hero-clinic-768.webp"
                srcSet="/hero-clinic-480.webp 480w, /hero-clinic-768.webp 768w, /hero-clinic-1200.webp 1200w"
                sizes="(min-width: 1280px) 576px, (min-width: 1024px) 472px, calc(100vw - 48px)"
                alt="Sharon Physiotherapy Clinic"
                width={600}
                height={750}
                decoding="async"
                fetchPriority="high"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-20 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <h3 className="font-heading text-sm sm:text-base font-semibold text-navy-900">
                  Dr. T. Stella Thangam
                </h3>
                <p className="text-xs sm:text-sm text-teal-600 font-medium">MPT Neurology</p>
                <p className="text-xs text-navy-600 mt-0.5 hidden sm:block">
                  Specialist in Neurological &amp; Orthopedic Rehabilitation
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-navy-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}