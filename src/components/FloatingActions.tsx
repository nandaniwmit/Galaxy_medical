import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Buttons: Right Side */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 bg-[#0F0F0F] text-[#888888] hover:text-[#C5A47E] border border-[#1A1A1A] hover:border-[#222222] shadow-lg hover:scale-105 active:scale-95 transition flex items-center justify-center"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          aria-label="Call Galaxy Medical"
          className="w-12 h-12 bg-[#0F0F0F] hover:bg-[#141414] text-[#C5A47E] border border-[#222222] shadow-xl hover:scale-105 active:scale-95 transition flex items-center justify-center group"
          title="Call Pharmacist"
        >
          <Phone className="w-5 h-5" />
          <span className="sr-only">Call Store</span>
        </a>

        {/* Floating WhatsApp Button - Sophisticated Gold with Status Indicator */}
        <button
          onClick={onOpenOrderModal}
          aria-label="Order via WhatsApp"
          className="relative w-13 h-13 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] shadow-2xl hover:scale-105 active:scale-95 transition flex items-center justify-center group border border-[#C5A47E]"
          title="WhatsApp Order"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#426a44] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#426a44] border-2 border-[#0A0A0A]"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="sr-only">WhatsApp Medicine Order</span>
        </button>
      </div>

      {/* Sticky Bottom CTA Bar on Mobile Screens */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#1A1A1A] p-2.5 flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-[#1A1A1A] bg-[#0F0F0F] text-[#888888] text-[10px] uppercase tracking-[0.15em] font-medium active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A47E]" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-2 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#C5A47E] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.2em] shadow-md active:scale-95 transition"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
