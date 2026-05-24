import React from 'react';
import { Gift, Instagram, Facebook, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030306] border-t border-white/5 overflow-hidden pt-16 pb-8" id="store-footer">
      {/* Decorative lazily pulsing line accents (Neon line divider) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-60 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Desc */}
          <div className="space-y-4 text-left">
            <div className="flex flex-col gap-1.5">
              <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                ZAMBUI
              </span>
              <span className="text-[10px] font-bold tracking-[0.28em] text-gray-400 uppercase font-sans opacity-70">
                Gift Gallery
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              The premier gift showroom in Chalisgaon, Maharashtra. Hand-curating elite spiritual figurines, toys, designer kitchenwares, and warm festive baskets.
            </p>
            {/* Direct coordinate label */}
            <span className="inline-block text-[10px] font-mono font-medium text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/25 border border-cyan-500/20 uppercase tracking-widest">
              📍 Chalisgaon, MH
            </span>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfd3ee] font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-gray-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Who We Are</a>
              <a href="#categories" className="hover:text-cyan-400 transition-colors">Special Classifications</a>
              <a href="#best-sellers" className="hover:text-cyan-400 transition-colors">Our Catalogues</a>
              <a href="#festival" className="hover:text-cyan-400 transition-colors">Festive Bundles</a>
            </div>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfd3ee] font-mono">
              Customer Support
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-gray-400">
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Verified Feedback</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Locations & Maps</a>
              <a href="https://wa.me/919422770281" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Direct Chat Helpline</a>
              <span className="text-[10px] text-gray-500">Refunds & Returns on Local Collection</span>
            </div>
          </div>

          {/* Col 4: Reach Us Fast */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfd3ee] font-mono">
              Flagship Contact
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">Hanuman Wadi, Chalisgaon MH</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>+91 94227 70281</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>info@zambuigiftgallery.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright of footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-[10.5px] text-gray-500 font-sans tracking-wide">
              © {currentYear} ZAMBUI GIFT GALLERY. All Rights Reserved. Crafted with love for Chalisgaon.
            </p>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] italic font-serif">
              Art of Giving Since 2012
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Scroll back to top button */}
            <button
              onClick={scrollBackToTop}
              className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase cursor-pointer"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
