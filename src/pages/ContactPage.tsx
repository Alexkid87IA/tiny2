import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, ArrowRight, Sparkles, MessageSquare, Phone } from 'lucide-react';

// Particules animées en arrière-plan (comme sur les autres pages)
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Orbes de lumière flottants */}
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        top: '10%',
        left: '10%',
      }}
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        bottom: '10%',
        right: '10%',
      }}
      animate={{
        x: [0, -100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Petites particules scintillantes */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Section Hero - Style similaire à la homepage */}
      <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge animé */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-12"
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 font-semibold text-sm tracking-wider">PRENONS CONTACT</span>
            </motion.div>

            {/* Titre principal avec effet spectaculaire */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative mb-12"
            >
              {/* Glow effect derrière le titre */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute -inset-x-12 -inset-y-20 md:-inset-y-32"
              >
                <div className="w-full h-full rounded-[80px] bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 blur-3xl" />
              </motion.div>

              <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
                <motion.span 
                  className="block text-white mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Créons ensemble
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  votre succès
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-16"
            >
              Que vous soyez artiste en devenir, programmateur exigeant ou marque ambitieuse,
              <span className="text-pink-300 font-medium"> notre équipe est prête à transformer vos projets en réalité.</span>
            </motion.p>

            {/* CTA Principal - Email */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <a
                href="mailto:booking@tinyteam.fr"
                className="group inline-flex items-center gap-4 px-10 py-6 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
              >
                <Mail className="w-7 h-7 text-black" />
                <span className="font-bold text-black text-xl">booking@tinyteam.fr</span>
                <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 text-white/50 text-sm"
              >
                Réponse garantie sous 48h
              </motion.p>
            </motion.div>

            {/* Informations de contact supplémentaires */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {/* Email général */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Email Général</h3>
                <a href="mailto:contact@tinyteam.fr" className="text-white/60 hover:text-pink-300 transition-colors">
                  contact@tinyteam.fr
                </a>
              </motion.div>

              {/* Réseaux sociaux */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Suivez-nous</h3>
                <p className="text-white/60">@tinyteamprod</p>
              </motion.div>

              {/* Téléphone */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Parlons-en</h3>
                <p className="text-white/60">Sur rendez-vous</p>
              </motion.div>
            </motion.div>

            {/* Message de clôture */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-20"
            >
              <p className="text-2xl md:text-3xl text-white/70 italic font-light">
                "Tiny Team, <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">Big Dreams</span>"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};