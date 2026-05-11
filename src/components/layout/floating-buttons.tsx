"use client";

import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/utils";
import { useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hello, I would like to book an appointment at Sharon Physiotherapy`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute right-full mr-3 px-4 py-2 bg-white rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us!
          </span>
        </motion.a>
      )}
    </>
  );
}

export function CallNowButton() {
  return (
    <motion.a
      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 gradient-teal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
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