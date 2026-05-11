import type { Metadata } from "next";
import { Camera, Monitor, Activity, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a virtual tour of Sharon Physiotherapy & Rehabilitation Center. See our state-of-the-art equipment, comfortable treatment rooms, and rehabilitation facilities.",
};

const galleryItems = [
  {
    category: "Treatment Rooms",
    title: "Modern Physiotherapy Suite",
    description: "Spacious treatment rooms equipped with latest physiotherapy equipment and modalities.",
    icon: Monitor,
    color: "teal",
  },
  {
    category: "Equipment",
    title: "Advanced Rehabilitation Tools",
    description: "State-of-the-art equipment for neurological and orthopedic rehabilitation.",
    icon: Activity,
    color: "navy",
  },
  {
    category: "Facilities",
    title: "Patient Care Areas",
    description: "Comfortable waiting areas and recovery spaces designed for patient comfort.",
    icon: Heart,
    color: "teal",
  },
  {
    category: "Gallery",
    title: "Clinic Environment",
    description: "Clean, modern, and welcoming environment for all our patients.",
    icon: Camera,
    color: "navy",
  },
];

const facilityHighlights = [
  "Modern treatment rooms with privacy",
  "Advanced electrotherapy equipment",
  "Rehabilitation gym with latest machines",
  "Comfortable patient waiting area",
  "Wheelchair accessible facilities",
  "Clean and hygienic environment",
  "State-of-the-art diagnostic tools",
  "Spacious exercise therapy area",
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              Our Facilities
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed">
              Take a virtual tour of our modern physiotherapy center. We believe in providing the best environment for your recovery journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`h-48 ${item.color === "teal" ? "gradient-teal" : "gradient-navy"} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                    <Icon className="w-16 h-16 text-white/50" />
                  </div>
                  <CardContent className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.color === "teal" ? "bg-teal-100 text-teal-700" : "bg-navy-100 text-navy-700"
                    }`}>
                      {item.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Facility Highlights
            </h2>
            <p className="text-navy-700 leading-relaxed">
              Our clinic is equipped with modern facilities to ensure the best possible treatment experience for all our patients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:border-teal-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="font-medium text-navy-900">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-navy-900 mb-6">
              Visit Us Today
            </h2>
            <p className="text-navy-700 leading-relaxed mb-8">
              Experience our state-of-the-art facilities and meet our dedicated team. Schedule a visit to see how we can help you on your path to recovery.
            </p>
            <div className="inline-flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-navy-700">
                <Camera className="w-5 h-5 text-teal-600" />
                <span className="text-sm">Photos available on request</span>
              </div>
              <div className="flex items-center gap-2 text-navy-700">
                <Monitor className="w-5 h-5 text-teal-600" />
                <span className="text-sm">Virtual tours available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}