import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Truck,
  HeartPulse,
  Award,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  Stethoscope,
  Pill,
  Send,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";
import { SERVICES_DATA, REVIEWS_DATA, FAQ_DATA, HEALTH_TIPS_DATA } from "../data/siteData";
import { MedicineStockChecker } from "../components/MedicineStockChecker";
import { SEOHead } from "../components/SEOHead";

interface OutletContextType {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredReviews = REVIEWS_DATA.slice(0, 3);
  const previewFAQs = FAQ_DATA.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSubmitted(false);
      }, 3500);
    }
  };

  return (
    <>
      <SEOHead
        title="Trusted Pharmacy in Aurangabad, Bihar"
        description="Galaxy Medical on Old GT Road, Aurangabad. 100% authentic medicines, surgical equipment, baby care & fast WhatsApp delivery. Call 9097503446."
        canonicalPath="/"
      />

      {/* 1. HERO BANNER — Sophisticated Dark */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-[#0A0A0A] overflow-hidden border-b border-[#1A1A1A]">
        {/* Ambient Darkened Background with Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Galaxy Medical Pharmacy"
            className="w-full h-full object-cover object-center opacity-15 grayscale brightness-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,164,126,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl space-y-7">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] sm:text-[11px] uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#426a44] shadow-[0_0_6px_rgba(66,106,68,0.8)]" />
              <span>Registered Pharmacy &bull; Old GT Road, Aurangabad, Bihar</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#EAEAEA] tracking-tight leading-[1.08]">
              Your Trusted Dispensary for{" "}
              <span className="text-[#C5A47E] italic font-serif">
                Authentic Medicines
              </span>{" "}
              &amp; Clinical Supplies
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#888888] leading-relaxed max-w-2xl font-light">
              Supplying certified prescription formulations, cold-chain biologics, surgical devices, and daily healthcare essentials with uncompromising accuracy.
            </p>

            {/* Action Buttons: WhatsApp Order, Call Now, Directions */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenOrderModal()}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-xs font-bold uppercase tracking-[0.2em] shadow-lg active:scale-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0F0F0F] hover:bg-[#141414] text-[#EAEAEA] border border-[#222222] text-xs font-medium uppercase tracking-[0.15em] active:scale-95 transition"
              >
                <Phone className="w-4 h-4 text-[#C5A47E]" />
                <span>Call: {BUSINESS_CONFIG.displayPhone}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-[#777777] hover:text-[#C5A47E] text-xs tracking-wider uppercase transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-5 border-t border-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] text-[#666666]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A47E] shrink-0" />
                <span>100% Genuine Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#C5A47E] shrink-0" />
                <span>Aurangabad Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A47E] shrink-0" />
                <span>Daily 08:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Image Frame */}
            <div className="relative">
              <div className="border border-[#222222] bg-[#0F0F0F] p-2">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=80"
                  alt="Galaxy Medical Dispensary Store"
                  className="w-full h-80 sm:h-96 object-cover grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Stat Badge */}
              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#0F0F0F] p-4 sm:p-5 border border-[#222222] shadow-2xl flex items-center gap-4">
                <div className="w-11 h-11 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-serif text-[#EAEAEA]">12+ Years</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#666666]">Community Healthcare</div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
                <span>Our Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-tight">
                Authentic Medicines &amp; Unyielding Pharmaceutical Care
              </h2>

              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed font-light">
                Positioned on Old GT Road in Aurangabad, Bihar, Galaxy Medical has remained a trusted bastion of clinical reliability since 2012. We inspect every pharmaceutical batch and maintain direct chains of custody with certified distributors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-[#999999]">
                    Strict Cold Chain for Insulins &amp; Biologics
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-[#999999]">
                    Certified Medical Device Dispensary
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-[#999999]">
                    Instant WhatsApp Rx Verification
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-[#999999]">
                    Fair Transparent MRP Billing
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F0F0F] border border-[#222222] text-[#EAEAEA] hover:border-[#C5A47E] text-[11px] uppercase tracking-[0.2em] font-medium transition"
                >
                  <span>Explore Galaxy Medical</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A47E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-20 sm:py-24 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
              <span>Healthcare Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-wide">
              Dispensary &amp; Clinical Offerings
            </h2>
            <p className="text-xs text-[#666666] mt-2">
              Comprehensive dispensing services, surgical rehabilitation equipment, and doorstep patient assistance in Aurangabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#2A2A2A] p-6 transition flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                    {service.iconName === "Pill" && <Pill className="w-5 h-5" />}
                    {service.iconName === "Stethoscope" && <Stethoscope className="w-5 h-5" />}
                    {service.iconName === "Truck" && <Truck className="w-5 h-5" />}
                    {service.iconName === "ShieldCheck" && <ShieldCheck className="w-5 h-5" />}
                    {service.iconName === "HeartHandshake" && <HeartPulse className="w-5 h-5" />}
                    {service.iconName === "Sparkles" && <Sparkles className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-serif text-[#EAEAEA]">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#777777] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#141414] flex items-center justify-between">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#C5A47E] hover:text-[#DBC1A1] inline-flex items-center gap-1"
                  >
                    <span>Order on WhatsApp</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  <Link
                    to="/services"
                    className="text-[10px] uppercase tracking-wider text-[#555555] hover:text-[#999999]"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] hover:bg-[#141414] text-[11px] uppercase tracking-[0.2em] font-medium transition"
            >
              <span>View All Services &amp; Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MEDICINE STOCK CHECKER */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            compact={true}
            onSelectMedicine={(medName) => onOpenOrderModal(medName)}
          />

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A47E] hover:text-[#DBC1A1] transition"
            >
              <span>Full Interactive Inventory Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
              <span>Standard of Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-wide">
              Why Aurangabad Relies on Galaxy Medical
            </h2>
            <p className="text-xs text-[#666666] mt-2">
              Pharmaceutical dispensing demands unwavering precision and strict cold-chain compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] space-y-3">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-serif uppercase tracking-wider text-[#EAEAEA]">
                100% Genuine Guarantee
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Direct procurement from authorized pharmaceutical manufacturers with verifiable batch tracking.
              </p>
            </div>

            <div className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] space-y-3">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-serif uppercase tracking-wider text-[#EAEAEA]">
                Qualified Pharmacists
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Registered clinical pharmacists verify prescriptions, screen contraindications, and provide dosage instructions.
              </p>
            </div>

            <div className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] space-y-3">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-serif uppercase tracking-wider text-[#EAEAEA]">
                Strict Cold Chain
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Dedicated temperature-controlled storage ensures vaccines, insulins, and biological eye drops retain efficacy.
              </p>
            </div>

            <div className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] space-y-3">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-serif uppercase tracking-wider text-[#EAEAEA]">
                Prompt Local Delivery
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Direct WhatsApp ordering with rapid doorstep delivery across Aurangabad city via Cash on Delivery or UPI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
                <span>Verified Community Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-wide">
                Patient &amp; Physician Endorsements
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#666666]">
              <div className="flex text-[#C5A47E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A47E] text-[#C5A47E]" />
                ))}
              </div>
              <span className="font-medium text-[#E0E0E0]">5.0 Rating</span>
              <span>&bull; Local Verified Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex text-[#C5A47E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A47E] text-[#C5A47E]" />
                    ))}
                  </div>

                  <p className="text-xs text-[#999999] leading-relaxed font-serif italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#141414] flex items-center justify-between text-[11px]">
                  <div>
                    <h4 className="font-medium text-[#EAEAEA]">
                      {rev.author}
                    </h4>
                    <span className="text-[#555555] text-[10px]">{rev.location}</span>
                  </div>
                  <span className="text-[#C5A47E] text-[10px] uppercase tracking-wider">Verified Patron</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#888888] hover:text-[#C5A47E] transition"
            >
              <span>Review Galaxy Medical on Google Profile</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A47E]" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. HEALTH TIPS PREVIEW */}
      <section className="py-20 sm:py-24 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A47E]" />
              <span>Pharmacist Advice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-wide">
              Medication Safety &amp; Health Insights
            </h2>
            <p className="text-xs text-[#666666] mt-2">
              Practical counsel from our duty pharmacists for everyday wellness and safe dosage discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS_DATA.map((tip) => (
              <div
                key={tip.id}
                className="bg-[#0F0F0F] border border-[#1E1E1E] p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#666666]">
                    <span className="text-[#C5A47E]">
                      {tip.category}
                    </span>
                    <span>{tip.readTime}</span>
                  </div>

                  <h3 className="text-base font-serif text-[#EAEAEA] leading-snug">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-[#777777] leading-relaxed">
                    {tip.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#141414]">
                  <ul className="space-y-1 text-[11px] text-[#666666]">
                    {tip.tips.slice(0, 2).map((t, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C5A47E]">&bull;</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions &amp; Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#666666] mt-1.5">
              Key inquiries regarding prescription compliance, storage handling, and WhatsApp ordering.
            </p>
          </div>

          <div className="space-y-3.5">
            {previewFAQs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] space-y-2"
              >
                <h3 className="text-sm font-serif text-[#EAEAEA]">
                  {faq.question}
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C5A47E] hover:text-[#DBC1A1] transition"
            >
              <span>Consult our pharmacist directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION SECTION */}
      <section className="py-16 bg-[#070707] border-b border-[#1A1A1A] text-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
            <span>Rapid Prescription Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight max-w-3xl mx-auto">
            Require Urgent Medicines in Aurangabad?
          </h2>

          <p className="text-xs sm:text-sm text-[#777777] max-w-2xl mx-auto leading-relaxed">
            Transmit an image of your physician's prescription directly through WhatsApp. Our duty pharmacist will verify batch availability and dispatch promptly.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-8 py-3.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp Now</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-7 py-3.5 bg-[#0F0F0F] hover:bg-[#141414] border border-[#222222] text-[#EAEAEA] text-[11px] uppercase tracking-[0.15em] active:scale-95 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A47E]" />
              <span>Call: {BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER REFILL REMINDERS */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-base font-serif text-[#EAEAEA]">
            Monthly Prescription Refill Reminders
          </h3>
          <p className="text-xs text-[#666666]">
            Ensure chronic medication schedules remain uninterrupted. Receive gentle refill notifications and seasonal healthcare advisories.
          </p>

          {newsletterSubmitted ? (
            <div className="p-3 bg-[#0F0F0F] border border-[#426a44] text-[#86c48a] text-xs">
              ✓ Registered. Galaxy Medical will assist with scheduled refill updates.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter email or mobile number..."
                className="flex-1 px-4 py-2.5 bg-[#0F0F0F] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] text-xs focus:border-[#C5A47E] focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.2em] transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Register</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
