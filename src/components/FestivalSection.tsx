import React from 'react';
import { Sparkles, Gift, Flame, Heart, Cake } from 'lucide-react';
import { CategoryKey } from '../types';

interface FestivalSectionProps {
  onSelectCategory?: (category: CategoryKey) => void;
}

export default function FestivalSection({ onSelectCategory }: FestivalSectionProps) {
  const festivals = [
    {
      title: 'Diwali Festival',
      symbol: Flame,
      desc: 'Double-gold plated Diya stands, brass hanging pooja artifacts, and luxury dry grain designer platters configured with warm spiritual aura.',
      glow: 'shadow-[0_0_25px_rgba(234,179,8,0.25)] border-yellow-500/30 text-yellow-400 bg-yellow-950/10',
      gradient: 'from-orange-500/10 via-yellow-500/5 to-transparent',
      accent: 'text-yellow-400 bg-yellow-500/10 border-yellow-400/30',
      category: 'god-articles'
    },
    {
      title: 'Ganesh Chaturthi',
      symbol: Sparkles,
      desc: 'Highly stylized organic Ganesha idols. Special hand-painted gold relief works, modak platters, and authentic altar backdrops.',
      glow: 'shadow-[0_0_25px_rgba(168,85,247,0.25)] border-purple-500/30 text-purple-400 bg-purple-950/10',
      gradient: 'from-fuchsia-500/10 via-purple-500/5 to-transparent',
      accent: 'text-purple-400 bg-purple-500/10 border-purple-400/30',
      category: 'bappa-idols'
    },
    {
      title: 'Royal Weddings',
      symbol: Heart,
      desc: 'Exquisite double-wall gilded box cases, customizable scented glass candle lines, and premium bone-china gift accessories.',
      glow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)] border-rose-500/30 text-rose-400 bg-rose-950/10',
      gradient: 'from-red-500/10 via-rose-500/5 to-transparent',
      accent: 'text-rose-400 bg-rose-500/10 border-rose-400/30',
      category: 'tea-cups'
    },
    {
      title: 'Birthdays & Success',
      symbol: Cake,
      desc: 'Delightful customizable kids toys, hand-blown hourglass desk figures, and modern geometric stone desk objects.',
      glow: 'shadow-[0_0_25px_rgba(6,182,212,0.25)] border-cyan-500/30 text-cyan-400 bg-cyan-950/10',
      gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/30',
      category: 'toys'
    }
  ];

  const handleWhatsappFestivalInquiry = (eventTitle: string) => {
    const waUrl = `https://api.whatsapp.com/send?phone=919422770281&text=${encodeURIComponent(
      `Hello Zambui Gift Gallery! I am planning gifts for an upcoming *${eventTitle}* in Chalisgaon and would love to get your custom luxury curations brochure. Thank you!`
    )}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="festival" className="py-24 relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-[5%] w-[30vw] h-[30vw] rounded-full bg-yellow-500/5 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-[5%] w-[40vw] h-[40vw] rounded-full bg-rose-500/5 blur-[150px] -z-10 animate-pulse duration-[10000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-pink-400 uppercase font-mono mb-2">
            Festive Curations
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(244,63,94,0.2)]">Festival Collections</span>
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Celebrate India's ultimate auspicious gatherings with customized luxury gift designs formatted specifically for families, colleagues, and loved ones.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Festival Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((fest, idx) => {
            const SymbolComp = fest.symbol;
            return (
              <div
                key={idx}
                className={`group relative rounded-2.5xl border p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 bg-gradient-to-b ${fest.gradient} ${fest.glow} backdrop-blur-md overflow-hidden`}
              >
                {/* Floating sparkle icon corner */}
                <div className="absolute -top-[10px] -right-[10px] text-white/5 group-hover:text-white/10 transition-colors pointer-events-none scale-125">
                  <SymbolComp className="w-24 h-24 stroke-[0.5px]" />
                </div>

                <div className="space-y-4">
                  {/* Symbol circle badge */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-115 ${fest.accent}`}>
                    <SymbolComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                    {fest.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans mt-2 min-h-[96px]">
                    {fest.desc}
                  </p>
                </div>

                {/* Show Gifts Button */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(fest.category as CategoryKey);
                      }
                      const element = document.querySelector('#catalog-explorer');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-white/25 text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-black group-hover:border-transparent transition-all duration-500 cursor-pointer"
                  >
                    <span>Show Gifts</span>
                    <Gift className="w-4 h-4 text-pink-400 group-hover:text-black transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call of action bottom Banner */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 mt-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-center max-w-4xl mx-auto">
          {/* Animated glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />
          
          <h4 className="text-xl sm:text-2xl font-bold text-white font-sans mb-3">
            Custom Gifting and Bulk Orders Available
          </h4>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">
            ZAMBUI GIFT GALLERY delivers high quality products with tailor-made corporate custom engraving, premium labels, and decorative ribbons for all Indian events in Chalisgaon.
          </p>
          <button
            onClick={() => handleWhatsappFestivalInquiry('Custom Bulk Gifting')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_4px_15px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Settle Custom Design Package
          </button>
        </div>

      </div>
    </section>
  );
}
