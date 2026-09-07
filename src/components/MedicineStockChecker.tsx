import React, { useState, useMemo } from "react";
import { Search, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Filter, ShieldCheck } from "lucide-react";
import rawStockData from "../data/medicineStock.json";
import { MedicineStockItem } from "../types";
import { BUSINESS_CONFIG } from "../config/siteConfig";

interface MedicineStockCheckerProps {
  onSelectMedicine?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicine,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const stockList: MedicineStockItem[] = rawStockData as MedicineStockItem[];

  const categories = useMemo(() => {
    const set = new Set(stockList.map((item) => item.category));
    return ["All", ...Array.from(set)];
  }, [stockList]);

  const filteredItems = useMemo(() => {
    return stockList.filter((item) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === "" ||
        item.name.toLowerCase().includes(term) ||
        item.brand.toLowerCase().includes(term) ||
        (item.composition && item.composition.toLowerCase().includes(term)) ||
        item.category.toLowerCase().includes(term);

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [stockList, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineStockItem["status"]) => {
    switch (status) {
      case "Available":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium border border-[#426a44] text-[#86c48a] bg-[#0A0A0A]">
            <CheckCircle className="w-3 h-3 text-[#426a44]" />
            <span>Available</span>
          </span>
        );
      case "Limited Stock":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium border border-[#8a6b29] text-[#e0b769] bg-[#0A0A0A]">
            <AlertTriangle className="w-3 h-3 text-[#8a6b29]" />
            <span>Limited</span>
          </span>
        );
      case "Out of Stock":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium border border-[#662222] text-[#e07777] bg-[#0A0A0A]">
            <XCircle className="w-3 h-3 text-[#662222]" />
            <span>Reserved</span>
          </span>
        );
    }
  };

  const handleOrderClick = (item: MedicineStockItem) => {
    if (onSelectMedicine) {
      onSelectMedicine(item.name);
    } else {
      const msg = encodeURIComponent(
        `Hello ${BUSINESS_CONFIG.businessName}, I would like to check availability and order: ${item.name} (${item.brand}).`
      );
      window.open(`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${msg}`, "_blank");
    }
  };

  return (
    <div className="w-full bg-[#0F0F0F] border border-[#222222] shadow-2xl p-5 sm:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#1A1A1A] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Live Dispensary Inventory</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#EAEAEA] tracking-wide">
            Medicine Stock &amp; Availability
          </h3>
          <p className="text-xs text-[#777777] mt-1.5 max-w-xl">
            Search verified prescription pharmaceuticals, surgical equipment, and wellness supplies stocked at our Old GT Road facility.
          </p>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-[#666666] bg-[#0A0A0A] border border-[#1A1A1A] px-3.5 py-2 shrink-0 self-start md:self-auto">
          <span>Listed in dispensary: <strong className="text-[#C5A47E]">{filteredItems.length}</strong> items</span>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="mt-6">
        <div className="relative">
          <Search className="w-4 h-4 text-[#555555] absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by medicine name, salt/composition (e.g. Paracetamol, Omron, Augmentin)..."
            className="w-full pl-11 pr-16 py-3 text-xs sm:text-sm bg-[#0A0A0A] border border-[#222222] text-[#EAEAEA] placeholder-[#444444] focus:border-[#C5A47E] focus:outline-none transition shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3.5 top-2.5 text-[10px] uppercase tracking-wider px-2 py-1 bg-[#141414] border border-[#222222] text-[#888888] hover:text-white transition"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips */}
      {!compact && (
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3 text-[#C5A47E]" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-[10px] uppercase tracking-[0.15em] transition ${
                selectedCategory === cat
                  ? "bg-[#C5A47E] text-[#0A0A0A] font-bold"
                  : "bg-[#0A0A0A] border border-[#1A1A1A] text-[#777777] hover:text-[#E0E0E0]"
              }`}
            >
              {cat}
            </button>
          ))}

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] ml-auto flex items-center gap-1">
            Status:
          </span>
          {["All", "Available", "Limited Stock", "Out of Stock"].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] transition ${
                selectedStatus === st
                  ? "bg-[#EAEAEA] text-[#0A0A0A] font-bold"
                  : "bg-[#0A0A0A] border border-[#1A1A1A] text-[#666666] hover:text-[#E0E0E0]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      )}

      {/* Results View */}
      <div className="mt-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 px-4 border border-[#1A1A1A] bg-[#0A0A0A]">
            <p className="text-sm font-serif text-[#EAEAEA]">
              No direct matches for "{searchTerm}"
            </p>
            <p className="text-xs text-[#666666] mt-1.5 max-w-md mx-auto leading-relaxed">
              We stock over 3,000+ formulations at our Old GT Road facility. Send a prescription snapshot on WhatsApp and our duty pharmacist will pull physical stock.
            </p>
            <button
              onClick={() => onSelectMedicine ? onSelectMedicine(searchTerm) : window.open(`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Galaxy Medical, do you have: ${searchTerm}?`)}`, "_blank")}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A47E] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#DBC1A1] transition"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp for "{searchTerm || "Any Medicine"}"</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            {/* Desktop Table View */}
            <table className="w-full text-left border-collapse hidden md:table">
              <thead>
                <tr className="border-b border-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] text-[#666666]">
                  <th className="pb-3 pl-3">Medicine / Product</th>
                  <th className="pb-3">Manufacturer &amp; Salt</th>
                  <th className="pb-3 text-right">MRP</th>
                  <th className="pb-3 text-center">Batch Expiry</th>
                  <th className="pb-3 text-center">Dispensary Status</th>
                  <th className="pb-3 text-right pr-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141414] text-xs">
                {filteredItems.slice(0, compact ? 6 : 25).map((item) => (
                  <tr key={item.id} className="hover:bg-[#141414]/50 transition">
                    <td className="py-3.5 pl-3 font-serif text-sm text-[#EAEAEA]">
                      <div>{item.name}</div>
                      {item.requiresPrescription && (
                        <span className="inline-block mt-1 text-[9px] uppercase tracking-wider font-bold text-[#e07777] bg-[#0A0A0A] border border-[#662222] px-1.5 py-0.5">
                          Rx Required
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 text-xs text-[#888888]">
                      <div className="font-medium text-[#C5A47E]">{item.brand}</div>
                      <div className="text-[#555555] line-clamp-1">{item.composition || item.category}</div>
                    </td>
                    <td className="py-3.5 text-right font-medium text-[#EAEAEA]">
                      {item.discountedPrice ? (
                        <div>
                          <span className="text-[#C5A47E] font-bold">₹{item.discountedPrice.toFixed(2)}</span>
                          <span className="block text-[10px] text-[#555555] line-through">₹{item.mrp.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span>₹{item.mrp.toFixed(2)}</span>
                      )}
                    </td>
                    <td className="py-3.5 text-center text-xs text-[#666666]">
                      {item.expiry}
                    </td>
                    <td className="py-3.5 text-center">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3.5 text-right pr-3">
                      <button
                        onClick={() => handleOrderClick(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C5A47E]/40 text-[#C5A47E] hover:bg-[#C5A47E] hover:text-[#0A0A0A] text-[10px] uppercase tracking-[0.15em] font-medium transition"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Order</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Cards View */}
            <div className="grid grid-cols-1 gap-2.5 md:hidden">
              {filteredItems.slice(0, compact ? 5 : 25).map((item) => (
                <div
                  key={item.id}
                  className="p-4 border border-[#1A1A1A] bg-[#0A0A0A] space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-sm text-[#EAEAEA]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#777777]">
                        {item.brand} • {item.composition}
                      </p>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#888888] pt-2 border-t border-[#141414]">
                    <div>
                      <span className="text-[#555555]">MRP: </span>
                      {item.discountedPrice ? (
                        <span className="text-[#C5A47E] font-bold">
                          ₹{item.discountedPrice.toFixed(2)}{" "}
                          <span className="text-[10px] text-[#555555] line-through">₹{item.mrp.toFixed(2)}</span>
                        </span>
                      ) : (
                        <span className="font-bold text-[#EAEAEA]">₹{item.mrp.toFixed(2)}</span>
                      )}
                    </div>
                    <div>
                      <span className="text-[#555555]">Batch: </span>
                      <span className="text-[#888888]">{item.expiry}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {item.requiresPrescription ? (
                      <span className="text-[9px] uppercase tracking-wider font-bold text-[#e07777] border border-[#662222] px-1.5 py-0.5">
                        Rx Required
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-[#555555]">In Stock</span>
                    )}

                    <button
                      onClick={() => handleOrderClick(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A47E] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.15em]"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>WhatsApp Order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider uppercase text-[#666666]">
        <div>
          <span>Unlisted prescription medicine? Inquire directly at </span>
          <a href={`tel:${BUSINESS_CONFIG.phone}`} className="font-bold text-[#C5A47E] underline">
            {BUSINESS_CONFIG.displayPhone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span>&bull; Verified Pharmaceutical Supply</span>
        </div>
      </div>
    </div>
  );
};
