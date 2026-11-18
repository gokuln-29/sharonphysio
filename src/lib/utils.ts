import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fallbackUrl = "https://sharonphysio.com";
const resolvedUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");

export const siteConfig = {
  name: "Sharon Physiotherapy & Rehabilitation Center",
  description: "Physiotherapy clinic in Anaiyur, Madurai specializing in neurological and orthopedic rehabilitation",
  url: resolvedUrl,
  founded: 2026,
  phone: "+91 82483 05206",
  whatsapp: "918248305206",
  addressLine: "11-17/72, Malar Nagar",
  locality: "Anaiyur",
  city: "Madurai",
  region: "Tamil Nadu",
  postalCode: "625017",
  country: "IN",
  address: "11-17/72, Malar Nagar, Anaiyur, Madurai, Tamil Nadu 625017",
  hours: "Mon-Sat: 6:00 PM - 9:00 PM, Sun: Closed (Emergency only)",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "21:00" },
  ],
  email: "appointment@sharonphysio.com",
  instagram: "https://www.instagram.com/sharonphysio/",
  facebook: "https://www.facebook.com/profile.php?id=100023817831331",
  googleMaps: "https://share.google/KsxGkWyz6xgCMmTun",
  googleReviewsUrl: "https://share.google/KsxGkWyz6xgCMmTun",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.704153093489!2d78.11127127453005!3d9.95850409014502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c700531a3ee1%3A0xb7993490db01c3b4!2sSHARON%20PHYSIOTHERAPY!5e0!3m2!1sen!2sin!4v1715356000000!5m2!1sen!2sin",
  location: {
    lat: 9.9585,
    lng: 78.1138,
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact" },
];

