import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
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

export const OurStoryPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
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
                className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                  <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    Notre histoire,
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                    votre avenir
                  </span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8 mb-12"
            >
              De nos premiers pas à aujourd'hui, découvrez comment Tiny Team est devenue
              une famille d'artistes et de passionnés du spectacle vivant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <button
                onClick={() => document.getElementById('story-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <span>Découvrir notre histoire</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-yellow-300 transition-colors duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};