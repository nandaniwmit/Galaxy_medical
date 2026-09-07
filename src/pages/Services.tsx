import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Pill,
  Stethoscope,
  Truck,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Activity,
  CheckCircle2,
  MessageCircle,
  Phone
} from "lucide-react";
import { SERVICES_DATA } from "../data/siteData";
import { MedicineStockChecker } from "../components/MedicineStockChecker";
import { SEOHead } from "../components/SEOHead";
import { BUSINESS_CONFIG } from "../config/siteConfig";

interface OutletContextType {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");

  const serviceCategories = [
    "All",
    "Prescription Medicines",
    "Medical Equipment",
    "Home Care",
    "OTC Medicines",
    "Baby Care",
    "Supplements",
    "Health Devices",
    "Personal Care"
  ];

  const filteredServices = SERVICES_DATA.filter((serv) => {
    if (activeCategoryFilter === "All") return true;
    return serv.category === activeCategoryFilter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill":
        return <Pill className="w-5 h-5" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5" />;
      case "Truck":
        return <Truck className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "HeartHandshake":
        return <HeartPulse className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      default:
        return <Pill className="w-5 h-5" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Pharmacy Services &amp; Medicine Inventory"
        description="Explore healthcare products, prescription dispensing, surgical equipment, baby care &amp; live medicine stock checker at Galaxy Medical, Aurangabad Bihar."
        canonicalPath="/services"
      />

      {/* Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A0A0A] text-[#EAEAEA] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A47E_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
            <span>Clinical Pharmacy &amp; Surgical Distributor</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-tight">
            Comprehensive Pharmacy Services &amp; Supplies
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#888888] max-w-2xl mx-auto leading-relaxed font-light">
            From critical prescription medicines to hospital-grade home care devices, we provide authentic formulations backed by verified clinical standards.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3.5">
            <a
              href="#stock-checker"
              className="px-6 py-3 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.2em] transition"
            >
              Check Live Dispensary Stock ↓
            </a>
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3 bg-[#0F0F0F] hover:bg-[#141414] border border-[#222222] text-[#EAEAEA] text-[10px] font-medium uppercase tracking-[0.15em] transition flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A47E]" />
              <span>WhatsApp Prescription Order</span>
            </button>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE SECTION: MEDICINE STOCK CHECKER */}
      <section id="stock-checker" className="py-16 sm:py-20 bg-[#070707] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            onSelectMedicine={(medName) => onOpenOrderModal(medName)}
          />
        </div>
      </section>

      {/* CATEGORY-WISE SERVICES CATALOG */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
              Departmental Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EAEAEA] mt-2">
              Category-Wise Healthcare Divisions
            </h2>
            <p className="text-xs text-[#666666] mt-2">
              Browse our specialized clinical categories. Each department follows strict temperature and verification protocols.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] transition ${
                  activeCategoryFilter === cat
                    ? "bg-[#C5A47E] text-[#0A0A0A] font-bold"
                    : "bg-[#0F0F0F] border border-[#1E1E1E] text-[#777777] hover:text-[#EAEAEA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Detailed Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#2A2A2A] p-6 sm:p-8 flex flex-col justify-between transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#EAEAEA]">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#888888] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#666666] mb-2">
                      Key Standards:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#777777]">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A47E] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-[#141414] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-[0.15em] transition active:scale-95"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Inquire / WhatsApp Order</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="text-[10px] uppercase tracking-wider text-[#666666] hover:text-[#C5A47E] flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#C5A47E]" />
                    <span>Call Pharmacist</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK INQUIRY BANNER */}
      <section className="py-14 bg-[#070707] text-[#EAEAEA] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-serif text-[#EAEAEA]">
              Looking for a Specific Formulation or Surgical Device?
            </h3>
            <p className="text-xs text-[#777777] max-w-xl">
              We arrange special orders for specialized oncology, cardiology, or orthopedic supplies within 24 hours directly from authorized distributors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenOrderModal("Special Inquiry")}
              className="px-6 py-3 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-[0.2em] transition"
            >
              Order via WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-6 py-3 bg-[#0F0F0F] hover:bg-[#141414] border border-[#222222] text-[#EAEAEA] text-[10px] uppercase tracking-[0.15em] transition"
            >
              Call {BUSINESS_CONFIG.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
