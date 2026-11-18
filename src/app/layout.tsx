import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ContactAnalytics } from "@/components/layout/contact-analytics";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton, CallNowButton, MobileContactBar } from "@/components/layout/floating-buttons";
import { siteConfig } from "@/lib/utils";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

const outfit = localFont({
  src: "./fonts/outfit-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-outfit",
});

const playfair = localFont({
  src: "./fonts/playfair-latin.woff2",
  weight: "400 900",
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Physiotherapy in Anaiyur, Madurai | Sharon Physiotherapy",
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
      <body className="min-h-screen flex flex-col pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QXNX47H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ContactAnalytics />
        <WhatsAppButton />
        <CallNowButton />
        <MobileContactBar />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QXNX47H');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T5F2QL12ZV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T5F2QL12ZV');
          `}
        </Script>
      </body>
    </html>
  );
}