import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star } from 'lucide-react';

export const ArtistsCTASection = () => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main CTA */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
              <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block text-gradient from-white via-blue-100 to-white">
                  Vous êtes artiste ?
                </span>
                <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-4">
                  Rejoignez la famille !
                </span>
              </h2>
            </div>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Vous souhaitez faire partie de l'aventure Tiny Team ? 
              Contactez-nous pour discuter de votre projet artistique et découvrir comment nous pouvons vous accompagner.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                      "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-transparent to-blue-500/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative font-bold text-white text-lg">Rejoindre Tiny Team</span>
                <motion.div
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </Link>
              
              <Link
                to="/programmateur"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
              >
                <Star className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Programmer nos artistes</span>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Accompagnement personnalisé</h3>
                <p className="text-sm text-white/70">Une équipe dédiée à votre réussite</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Expertise reconnue</h3>
                <p className="text-sm text-white/70">15 ans d'expérience dans le spectacle</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <ArrowRight className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Résultats concrets</h3>
                <p className="text-sm text-white/70">100+ artistes accompagnés avec succès</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};