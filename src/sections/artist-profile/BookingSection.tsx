import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Calendar, Shield, Heart } from 'lucide-react';

export const BookingSection = ({ artist }) => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
              <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block text-gradient from-white via-blue-100 to-white">
                  Programmer
                </span>
                <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                  {artist.name}
                </span>
              </h2>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Vous souhaitez programmer {artist.name} dans votre salle, pour un événement privé ou un festival ? 
              Notre équipe vous accompagne pour créer un moment d'exception.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Pourquoi choisir {artist.name} ?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Artiste reconnu</h4>
                      <p className="text-white/70">
                        {artist.achievements?.[0] || "Un talent confirmé qui séduit le public"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Public conquis</h4>
                      <p className="text-white/70">
                        {artist.stats?.followers ? `${artist.stats.followers.toLocaleString()}+ followers` : "Une communauté fidèle et engagée"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Accompagnement Tiny Team</h4>
                      <p className="text-white/70">
                        Support technique, logistique et communication inclus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              {artist.stats && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {artist.stats.shows || 0}
                    </div>
                    <div className="text-sm text-white/60">Spectacles</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {artist.stats.cities || 0}
                    </div>
                    <div className="text-sm text-white/60">Villes</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {artist.stats.followers ? `${Math.round(artist.stats.followers / 1000)}K` : '0'}
                    </div>
                    <div className="text-sm text-white/60">Followers</div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
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
                      Organisons votre événement
                    </h3>
                    <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      Notre équipe booking s'occupe de tout : disponibilités, technique, logistique et communication.
                    </p>
                  </div>

                  {/* Services inclus */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
                      <span>Gestion technique</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
                      <span>Support logistique</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
                      <span>Communication</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
                      <span>Suivi personnalisé</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <Link
                      to="/programmateur"
                      className="group/btn relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden w-full justify-center"
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
                      
                      <span className="relative font-bold text-white text-lg">Contacter notre équipe booking</span>
                      <motion.div
                        className="relative"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-6 h-6 text-white" />
                      </motion.div>
                    </Link>

                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300 w-full justify-center"
                    >
                      <Heart className="w-5 h-5 text-pink-400 group-hover/btn:text-pink-300 transition-colors duration-300" />
                      <span className="font-semibold text-white group-hover/btn:text-glow transition-all duration-300">Demande personnalisée</span>
                      <ArrowRight className="w-5 h-5 text-white/70 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </Link>
                  </div>

                  {/* Contact direct */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-white/50 mb-2">Contact direct :</p>
                    <a
                      href="mailto:booking@tinyteam.fr"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300 font-medium"
                    >
                      booking@tinyteam.fr
                    </a>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};