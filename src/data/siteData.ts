import { FAQItem, GalleryItem, ReviewItem, ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-rx",
    title: "100% Genuine Prescription Medicines",
    category: "Prescription Medicines",
    shortDesc: "Authentic branded and generic medications directly sourced from certified pharmaceutical manufacturers.",
    fullDesc: "We stock all critical cardiovascular, anti-diabetic, neurological, respiratory, gastroenterological, and antibiotic medicines with temperature-monitored storage and strict expiry controls.",
    iconName: "Pill",
    highlights: ["Temperature-controlled cold chain for insulins & vaccines", "Computerized batch & expiry monitoring", "Direct manufacturer and authorized C&F sourcing"]
  },
  {
    id: "serv-devices",
    title: "Medical Equipment & Surgical Supplies",
    category: "Medical Equipment",
    shortDesc: "Authorized distributor of digital BP monitors, nebulizers, glucometers, wheelchairs, and orthopedic supports.",
    fullDesc: "Comprehensive surgical and rehabilitation equipment for home recovery and hospital outpatient needs. Free demonstrations and guidance provided by our qualified staff.",
    iconName: "Stethoscope",
    highlights: ["Omron, Dr. Morepen, Accu-Chek authorized dealer", "Wheelchairs, commode chairs, walking sticks & walkers", "Warranty support and immediate replacement guarantee"]
  },
  {
    id: "serv-whatsapp",
    title: "WhatsApp Prescription Order & Fast Local Delivery",
    category: "Home Care",
    shortDesc: "Send a photo of your doctor's prescription via WhatsApp for swift verification and doorstep delivery across Aurangabad.",
    fullDesc: "Designed for elderly patients and busy families. Simply upload your prescription to +91 90975 03446, confirm with our pharmacist, and receive your medicines safely packed at your home.",
    iconName: "Truck",
    highlights: ["Rapid doorstep delivery across Aurangabad city", "Cash on Delivery and UPI payments accepted", "Free dosage and intake instructions on call"]
  },
  {
    id: "serv-otc",
    title: "Over-the-Counter (OTC) & Daily Essentials",
    category: "OTC Medicines",
    shortDesc: "Quick relief for cold, cough, fever, pain, acidity, digestion, eye care, and first-aid kits.",
    fullDesc: "Reliable wellness remedies, antiseptics, bandages, pain balms, oral care, and digestive enzymes from trusted brands like Cipla, Dabur, and Sun Pharma.",
    iconName: "ShieldCheck",
    highlights: ["Complete family first-aid supplies", "Trusted skin creams, antiseptics, and eye drops", "Expert advice on safe OTC usage"]
  },
  {
    id: "serv-baby",
    title: "Maternal & Baby Care Corner",
    category: "Baby Care",
    shortDesc: "Specialized nutritional formulas, baby foods, gentle baby skincare, and premium diapers.",
    fullDesc: "From infant milk supplements (Lactogen, Similac, Pediasure) to hypoallergenic baby lotions, diapers, wipes, and feeding accessories, we care for mother and baby with utmost dedication.",
    iconName: "HeartHandshake",
    highlights: ["Top brands: Pampers, Sebamed, Himalaya Baby, Johnson's", "Paediatrician-recommended nutritional powders", "Sensitive baby skin lotions & rash care"]
  },
  {
    id: "serv-supplements",
    title: "Vitamins, Minerals & Health Supplements",
    category: "Supplements",
    shortDesc: "Immunity boosters, multivitamins, calcium, fish oils, protein powders, and diabetic nutrition.",
    fullDesc: "Stay energized and active with scientifically backed nutritional supplements for men, women, seniors, and athletes, including Becosules, Revital, Shelcal, and Ensure.",
    iconName: "Sparkles",
    highlights: ["B-complex, Vitamin C, Vitamin D3, and Zinc", "Sugar-free nutritional supplements for diabetic health", "Joint support, collagen, and omega-3 supplements"]
  },
  {
    id: "serv-checkup",
    title: "Complimentary Health Vitals Check",
    category: "Health Devices",
    shortDesc: "Walk in anytime for complimentary blood pressure checks, pulse oximeter readings, and temperature scans.",
    fullDesc: "Routine health screening is key to preventing long-term complications. Our pharmacists provide free blood pressure checks and blood sugar screening assistance right in the store.",
    iconName: "Activity",
    highlights: ["Instant BP reading with calibrated Omron monitor", "Blood glucose monitoring assistance", "Weight & BMI tracking guidance"]
  },
  {
    id: "serv-personal",
    title: "Dermatological & Personal Care",
    category: "Personal Care",
    shortDesc: "Medicated soaps, anti-dandruff solutions, dermatologist lotions, sunscreen, and oral care.",
    fullDesc: "Prescribed skincare and haircare solutions from Cetaphil, Sebamed, Bioderma, and trusted Indian pharmaceutical dermatological divisions.",
    iconName: "Sparkles",
    highlights: ["Dermatologist recommended sunscreens & moisturizers", "Anti-fungal and antibacterial personal hygiene", "Therapeutic oral rinses and sensitive toothpastes"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Galaxy Medical Storefront on Old GT Road",
    category: "Storefront",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    caption: "Prominently situated on Old GT Road, Aurangabad with convenient parking and wheelchair access."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Shelves",
    category: "Shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    caption: "Alphabetic and therapeutic arrangement ensuring zero dispatch errors and rapid order retrieval."
  },
  {
    id: "gal-3",
    title: "Surgical & Health Monitoring Devices Display",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    caption: "Digital BP monitors, pulse oximeters, nebulizers, and orthopedic rehabilitation braces."
  },
  {
    id: "gal-4",
    title: "Baby Care & Maternal Nutrition Section",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    caption: "Comprehensive baby formulas, gentle care soaps, wipes, and pediatric health essentials."
  },
  {
    id: "gal-5",
    title: "Air-Conditioned Clean Medicine Storage",
    category: "Interior",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    caption: "Temperature-controlled medicine vaults ensuring pharmaceutical potency and stability."
  },
  {
    id: "gal-6",
    title: "Pharmacist Consultation & Dispensing Counter",
    category: "Interior",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=80",
    caption: "Qualified pharmacists offering prescription verification, dosage clarity, and empathetic advice."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rakesh Kumar Singh",
    location: "Ramesh Chowk, Aurangabad",
    rating: 5,
    date: "August 2024",
    comment: "Galaxy Medical is the most dependable medical shop on Old GT Road. Whenever my father needed critical cardiology medicines that were hard to find, they arranged them within 2 hours. Very polite and honest staff.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Priya Ranjan Verma",
    location: "Shahpur, Aurangabad",
    rating: 5,
    date: "July 2024",
    comment: "Their WhatsApp ordering feature is a lifesaver. I send a photo of doctor's prescription and they deliver it to my home promptly. Prices are always transparent with good discount on MRP.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Dr. Arvind Kumar",
    location: "MG Road, Aurangabad",
    rating: 5,
    date: "May 2024",
    comment: "As a local physician, I appreciate Galaxy Medical's strict adherence to medicine expiry checks and cold chain maintenance for injectables and insulins. High standard of pharmacy practice.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Sunita Kumari",
    location: "Dani Bigha, Aurangabad",
    rating: 5,
    date: "March 2024",
    comment: "Bought an Omron BP monitor and Accu-Chek glucometer from them. The pharmacist took 10 minutes to explain how to use it and change batteries. Genuine warranty and bill provided.",
    verified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I order medicines through WhatsApp?",
    answer: "Simply click the 'WhatsApp Order' button on our website or text our official number +91 90975 03446. Send a clear photo of your doctor's prescription along with your delivery address. Our registered pharmacist will verify the prescription, share the bill total, and dispatch your order.",
    category: "Ordering"
  },
  {
    question: "Do you require a doctor's prescription for all medicines?",
    answer: "Schedule H and H1 medications (such as antibiotics, blood pressure, psychiatric, and diabetic medications) legally require a valid doctor's prescription under Indian Drugs & Cosmetics Rules. Over-the-counter (OTC) products, vitamins, and healthcare devices do not require a prescription.",
    category: "Prescriptions"
  },
  {
    question: "What are your delivery areas in Aurangabad, Bihar?",
    answer: "We provide home delivery across Aurangabad city including Old GT Road, Ramesh Chowk, Shahpur, Dani Bigha, MG Road, Overbridge area, and surrounding localities. Urgent delivery is prioritized for senior citizens and emergency prescriptions.",
    category: "Delivery"
  },
  {
    question: "What are your store timings?",
    answer: "Galaxy Medical is open from 8:00 AM to 10:00 PM Monday through Saturday, and 8:30 AM to 9:30 PM on Sundays. For emergency medicine requests outside normal hours, our WhatsApp line remains actively monitored.",
    category: "General"
  },
  {
    question: "Which payment modes are accepted?",
    answer: "We accept all major payment modes including Cash on Delivery, UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards, and Net Banking. Computerized GST tax invoices are provided with every purchase.",
    category: "Payment"
  },
  {
    question: "Are your medical devices under warranty?",
    answer: "Yes! All digital medical devices like BP monitors, nebulizers, digital thermometers, and glucometers are 100% genuine with authorized manufacturer warranty cards, original packaging, and our store support.",
    category: "Equipment"
  }
];

