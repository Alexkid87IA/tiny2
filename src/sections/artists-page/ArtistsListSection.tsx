import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight, Play, Users, Star, Eye, Heart } from 'lucide-react';
import { artists } from '../../data/artists';

const ArtistSlide = ({ artist, isActive, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
    animate={{ 
      opacity: isActive ? 1 : 0.7, 
      scale: isActive ? 1 : 0.9,
      rotateY: 0,
      zIndex: isActive ? 50 : 10
    }}
    transition={{ 
      duration: 0.8, 
      type: "spring",
      stiffness: 100,
      delay: index * 0.1
    }}
    className={`absolute inset-0 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
  >
    <div className="relative w-full h-full rounded-3xl overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-purple-500/20 mix-blend-overlay opacity-60" />
      </div>

      {/* Floating Stats */}
      {artist.stats && (
        <div className="absolute top-6 right-6 space-y-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex items-center gap-2 text-sm text-white">
              <Users className="w-4 h-4" />
              <span>{artist.stats.followers?.toLocaleString()}+ followers</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
            transition={{ delay: 0.6 }}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex items-center gap-2 text-sm text-white">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{artist.stats.shows} spectacles</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Play Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          scale: isActive ? 1 : 0 
        }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <button className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group/btn hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          <Play className="w-10 h-10 text-white ml-1" />
        </button>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isActive ? 1 : 0, 
            y: isActive ? 0 : 30 
          }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Artist Info */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
              {artist.name}
            </h3>
            <p className="text-xl text-white/90 mb-4">{artist.type}</p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {artist.description}
            </p>
          </div>

          {/* Next Show */}
          {artist.dates && artist.dates[0] && (
            <div className="glass-card rounded-2xl p-6 max-w-md">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-400" />
                Prochaine date
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="font-medium">{artist.dates[0].date} - {artist.dates[0].time}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>{artist.dates[0].venue}, {artist.dates[0].location}</span>
                </div>
                <div className="pt-3">
                  <Link
                    to={`/artiste/${artist.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-medium hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group/btn"
                  >
                    <span>Découvrir l'artiste</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Achievements */}
          {artist.achievements && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white/70 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Récompenses
              </h4>
              <div className="space-y-2">
                {artist.achievements.slice(0, 2).map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                    <span className="text-sm text-white/60">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{ x: isActive ? ["0%", "200%"] : "0%" }}
        transition={{
          duration: 2,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
    </div>
  </motion.div>
);

const ThumbnailNav = ({ artists, currentIndex, setCurrentIndex }) => (
  <div className="flex justify-center gap-4 overflow-x-auto pb-4">
    {artists.map((artist, index) => (
      <motion.button
        key={artist.id}
        onClick={() => setCurrentIndex(index)}
        className={`relative flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
          index === currentIndex 
            ? 'ring-2 ring-pink-400 scale-110' 
            : 'opacity-60 hover:opacity-80'
        }`}
        whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-1 left-1 right-1">
          <div className="text-xs text-white font-medium truncate">
            {artist.name}
          </div>
        </div>
        {index === currentIndex && (
          <motion.div
            layoutId="active-thumb"
            className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    ))}
  </div>
);

const AutoplayControls = ({ isPlaying, setIsPlaying }) => (
  <div className="flex items-center">
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
    >
      {isPlaying ? (
        <div className="w-2 h-6 bg-white/70 rounded-sm" />
      ) : (
        <Play className="w-6 h-6 text-white/70 ml-0.5" />
      )}
    </button>
  </div>
);

export const ArtistsListSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artists.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
                Découvrez nos
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                talents uniques
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Chaque artiste de Tiny Team apporte sa vision unique et son talent exceptionnel.
            Explorez leurs univers et découvrez ce qui les rend si spéciaux.
          </p>
        </motion.div>

        {/* Main Slideshow */}
        <div className="relative max-w-7xl mx-auto">
          {/* Slideshow Container with External Navigation */}
          <div className="flex items-center gap-4 md:gap-8 mb-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:flex w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 items-center justify-center group z-50"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Slideshow */}
            <div className="relative aspect-[4/5] max-w-2xl mx-auto rounded-3xl overflow-hidden flex-1">
              <div className="absolute inset-0">
                {artists.map((artist, index) => (
                  <ArtistSlide
                    key={artist.id}
                    artist={artist}
                    isActive={index === currentIndex}
                    index={index}
                  />
                ))}
              </div>

              {/* Mobile Navigation Arrows - Inside on mobile only */}
              <button
                onClick={prevSlide}
                className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 flex items-center justify-center group z-50"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 flex items-center justify-center group z-50"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-6 left-6 right-6 z-50">
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 to-pink-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / artists.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Artist Counter */}
              <div className="absolute top-6 left-6 z-50">
                <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-medium text-sm md:text-base">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(artists.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="hidden md:flex w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 items-center justify-center group z-50"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <AutoplayControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/50">Artiste actuel :</span>
              <span className="text-lg font-semibold text-white">
                {artists[currentIndex].name}
              </span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <ThumbnailNav
            artists={artists}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
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
            to={`/artiste/${artists[currentIndex].id}`}
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
            
            <span className="relative font-bold text-white text-lg">Découvrir cet artiste</span>
            <motion.div
              className="relative"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
