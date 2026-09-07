import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  Clock,
  MapPin
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";
import { PWAInstallButton } from "./PWAInstallButton";
import { useDarkMode } from "../hooks/useDarkMode";

interface NavbarProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top Emergency & Status Ribbon */}
      <div className="bg-[#070707] border-b border-[#1A1A1A] text-[#888888] text-[10px] tracking-[0.2em] uppercase py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#426a44] shadow-[0_0_6px_rgba(66,106,68,0.7)]" />
              <span>Old GT Rd, Aurangabad, Bihar 824101</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#666666]">
              <Clock className="w-3 h-3 text-[#C5A47E]" />
              <span>Daily: 08:00 – 22:00</span>
            </span>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <span className="text-[#C5A47E] tracking-[0.2em]">
              24/7 WhatsApp Dispatch
            </span>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center gap-1 text-[#E0E0E0] hover:text-[#C5A47E] transition tracking-[0.1em]"
            >
              <Phone className="w-3 h-3 text-[#C5A47E]" />
              <span>{BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#0A0A0A]/95 border-b border-[#1A1A1A] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
              <div className="w-10 h-10 rounded-sm bg-[#0F0F0F] border border-[#222222] flex items-center justify-center text-[#C5A47E] shadow-sm group-hover:border-[#C5A47E]/40 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.08em] uppercase text-[#EAEAEA] leading-none">
                  Galaxy <span className="text-[#C5A47E] italic font-serif">Medical</span>
                </span>
                <span className="text-[9px] tracking-[0.35em] uppercase text-[#555555] mt-1.5 block">
                  Apothecary &amp; Healthcare
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-all pb-1 ${
                    isActive(link.path)
                      ? "text-[#C5A47E] border-b border-[#C5A47E] font-medium"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Mandatory PWA "📲 Add to Home" Button */}
              <PWAInstallButton variant="nav" />

              {/* WhatsApp Quick Order - Sophisticated Gold */}
              <button
                type="button"
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>

              {/* Dark / Light Theme Toggle */}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="w-9 h-9 flex items-center justify-center text-[#777777] hover:text-[#C5A47E] bg-[#0F0F0F] hover:bg-[#141414] transition border border-[#1A1A1A]"
              >
                {isDark ? <Sun className="w-4 h-4 text-[#C5A47E]" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center text-[#777777] bg-[#0F0F0F] border border-[#1A1A1A]"
              >
                {isDark ? <Sun className="w-4 h-4 text-[#C5A47E]" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center text-[#E0E0E0] bg-[#0F0F0F] border border-[#1A1A1A]"
                aria-label="Toggle main menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#1A1A1A] bg-[#0A0A0A] px-4 pt-4 pb-6 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 text-[10px] uppercase tracking-[0.2em] transition text-center border ${
                    isActive(link.path)
                      ? "bg-[#0F0F0F] border-[#C5A47E] text-[#C5A47E]"
                      : "bg-[#0F0F0F] border-[#1A1A1A] text-[#888888] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <PWAInstallButton variant="mobile" />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C5A47E] text-[#0A0A0A] text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp (Instant Dispatch)</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-[#1A1A1A] bg-[#0F0F0F] text-[#888888] hover:text-[#C5A47E] text-[10px] uppercase tracking-[0.15em] text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A47E]" />
              <span>Direct Pharmacist: {BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
