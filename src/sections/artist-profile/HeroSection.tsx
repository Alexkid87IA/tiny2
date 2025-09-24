import { motion } from 'framer-motion';
import { Instagram, BookText as TikTok, Youtube } from 'lucide-react';

const SocialIcon = ({ platform, href }) => {
  const Icon = platform === 'instagram' ? Instagram : platform === 'tiktok' ? TikTok : Youtube;
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
      </div>
    </motion.a>
  );
};

export const HeroSection = ({ artist }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F29] via-[#0A0F29]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0A0F29]/50" />
        <img
          src={artist.image}
          alt={artist.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.9]">
              <span className="block text-gradient from-white via-white to-white/70">
                {artist.name}
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-4">
                {artist.type}
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl">
              {artist.tagline}
            </p>

            <div className="flex items-center gap-4">
              <SocialIcon platform="instagram" href={artist.social.instagram} />
              <SocialIcon platform="tiktok" href={artist.social.tiktok} />
              <SocialIcon platform="youtube" href={artist.social.youtube} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};