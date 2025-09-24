import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { artists } from '../data/artists';

const ArtistCard = ({ artist, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <Link 
      to={`/artiste/${artist.id}`}
      className="block relative aspect-[2/3] rounded-2xl overflow-hidden"
    >
      {/* Affiche */}
      <img
        src={artist.posterImage || artist.image}
        alt={artist.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay au hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Bouton Découvrir */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300">
          <span>Découvrir l'artiste</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
      
      {/* Bordure élégante */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300" />
      
      {/* Effet de brillance */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
    </Link>
  </motion.div>
);

export const ArtistsSliderSection = () => {
  return (
    <section id="artists" className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
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
              className="relative"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Nos artistes
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  en lumière
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8"
          >
            Découvrez les talents exceptionnels qui font la richesse de notre collectif.
            Des artistes uniques qui partagent notre passion pour le spectacle vivant.
          </motion.p>
        </div>

        {/* Grille d'artistes - Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {artists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </div>

        {/* Grille d'artistes - Mobile (1 colonne) */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            {artists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/artistes"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300"
          >
            <span className="font-bold text-black text-lg">Voir tous nos artistes</span>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};