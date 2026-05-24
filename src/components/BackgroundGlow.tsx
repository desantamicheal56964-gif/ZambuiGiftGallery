import React, { useEffect, useState } from 'react';

export default function BackgroundGlow() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate static stable random values for 30 ambient floating particles to prevent shifting layout
    const initialParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -10 // offset start
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050508] pointer-events-none select-none">
      {/* Dynamic Animated Color Blobs (Soft Glass Backdrops mirroring Bold Typography Theme) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[100px] animate-pulse duration-[12000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/20 blur-[120px] animate-pulse duration-[16000ms]" />
      <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-pink-500/10 blur-[100px] animate-pulse duration-[10000ms]" />
      <div className="absolute top-[20%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[130px] animate-pulse duration-[14000ms]" />

      {/* Grid Pattern Mesh supporting the 30px x 30px radial mesh alignment */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.6px, transparent 0.6px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Theme Decorative Vertical Fine Laser Lines */}
      <div className="absolute bottom-1/4 left-1/4 w-[1px] h-[150px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-40"></div>
      <div className="absolute top-1/4 right-1/4 w-[1px] h-[150px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent opacity-40"></div>
      <div className="absolute top-1/3 left-2/3 w-[1px] h-[100px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent opacity-30"></div>

      {/* Floating Neon Sparkles */}
      {particles.map((p) => {
        const colorClass = p.id % 3 === 0 
          ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
          : p.id % 3 === 1 
            ? 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]' 
            : 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]';

        return (
          <div
            key={p.id}
            className={`absolute rounded-full opacity-60 ${colorClass}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-particle ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}

      {/* Add custom CSS animations using style tag */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          30% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-80px) translateX(30px) rotate(180deg);
            opacity: 0.4;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-160px) translateX(0px) rotate(360deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
