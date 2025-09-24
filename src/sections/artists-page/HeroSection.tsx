import React from 'react';
import { motion } from 'framer-motion';

const AnimatedOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          width: Math.random() * 300 + 150,
          height: Math.random() * 300 + 150,
          background: `radial-gradient(circle, ${
            ['rgba(236,72,153,0.15)', 'rgba(168,85,247,0.15)', 'rgba(59,130,246,0.15)', 'rgba(34,197,94,0.15)'][i % 4]
          } 0%, transparent 70%)`,
          left: `${Math.random() * 120 - 10}%`,
          top: `${Math.random() * 120 - 10}%`,
        }}
        animate={{
          x: [0, Math.random() * 300 - 150, 0],
          y: [0, Math.random() * 300 - 150, 0],
          scale: [1, Math.random() * 0.5 + 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

const GlowingText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut", delay }}
  >
    <motion.div
      className="absolute inset-0 blur-3xl"
      animate={{
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, rotateX: -20 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ 
      duration: 1, 
      delay: 2 + index * 0.2,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -15,
      scale: 1.08,
      rotateX: 10,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    }}
    className="group relative perspective-1000"
  >
    <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative glass-card rounded-3xl p-8 h-full overflow-hidden transform-gpu backdrop-blur-xl border border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative text-center space-y-4">
        <motion.div 
          className="text-4xl md:text-5xl font-bold text-white group-hover:text-glow transition-all duration-300"
          animate={{
            textShadow: [
              "0 0 20px rgba(255,255,255,0.1)",
              "0 0 40px rgba(255,255,255,0.3)",
              "0 0 20px rgba(255,255,255,0.1)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {stat.value}
        </motion.div>
        
        <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed font-medium">
          {stat.label}
        </div>
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ x: ["0%", "200%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />
    </div>
  </motion.div>
);

const PulsatingDot = ({ delay = 0, size = "w-3 h-3", color = "bg-pink-400" }) => (
  <motion.div
    className={`absolute ${size} rounded-full ${color}`}
    animate={{
      scale: [1, 2.5, 1],
      opacity: [1, 0.2, 1]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Triangles */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`triangle-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className="w-full h-full"
          style={{
            background: `linear-gradient(45deg, ${
              ['rgba(236,72,153,0.2)', 'rgba(168,85,247,0.2)', 'rgba(59,130,246,0.2)'][i % 3]
            }, transparent)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </motion.div>
    ))}
    
    {/* Circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute rounded-full border border-white/10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: Math.random() * 25 + 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const ArtistsHeroSection = () => {
  const stats = [
    { value: "10+", label: "Artistes d'exception" },
    { value: "500+", label: "Spectacles réalisés" },
    { value: "50+", label: "Villes conquises" }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F29] via-[#1a1f3a] to-[#0A0F29]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.3),transparent_70%)]" />
        
        {/* Dynamic background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.2), transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.2), transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2), transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.2), transparent 50%)"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated elements */}
        <AnimatedOrbs />
        <GeometricShapes />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title with spectacular effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative px-2 md:px-0 mb-20"
          >
            {/* Background glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute -inset-x-12 -inset-y-20 md:-inset-y-32"
            >
              <motion.div
                className="w-full h-full rounded-[80px] bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.9, 0.5],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Pulsating dots around title */}
            <div className="absolute -top-8 -left-8">
              <PulsatingDot delay={0} size="w-4 h-4" color="bg-pink-400" />
            </div>
            <div className="absolute -top-4 -right-12">
              <PulsatingDot delay={0.8} size="w-3 h-3" color="bg-purple-400" />
            </div>
            <div className="absolute -bottom-6 -left-10">
              <PulsatingDot delay={1.6} size="w-5 h-5" color="bg-blue-400" />
            </div>
            <div className="absolute -bottom-8 -right-8">
              <PulsatingDot delay={2.4} size="w-3 h-3" color="bg-emerald-400" />
            </div>

            <GlowingText delay={0.3}>
              <h1 className="relative text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-[0.8] md:leading-[0.8]">
                <motion.span 
                  className="inline-block bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                >
                  Nos artistes
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent"
                  initial={{ y: 100, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                >
                  exceptionnels
                </motion.span>
              </h1>
            </GlowingText>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="relative mb-20"
          >
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-pink-500/10 via-purple-500/15 to-blue-500/10 blur-2xl" />
            <p className="relative text-xl md:text-3xl text-white/80 leading-relaxed max-w-5xl mx-auto font-light">
              Découvrez les talents uniques qui composent la famille Tiny Team.
              <br className="hidden md:block" />
              <span className="text-gradient from-pink-300 via-pink-200 to-pink-300 font-medium">
                Des artistes passionnés qui transforment chaque scène en moment d'exception.
              </span>
            </p>
          </motion.div>

          {/* Enhanced Stats with 3D effects */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Scroll indicator with premium animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.5 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40 text-sm uppercase tracking-[0.3em] font-medium"
            >
              Découvrir nos talents
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 2 }}
      />
    </section>
  );
};