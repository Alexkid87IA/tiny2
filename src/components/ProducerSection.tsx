import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Star, TrendingUp, Globe, Shield, Target, Zap, Heart } from 'lucide-react';
import { artists } from '../data/artists';

const stats = [
  {
    value: "Nos",
    label: "artistes talentueux",
    icon: Users,
    gradient: "from-pink-400 to-pink-500"
  },
  {
    value: "Forte",
    label: "demande",
    icon: TrendingUp,
    gradient: "from-purple-400 to-purple-500"
  },
  {
    value: "Présence",
    label: "nationale",
    icon: Globe,
    gradient: "from-blue-400 to-blue-500"
  }
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -8,
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    className="group relative"
  >
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative glass-card rounded-2xl p-4 md:p-6 h-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative flex flex-col items-center text-center space-y-3 md:space-y-4">
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-glow transition-all duration-300">
          {stat.value}
        </div>
        
        <div className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {stat.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const ArtistCard = ({ artist, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group"
  >
    <Link to={`/artiste/${artist.id}`} className="block">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Production Badge */}
        {(artist.production || artist.diffusion) && (
          <div className="absolute top-3 left-3 right-3">
            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-center">
              <span className="text-xs text-white/90 font-medium">
                {artist.production ? `Production par ${artist.production}` : `Diffusion P/O ${artist.diffusion}`}
              </span>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="text-sm md:text-lg font-bold text-white mb-1 group-hover:text-glow transition-all duration-300">
            {artist.name}
          </h3>
          <p className="text-xs md:text-sm text-white/80 mb-2">{artist.type}</p>
          <p className="text-xs text-white/70 line-clamp-2">{artist.tagline}</p>
          
          {artist.stats && (
            <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{artist.stats.shows} spectacles</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>{artist.stats.cities} villes</span>
              </div>
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-3 md:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs md:text-sm font-medium">
            Découvrir l'artiste
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
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

export const ProducerSection = () => {
  return (
    <section id="programmateurs" className="relative py-20 md:py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9]">
                <span className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Programmateurs,
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 bg-clip-text text-transparent mt-2">
                  enrichissez votre saison
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mt-6 md:mt-8"
          >
            Tiny Team accompagne des humoristes talentueux avec exigence, écoute et créativité.
            Nous vous offrons une programmation fluide, fiable et amplifiée pour faire rayonner vos événements.
          </motion.p>
        </div>

        {/* Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 blur-3xl" />
            <h3 className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-gradient from-emerald-300 via-emerald-200 to-emerald-300">
              Chaque spectacle devient
              <br />
              une expérience inoubliable
            </h3>
          </div>
          <p className="text-sm md:text-lg text-white/70 max-w-3xl mx-auto mt-6">
            Avec Tiny Team, vous ne programmez pas seulement un artiste, vous offrez à votre public
            une expérience complète et mémorable.
          </p>
        </motion.div>

        {/* All Artists */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Tous nos talents
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                disponibles
              </span>
            </h3>
            <p className="text-sm md:text-lg text-white/70 max-w-3xl mx-auto">
              Découvrez notre roster complet d'artistes prêts à enrichir votre programmation.
              Cliquez sur un artiste pour voir son profil détaillé et ses disponibilités.
            </p>
          </motion.div>

          {/* Artists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto mb-8 md:mb-12">
            {artists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>

          {/* Link to full artists page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/artistes"
              className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
            >
              <Users className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
              <span className="font-semibold text-white group-hover:text-glow transition-all duration-300 text-sm md:text-base">
                Voir la page artistes complète
              </span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 md:-inset-8 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
            <div className="relative glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Prêt à créer quelque chose d'unique ?
              </h3>
              <p className="text-sm md:text-base text-white/70 mb-6 md:mb-8">
                Discutons de votre projet et découvrons ensemble comment nos artistes peuvent contribuer à son succès.
                Notre équipe vous accompagne dans le choix de l'artiste parfait pour votre événement et votre public.
              </p>
              
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300"
              >
                <span className="relative font-bold text-black text-base md:text-lg">
                  Contactez-nous pour programmer un artiste
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Contact direct */}
              <div className="pt-4 md:pt-6 border-t border-white/10 mt-6 md:mt-8">
                <p className="text-xs md:text-sm text-white/50 mb-2">Contact direct :</p>
                <a
                  href="mailto:booking@tinyteam.fr"
                  className="text-pink-400 hover:text-pink-300 transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  booking@tinyteam.fr
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};