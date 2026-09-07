import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter, MapPin } from "lucide-react";
import { GALLERY_DATA } from "../data/siteData";
import { SEOHead } from "../components/SEOHead";
import { BUSINESS_CONFIG } from "../config/siteConfig";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Storefront", "Shelves", "Equipment", "Products", "Interior"];

  const filteredGallery = GALLERY_DATA.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  return (
    <>
      <SEOHead
        title="Store &amp; Pharmacy Gallery | Galaxy Medical Aurangabad"
        description="View photos of Galaxy Medical on Old GT Road, Aurangabad Bihar: store front, clean medicine storage shelves, modern diagnostic equipment &amp; maternal care."
        canonicalPath="/gallery"
      />

      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#0A0A0A] text-[#EAEAEA] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A47E_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] text-[10px] uppercase tracking-[0.25em]">
            <span>Visual Tour &bull; Old GT Road, Aurangabad, Bihar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-tight">
            Inside Galaxy Medical Dispensary
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#888888] max-w-2xl mx-auto leading-relaxed font-light">
            Take a visual tour of our retail pharmacy, temperature-controlled drug vaults, medical equipment inventory, and customer consultation counter.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] flex items-center gap-1 mr-2">
              <Filter className="w-3 h-3 text-[#C5A47E]" /> Filter by View:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] transition ${
                  selectedCategory === cat
                    ? "bg-[#C5A47E] text-[#0A0A0A] font-bold"
                    : "bg-[#0F0F0F] border border-[#1E1E1E] text-[#777777] hover:text-[#EAEAEA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#2A2A2A] shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-4/3 overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0A0A0A]/90 border border-[#222222] text-[#C5A47E] text-[9px] uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 bg-[#0A0A0A] border border-[#C5A47E] text-[#C5A47E] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-4 bg-[#0F0F0F] border-t border-[#141414] space-y-1">
                  <h3 className="text-sm font-serif text-[#EAEAEA] group-hover:text-[#C5A47E] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Location Verification Footnote */}
          <div className="mt-16 p-6 bg-[#0F0F0F] border border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A47E] shrink-0" />
              <span>
                Want to visit in person? Find our facility at <strong className="text-[#EAEAEA]">{BUSINESS_CONFIG.address.full}</strong>.
              </span>
            </div>
            <a
              href={BUSINESS_CONFIG.geo.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#C5A47E] hover:bg-[#DBC1A1] text-[#0A0A0A] text-[10px] uppercase tracking-[0.2em] font-bold transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* POPUP LIGHTBOX ZOOM MODAL */}
      {activeLightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 p-2 text-[#888888] hover:text-white transition"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Prev Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] hover:text-white transition"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right / Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#0F0F0F] border border-[#222222] text-[#C5A47E] hover:text-white transition"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#0F0F0F] border border-[#222222] shadow-2xl space-y-3"
          >
            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={filteredGallery[activeLightboxIndex].imageUrl}
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 text-[#EAEAEA] flex items-center justify-between gap-4 border-t border-[#141414]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A47E] block">
                  {filteredGallery[activeLightboxIndex].category}
                </span>
                <h4 className="text-base sm:text-lg font-serif">
                  {filteredGallery[activeLightboxIndex].title}
                </h4>
                <p className="text-xs text-[#777777] mt-1">
                  {filteredGallery[activeLightboxIndex].caption}
                </p>
              </div>

              <span className="text-[10px] uppercase tracking-wider text-[#555555] shrink-0 font-medium">
                {activeLightboxIndex + 1} / {filteredGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
