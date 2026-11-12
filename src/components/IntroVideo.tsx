import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startExperience = () => {
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error(e));
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/gemini_generated_video_dcf370e6.mp4"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}
        playsInline
        onEnded={onComplete}
      />
      
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute inset-0 flex items-center justify-center bg-[#FDFBF7] z-10"
          >
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/ChatGPT Image Aug 6, 2026, 05_51_32 PM.png" 
                alt="Intro Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="flex flex-col items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
                <span className="text-sm sm:text-base md:text-lg tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#111111] mb-4 sm:mb-6 font-semibold">
                  The Wedding Invitation
                </span>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-[#111111] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
                  SACHINI
                </span>
                <div className="flex items-center gap-3 opacity-90">
                  <div className="h-[1px] w-8 sm:w-16 bg-[#111111]/60"></div>
                  <span className="text-3xl sm:text-4xl font-display italic text-[#111111] lowercase tracking-widest px-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
                    and
                  </span>
                  <div className="h-[1px] w-8 sm:w-16 bg-[#111111]/60"></div>
                </div>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-[#111111] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
                  MALEEN
                </span>
              </h1>
              <button
                onClick={startExperience}
                className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-white/30 backdrop-blur-sm border border-[#111111]/50 text-[#111111] rounded-full uppercase tracking-[0.25em] text-xs sm:text-sm overflow-hidden hover:scale-105 transition-all duration-500 hover:border-[#111111] hover:bg-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#111111]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 font-bold">Open Invitation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasStarted && (
        <button 
          onClick={onComplete}
          className="absolute top-8 right-8 z-20 px-6 py-2 border border-white/30 text-white/70 hover:text-white hover:bg-white/10 rounded-full uppercase tracking-widest text-xs transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};
