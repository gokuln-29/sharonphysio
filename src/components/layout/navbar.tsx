"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0" aria-label={`${siteConfig.name} — Home`}>
            <span className="relative inline-flex shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-md bg-white transition-transform duration-300 group-hover:scale-105">
              <img
                src="/Logo.webp"
                alt="Sharon Physiotherapy Logo"
                width={64}
                height={64}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="hidden sm:block min-w-0">
              <span className="font-brand font-bold text-base lg:text-xl text-navy-900 leading-tight block tracking-wide truncate">
                Sharon Physiotherapy
              </span>
              <span className="block text-xs lg:text-sm text-teal-700 font-medium italic tracking-wider truncate">
                &amp; Rehabilitation Center
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-navy-900 hover:text-primary transition-colors rounded-lg hover:bg-teal-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Link href="/contact#book">
              <Button size="sm">Book Appointment</Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy-900 rounded-lg hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-navy-900 hover:text-primary hover:bg-teal-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t space-y-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-navy-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <Link href="/contact#book" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