export const treatments = [
  {
    title: "Stroke Rehabilitation",
    description: "Neurological rehabilitation after stroke, focusing on movement, balance and everyday independence.",
    icon: "Brain",
    href: "/services/stroke-rehabilitation/",
  },
  {
    title: "Sports Injury Rehab",
    description: "Sports physiotherapy planned around your sport and your injury.",
    icon: "Activity",
    href: "/services/sports-injury-rehabilitation/",
  },
  {
    title: "Cerebral Palsy Management",
    description: "Pediatric physiotherapy for children with cerebral palsy, focused on movement and everyday activities.",
    icon: "Baby",
    href: "/services/cerebral-palsy-management/",
  },
  {
    title: "Back & Neck Pain",
    description: "Physiotherapy for back and neck pain, including disc and cervical problems.",
    icon: "PersonStanding",
    href: "/services/back-neck-pain/",
  },
  {
    title: "Women's Fitness Care",
    description: "Specialized physiotherapy for women's health, prenatal, postnatal, and pelvic floor care.",
    icon: "Heart",
    href: "/services/womens-fitness-care/",
  },
  {
    title: "Manual Therapy",
    description: "Hands-on techniques applied to joints and soft tissues, usually alongside exercise.",
    icon: "Hand",
    href: "/services/manual-therapy/",
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
    answer: "We specialize in treating neurological conditions (stroke, Parkinson's, spinal cord injury, multiple sclerosis) and orthopedic conditions (sports injuries, joint replacements, back/neck pain, arthritis). Your physiotherapist will explain what they find at your assessment and what may help.",
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
    answer: "The number of sessions varies based on your condition, how long you have had it, and how you progress. We will discuss a plan and review it with you after your assessment.",
  },
  {
    question: "Do you offer home visit services?",
    answer: "Yes, we offer limited home visit services for patients with severe mobility constraints. Please call our clinic to check availability and discuss the terms for home physiotherapy sessions.",
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date?: string;
  isoDate?: string;
  image?: string;
  relatedService?: { href: string; label: string };
  source?: { href: string; label: string };
  slug: string;
  readingMinutes: number;
  content: { heading?: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Your First Physiotherapy Appointment in Madurai",
    excerpt: "What to bring, what to tell your physiotherapist, and what to ask before you leave.",
    slug: "first-physiotherapy-appointment",
    readingMinutes: 2,
    relatedService: {
      href: "/services/",
      label: "Explore physiotherapy services"
    },
    source: {
      href: "https://www.nhs.uk/tests-and-treatments/physiotherapy/",
      label: "NHS overview of physiotherapy"
    },
    content: [
      {
        heading: "Bring a short history",
        body: "Write down when the problem began, what has changed since then, and what you have already tried. Bring relevant reports, a medication list, and any instructions from your treating clinician. Wear clothing that lets you move comfortably."
      },
      {
        heading: "Describe a task you want back",
        body: "An example such as “I need both hands to get up from a chair” tells your physiotherapist more about your daily life than a pain score alone. Pick one or two tasks you would like to do more comfortably and explain why they matter."
      },
      {
        heading: "Ask how you will track progress",
        body: "Your first visit may include questions about your symptoms and a movement assessment. Before leaving, ask what the plan involves, how progress will be measured, and whom to contact if you have questions between visits."
      }
    ]
  },
  {
    title: "Preparing for a Stroke Rehabilitation Assessment",
    excerpt: "A first-visit checklist for people recovering from stroke and the family members who support them.",
    slug: "stroke-rehab-first-visit-checklist",
    readingMinutes: 2,
    relatedService: {
      href: "/services/stroke-rehabilitation/",
      label: "Explore stroke rehabilitation"
    },
    source: {
      href: "https://www.nhs.uk/tests-and-treatments/physiotherapy/",
      label: "NHS overview of physiotherapy"
    },
    content: [
      {
        heading: "Bring your discharge information",
        body: "If available, bring the hospital discharge summary, notes from previous therapy, and instructions from your medical team. Tell the clinic about any walking aid, brace, or wheelchair you use, especially if you need help getting into the clinic."
      },
      {
        heading: "Describe an ordinary day",
        body: "Think through a typical morning. Which parts of getting out of bed, dressing, or moving around the house require help? A caregiver can share what they have observed while giving the person recovering from stroke time to describe their own priorities."
      },
      {
        heading: "Choose one practical goal",
        body: "A goal might be getting from the bed to a chair with less help or walking to the bathroom with your usual aid. Ask the physiotherapist how they would assess that task and what information to note before your next visit."
      }
    ]
  },
  {
    title: "Returning to Training After a Sports Injury",
    excerpt: "Prepare for your sports physiotherapy assessment with a clear picture of your injury, training, and goals.",
    slug: "sports-injury-return-to-training",
    readingMinutes: 2,
    relatedService: {
      href: "/services/sports-injury-rehabilitation/",
      label: "Explore sports injury rehabilitation"
    },
    source: {
      href: "https://www.nhs.uk/tests-and-treatments/physiotherapy/",
      label: "NHS overview of physiotherapy"
    },
    content: [
      {
        heading: "Explain how the injury happened",
        body: "Describe the movement, the playing surface, and what you noticed immediately afterward. If the problem built up over time, write down recent changes in training frequency, running distance, footwear, or playing surface."
      },
      {
        heading: "Break your sport into movements",
        body: "A badminton player may need to lunge, change direction, and land after a jump. A runner may care most about hills or longer distances. Tell your physiotherapist which movement you miss most and which one you feel least confident about."
      },
      {
        heading: "Agree on what readiness looks like",
        body: "Ask which tasks the physiotherapist wants to assess before you progress and how you will review the result. If you have a match or race in mind, mention the date early so you can discuss it alongside your assessment."
      }
    ]
  },
  {
    title: "Back and Neck Pain: What to Tell Your Physiotherapist",
    excerpt: "Make a short symptom record that describes how back or neck pain affects your day.",
    slug: "back-neck-pain-symptom-notes",
    readingMinutes: 2,
    relatedService: {
      href: "/services/back-neck-pain/",
      label: "Explore back and neck pain physiotherapy"
    },
    source: {
      href: "https://www.nhs.uk/tests-and-treatments/physiotherapy/",
      label: "NHS overview of physiotherapy"
    },
    content: [
      {
        heading: "Record the situation as well as the symptom",
        body: "A useful note might read “Turning to check traffic on my scooter is difficult” or “My back starts aching after half an hour at my desk.” Note whether symptoms change with position, movement, or time of day."
      },
      {
        heading: "Explain what has changed",
        body: "Tell your physiotherapist when the symptoms began, whether they stay in one area or spread, and whether you have noticed tingling, numbness, or weakness. Mention previous episodes and bring any relevant reports you already have."
      },
      {
        heading: "Pick a goal you can describe clearly",
        body: "You might want to get through a commute more comfortably or turn your head while parking. Ask your physiotherapist how you can track changes in that task between appointments."
      }
    ]
  },
  {
    title: "Preparing for Physiotherapy After Surgery",
    excerpt: "A practical checklist for discussing post-operative rehabilitation with your physiotherapist.",
    slug: "physiotherapy-after-surgery-checklist",
    readingMinutes: 2,
    relatedService: {
      href: "/services/",
      label: "Explore physiotherapy services"
    },
    source: {
      href: "https://www.nhs.uk/tests-and-treatments/physiotherapy/",
      label: "NHS overview of physiotherapy"
    },
    content: [
      {
        heading: "Bring your surgeon’s instructions",
        body: "Bring your discharge summary and any written instructions on movement limits, weight-bearing, or use of a brace or walking aid. If you are unsure when to start physiotherapy, contact your surgical team for guidance."
      },
      {
        heading: "Identify everyday tasks you need help with",
        body: "List the tasks that matter most at home or work, such as getting in and out of a car, managing stairs, or returning to a desk. Mention the equipment and help you have at home so the physiotherapist can account for your surroundings."
      },
      {
        heading: "Leave with a plan you can explain back",
        body: "Ask the physiotherapist to clarify what to practise, how you will review progress, and whom to contact with concerns. If a family member will help, ask whether they can join the discussion so everyone understands the plan."
      }
    ]
  },
  {
    title: "Understanding Stroke Rehabilitation",
    excerpt: "What stroke rehabilitation involves, and why starting a plan with your care team early can matter.",
    date: "May 5, 2024",
    isoDate: "2024-05-05",
    image: "/blog/stroke-rehab.jpg",
    slug: "understanding-stroke-rehab",
    readingMinutes: 6,
    content: [
      {
        body: "A stroke can change life in minutes, and recovery looks different for every person. Rehabilitation is planned around your own goals and your doctor's advice. Many people are encouraged to start rehabilitation early once they are medically stable, but when and how depends on your care team.",
      },
      {
        heading: "Why timing matters",
        body: "Research suggests the brain is especially adaptable in the first weeks and months after a stroke, a process often called neuroplasticity. Rehabilitation during this period commonly involves repeated, task-specific practice of everyday movements such as walking, dressing and eating. How much recovery any person makes varies widely, and your doctor can advise you on what to expect.",
      },
      {
        heading: "What a rehab programme looks like",
        body: "A plan may include task-specific gait and balance training and graded strength work, depending on your assessment. Family members are often involved, because practice between visits can support your plan.",
      },
      {
        heading: "Rehabilitation beyond the first months",
        body: "Some people continue to work on specific goals long after the first months, such as climbing stairs, returning to work or gripping a spoon. If you have already finished a period of rehabilitation, you can ask a physiotherapist whether a new assessment with specific goals would be useful.",
      },
    ],
  },
  {
    title: "Top 5 Exercises for Chronic Back Pain",
    excerpt: "Five gentle movements often suggested for back stiffness, with guidance on when to stop and when to get an assessment.",
    date: "April 28, 2024",
    isoDate: "2024-04-28",
    image: "/blog/back-pain.jpg",
    slug: "exercises-for-back-pain",
    readingMinutes: 5,
    content: [
      {
        body: "Many people with long-lasting low-back pain are advised to stay gently active rather than rest in bed, but this does not suit everyone. The movements below may suit some people and not others. Stop if anything worsens your pain or causes numbness or tingling down the legs, and ask a physiotherapist before starting if you are unsure.",
      },
      {
        heading: "1. Cat–Cow",
        body: "On hands and knees, alternate between rounding the spine up (cat) and dropping the belly down (cow) for 10 slow reps. A gentle way to move the spine.",
      },
      {
        heading: "2. Glute Bridge",
        body: "Lying on your back with knees bent, lift your hips until shoulders, hips and knees are in a line. Hold for 3 seconds, repeat 12 times. Works the buttock muscles, which can get less use if you sit for long periods.",
      },
      {
        heading: "3. Bird-Dog",
        body: "From hands and knees, extend the opposite arm and leg, holding for 5 seconds. 8 reps each side. Works the trunk muscles that support the spine.",
      },
      {
        heading: "4. McKenzie Press-Up",
        body: "Lying face down, gently press up onto the elbows or palms, keeping the hips on the floor. 10 slow reps. Some people find backward bending eases their pain, while for others it makes it worse. If it increases your pain or sends pain down a leg, stop and ask a physiotherapist.",
      },
      {
        heading: "5. Hip Flexor Stretch",
        body: "Half-kneeling, push the hips forward to open the front of the back leg. Hold 30 seconds each side. Tightness at the front of the hip can contribute to back discomfort in some people.",
      },
      {
        heading: "When to come in",
        body: "If pain is constant, wakes you at night, or is paired with leg weakness or bladder changes, please book an assessment. Self-care exercises are not a substitute for diagnosis.",
      },
    ],
  },
  {
    title: "The Importance of Early Intervention in Cerebral Palsy",
    excerpt: "Why it helps to raise concerns about a child's development early, and what a physiotherapy assessment involves.",
    date: "April 15, 2024",
    isoDate: "2024-04-15",
    image: "/blog/cp-intervention.jpg",
    slug: "cp-early-intervention",
    readingMinutes: 7,
    content: [
      {
        body: "Cerebral palsy (CP) is a group of conditions affecting movement and posture, and is among the more common motor disabilities in childhood. Every child is different, and what physiotherapy can achieve varies from child to child. Raising concerns early lets your child's doctors and therapists assess them and plan support sooner.",
      },
      {
        heading: "What 'early' means",
        body: "Trained specialists can identify some infants at higher risk of CP in the first months of life, using tools such as the General Movements Assessment and the Hammersmith Infant Neurological Examination, usually through a pediatric or neurology service. If you are worried, you do not have to wait for a formal diagnosis before asking for an assessment.",
      },
      {
        heading: "What we do",
        body: "Our paediatric programme combines Neurodevelopmental Therapy, motor learning principles, parent coaching for play-based practice at home, and assistive device training where appropriate. We work alongside the child's paediatrician and orthopaedic team rather than replacing them.",
      },
      {
        heading: "Goals at every stage",
        body: "For infants we focus on midline orientation, head and trunk control, and reaching. As the child grows, we shift to gross motor milestones, gait, and skills that support school participation. Parents are partners: practice at home between visits is usually an important part of a plan.",
      },
      {
        heading: "Coming to clinic",
        body: "If you have any concern about a child's development — late head control, persistent fisting, asymmetric movement — please bring them in for an assessment. An assessment can help you understand what to do next.",
      },
    ],
  },
];
