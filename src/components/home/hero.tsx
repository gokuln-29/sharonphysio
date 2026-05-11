"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "8000+", label: "Patients Treated" },
  { value: "100%", label: "Patient Care" },
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
          src="/hero-bg.png" 
          alt="Clinic Interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,148,136,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Madurai&apos;s Premier Physiotherapy Center
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Expert Care for
              <span className="text-primary block">Neuro & Ortho Recovery</span>
            </h1>
            
            <p className="text-lg text-navy-700 leading-relaxed mb-8 max-w-xl">
              Expert physiotherapy and rehabilitation services for neurological and orthopedic conditions. We help you regain mobility, strength, and independence.
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
              <Link href="/contact#book">
                <Button size="lg" className="w-full sm:w-auto group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/treatments">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Treatments
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl gradient-teal opacity-20 animate-float" />
              <div className="absolute inset-4 rounded-3xl bg-white shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-teal flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy-900 mb-2">
                    Dr. T. Stella Thangam
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">
                    MPT Neurology
                  </p>
                  <p className="text-xs text-navy-600 mt-1">
                    Specialist in Neurological & Orthopedic Rehabilitation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-navy-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}