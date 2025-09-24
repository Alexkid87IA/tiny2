import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
}

interface BookingSectionProps {
  artist: Artist;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ artist }) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Créer des particules de fond
    if (particlesRef.current && particlesRef.current.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `floatParticle ${20 + Math.random() * 10}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-[#080C20] via-[#1a0033] to-[#2d1b69] overflow-hidden">
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            opacity: 0.2;
            transform: translate(0, 0);
          }
          50% {
            opacity: 0.6;
            transform: translate(
              calc(var(--random-x, 0) * 100px - 50px),
              calc(var(--random-y, 0) * 100px - 50px)
            );
          }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Particules de fond */}
      <div 
        ref={particlesRef} 
        className="absolute inset-0 pointer-events-none"
        style={{
          '--random-x': Math.random(),
          '--random-y': Math.random(),
        } as React.CSSProperties}
      />

      {/* Orbes de lumière */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-width-[700px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-12 md:p-20 text-center overflow-hidden border-2 border-pink-500/20">
            {/* Glow effect rotatif */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1), transparent 70%)',
                animation: 'rotate 20s linear infinite',
              }}
            />

            {/* Contenu */}
            <div className="relative space-y-12">
              {/* Titre */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight"
              >
                Discutons de votre projet
              </motion.h2>

              {/* Boutons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 items-center"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 min-w-[320px] rounded-full overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #ec4899, #a855f7)",
                        "linear-gradient(225deg, #ec4899, #a855f7)",
                        "linear-gradient(45deg, #ec4899, #a855f7)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-transparent to-purple-500/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative text-white font-bold text-lg">Nous contacter</span>
                  <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="mailto:booking@tinyteam.fr"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 min-w-[320px] glass-card rounded-full border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                  <span className="text-white/80 group-hover:text-white font-semibold transition-colors duration-300">
                    booking@tinyteam.fr
                  </span>
                </a>
              </motion.div>

              {/* Garantie */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center justify-center gap-3"
              >
                {/* Glow pulsant */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/70 text-base">
                  Réponse garantie sous 48h
                </span>
              </motion.div>
            </div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full pointer-events-none"
              animate={{
                translateX: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};