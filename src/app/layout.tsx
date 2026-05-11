import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Sharon Physiotherapy & Rehabilitation Center | Best Physio in Madurai",
    template: "%s | Sharon Physiotherapy Madurai",
  },
  description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation. Expert care for stroke, sports injuries, joint pain, and more.",
  keywords: ["physiotherapy Madurai", "rehabilitation center Madurai", "stroke rehabilitation", "sports injury physiotherapy", "orthopedic physiotherapy", "best physiotherapist Madurai"],
  authors: [{ name: "Sharon Physiotherapy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Sharon Physiotherapy",
    title: "Sharon Physiotherapy & Rehabilitation Center | Madurai",
    description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallNowButton />
      </body>
    </html>
  );
}