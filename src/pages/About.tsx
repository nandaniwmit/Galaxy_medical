import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  MessageCircle,
  Target,
  Eye,
  Users
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";
import { SEOHead } from "../components/SEOHead";

interface OutletContextType {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const About: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();

  const timelineEvents = [
    {
      year: "2012",
      title: "Establishment on Old GT Road",
      desc: "Founded with a mission to eliminate counterfeit medicines and bring genuine pharmaceutical stock to Aurangabad, Bihar."
    },
    {
      year: "2015",
      title: "Dedicated Cold Chain Infrastructure",
      desc: "Installed high-grade medical refrigeration systems with backup power to preserve vaccines, insulins, and temperature-sensitive biological drugs."
    },
    {
      year: "2018",
      title: "Surgical & Medical Devices Expansion",
      desc: "Secured authorized distributorships for Omron, Accu-Chek, and Dr. Morepen, supplying rehabilitation and monitoring equipment."
    },
    {
      year: "2020",
      title: "Pandemic Emergency Support & WhatsApp Delivery",
      desc: "Operated round-the-clock during critical health surges, providing doorstep oxygen oximeters, antiviral medications, and essential supplies across Aurangabad."
    },
    {
      year: "2024 - Present",
      title: "Modern Digital Inventory & PWA Experience",
      desc: "Serving thousands of local families with computerized batch tracking, digital stock checks, and rapid WhatsApp delivery."
    }
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Authenticity",
      desc: "Every single formulation is procured strictly from licensed pharma depots and authorized C&F agents. Zero compromise on drug authenticity."
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Ethics",
      desc: "We treat our patrons as neighbors and families. We offer transparent pricing, explain dosage regimens, and never push unnecessary products."
    },
    {
      icon: Clock,
      title: "Round-the-Clock Reliability",
      desc: "Illness doesn't keep business hours. Our WhatsApp emergency line remains active to assist families with critical prescriptions."
    },
    {
      icon: Users,
      title: "Community Health Guidance",
      desc: "Complimentary blood pressure monitoring, blood glucose tracking, and patient education on chronic illness management."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Galaxy Medical - Pharmacy Story & Standards"
        description="Learn about Galaxy Medical on Old GT Road, Aurangabad, Bihar. Established in 2012 with 100% genuine medicines, cold chain storage, and patient care."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#0A0A0A] text-[#EAEAEA] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A47E_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
            <span>About Galaxy Medical &bull; Established 2012</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-tight">
            A Decade of Healthcare Trust in Aurangabad, Bihar
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#888888] max-w-2xl mx-auto leading-relaxed font-light">
            Rooted on Old GT Road, Galaxy Medical was founded on a simple pledge: providing 100% genuine medicines and empathetic pharmaceutical care to every family.
          </p>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="py-20 sm:py-24 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
                Our Origin &amp; Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] tracking-tight">
                From a Humble Dispensary to Aurangabad's Reliable Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                When Galaxy Medical opened its doors in 2012 on Old GT Road, Aurangabad was rapidly developing, yet local families often struggled to find critical cardiology, oncology, and pediatric medicines without having to travel to Gaya or Patna.
              </p>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                We set out to build a comprehensive medical hub that would bridge this gap. By partnering directly with reputable manufacturers like Cipla, Sun Pharma, Abbott, Alkem, Torrent, and GlaxoSmithKline, we ensured that every patient in Aurangabad could count on fresh, authentic, properly stored medications right here in town.
              </p>
              <div className="p-4 bg-[#0F0F0F] border border-[#222222] text-xs text-[#888888] space-y-1">
                <p className="font-serif text-[#C5A47E] tracking-wider text-[11px] uppercase">Drug License: {BUSINESS_CONFIG.drugLicenseNo}</p>
                <p className="text-[11px] text-[#666666]">Fully compliant with the Drugs and Cosmetics Act, 1940 and Food Safety and Standards Authority of India (FSSAI).</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80"
                  alt="Medicine Shelves Galaxy Medical"
                  className="h-52 w-full object-cover border border-[#222222] grayscale opacity-80 hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] text-center space-y-1">
                  <div className="text-2xl font-serif text-[#C5A47E]">3,000+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#666666]">Formulations Stocked</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-5 bg-[#0F0F0F] border border-[#222222] text-center space-y-1">
                  <div className="text-2xl font-serif text-[#EAEAEA]">15,000+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C5A47E]">Prescriptions Fulfilled</div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                  alt="Medical Equipment Display"
                  className="h-52 w-full object-cover border border-[#222222] grayscale opacity-80 hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="p-8 bg-[#0F0F0F] border border-[#1E1E1E] space-y-4">
              <div className="w-11 h-11 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#EAEAEA]">
                Our Mission
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                To guarantee absolute access to genuine, high-quality, and affordable medicines for every citizen in Aurangabad. We strive to combine trusted clinical dispensing with modern convenience like WhatsApp prescription delivery, ensuring no patient misses a vital dose.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-[#0F0F0F] border border-[#1E1E1E] space-y-4">
              <div className="w-11 h-11 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#EAEAEA]">
                Our Vision
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                To be recognized as the most compassionate, reliable, and technologically accessible community pharmacy in South Bihar, setting gold standards in drug safety, cold-chain preservation, and customer well-being.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#EAEAEA] mt-2">
              Core Values That Drive Galaxy Medical
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#0F0F0F] border border-[#1E1E1E] space-y-3"
                >
                  <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif uppercase tracking-wider text-[#EAEAEA]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner / Chief Pharmacist Message */}
      <section className="py-20 sm:py-24 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 bg-[#0F0F0F] border border-[#222222] border-l-2 border-l-[#C5A47E] space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0A0A0A] border border-[#222222] text-[#C5A47E] flex items-center justify-center text-sm font-serif font-bold">
                GM
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif text-[#EAEAEA]">
                  Message from Store Leadership &amp; Registered Pharmacists
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-[#C5A47E]">
                  Galaxy Medical &bull; Old GT Road, Aurangabad (Bihar)
                </p>
              </div>
            </div>

            <blockquote className="text-xs sm:text-sm text-[#999999] leading-relaxed font-serif italic border-l border-[#222222] pl-4">
              "In the profession of pharmacy, a mistake is not a minor glitch; it impacts a human life. That is why at Galaxy Medical, our rule is simple: we will never compromise on quality for profit. Every batch code is verified, expiry is strictly inspected, and temperature-sensitive insulins never sit out in the summer heat. Thank you, Aurangabad, for trusting us with your family's health for over 12 years."
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[10px] uppercase tracking-wider text-[#555555]">
              <span>Licensed Under Bihar State Pharmacy Council Regulations</span>
              <span className="text-[#C5A47E]">Serving Aurangabad with Integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
              Our Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#EAEAEA] mt-2">
              Galaxy Medical Chronology
            </h2>
          </div>

          <div className="relative border-l border-[#222222] ml-4 sm:ml-8 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#C5A47E] shadow-[0_0_8px_rgba(197,164,126,0.6)]" />
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A47E]">
                    {evt.year}
                  </span>
                  <h4 className="text-sm font-serif text-[#EAEAEA]">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Our Pharmacist on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
