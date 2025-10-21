import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';

export const TeamCTASection = () => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
              <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block text-gradient from-white via-blue-100 to-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Prêt à nous rejoindre
                </span>
                <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  dans
                </span>
                <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  L'Aventure ?
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent to-pink-500/50 w-20" />
            <div className="text-3xl">✨</div>
            <div className="h-px bg-gradient-to-l from-transparent to-pink-500/50 w-20" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl text-white/80 leading-relaxed">
              Transformons ensemble vos rêves artistiques en réalité spectaculaire.
            </p>
            <p className="text-lg text-white/60">
              Une approche unique développée depuis 2014, perfectionnée en 2025
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300"
            >
              <span className="text-2xl">🎭</span>
              <span className="font-bold text-black text-lg">Discutons de votre projet</span>
              <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-2xl">🌟</span>
              <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Découvrir nos services</span>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};