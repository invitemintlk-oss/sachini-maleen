import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Utensils, PartyPopper, Camera, Car, Pen } from 'lucide-react';

const events = [
  { time: '17:30', title: 'Arrival of guests', icon: Heart },
  { time: '17:45', title: 'Poruwa Ceremony', icon: Pen },
  { time: '19:00', title: 'Dinner & Reception', icon: Utensils },
  { time: '23:50', title: 'Conclusion', icon: Car },
];

export const Timeline: React.FC = () => {
  return (
    <section aria-label="Wedding Timeline" id="timeline" className="relative min-h-[100dvh] w-full flex items-center justify-center py-12 px-4 sm:px-6 bg-transparent">
      
      {/* Soft gradient overlay to gently soften the background behind the timeline without a hard box */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10 bg-white/50 backdrop-blur-md rounded-[3rem] border border-[#A68846]/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 sm:p-12 my-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl font-display text-[#91763A] tracking-tight drop-shadow-sm" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.9)" }}>Timeline</h2>
          <div className="flex items-center justify-center mt-4 opacity-70" aria-hidden="true">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#A68846]" />
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="mx-4">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#A68846" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#A68846]" />
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#A68846]/60 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-2 sm:gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time */}
                <div className={`flex-1 w-full text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pt-1 md:pt-0`}>
                  <span className="text-3xl sm:text-4xl font-serif text-[#91763A] font-medium" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>{event.time}</span>
                </div>

                {/* Icon Node */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white backdrop-blur-md border border-[#A68846]/50 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <event.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#A68846]" />
                </div>

                {/* Content */}
                <div className={`flex-1 w-full text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pb-2 md:pb-0`}>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#876A2E] font-semibold leading-tight" style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.9)" }}>{event.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
