import React from 'react';
import { motion } from 'motion/react';

const images = [
  '/pre/DSC06507.jpg',
  '/pre/DSC06548.jpg',
  '/pre/DSC06880.jpg',
  '/pre/DSC06967.jpg',
  '/pre/ROM03448.jpg',
  '/pre/ROM03622.jpg',
  '/pre/ROM03726.jpg',
  '/pre/ROM03891.jpg',
  '/pre/ROM03896.jpg',
  '/pre/ROM04438.jpg',
  '/pre/ROM04596.jpg',
  '/pre/ROM04658.jpg',
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" aria-label="Our Pre-Shoot Gallery" className="relative overflow-hidden py-24 sm:py-32 bg-transparent text-[#111111]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none z-0" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <motion.div 
          className="mb-14 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl mb-3 text-[#91763A] drop-shadow-sm" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.9)" }}>Our Gallery</p>
          <div className="flex items-center justify-center mb-6" aria-hidden="true">
            <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
              <line x1="0" y1="12" x2="86" y2="12" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.55" />
              <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#A0A0A0" fillOpacity="0.65" />
              <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#A0A0A0" fillOpacity="0.3" />
              <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#A0A0A0" fillOpacity="0.3" />
              <circle cx="110" cy="12" r="3" fill="#A0A0A0" fillOpacity="0.9" />
              <circle cx="110" cy="12" r="6" fill="none" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.45" />
              <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#A0A0A0" fillOpacity="0.65" />
              <line x1="134" y1="12" x2="220" y2="12" stroke="#A0A0A0" strokeWidth="0.75" strokeOpacity="0.55" />
            </svg>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-bold italic text-[#91763A]" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.9)" }}>
            Pre-Shoot Moments
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-4 sm:py-8 z-10">
        <motion.div
          className="flex whitespace-nowrap gap-4 sm:gap-6 md:gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {[...images, ...images, ...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-[22rem] md:h-[28rem] rounded-2xl overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[4px] border-white/60 group"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
