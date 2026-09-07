import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { WhatsAppOrderModal } from "../components/WhatsAppOrderModal";
import { OfflineIndicator } from "../components/OfflineIndicator";

export const MainLayout: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");

  const handleOpenOrderModal = (medicineName?: string) => {
    setSelectedMedicine(medicineName || "");
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0] transition-colors duration-200 selection:bg-[#C5A47E] selection:text-[#0A0A0A]">
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1">
        <Outlet context={{ onOpenOrderModal: handleOpenOrderModal }} />
      </main>

      <Footer />

      <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

      <WhatsAppOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        prefilledMedicine={selectedMedicine}
      />

      <OfflineIndicator />
    </div>
  );
};
