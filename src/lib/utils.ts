import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Sharon Physiotherapy & Rehabilitation Center",
  description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation",
  url: "https://sharonphysio.com",
  phone: "+91 82483 05206",
  whatsapp: "918248305206",
  address: "12, Susee Nagar, Dhopas Road, Anaiyur, Madurai, Tamil Nadu 625017",
  hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: Closed (Emergency only)",
  email: "sharonphysio@gmail.com",
  googleMaps: "https://share.google/KsxGkWyz6xgCMmTun",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.704153093489!2d78.11127127453005!3d9.95850409014502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c700531a3ee1%3A0xb7993490db01c3b4!2sSHARON%20PHYSIOTHERAPY!5e0!3m2!1sen!2sin!4v1715356000000!5m2!1sen!2sin",
  location: {
    lat: 9.9585,
    lng: 78.1138,
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Doctor", href: "/doctor" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const treatments = [
  {
    title: "Stroke Rehabilitation",
    description: "Comprehensive neurorehabilitation program for stroke recovery, focusing on motor function and independence.",
    icon: "Brain",
    href: "/treatments#stroke",
  },
  {
    title: "Sports Injury Rehab",
    description: "Expert sports physiotherapy ensuring safe return to sport with customized rehabilitation protocols.",
    icon: "Activity",
    href: "/treatments#sports",
  },
  {
    title: "Cerebral Palsy Management",
    description: "Specialized pediatric physiotherapy for children with CP to improve motor development and function.",
    icon: "Baby",
    href: "/treatments#cp",
  },
  {
    title: "Back & Neck Pain",
    description: "Targeted treatment for chronic back pain, herniated discs, and cervical issues.",
    icon: "AlignCenter",
    href: "/treatments#back",
  },
  {
    title: "Women's Fitness Care",
    description: "Specialized physiotherapy for women's health, prenatal, postnatal, and pelvic floor care.",
    icon: "Heart",
    href: "/treatments#women",
  },
  {
    title: "Manual Therapy",
    description: "Hands-on techniques to mobilize joints and soft tissues for pain relief and improved mobility.",
    icon: "Hand",
    href: "/treatments#manual",
  },
];

export const allTreatments = [
  "Stroke rehabilitation",
  "Sports injury rehabilitation",
  "Back pain treatment",
  "Neck pain treatment",
  "Cerebral palsy management",
  "Arthritis treatment",
  "Women’s fitness care",
  "Post surgery rehabilitation",
  "Electrotherapy",
  "Manual therapy",
  "Dry needling",
  "K-taping",
  "PNF",
  "Craniosacral therapy",
];

export const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Madurai",
    text: "After my stroke, I couldn't walk properly. Dr. Stella's comprehensive rehabilitation program helped me regain my mobility. I'm now able to walk without support and continue my daily activities independently.",
    treatment: "Stroke Rehabilitation",
    rating: 5,
  },
  {
    name: "Priya Venkatesh",
    location: "Dindigul",
    text: "I had severe back pain for years. The treatment at Sharon Physiotherapy was excellent. The personalized approach and modern equipment made a huge difference. Highly recommend for anyone with chronic pain issues.",
    treatment: "Spine Rehabilitation",
    rating: 5,
  },
  {
    name: "Karthik Raj",
    location: "Theni",
    text: "As a professional athlete, finding the right sports physio is crucial. Dr. Stella understood my requirements perfectly and got me back to sport safely. The clinic has state-of-the-art equipment.",
    treatment: "Sports Injury",
    rating: 5,
  },
  {
    name: "Lakshmi Narayanan",
    location: "Madurai",
    text: "My father underwent knee replacement surgery. The post-operative care and rehabilitation at Sharon Physiotherapy was exceptional. The staff is caring and professional. He recovered faster than expected.",
    treatment: "Joint Replacement Rehab",
    rating: 5,
  },
  {
    name: "Anitha Kumari",
    location: "Sivaganga",
    text: "Managing Parkinson's is challenging, but Dr. Stella's specialized approach has significantly improved my father's quality of life. The exercises and techniques have helped him maintain his mobility.",
    treatment: "Parkinson's Management",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What conditions do you treat at Sharon Physiotherapy?",
    answer: "We specialize in treating neurological conditions (stroke, Parkinson's, spinal cord injury, multiple sclerosis) and orthopedic conditions (sports injuries, joint replacements, back/neck pain, arthritis). Our comprehensive approach addresses the root cause of your problem.",
  },
  {
    question: "Do I need a doctor's referral to visit?",
    answer: "While a doctor's referral is not mandatory, it is recommended for certain conditions, especially post-surgery or for insurance purposes. However, you can directly book an appointment for consultation.",
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a detailed assessment of your condition, medical history review, physical examination, and discussion of treatment goals. We'll create a personalized treatment plan and may begin treatment on the same day.",
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies based on your condition, severity, and individual progress. Acute conditions may require 6-8 sessions, while chronic or post-surgical cases may need 12-16+ sessions. We'll provide an estimated treatment plan after your assessment.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We accept most major health insurance providers. Please contact our clinic or your insurance provider to verify coverage before your visit. We also offer flexible payment options.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, UPI payments, and bank transfers. Payment is expected at the time of service unless prior arrangements are made for insurance cases.",
  },
  {
    question: "Is parking available at the clinic?",
    answer: "Yes, we have dedicated parking space available for patients. The clinic is also easily accessible by public transport and is located near major landmarks in Madurai.",
  },
  {
    question: "Do you offer home visit services?",
    answer: "Yes, we offer limited home visit services for patients with severe mobility constraints. Please call our clinic to check availability and discuss the terms for home physiotherapy sessions.",
  },
];

export const blogPosts = [
  {
    title: "Understanding Stroke Rehabilitation",
    excerpt: "Learn about the critical window for stroke recovery and the role of neuroplasticity in regaining mobility.",
    date: "May 5, 2024",
    image: "/blog/stroke-rehab.jpg",
    slug: "understanding-stroke-rehab",
  },
  {
    title: "Top 5 Exercises for Chronic Back Pain",
    excerpt: "Simple yet effective exercises you can do at home to alleviate back pain and strengthen your core.",
    date: "April 28, 2024",
    image: "/blog/back-pain.jpg",
    slug: "exercises-for-back-pain",
  },
  {
    title: "The Importance of Early Intervention in Cerebral Palsy",
    excerpt: "How early physiotherapy can significantly improve developmental outcomes for children with CP.",
    date: "April 15, 2024",
    image: "/blog/cp-intervention.jpg",
    slug: "cp-early-intervention",
  },
];