"use client";

import { motion } from "framer-motion";

export function ClinicGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Our Facility
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
            A Healing Environment
          </h2>
          <p className="text-navy-600 mt-4 max-w-xl mx-auto">
            Our modern clinic is equipped with advanced rehabilitation tools in a calm, welcoming space designed for your recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/sharon01.jpeg"
              alt="Sharon Physiotherapy Clinic interior"
              width={800}
              height={600}
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/Sharon02.jpeg"
              alt="Sharon Physiotherapy Clinic treatment area"
              width={800}
              height={600}
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
