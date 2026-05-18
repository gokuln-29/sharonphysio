import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fallbackUrl = "https://sharonphysio.com";
const resolvedUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");

export const siteConfig = {
  name: "Sharon Physiotherapy & Rehabilitation Center",
  description: "Premium physiotherapy clinic in Madurai specializing in neurological and orthopedic rehabilitation",
  url: resolvedUrl,
  founded: 2026,
  phone: "+91 82483 05206",
  whatsapp: "918248305206",
  addressLine: "12, Susee Nagar, Dhopas Road",
  locality: "Anaiyur",
  city: "Madurai",
  region: "Tamil Nadu",
  postalCode: "625017",
  country: "IN",
  address: "12, Susee Nagar, Dhopas Road, Anaiyur, Madurai, Tamil Nadu 625017",
  hours: "Mon-Sat: 5:30 PM - 8:00 PM, Sun: Closed (Emergency only)",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:30", closes: "20:00" },
  ],
  email: "sharonphysio@gmail.com",
  instagram: "https://www.instagram.com/sharonphysio/",
  // facebook: "https://www.facebook.com/sharonphysiotherapy/",
  googleMaps: "https://share.google/KsxGkWyz6xgCMmTun",
  googleReviewsUrl: "https://share.google/KsxGkWyz6xgCMmTun",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.704153093489!2d78.11127127453005!3d9.95850409014502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c700531a3ee1%3A0xb7993490db01c3b4!2sSHARON%20PHYSIOTHERAPY!5e0!3m2!1sen!2sin!4v1715356000000!5m2!1sen!2sin",
  location: {
    lat: 9.9585,
    lng: 78.1138,
  },
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const treatments = [
  {
    title: "Stroke Rehabilitation",
    description: "Comprehensive neurorehabilitation program for stroke recovery, focusing on motor function and independence.",
    icon: "Brain",
    href: "/services#stroke",
  },
  {
    title: "Sports Injury Rehab",
    description: "Expert sports physiotherapy ensuring safe return to sport with customized rehabilitation protocols.",
    icon: "Activity",
    href: "/services#sports",
  },
  {
    title: "Cerebral Palsy Management",
    description: "Specialized pediatric physiotherapy for children with CP to improve motor development and function.",
    icon: "Baby",
    href: "/services#cp",
  },
  {
    title: "Back & Neck Pain",
    description: "Targeted treatment for chronic back pain, herniated discs, and cervical issues.",
    icon: "AlignCenter",
    href: "/services#back",
  },
  {
    title: "Women's Fitness Care",
    description: "Specialized physiotherapy for women's health, prenatal, postnatal, and pelvic floor care.",
    icon: "Heart",
    href: "/services#women",
  },
  {
    title: "Manual Therapy",
    description: "Hands-on techniques to mobilize joints and soft tissues for pain relief and improved mobility.",
    icon: "Hand",
    href: "/services#manual",
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
    question: "Do you offer home visit services?",
    answer: "Yes, we offer limited home visit services for patients with severe mobility constraints. Please call our clinic to check availability and discuss the terms for home physiotherapy sessions.",
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  slug: string;
  readingMinutes: number;
  content: { heading?: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Understanding Stroke Rehabilitation",
    excerpt: "Learn about the critical window for stroke recovery and the role of neuroplasticity in regaining mobility.",
    date: "May 5, 2024",
    isoDate: "2024-05-05",
    image: "/blog/stroke-rehab.jpg",
    slug: "understanding-stroke-rehab",
    readingMinutes: 6,
    content: [
      {
        body: "A stroke can change life in minutes — but recovery is rarely all-or-nothing. With the right rehabilitation programme, most people regain meaningful function in the weeks and months that follow. The earlier focused therapy starts, the better the outcome tends to be.",
      },
      {
        heading: "Why the first 90 days matter",
        body: "The brain is most receptive to relearning movement and language during the first three months after a stroke. This is when neuroplasticity — the brain's ability to rewire itself around damaged tissue — is at its peak. Intensive, task-specific physiotherapy during this window helps patients re-form the neural pathways for walking, dressing, eating, and speaking.",
      },
      {
        heading: "What a rehab programme looks like",
        body: "At Sharon Physiotherapy we combine neurodevelopmental treatment (NDT), task-specific gait and balance training, functional electrical stimulation, and graded strength work. Family education is part of every session, because home practice between visits is what compounds the gains.",
      },
      {
        heading: "Recovery beyond 6 months",
        body: "Even patients who started rehab late, or who have plateaued, can keep improving with the right plan. We routinely see new wins in patients a year or two post-stroke when therapy targets specific functional goals — climbing stairs, returning to work, gripping a spoon — rather than generic exercises.",
      },
    ],
  },
  {
    title: "Top 5 Exercises for Chronic Back Pain",
    excerpt: "Simple yet effective exercises you can do at home to alleviate back pain and strengthen your core.",
    date: "April 28, 2024",
    isoDate: "2024-04-28",
    image: "/blog/back-pain.jpg",
    slug: "exercises-for-back-pain",
    readingMinutes: 5,
    content: [
      {
        body: "Most chronic low-back pain is mechanical — meaning it improves with movement, not bed rest. The exercises below are safe for the majority of people but stop and call us if anything worsens pain or causes numbness or tingling down the legs.",
      },
      {
        heading: "1. Cat–Cow",
        body: "On hands and knees, alternate between rounding the spine up (cat) and dropping the belly down (cow) for 10 slow reps. Mobilises the entire spine and reduces stiffness.",
      },
      {
        heading: "2. Glute Bridge",
        body: "Lying on your back with knees bent, lift your hips until shoulders, hips and knees are in a line. Hold for 3 seconds, repeat 12 times. Activates the glutes, which often switch off in people who sit a lot.",
      },
      {
        heading: "3. Bird-Dog",
        body: "From hands and knees, extend the opposite arm and leg, holding for 5 seconds. 8 reps each side. Trains deep core stability without compressing the disc.",
      },
      {
        heading: "4. McKenzie Press-Up",
        body: "Lying face down, gently press up onto the elbows or palms, keeping the hips on the floor. 10 slow reps. Great for disc-related pain that eases with backward bending.",
      },
      {
        heading: "5. Hip Flexor Stretch",
        body: "Half-kneeling, push the hips forward to open the front of the back leg. Hold 30 seconds each side. Tight hip flexors silently overload the lumbar spine all day.",
      },
      {
        heading: "When to come in",
        body: "If pain is constant, wakes you at night, or is paired with leg weakness or bladder changes, please book an assessment. Self-care exercises are not a substitute for diagnosis.",
      },
    ],
  },
  {
    title: "The Importance of Early Intervention in Cerebral Palsy",
    excerpt: "How early physiotherapy can significantly improve developmental outcomes for children with CP.",
    date: "April 15, 2024",
    isoDate: "2024-04-15",
    image: "/blog/cp-intervention.jpg",
    slug: "cp-early-intervention",
    readingMinutes: 7,
    content: [
      {
        body: "Cerebral palsy (CP) is the most common motor disability in children, but the diagnosis says less about a child's future than the quality of early therapy does. Brains under two are remarkably plastic, and structured input during this period can change a child's lifetime trajectory.",
      },
      {
        heading: "What 'early' means",
        body: "Specialists can now identify infants at high risk of CP from around 3–5 months of age using the Hammersmith Infant Neurological Examination and General Movements Assessment. Waiting for a formal diagnosis at 18–24 months wastes the most plastic period of brain development.",
      },
      {
        heading: "What we do",
        body: "Our paediatric programme combines Neurodevelopmental Therapy, motor learning principles, parent coaching for play-based practice at home, and assistive device training where appropriate. We work alongside the child's paediatrician and orthopaedic team rather than replacing them.",
      },
      {
        heading: "Goals at every stage",
        body: "For infants we focus on midline orientation, head and trunk control, and reaching. As the child grows, we shift to gross motor milestones, gait, and skills that support school participation. Parents are partners — most progress happens at home, not in the clinic.",
      },
      {
        heading: "Coming to clinic",
        body: "If you have any concern about a child's development — late head control, persistent fisting, asymmetric movement — please bring them in for an assessment. A 30-minute visit can change years of outcome.",
      },
    ],
  },
];