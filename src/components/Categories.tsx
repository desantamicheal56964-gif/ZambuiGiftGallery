import React from 'react';
import { CATEGORIES } from '../data';
import { CategoryKey } from '../types';
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (key: CategoryKey) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const handleCategoryClick = (key: CategoryKey) => {
    onSelectCategory(key);
    // Smooth scroll immediately to standard best sellers and explorer grid with the filter set!
    const productGrid = document.querySelector('#best-sellers');
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="categories" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050508]/10 via-[#0a0a12]/50 to-[#050508]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono mb-2">
            Curated Treasures
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Explore Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(244,63,94,0.2)]">Collections</span>
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Choose a custom luxury category to browse hand-crafted local spiritual idols, designer bone-china cups, child-safe widgets, and seasonal festival packs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06b6d4] to-[#ec4899] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid (8 blocks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => {
            return (
              <div
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className="group relative h-[320px] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-end p-6"
                id={`category-card-${cat.key}`}
              >
                {/* Background Image with Zoom and overlay gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Frosted / glass translucent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205fd] via-[#090b14c3] to-transparent group-hover:opacity-90 transition-opacity" />
                  
                  {/* Subtle colorful neon glows on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-pink-500/20`} />
                </div>

                {/* Neon glow ring bounding box */}
                <div className={`absolute inset-0 border border-transparent group-hover:block rounded-2xl transition-all duration-500 ${cat.glowColor}`} />

                {/* Category Details (Foreground) */}
                <div className="relative z-10 space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  
                  {/* Icon label */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-[#cfd3ee] uppercase px-2.5 py-1 rounded bg-[#ffffff10] border border-white/5 backdrop-blur-md">
                      {cat.count} unique pieces
                    </span>
                    <Sparkles className="w-4 h-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                    {cat.name}
                  </h3>

                  {/* Smooth expandable detailed description */}
                  <p className="text-xs text-gray-400 line-clamp-2 h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-500">
                    {cat.description}
                  </p>

                  {/* Explore button indicators */}
                  <div className="flex items-center gap-1 text-cyan-400 group-hover:text-cyan-300 text-xs font-semibold pt-1">
                    <span>Explore Products</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
