import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  posterImage: string;
  showName: string;
  showDescription: string;
  longDescription?: string;
  websiteUrl?: string;
  achievements?: string[];
}

interface ShowSectionProps {
  artist: Artist;
}

export const ShowSection: React.FC<ShowSectionProps> = ({ artist }) => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0F29] to-[#080C20]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Grid animée */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridFloat 30s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          
          {/* Colonne gauche - Affiche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card container */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10">
                <motion.img
                  src={artist.posterImage}
                  alt={`Affiche du spectacle ${artist.showName}`}
                  className="w-full h-auto aspect-[3/4] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  whileHover={{ translateX: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Badge "Disponible" */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite - Détails */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-xs text-white/70 uppercase tracking-wider">
                  Spectacle en tournée
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-gradient from-pink-300 via-pink-200 to-pink-300">
                  {artist.showName}
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                {artist.showDescription}
              </p>
              {artist.longDescription && (
                <p className="text-lg text-white/70 leading-relaxed">
                  {artist.longDescription}
                </p>
              )}
            </div>

            {/* CTA Section */}
            <motion.div 
              className="relative glass-card rounded-3xl p-8 text-center overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Intéressé par ce spectacle ?
              </h3>
              <p className="text-white/70 mb-6">
                Découvrez toutes les dates et réservez vos places
              </p>
              
              {artist.websiteUrl && (
                <motion.a
                  href={artist.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)",
                        "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6)",
                        "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-transparent to-blue-500/50 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative font-bold text-white text-lg">Voir les dates</span>
                  <ExternalLink className="relative w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};