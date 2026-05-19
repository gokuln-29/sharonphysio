"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink } from "lucide-react";
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
    details: [siteConfig.phone, "Mon-Sat: 5:30 PM - 8:00 PM"],
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

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredSlot: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  preferredDate: "",
  preferredSlot: "",
  message: "",
};

export default function ContactClient() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (state: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) next.name = "Please enter your name.";
    if (!state.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(state.email.trim())) next.email = "Enter a valid email address.";
    if (!state.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!PHONE_PATTERN.test(state.phone.replace(/\s+/g, ""))) next.phone = "Enter a 10-digit Indian mobile number.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validation = validate(formState);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsLoading(true);
    try {
      const { name, email, phone, treatment, preferredDate, preferredSlot, message } = formState;
      
      const whatsappMessage = `*New Appointment Request*
Name: ${name}
Phone: ${phone}
Email: ${email}
Treatment: ${treatment || "Not specified"}
Date: ${preferredDate || "Not specified"}
Time: ${preferredSlot || "Not specified"}
Message: ${message || "None"}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      
      setIsSubmitted(true);
      setFormState(initialState);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed.";
      setSubmitError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const fieldError = (key: keyof FormState) =>
    errors[key] ? <p className="mt-1 text-xs text-red-600">{errors[key]}</p> : null;

  const inputErrorClass = (key: keyof FormState) => (errors[key] ? "border-red-500 focus-visible:ring-red-500" : "");

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
                        Redirecting to WhatsApp
                      </h2>
                      <p className="text-navy-600 mb-6">
                        Your request details have been passed to WhatsApp. Please hit &quot;Send&quot; in WhatsApp to complete your booking. For urgent help, call{" "}
                        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-primary font-medium underline">{siteConfig.phone}</a>.
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
                      <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              aria-invalid={!!errors.name}
                              className={inputErrorClass("name")}
                            />
                            {fieldError("name")}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              aria-invalid={!!errors.email}
                              className={inputErrorClass("email")}
                            />
                            {fieldError("email")}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              type="tel"
                              name="phone"
                              placeholder="10-digit mobile number"
                              value={formState.phone}
                              onChange={handleChange}
                              required
                              inputMode="numeric"
                              pattern="[6-9][0-9]{9}"
                              maxLength={10}
                              aria-invalid={!!errors.phone}
                              className={inputErrorClass("phone")}
                            />
                            {fieldError("phone")}
                          </div>
                          <div>
                            <label htmlFor="treatment" className="block text-sm font-medium text-navy-900 mb-2">
                              Treatment Type
                            </label>
                            <select
                              id="treatment"
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

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-navy-900 mb-2">
                              Preferred Date
                            </label>
                            <Input
                              id="preferredDate"
                              type="date"
                              name="preferredDate"
                              value={formState.preferredDate}
                              onChange={handleChange}
                              min={today()}
                            />
                          </div>
                          <div>
                            <label htmlFor="preferredSlot" className="block text-sm font-medium text-navy-900 mb-2">
                              Preferred Time
                            </label>
                            <select
                              id="preferredSlot"
                              name="preferredSlot"
                              value={formState.preferredSlot}
                              onChange={handleChange}
                              className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select a time slot</option>
                              <option value="5:30 PM - 6:30 PM">5:30 PM – 6:30 PM</option>
                              <option value="6:30 PM - 7:30 PM">6:30 PM – 7:30 PM</option>
                              <option value="7:30 PM - 8:00 PM">7:30 PM – 8:00 PM</option>
                              <option value="Flexible">I&apos;m flexible — call to schedule</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your condition or any specific requirements..."
                            value={formState.message}
                            onChange={handleChange}
                          />
                        </div>

                        {submitError && (
                          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {submitError}
                          </div>
                        )}

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
          <div className="mt-6 text-center">
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
