import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Heart,
  ExternalLink,
  Mail,
  ChevronRight,
  Sparkles,
  X
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";

export default function Footer() {
  const [showWmitModal, setShowWmitModal] = useState(false);

  // STEP 11 — GLOBAL TRACKING (MANDATORY — PRESERVED EXACTLY AS SPECIFIED)
  useEffect(() => {
    const TRACKING_ENDPOINT = "https://crm.webmakerit.com/tracker/track.php";
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get("cid") || localStorage.getItem("wmit_active_cid");
    if (urlParams.get("cid")) {
      localStorage.setItem("wmit_active_cid", urlParams.get("cid")!);
    }
    if (!cid) return;
    let visitorId =
      localStorage.getItem("wmit_visitor_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("wmit_visitor_id", visitorId);
    let sessionId =
      sessionStorage.getItem("wmit_session_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("wmit_session_id", sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split("?")[0] : "Home";
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || "",
        device: window.innerWidth < 768 ? "Mobile" : "Desktop",
        browser: navigator.userAgent,
        action: "init"
      };
      fetch(TRACKING_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: "page_change"
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json"
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout | number;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ["mousemove", "keydown", "scroll", "touchstart"];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener("popstate", handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendExitPayload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", sendExitPayload);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);

  const handleWmitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowWmitModal(true);
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#888888] pt-16 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1A1A1A]">
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0F0F0F] border border-[#222222] flex items-center justify-center text-[#C5A47E] font-serif text-lg shadow-sm">
                +
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif tracking-[0.08em] uppercase text-[#EAEAEA] leading-none">
                  {BUSINESS_CONFIG.businessName}
                </span>
                <span className="text-[9px] tracking-[0.35em] uppercase text-[#555555] mt-1.5">
                  Aurangabad, Bihar
                </span>
              </div>
            </div>

            <p className="text-xs text-[#777777] leading-relaxed font-sans">
              {BUSINESS_CONFIG.tagline}. Dedicated to serving Aurangabad with 100% genuine prescription medicines, temperature-controlled cold chain, and doorstep delivery.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-[10px] tracking-wider uppercase">
              <span className="px-2.5 py-1 bg-[#0F0F0F] text-[#C5A47E] border border-[#1A1A1A]">
                DL: {BUSINESS_CONFIG.drugLicenseNo}
              </span>
              <span className="px-2.5 py-1 bg-[#0F0F0F] text-[#555555] border border-[#1A1A1A]">
                Est. {BUSINESS_CONFIG.establishedYear}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A47E] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> About Galaxy Medical
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> Services &amp; Stock
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> Contact &amp; Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-[#888888] hover:text-[#E0E0E0] transition tracking-wider uppercase text-[11px] flex items-center gap-2">
                  <span className="text-[#C5A47E] text-[10px]">›</span> Portal Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Store Hours */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A47E] mb-5">
              Store &amp; Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A47E] shrink-0 mt-0.5" />
                <span className="text-[#999999]">{BUSINESS_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A47E] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-[#999999] hover:text-[#E0E0E0] transition">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A47E] shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A47E] hover:text-[#DBC1A1] transition"
                >
                  WhatsApp: +91 {BUSINESS_CONFIG.whatsappNumber}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A47E] shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#666666] space-y-1">
                  <p><strong className="text-[#999999]">Mon – Sat:</strong> {BUSINESS_CONFIG.workingHours.weekdays}</p>
                  <p><strong className="text-[#999999]">Sunday:</strong> {BUSINESS_CONFIG.workingHours.sunday}</p>
                  <p className="text-[#C5A47E]">24/7 WhatsApp emergency support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A47E] mb-5">
              Location
            </h4>
            <div className="overflow-hidden border border-[#1A1A1A] h-36 bg-[#0F0F0F] relative group">
              <iframe
                title="Galaxy Medical Map"
                src={BUSINESS_CONFIG.geo.mapsEmbedUrl}
                className="w-full h-full border-0 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] tracking-wider uppercase">
              <a
                href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A47E] hover:text-[#DBC1A1] font-medium inline-flex items-center gap-1"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#555555]">Old GT Road</span>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer */}
        <div className="py-6 border-b border-[#1A1A1A] text-[11px] text-[#555555] leading-relaxed space-y-2">
          <p>
            <strong className="text-[#777777]">Compliance:</strong> Dispensed in accordance with the Drugs and Cosmetics Act, 1940. Prescription medicines (Schedule H/H1) require an authentic prescription. Information provided does not substitute physician diagnosis.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 uppercase tracking-wider text-[9px] text-[#444444]">
            <span className="hover:text-[#888888] cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#888888] cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-[#888888] cursor-pointer">Return &amp; Refund</span>
            <span>&bull;</span>
            <span className="hover:text-[#888888] cursor-pointer">Prescription Policy</span>
          </div>
        </div>

        {/* Copyright & WMIT Integrations — EXACT PRESERVATION MANDATE */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-[#555555]">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#426a44] shadow-[0_0_8px_rgba(66,106,68,0.5)]" />
            <span>&copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.</span>
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVED EXACTLY */}
          <div className="text-center font-medium">
            <a
              href="#"
              className="wmit-popup-trigger text-[#C5A47E] hover:text-[#DBC1A1] transition underline underline-offset-4 tracking-[0.25em]"
              onClick={handleWmitClick}
            >
              Developed by WMIT
            </a>
          </div>

          <div className="text-[#444444]">
            Aurangabad &bull; Bihar 824101
          </div>
        </div>
      </div>

      {/* WMIT Popup Trigger Modal */}
      {showWmitModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-[#0F0F0F] border border-[#222222] p-6 shadow-2xl text-[#E0E0E0] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A47E]" />
                <h4 className="font-serif text-sm tracking-wide text-[#EAEAEA]">
                  WebMaker IT Solutions (WMIT)
                </h4>
              </div>
              <button
                onClick={() => setShowWmitModal(false)}
                className="p-1 text-[#666666] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2.5 text-xs text-[#888888]">
              <p>
                Healthcare Progressive Web App engineered for <strong>{BUSINESS_CONFIG.businessName}</strong> by <strong>WebMaker IT Solutions</strong>.
              </p>
              <p>
                Integrated with real-time broadcast tracking, WhatsApp prescription routing, PWA standalone installation, and live stock discovery.
              </p>
              <div className="p-3 bg-[#0A0A0A] border border-[#1A1A1A] text-[10px] uppercase tracking-wider text-[#666666]">
                <span>Active CID: </span>
                <code className="text-[#C5A47E]">
                  {typeof window !== "undefined" ? localStorage.getItem("wmit_active_cid") || "WMIT-GALAXY-MED" : "WMIT-GALAXY-MED"}
                </code>
              </div>
            </div>
            <button
              onClick={() => setShowWmitModal(false)}
              className="w-full py-2.5 bg-[#C5A47E] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#DBC1A1] transition"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