export const HEALTH_TIPS_DATA = [
  {
    id: "tip-1",
    title: "Safe Medicine Storage: Avoid Bathroom Cabinets",
    date: "September 2024",
    readTime: "3 min read",
    category: "Safety",
    summary: "Moisture and temperature fluctuations in bathrooms can degrade active pharmaceutical ingredients. Store medicines in a cool, dry place away from direct sunlight.",
    tips: ["Keep insulins and probiotics strictly inside the refrigerator (2°C to 8°C)", "Never freeze liquid medications", "Keep all medicines securely out of reach of young children"]
  },
  {
    id: "tip-2",
    title: "Why Completing Antibiotic Courses Is Non-Negotiable",
    date: "August 2024",
    readTime: "4 min read",
    category: "Antibiotics",
    summary: "Stopping an antibiotic once you feel better allows surviving bacteria to mutate and develop antimicrobial resistance, making future infections harder to treat.",
    tips: ["Take doses at consistent intervals as prescribed", "Do not share leftover antibiotics with family members", "Consult your pharmacist if you experience adverse allergic reactions"]
  },
  {
    id: "tip-3",
    title: "5 Tips for Accurate Home Blood Pressure Monitoring",
    date: "July 2024",
    readTime: "3 min read",
    category: "Devices",
    summary: "Measuring your blood pressure at home helps your doctor fine-tune dosage. Avoid caffeine, smoking, or exercise 30 minutes before taking readings.",
    tips: ["Sit quietly with your back supported and feet flat on the floor", "Position the arm cuff at heart level", "Take two readings 1 minute apart and record the average"]
  }
];
