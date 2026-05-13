import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, navigation } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-white transition-transform hover:scale-105">
                <img src="/Logo.webp" alt="Sharon Physiotherapy Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl leading-tight block">Sharon Physiotherapy</span>
                <span className="block text-sm text-teal-300">Rehabilitation Center</span>
              </div>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed">
              Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation. Your path to recovery starts here.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-navy-200 hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Specializations</h4>
            <nav className="space-y-3">
              <Link href="/services#stroke" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Stroke Rehabilitation
              </Link>
              <Link href="/services#sports" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Sports Injury Rehab
              </Link>
              <Link href="/services#cp" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Cerebral Palsy Management
              </Link>
              <Link href="/services#back" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Back & Neck Pain
              </Link>
              <Link href="/services#women" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Women&apos;s Fitness Care
              </Link>
              <Link href="/services#manual" className="block text-sm text-navy-200 hover:text-teal-400 transition-colors">
                Manual Therapy
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-sm text-navy-200">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-navy-200 hover:text-teal-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-navy-200 hover:text-teal-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-sm text-navy-200">{siteConfig.hours}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.5-1.1,1.36-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
              <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Google Business Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.22-4.74 3.22-8.32z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.97 10.97 0 0 0 12 23z"/><path d="M5.84 14.1A6.5 6.5 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A10.97 10.97 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A10.97 10.97 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-300">
            © {siteConfig.founded}–{new Date().getFullYear()} Sharon Physiotherapy & Rehabilitation Center. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-300">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}