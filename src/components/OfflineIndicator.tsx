import React from "react";
import { WifiOff } from "lucide-react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <aside
      className="fixed bottom-20 left-4 z-50 flex items-center gap-2.5 bg-[#0F0F0F] border border-[#8a6b29] px-4 py-2.5 text-[11px] uppercase tracking-wider text-[#e0b769] shadow-2xl"
      role="status"
      aria-live="polite"
    >
      <WifiOff className="w-3.5 h-3.5 animate-pulse shrink-0 text-[#C5A47E]" />
      <span>Offline Mode &bull; Cached catalog active. WhatsApp dispatch resumes upon reconnect.</span>
    </aside>
  );
};
