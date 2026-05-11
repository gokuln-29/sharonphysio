"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [siteConfig.address],
    color: "teal",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [siteConfig.phone, "Mon-Sat: 9AM - 8PM"],
    color: "navy",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [siteConfig.email],
    color: "teal",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [siteConfig.hours],
    color: "navy",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section id="book" className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed">
              Ready to start your recovery journey? Get in touch with us to book an appointment or ask any questions about our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-teal flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                        Thank You!
                      </h2>
                      <p className="text-navy-600 mb-6">
                        Your appointment request has been submitted. We will contact you shortly to confirm your booking.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Submit Another Request
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
                        Book an Appointment
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-2">
                              Phone Number *
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formState.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-2">
                              Treatment Type
                            </label>
                            <select
                              name="treatment"
                              value={formState.treatment}
                              onChange={handleChange}
                              className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select treatment</option>
                              <option value="stroke">Stroke Rehabilitation</option>
                              <option value="sports">Sports Injury Rehabilitation</option>
                              <option value="back">Back Pain Treatment</option>
                              <option value="neck">Neck Pain Treatment</option>
                              <option value="cp">Cerebral Palsy Management</option>
                              <option value="arthritis">Arthritis Treatment</option>
                              <option value="women">Women’s Fitness Care</option>
                              <option value="post-surgery">Post Surgery Rehabilitation</option>
                              <option value="electro">Electrotherapy</option>
                              <option value="manual">Manual Therapy</option>
                              <option value="dry-needling">Dry Needling</option>
                              <option value="k-taping">K-taping</option>
                              <option value="pnf">PNF</option>
                              <option value="craniosacral">Craniosacral Therapy</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-2">
                            Your Message
                          </label>
                          <Textarea
                            name="message"
                            placeholder="Tell us about your condition or any specific requirements..."
                            value={formState.message}
                            onChange={handleChange}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <span className="animate-spin mr-2">⟳</span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Appointment Request
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className={info.color === "teal" ? "bg-teal-50 border-teal-200" : "bg-navy-50 border-navy-200"}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${info.color === "teal" ? "gradient-teal" : "gradient-navy"} flex items-center justify-center shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-sm text-navy-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-navy-600">
              Visit us at our convenient location in Madurai
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={siteConfig.mapEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharon Physiotherapy Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}