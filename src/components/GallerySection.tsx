import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Esc key closes lightbox, and left/right arrows navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const handleNext = () => {
    setActiveLightboxIndex((prev) => 
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  };

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => 
      prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#050508]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono mb-2">
            Visual Showroom
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(34,211,238,0.2)]">Exquisite Gallery</span>
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Glimpse into the physical luxury showroom of ZAMBUI GIFT GALLERY. Discover divine structures, designer bone-china, and curated seasonal hampers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 group"
                id={`gallery-item-${item.id}`}
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Translucent overlay on hover */}
                <div className="absolute inset-0 bg-[#070912cc] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 overflow-hidden" />
                
                {/* Hover Details */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 pointer-events-none">
                  {/* Top corner action */}
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transform translate-y-[-20px] group-hover:translate-y-0 transition-all duration-500">
                    <span className="p-2 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Info details */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-[20px] group-hover:translate-y-0 transition-all duration-500 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#cfd3ee] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-sans mt-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-1 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Tap to zoom-view and inspect
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================== */}
      {/* Interactive Lightbox Popup Backdrop Viewer     */}
      {/* ============================================== */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 bg-[#030306ea] backdrop-blur-xl z-50 flex items-center justify-center p-4">
          
          {/* Close Backdrop Trigger */}
          <div className="absolute inset-0" onClick={() => setActiveLightboxIndex(null)} />

          <div className="relative max-w-4xl w-full z-10 flex flex-col items-center">
            {/* Top Toolbar */}
            <div className="w-full flex justify-between items-center text-white mb-4 bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
              <div className="text-left">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                  {GALLERY_ITEMS[activeLightboxIndex]?.category}
                </span>
                <h4 className="text-base font-bold text-white font-sans">
                  {GALLERY_ITEMS[activeLightboxIndex]?.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                id="close-lightbox-btn"
                title="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core Image Showcase panel */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl flex items-center justify-center">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex]?.image}
                alt={GALLERY_ITEMS[activeLightboxIndex]?.title}
                className="max-h-[70vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows inside lightbox */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 text-white cursor-pointer transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 text-white cursor-pointer transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination numbers ticker */}
            <div className="text-xs text-gray-400 mt-4 font-mono">
              Image {activeLightboxIndex + 1} of {GALLERY_ITEMS.length} • Use Left/Right keys or arrows to browse
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
