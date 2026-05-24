import React from 'react';
import { Gift, ChevronDown, ArrowRight, Star, Sparkles, Navigation } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onVisitClick: () => void;
}

export default function Hero({ onExploreClick, onVisitClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Immersive radial gradient highlight behind the hero card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse duration-[8000ms]" />

      {/* Hero Floating Luxury Gift Box / Ornaments */}
      <div className="absolute top-[20%] left-[8%] w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg opacity-25 blur-sm animate-float-slow -z-10" />
      <div className="absolute bottom-[25%] right-[10%] w-[70px] h-[70px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-sm animate-float-medium -z-10" />
      <div className="absolute top-[35%] right-[12%] w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-600 rounded-md opacity-15 blur-[2px] animate-float-fast -z-10" />

      {/* Hero Core Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
        
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md text-cyan-300 text-xs font-mono font-medium tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-bounce duration-[3000ms]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Premier Gifting Heaven in Maharashtra</span>
        </div>

        {/* Central Frosted Glass Luxury Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group">
          {/* Neon inner edge glows */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />

          {/* Glowing particle flare inside the card */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/35 transition-all duration-700" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl group-hover:bg-purple-500/35 transition-all duration-700" />

          {/* Heading Logo text */}
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block animate-fade-in font-mono">
            Chalisgaon, Maharashtra
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal leading-[1.1] italic text-white mb-6">
            Beautiful Gifts for Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_2px_15px_rgba(244,63,94,0.3)]">
              Emotion
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light mb-10">
            Discover a curated collection of premium home decor, divine idols, and artistic treasures crafted for your most precious moments at <strong className="text-white font-semibold">Zambui Gift Gallery</strong>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* CTA 1 - Explore Collection */}
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs tracking-[0.18em] rounded-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all cursor-pointer transform hover:-translate-y-0.5"
              id="hero-explore-btn"
            >
              Explore Collection
            </button>

            {/* CTA 2 - Visit Store */}
            <button
              onClick={onVisitClick}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 backdrop-blur-xl bg-white/5 text-white font-black uppercase text-xs tracking-[0.18em] rounded-sm hover:border-fuchsia-500 hover:text-fuchsia-400 transition-all cursor-pointer transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              id="hero-visit-btn"
            >
              <Navigation className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Gift Guide</span>
            </button>
          </div>

          {/* Luxury Customer Proof Block and stats */}
          <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3.5">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-[#090b14] object-cover" 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  referrerPolicy="no-referrer" 
                  alt="Reviewer" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-[#090b14] object-cover" 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" 
                  referrerPolicy="no-referrer" 
                  alt="Reviewer" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-[#090b14] object-cover" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                  referrerPolicy="no-referrer" 
                  alt="Reviewer" 
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-fuchsia-400 text-sm">1,200+ Happy Givers</p>
                <p className="text-white/40 text-[10px] uppercase tracking-wider font-mono">Premium Gift Givers inside Maharashtra</p>
              </div>
            </div>

            <div className="flex gap-8 text-right font-mono text-xs text-white/50">
              <div>
                <span className="font-black text-cyan-400 text-sm block">100%</span>
                <span className="text-[9px] uppercase tracking-wider">Authentic</span>
              </div>
              <div>
                <span className="font-black text-purple-400 text-sm block">5,000+</span>
                <span className="text-[9px] uppercase tracking-wider">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sparkly Accents */}
      <div className="absolute top-[40%] left-[2%] text-yellow-400/30 animate-pulse">
        <Star className="w-5 h-5 fill-yellow-400" />
      </div>
      <div className="absolute bottom-[40%] right-[3%] text-yellow-400/20 animate-pulse delay-1000">
        <Star className="w-4 h-4 fill-yellow-400" />
      </div>

      {/* Elegant scrolling downwards indicator badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10" onClick={onExploreClick}>
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>

      {/* Inline styles for custom subtle floating animations to avoid dependency delays */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(8deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(-12deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
