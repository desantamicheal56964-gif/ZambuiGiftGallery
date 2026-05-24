import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, User } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050508]/10 via-[#0a0a12]/30 to-[#050508]/10">
      {/* Decorative center glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono mb-2">
            Verifiable Love
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(34,211,238,0.2)]">Guests Say</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Horizontal Card Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => {
            return (
              <div
                key={test.id}
                className="group relative rounded-3xl border border-white/10 hover:border-cyan-500/30 bg-white/[0.02]/60 backdrop-blur-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                id={`testimonial-card-${test.id}`}
              >
                {/* Accent neon corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent rounded-tr-3xl" />
                
                {/* Quote details block */}
                <div className="space-y-6">
                  {/* Quote Icon decorative */}
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-pink-400 transition-colors">
                      <Quote className="w-5 h-5 transform -scale-x-100" />
                    </div>
                    
                    {/* Stars system */}
                    <div className="flex gap-1">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 italic leading-relaxed font-sans text-left">
                    "{test.comment}"
                  </p>
                </div>

                {/* User avatar profile credentials */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white font-sans">{test.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider block uppercase mt-0.5">
                      {test.role}
                    </span>
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
