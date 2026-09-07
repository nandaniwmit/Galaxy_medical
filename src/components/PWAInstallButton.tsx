import React, { useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { IOSInstallGuide } from "./IOSInstallGuide";

interface PWAInstallButtonProps {
  className?: string;
  variant?: "nav" | "mobile" | "pill";
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = "",
  variant = "nav"
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  // If already running as an installed PWA in standalone mode, hide
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledNotice(true);
        setTimeout(() => setInstalledNotice(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      setShowIOSGuide(true);
    }
  };

  if (installedNotice) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F0F0F] border border-[#426a44] text-[#C5A47E] text-[10px] uppercase tracking-[0.15em] font-medium">
        <span>✓ App Installed</span>
      </div>
    );
  }

  const baseStyle = "inline-flex items-center justify-center gap-2 font-medium transition-all focus:outline-none";

  let variantStyle = "";
  if (variant === "nav") {
    variantStyle = "px-3.5 py-2.5 bg-[#0F0F0F] hover:bg-[#141414] text-[#E0E0E0] border border-[#222222] hover:border-[#C5A47E]/40 text-[11px] uppercase tracking-[0.15em] active:scale-95";
  } else if (variant === "mobile") {
    variantStyle = "w-full py-3 px-4 bg-[#0F0F0F] text-[#E0E0E0] border border-[#222222] text-[10px] uppercase tracking-[0.2em] text-center";
  } else {
    variantStyle = "px-4 py-2 border border-[#C5A47E]/40 text-[#C5A47E] bg-[#0F0F0F] hover:bg-[#141414] text-[11px] uppercase tracking-[0.15em]";
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={`${baseStyle} ${variantStyle} ${className}`}
        aria-label="Add Galaxy Medical App to Home Screen"
        title="Add to Home Screen"
      >
        <span className="text-xs">📲</span>
        <span>Add to Home</span>
      </button>

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
