import React from 'react';
import { Coffee, ToyBrick, Eye, Flower, Home, Star, Sparkles, MapPin, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Coffee,
      title: 'Premium Tea Cups',
      desc: 'Double-walled glass, bone-china, and gilded matching cup sets for luxury hosting.',
      color: 'border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400',
      glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]'
    },
    {
      icon: ToyBrick,
      title: 'Premium Kids Toys',
      desc: 'A magnificent selection of toxin-free wooden logic widgets and soft collection toys.',
      color: 'border-rose-500/20 text-rose-400 group-hover:border-rose-400',
      glow: 'shadow-[0_0_15px_rgba(244,63,94,0.15)] group-hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]'
    },
    {
      icon: Sparkles,
      title: 'Spiritual Idols & Statues',
      desc: 'Lord Ganapati in gold leaf and meditating Shiva busts designed for positive energy vibes.',
      color: 'border-purple-500/20 text-purple-400 group-hover:border-purple-400',
      glow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]'
    },
    {
      icon: Flower,
      title: 'Luxury Vases & Pots',
      desc: 'Geometric clay pots, polished brass hanging holders, and modern frosted glass carafes.',
      color: 'border-pink-500/20 text-pink-400 group-hover:border-pink-400',
      glow: 'shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]'
    }
  ];

  const features = [
    'Hand-curated authentic designs sourced globally',
    'Perfect custom premium packaging with ribbon decoration',
    'Located right at the heart of Chalisgaon for convenience',
    'Bespoke festival gift bundling tailored for Indian cultures'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono mb-2">
            Art of Giving
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Chalisgaon's Elegant <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(34,211,238,0.2)]">Gifting Paradise</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story details block with glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 shadow-[20px_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Inner glowing accent */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/10 rounded-full blur-[50px] -z-10" />
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 animate-pulse" />
                Trusted Gift Gallery in Chalisgaon
              </h3>
              <p className="text-gray-300 leading-relaxed font-sans mb-6">
                Established as the gold standard of luxury gifting in Maharashtra, 
                <strong className="text-white"> ZAMBUI GIFT GALLERY</strong> brings to life an immersive emotional 
                experience. Our gallery acts as a magical hub where standard raw items turn into premium gifts 
                representing love, faith, custom festivity, and profound affection.
              </p>
              
              <p className="text-gray-300 leading-relaxed font-sans mb-8">
                Whether you wish to grace private home pooja rooms with Ganapati Bappa Idols, surprise toddlers with 
                high-grade educational block sets, or present bespoke coffee sets to your business clients, we offer 
                uncompromising quality and stunning presentation.
              </p>

              {/* Check features helper group */}
              <div className="space-y-3.5 pt-4 border-t border-white/5">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards showcasing main specialties */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border ${item.color} ${item.glow} bg-white/[0.02] backdrop-blur-lg p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05]`}
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComp className="w-6 h-6 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-sans">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Glowing line trace */}
                  <div className="absolute right-3 bottom-3 text-white/5 group-hover:text-cyan-400/20 transition-all font-mono font-bold text-5xl">
                    0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
