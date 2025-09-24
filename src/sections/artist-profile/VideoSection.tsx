import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  showName: string;
  videoUrl?: string;
  videoThumbnail?: string;
}

interface VideoSectionProps {
  artist: Artist;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Extraire l'ID YouTube de l'URL
  const getYouTubeId = (url: string) => {
    const match = url?.match(/(?:youtube\.com\/embed\/|youtu\.be\/|watch\?v=)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const youtubeId = artist.videoUrl ? getYouTubeId(artist.videoUrl) : '';
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0`;

  if (!artist.videoUrl) return null;

  return (
    <section className="relative py-32 bg-[#080C20]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Dots pattern animés */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
          animate={{
            y: [0, 30],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        {/* Scan lines effect */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.01) 2px,
              rgba(255, 255, 255, 0.01) 4px
            )`
          }}
        />
      </div>

      {/* Orbes de lumière */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Play className="w-4 h-4 text-pink-400" />
            <span className="text-xs text-white/70 uppercase tracking-wider">
              Extrait vidéo
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block text-gradient from-white via-blue-100 to-white">
              Découvrez un extrait
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              {artist.showName}
            </span>
          </h2>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border-2 border-white/10 group">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F29] to-[#16213e]">
                    {artist.videoThumbnail && (
                      <img
                        src={artist.videoThumbnail}
                        alt={`Aperçu de ${artist.showName}`}
                        className="w-full h-full object-cover opacity-70"
                      />
                    )}
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play button with pulse */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Pulse rings */}
                    <motion.div
                      className="absolute w-32 h-32 rounded-full border-2 border-white/30"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="absolute w-32 h-32 rounded-full border-2 border-white/30"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />
                    
                    {/* Play button */}
                    <motion.button
                      onClick={handlePlayClick}
                      className="relative w-24 h-24 rounded-full glass-card backdrop-blur-md border-2 border-white/20 flex items-center justify-center group/btn hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <Play className="relative w-10 h-10 text-white fill-white ml-1" />
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <iframe
                    src={embedUrl}
                    title={`Extrait du spectacle ${artist.showName}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover effect shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full pointer-events-none"
              animate={{
                translateX: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Controls decoratifs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-between mt-6 px-4"
          >
            <span className="text-sm text-white/50">
              Extrait officiel - {artist.showName}
            </span>
            <span className="text-sm text-white/50">
              HD 1080p
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};