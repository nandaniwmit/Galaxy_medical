import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";
import { SEOHead } from "../components/SEOHead";

interface OutletContextType {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Contact: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Medicine Inquiry",
    message: "",
    hasPrescription: "No"
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    const msg = `Inquiry from Website:
--------------------------------
Name: ${formState.name}
Phone: ${formState.phone}
Email: ${formState.email || "N/A"}
Subject: ${formState.subject}
Prescription Attached: ${formState.hasPrescription}
Message: ${formState.message || "Please check availability regarding my medicine inquiry."}
--------------------------------`;

    setFormSubmitted(true);
    setTimeout(() => {
      const waUrl = `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
      setFormSubmitted(false);
      setFormState({
        name: "",
        phone: "",
        email: "",
        subject: "General Medicine Inquiry",
        message: "",
        hasPrescription: "No"
      });
    }, 800);
  };

  return (
    <>
      <SEOHead
        title="Contact Us &amp; Store Directions | Galaxy Medical Aurangabad"
        description="Contact Galaxy Medical on Old GT Road, Aurangabad, Bihar. Call +91 90975 03446 or WhatsApp for medicine orders, store hours &amp; directions."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#0A0A0A] text-[#EAEAEA] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A47E_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
            <span>Direct Pharmacist Desk &bull; Aurangabad, Bihar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-tight">
            Contact Galaxy Medical Pharmacy
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#888888] max-w-2xl mx-auto leading-relaxed font-light">
            Whether you need to confirm batch availability, arrange home delivery, or navigate to our Old GT Road facility, our staff is at your disposal.
          </p>

          {/* Direct CTA Buttons */}
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenOrderModal()}
              className="flex items-center gap-2 px-6 py-3 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-[10px] uppercase tracking-[0.2em] font-bold shadow-md transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {BUSINESS_CONFIG.displayPhone}</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-[#0F0F0F] hover:bg-[#141414] border border-[#222222] text-[#EAEAEA] text-[10px] uppercase tracking-[0.15em] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A47E]" />
              <span>Call Now: {BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <a
              href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-[#777777] hover:text-[#C5A47E] text-[10px] uppercase tracking-wider transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Business Info & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
                  Dispensary Coordinates
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#EAEAEA] mt-2">
                  Visit or Connect with Our Registered Pharmacist
                </h2>
                <p className="text-xs text-[#777777] mt-2 leading-relaxed">
                  Situated in the center of Aurangabad on Old GT Road. Dedicated parking available for private vehicles and emergency ambulances.
                </p>
              </div>

              {/* Cards list */}
              <div className="space-y-3.5">
                {/* Address */}
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-serif uppercase tracking-wider text-[#EAEAEA]">Store Address</h3>
                    <p className="text-xs text-[#888888] mt-1">
                      {BUSINESS_CONFIG.address.full}
                    </p>
                    <p className="text-[10px] text-[#555555] mt-0.5">
                      Landmark: {BUSINESS_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-serif uppercase tracking-wider text-[#EAEAEA]">Phone &amp; WhatsApp</h3>
                    <p className="text-xs text-[#888888] mt-1">
                      <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-[#C5A47E] font-medium">
                        {BUSINESS_CONFIG.displayPhone}
                      </a>
                    </p>
                    <p className="text-[10px] text-[#C5A47E] mt-0.5">
                      Direct WhatsApp order line monitored daily
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h3 className="text-xs font-serif uppercase tracking-wider text-[#EAEAEA]">Working Hours</h3>
                    <p className="text-[#888888]">
                      <strong className="text-[#EAEAEA]">Monday – Saturday:</strong> {BUSINESS_CONFIG.workingHours.weekdays}
                    </p>
                    <p className="text-[#888888]">
                      <strong className="text-[#EAEAEA]">Sunday:</strong> {BUSINESS_CONFIG.workingHours.sunday}
                    </p>
                    <p className="text-[#C5A47E] text-[11px] pt-0.5">
                      &bull; {BUSINESS_CONFIG.workingHours.emergency}
                    </p>
                  </div>
                </div>

                {/* Licensing */}
                <div className="p-5 bg-[#0F0F0F] border border-[#1E1E1E] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#777777] space-y-0.5">
                    <h3 className="text-xs font-serif uppercase tracking-wider text-[#EAEAEA]">Licensing &amp; Compliance</h3>
                    <p>Drug License: <strong className="text-[#C5A47E] font-mono">{BUSINESS_CONFIG.drugLicenseNo}</strong></p>
                    <p>GSTIN: <strong className="text-[#C5A47E] font-mono">{BUSINESS_CONFIG.gstNo}</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0F0F0F] border border-[#1E1E1E] p-6 sm:p-8">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A47E]">
                    Dispatch Inquiry
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#EAEAEA] mt-1">
                    Ask About Medicine Stock or Home Delivery
                  </h3>
                  <p className="text-xs text-[#666666] mt-1">
                    Submit your requirements below. Your inquiry is directly transmitted to our duty pharmacist.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 text-center space-y-3 bg-[#0A0A0A] border border-[#426a44]">
                    <CheckCircle2 className="w-10 h-10 text-[#426a44] mx-auto" />
                    <h4 className="text-base font-serif text-[#EAEAEA]">
                      Connecting with WhatsApp...
                    </h4>
                    <p className="text-xs text-[#777777]">
                      Opening your secure chat with Galaxy Medical dispensing desk.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] text-xs focus:border-[#C5A47E] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                          WhatsApp / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] text-xs focus:border-[#C5A47E] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] text-xs focus:border-[#C5A47E] focus:outline-none"
                        >
                          <option value="General Medicine Inquiry">Check Medicine Availability</option>
                          <option value="Prescription Delivery">Home Delivery in Aurangabad</option>
                          <option value="Medical Equipment Price">BP Monitor / Nebulizer / Equipment</option>
                          <option value="Chronic Monthly Refill">Monthly Chronic Refill Plan</option>
                          <option value="Other">Other Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                          Prescription Available?
                        </label>
                        <select
                          value={formState.hasPrescription}
                          onChange={(e) => setFormState({ ...formState, hasPrescription: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] text-xs focus:border-[#C5A47E] focus:outline-none"
                        >
                          <option value="Yes">Yes, will transmit photo</option>
                          <option value="No">No (OTC product or device)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                        Formulation Details / Address
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Write names of medicines needed, quantity, or your delivery address..."
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] text-xs focus:border-[#C5A47E] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-[0.2em] transition active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry to WhatsApp Desk</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Google Map Section */}
          <div className="mt-16 pt-12 border-t border-[#1A1A1A]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-serif text-[#EAEAEA]">
                  Store Location on Old GT Road, Aurangabad
                </h3>
                <p className="text-xs text-[#666666]">
                  Convenient road frontage in Aurangabad, Bihar 824101
                </p>
              </div>

              <a
                href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] hover:bg-[#141414] text-[10px] uppercase tracking-[0.15em] transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate via Google Maps</span>
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 border border-[#222222] overflow-hidden">
              <iframe
                title="Galaxy Medical Aurangabad Location Map"
                src={BUSINESS_CONFIG.geo.mapsEmbedUrl}
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
