import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const TeamHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  La
                </span>
                <span className="block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent mt-2">
                  Team
                </span>
              </h1>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-6 md:mt-8 mb-8 px-4"
          >
            Depuis notre création en <span className="text-yellow-300 font-bold">2014</span>, 
            nous avons évolué d'une équipe de prestations de services pour devenir 
            en <span className="text-yellow-300 font-bold">2020</span> une boîte de production à part entière.
            <br />
            <span className="text-pink-300 font-medium">En 2025, nous continuons d'innover pour nos artistes.</span>
          </motion.p>

          {/* Timeline Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <div className="glass-card rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-white mb-1">2014</div>
              <div className="text-sm text-emerald-300 font-semibold mb-1">CRÉATION</div>
              <div className="text-xs text-white/60">Prestations de services</div>
            </div>
            
            <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-pink-500/50 to-purple-500/50" />
            
            <div className="glass-card rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-white mb-1">2020</div>
              <div className="text-sm text-pink-300 font-semibold mb-1">ÉVOLUTION</div>
              <div className="text-xs text-white/60">Boîte de production</div>
            </div>
            
            <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
            
            <div className="glass-card rounded-xl p-4 text-center min-w-[140px] ring-2 ring-pink-400/30">
              <div className="text-2xl font-bold text-white mb-1">Aujourd'hui</div>
              <div className="text-sm text-blue-300 font-semibold mb-1">EXCELLENCE</div>
              <div className="text-xs text-white/60">Approche unique</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => document.getElementById('team-members')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <span>Découvrir l'équipe</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-pink-300 transition-colors duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};