import React from "react";
import { Share, PlusSquare, X } from "lucide-react";

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
    >
      <div className="w-full max-w-md bg-[#0F0F0F] border border-[#222222] p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-center text-[#C5A47E]">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 id="ios-modal-title" className="text-base font-serif tracking-wide text-[#EAEAEA]">
                Add to Home Screen
              </h3>
              <p className="text-[11px] text-[#666666]">Install as an app on your iPhone or iPad</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#666666] hover:text-[#E0E0E0] transition"
            aria-label="Close installation instructions"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-start gap-3.5 p-3.5 bg-[#0A0A0A] border border-[#1A1A1A]">
            <div className="w-6 h-6 bg-[#C5A47E] text-[#0A0A0A] flex items-center justify-center text-xs font-bold shrink-0">
              1
            </div>
            <div className="text-xs text-[#999999] leading-relaxed">
              Tap the <span className="text-[#C5A47E] inline-flex items-center gap-1 font-medium"><Share className="w-3.5 h-3.5 inline" /> Share</span> icon at the bottom of the Safari toolbar.
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3.5 bg-[#0A0A0A] border border-[#1A1A1A]">
            <div className="w-6 h-6 bg-[#C5A47E] text-[#0A0A0A] flex items-center justify-center text-xs font-bold shrink-0">
              2
            </div>
            <div className="text-xs text-[#999999] leading-relaxed">
              Scroll down the menu and tap <span className="text-[#EAEAEA] font-medium">"Add to Home Screen"</span>.
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3.5 bg-[#0A0A0A] border border-[#1A1A1A]">
            <div className="w-6 h-6 bg-[#C5A47E] text-[#0A0A0A] flex items-center justify-center text-xs font-bold shrink-0">
              3
            </div>
            <div className="text-xs text-[#999999] leading-relaxed">
              Tap <span className="text-[#C5A47E] font-medium">"Add"</span> in the upper-right corner. Galaxy Medical will launch instantly in full screen!
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#C5A47E] text-[#0A0A0A] py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#DBC1A1] active:scale-[0.99] transition shadow-md"
        >
          Understood
        </button>
      </div>
    </div>
  );
};
