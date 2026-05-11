"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export function GoogleMap() {
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
            Our Location
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Visit Our Rehabilitation Center
          </h2>
          <p className="text-navy-700 leading-relaxed">
            We are conveniently located in Anaiyur, Madurai. Visit us for a consultation and start your journey to recovery.
          </p>
        </motion.div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src={siteConfig.mapEmbed}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sharon Physiotherapy Location"
          ></iframe>
        </div>
        <div className="text-center mt-6">
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View on Google Maps & read reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
