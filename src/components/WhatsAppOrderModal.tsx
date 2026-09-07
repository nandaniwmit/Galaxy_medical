import React, { useState } from "react";
import { X, MessageCircle, Phone, FileText, CheckCircle2, Send, Clock, User, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/siteConfig";
import { WhatsAppOrderFormData } from "../types";

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ""
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: "",
    mobileNumber: "",
    email: "",
    address: "",
    medicineName: prefilledMedicine || "",
    quantity: "1 unit / strip",
    hasPrescription: "Yes",
    preferredTime: "Immediate / As soon as possible",
    notes: ""
  });

  const [prescriptionFileName, setPrescriptionFileName] = useState<string>("");
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Sync prefilled medicine if changed
  React.useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
      setFormData((prev) => ({ ...prev, hasPrescription: "Yes" }));
    }
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.mobileNumber.trim() || !formData.medicineName.trim()) {
      alert("Please enter your name, mobile number, and the medicine name.");
      return;
    }

    const prescriptionNote = prescriptionFileName
      ? `Yes (Prescription photo ready: ${prescriptionFileName})`
      : formData.hasPrescription;

    const message = `Hello ${BUSINESS_CONFIG.businessName} Medicine Order:
----------------------------------------
*Customer Name:* ${formData.customerName.trim()}
*Phone:* ${formData.mobileNumber.trim()}
*Medicine Required:* ${formData.medicineName.trim()}
*Quantity:* ${formData.quantity.trim()}
*Delivery Address:* ${formData.address.trim() || "Aurangabad local delivery"}
*Prescription Available:* ${prescriptionNote}
*Preferred Time:* ${formData.preferredTime}
*Notes / Symptoms:* ${formData.notes.trim() || "None"}
----------------------------------------
(Sent via Galaxy Medical Web Portal)`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMsg}`;

    setSubmittedSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmittedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#0F0F0F] border border-[#222222] shadow-2xl my-8 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#070707] border-b border-[#1A1A1A] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0F0F0F] border border-[#222222] flex items-center justify-center text-[#C5A47E]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 id="order-modal-title" className="text-base font-serif tracking-wide text-[#EAEAEA]">
                WhatsApp Medicine Order
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-[#666666]">
                Direct apothecary dispatch to {BUSINESS_CONFIG.displayPhone}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#666666] hover:text-white transition"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submittedSuccess ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-14 h-14 bg-[#0A0A0A] border border-[#426a44] text-[#C5A47E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif tracking-wide text-[#EAEAEA]">
              Connecting to WhatsApp...
            </h4>
            <p className="text-xs text-[#888888] max-w-sm mx-auto leading-relaxed">
              Generating your prescription order dispatch. Our duty pharmacist will confirm availability and delivery slot immediately.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendViaWhatsApp} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="p-3 bg-[#0A0A0A] border border-[#1A1A1A] text-[11px] text-[#888888] flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#426a44] shadow-[0_0_6px_rgba(66,106,68,0.7)] mt-1.5 shrink-0" />
              <span>
                100% Genuine Prescription Medicines • Temperature-Controlled Storage • Fast Aurangabad Doorstep Delivery
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Customer Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#555555] absolute left-3 top-3" />
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Rakesh Kumar"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Mobile Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-[#555555] absolute left-3 top-3" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Medicine Name(s) *
                </label>
                <input
                  type="text"
                  name="medicineName"
                  required
                  value={formData.medicineName}
                  onChange={handleChange}
                  placeholder="e.g. Dolo 650, Augmentin 625"
                  className="w-full px-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Quantity / Strips
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 2 strips / 1 bottle"
                  className="w-full px-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                Delivery Address (Aurangabad, Bihar)
              </label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-[#555555] absolute left-3 top-3" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House / Locality, Landmark, Aurangabad"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Prescription Status
                </label>
                <select
                  name="hasPrescription"
                  value={formData.hasPrescription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] focus:outline-none"
                >
                  <option value="Yes">Yes (I have a doctor prescription)</option>
                  <option value="No">No (OTC product / daily wellness)</option>
                  <option value="Will send on WhatsApp">Will send photo on WhatsApp</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                  Preferred Delivery Window
                </label>
                <div className="relative">
                  <Clock className="w-3.5 h-3.5 text-[#555555] absolute left-3 top-3" />
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="e.g. As soon as possible"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Prescription Upload helper */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                Prescription Upload (Optional)
              </label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer px-3.5 py-2 border border-[#222222] bg-[#0A0A0A] text-[10px] uppercase tracking-wider text-[#C5A47E] hover:border-[#C5A47E] transition">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Choose Photo / PDF</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {prescriptionFileName && (
                  <span className="text-[11px] text-[#999999] truncate max-w-[200px]">
                    ✓ {prescriptionFileName}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-[#555555] mt-1.5">
                You can also attach the image directly within the WhatsApp chat.
              </p>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1.5">
                Special Instructions or Manufacturer
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Specific pharmaceutical brand or dosage preferences..."
                className="w-full px-3 py-2 text-xs bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#C5A47E] text-[#EAEAEA] placeholder-[#444444] focus:outline-none resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] font-bold text-[11px] uppercase tracking-[0.2em] transition active:scale-[0.99]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-5 border border-[#1A1A1A] bg-[#0A0A0A] text-[#888888] hover:text-white font-medium text-[10px] uppercase tracking-[0.15em] transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A47E]" />
                <span>Call Store</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
