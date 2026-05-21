import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton, CallNowButton } from "@/components/layout/floating-buttons";
import { siteConfig } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sharon Physiotherapy & Rehabilitation Center | Best Physio in Madurai",
    template: "%s | Sharon Physiotherapy Madurai",
  },
  description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation. Expert care for stroke, sports injuries, joint pain, and more.",
  keywords: ["physiotherapy Madurai", "rehabilitation center Madurai", "stroke rehabilitation", "sports injury physiotherapy", "orthopedic physiotherapy", "best physiotherapist Madurai"],
  authors: [{ name: "Sharon Physiotherapy" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Sharon Physiotherapy",
    title: "Sharon Physiotherapy & Rehabilitation Center | Madurai",
    description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sharon Physiotherapy & Rehabilitation Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon Physiotherapy & Rehabilitation Center",
    description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
    apple: "/favicon.ico",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallNowButton />
      </body>
    </html>
  );
}