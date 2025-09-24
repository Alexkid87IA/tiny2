import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Music, Youtube, ExternalLink } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  image: string;
  posterImage?: string;
  tagline: string;
  showName: string;
  description: string;
  websiteUrl?: string;
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  stats?: {
    shows: number;
    cities: number;
  };
  diffusion?: string;
}

interface HeroSectionProps {
  artist: Artist;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ artist }) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Créer des particules flottantes
    if (particlesRef.current && particlesRef.current.children.length === 0) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-pink-400/40 rounded-full';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${20 + Math.random() * 10}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const getSocialIcon = (platform: string) => {
    switch(platform) {
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'tiktok': return <Music className="w-5 h-5" />;
      case 'youtube': return <Youtube className="w-5 h-5" />;
      default: return <Music className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F29]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }
      `}</style>

      {/* Image de fond avec parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={artist.posterImage || artist.image}
          alt={artist.name}
          className="w-full h-full object-cover object-center opacity-50"
          style={{ filter: 'brightness(0.4) contrast(1.2) saturate(0.8)' }}
        />
      </motion.div>

      {/* Overlays de gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-[#0A0F29]/80 to-[#0A0F29]/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F29] via-transparent to-[#0A0F29] z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(10,15,41,0.4)_100%)] z-[3]" />

      {/* Particules animées */}
      <div ref={particlesRef} className="absolute inset-0 z-[4]" />

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Nom de l'artiste */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
              {artist.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 italic font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-pink-400 text-2xl">«</span>
            {' '}{artist.tagline}{' '}
            <span className="text-pink-400 text-2xl">»</span>
          </motion.p>

          {/* Badge spectacle */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-xs text-white/60 uppercase tracking-wider">Spectacle</span>
            <span className="text-2xl font-bold text-gradient from-pink-300 via-pink-200 to-pink-300">
              {artist.showName}
            </span>
          </motion.div>

          {/* Badge Diffusion */}
          {artist.diffusion && (
            <motion.div
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-pink-500/20 text-white/80 text-sm font-semibold uppercase tracking-wide">
                Diffusion : {artist.diffusion}
              </span>
            </motion.div>
          )}

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {artist.description}
          </motion.p>

          {/* Social & Stats */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white/80 group-hover:text-white">
                  {getSocialIcon('instagram')}
                </span>
              </a>
              <a 
                href={`https://tiktok.com/@${artist.social.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white/80 group-hover:text-white">
                  {getSocialIcon('tiktok')}
                </span>
              </a>
              <a 
                href={`https://youtube.com/${artist.social.youtube.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white/80 group-hover:text-white">
                  {getSocialIcon('youtube')}
                </span>
              </a>
            </div>

            {/* Stats */}
            {artist.stats && (
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{artist.stats.shows}+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Spectacles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{artist.stats.cities}+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Villes</div>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA principal */}
          {artist.websiteUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href={artist.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-lg">Voir les dates</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Découvrir</span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};