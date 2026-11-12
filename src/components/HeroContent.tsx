import React from 'react';
import { motion } from 'motion/react';
import { useParams, useSearchParams } from 'react-router-dom';

export const HeroContent: React.FC = () => {
  const { guestName } = useParams();
  const [searchParams] = useSearchParams();
  const oldPrefix = searchParams.get('prefix');
  const oldName = searchParams.get('name');
  
  const displayName = guestName || (oldPrefix && oldName ? `${oldPrefix} ${oldName}` : null);

  return (
    <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-[#111111]">
      <div className="absolute inset-0 w-full h-full">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet="/hero.webp" />
          <img 
            src="/hero.webp" 
            alt="Wedding Background" 
            className="w-full h-full absolute inset-0 object-cover object-top" 
            loading="eager" 
            decoding="async" 
            fetchpriority="high" 
          />
        </picture>
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.7) 100%)`
          }} 
        />
      </div>
      <motion.div 
        className="relative z-10 w-full flex justify-end px-8 md:px-[15vw] lg:px-[20vw] pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="flex flex-col items-center gap-3">
          {displayName && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 flex flex-col items-center"
            >
              <span className="text-[#5c420e] uppercase tracking-[0.35em] text-[10px] sm:text-xs font-bold mb-3 bg-[#fffdf7]/70 px-5 py-1.5 rounded-full backdrop-blur-sm border border-[#b8942a]/50 shadow-sm">We cordially invite</span>
              <span className="hero-gold text-xl sm:text-3xl md:text-4xl font-serif italic text-center px-4 leading-tight pb-1">
                {displayName}
              </span>
            </motion.div>
          )}
          <span className="hero-gold text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] uppercase leading-none pb-1">
            SACHINI
          </span>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent via-[#8a6a1f] to-[#6e5012]"></div>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#6e5012]"></span>
            <span className="hero-gold text-3xl sm:text-5xl font-display px-1 pb-1">
              and
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#6e5012]"></span>
            <div className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent via-[#8a6a1f] to-[#6e5012]"></div>
          </div>
          <span className="hero-gold text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] uppercase leading-none pb-1">
            MALEEN
          </span>
        </h1>
      </motion.div>
      <motion.div 
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5" 
        aria-hidden="true"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-px h-7" style={{ background: "linear-gradient(180deg, transparent, rgba(184,148,42,0.5))" }} />
        <div>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#B8942A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
