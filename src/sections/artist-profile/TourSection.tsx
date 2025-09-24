import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';

export const TourSection = ({ artist }) => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Dates & Billetterie
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Retrouvez toutes les dates de {artist.name} et réservez vos places directement sur son site officiel.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden group">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative text-center space-y-8">
              {/* Icon */}
              <div className="relative mx-auto">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-20 h-20 mx-auto rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="w-10 h-10 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-glow transition-all duration-300">
                  Toutes les dates de {artist.name}
                </h3>
                <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  Découvrez le calendrier complet des représentations et réservez vos places en quelques clics sur le site officiel de l'artiste.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card rounded-xl p-4 text-center">
                  <Calendar className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-white/70">Calendrier complet</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-white/70">Toutes les villes</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <ExternalLink className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-white/70">Réservation directe</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    // TODO: Remplacer par le vrai lien du site de l'artiste
                    window.open('#', '_blank');
                  }}
                  className="group/btn relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-transparent to-blue-500/50 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative font-bold text-white text-lg">Voir les dates & réserver</span>
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </button>
              </div>

              {/* Note */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-white/50">
                  Vous serez redirigé vers le site officiel de {artist.name} pour la réservation
                </p>
              </div>
            </div>

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};