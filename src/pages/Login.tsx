import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!identifier.trim()) {
      setErrorMsg("Please enter your registered Email or Mobile Number.");
      return;
    }
    if (!password) {
      setErrorMsg("Please enter your account password.");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMsg(
        `Authentication successful. Welcome to Galaxy Medical Patient & Pharmacist Portal (${identifier}).`
      );
    }, 1000);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    setForgotSuccess(true);
    setTimeout(() => {
      setForgotSuccess(false);
      setShowForgotPasswordModal(false);
      setForgotEmail("");
    }, 2500);
  };

  return (
    <>
      <SEOHead
        title="Account &amp; Pharmacist Login | Galaxy Medical"
        description="Secure patient and pharmacist login portal for Galaxy Medical, Aurangabad. Access order history, prescription refills &amp; stock management."
        canonicalPath="/login"
      />

      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="w-full max-w-md space-y-8 bg-[#0F0F0F] border border-[#1E1E1E] p-8 sm:p-10 shadow-2xl">
          {/* Branding Header */}
          <div className="text-center space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-11 h-11 bg-[#0A0A0A] border border-[#C5A47E] flex items-center justify-center text-[#C5A47E] group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-lg font-serif text-[#EAEAEA] block leading-tight tracking-wider">
                  GALAXY <span className="text-[#C5A47E]">MEDICAL</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-light text-[#666666]">
                  Aurangabad, Bihar
                </span>
              </div>
            </Link>

            <h2 className="text-2xl font-serif text-[#EAEAEA] pt-2">
              Patron &amp; Pharmacist Portal
            </h2>
            <p className="text-xs text-[#666666] max-w-xs mx-auto">
              Sign in to manage prescription refills, review dispensations, or access store stock administration.
            </p>
          </div>

          {/* Alert Messages */}
          {errorMsg && (
            <div className="p-3.5 bg-[#0A0A0A] border border-[#662222] text-xs text-[#e07777] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#e07777]" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 bg-[#0A0A0A] border border-[#426a44] text-xs text-[#86c48a] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#426a44]" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Email / Mobile */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#888888] mb-1">
                Email Address or 10-Digit Mobile Number
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. 9097503446 or patron@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] focus:border-[#C5A47E] focus:outline-none transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[10px] uppercase tracking-wider text-[#888888]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPasswordModal(true)}
                  className="text-[10px] uppercase tracking-wider text-[#C5A47E] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#555555] absolute left-3.5 top-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your security password"
                  className="w-full pl-10 pr-10 py-2.5 text-xs bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] focus:border-[#C5A47E] focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#555555] hover:text-[#888888]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#777777]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 accent-[#C5A47E] bg-[#0A0A0A] border-[#222222]"
                />
                <span className="text-[11px]">Remember on this terminal</span>
              </label>

              <span className="text-[10px] uppercase tracking-wider text-[#555555]">256-bit SSL</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-[0.2em] transition disabled:opacity-60 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Demo Helper Box */}
          <div className="p-3.5 bg-[#0A0A0A] border border-[#1A1A1A] text-[11px] text-[#666666] space-y-1">
            <p className="font-semibold text-[#888888] uppercase tracking-wider text-[10px]">
              Demo Portal Access:
            </p>
            <p>You can authenticate with any mobile number (e.g. <code>9097503446</code>) and a 6+ character password.</p>
          </div>

          <div className="pt-2 text-center text-xs">
            <Link to="/" className="text-[10px] uppercase tracking-wider text-[#C5A47E] hover:underline">
              ← Return to Galaxy Medical Dispensary
            </Link>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-[#0F0F0F] border border-[#222222] p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-serif text-[#EAEAEA]">
              Reset Terminal Password
            </h3>
            <p className="text-xs text-[#777777]">
              Enter your registered mobile or email to receive an instant OTP via WhatsApp or SMS.
            </p>

            {forgotSuccess ? (
              <div className="p-3 bg-[#0A0A0A] border border-[#426a44] text-[#86c48a] text-xs">
                ✓ OTP reset link transmitted to your device.
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="Mobile number or Email"
                  className="w-full px-3.5 py-2 text-xs bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] focus:outline-none focus:border-[#C5A47E]"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-[#C5A47E] text-[#0A0A0A] font-bold text-[10px] uppercase tracking-wider hover:bg-[#DBC1A1] transition"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(false)}
                    className="px-3 py-2 border border-[#222222] text-[#777777] text-xs hover:text-white transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
