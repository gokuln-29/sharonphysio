"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/utils";

const WHATSAPP_PREFILL = encodeURIComponent(
  "Hello Sharon Physiotherapy! I'd like to book an appointment.\n\n" +
    "Name: \n" +
    "Condition / treatment: \n" +
    "Preferred day: \n" +
    "Preferred time: ",
);

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${WHATSAPP_PREFILL}`}
      aria-label="Chat with the clinic on WhatsApp"
      data-contact-source="floating"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute right-full mr-3 px-4 py-2 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </motion.a>
  );
}

export function CallNowButton() {
  return (
    <motion.a
      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
      aria-label="Call Sharon Physiotherapy"
      data-contact-source="floating"
      className="hidden md:flex fixed bottom-6 left-6 z-50 w-14 h-14 gradient-teal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="absolute left-full ml-3 px-4 py-2 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call now
      </span>
    </motion.a>
  );
}

export function MobileContactBar() {
  const itemClass = "flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-2 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  return (
    <nav aria-label="Contact the clinic" className="fixed inset-x-0 bottom-0 z-40 border-t border-teal-100 bg-white px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-lg md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} data-contact-source="mobile_bar" className={`${itemClass} bg-teal-50 text-teal-800`}><Phone className="h-5 w-5" aria-hidden="true" />Call</a>
        <a href={`https://wa.me/${siteConfig.whatsapp}?text=${WHATSAPP_PREFILL}`} target="_blank" rel="noopener noreferrer" data-contact-source="mobile_bar" className={`${itemClass} bg-green-50 text-green-800`}><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp</a>
        <Link href="/contact/#book" data-contact-source="mobile_bar" className={`${itemClass} bg-primary text-white`}><CalendarDays className="h-5 w-5" aria-hidden="true" />Appointment</Link>
      </div>
    </nav>
  );
}
