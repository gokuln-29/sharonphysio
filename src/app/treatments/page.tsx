import type { Metadata } from "next";
import { TreatmentsRedirect } from "./treatments-redirect";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Redirecting to our services page.",
  alternates: { canonical: "/services" },
  robots: { index: false, follow: true },
  other: {
    "http-equiv:refresh": "0;url=/services/",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/services/" />
      <TreatmentsRedirect />
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <p className="text-navy-700 mb-4">Redirecting to our services page…</p>
          <a href="/services/" className="text-primary underline font-medium">
            Click here if you are not redirected.
          </a>
        </div>
      </main>
    </>
  );
}
