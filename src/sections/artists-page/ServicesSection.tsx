import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Shield, Rocket, PenTool, Globe, Lightbulb, Users, Star, TrendingUp, Heart } from 'lucide-react';

const stats = [
  {
    value: "10+",
    label: "artistes accompagnés",
    icon: Users,
    gradient: "from-pink-400 to-pink-500",
    delay: 0.1
  },
  {
    value: "360°",
    label: "accompagnement",
    icon: TrendingUp,
    gradient: "from-purple-400 to-purple-500",
    delay: 0.2
  },
  {
    value: "50+",
    label: "villes en France",
    icon: Globe,
    gradient: "from-blue-400 to-blue-500",
    delay: 0.3
  },
  {
    value: "15+",
    label: "années d'expérience",
    icon: Star,
    gradient: "from-yellow-400 to-yellow-500",
    delay: 0.4
  }
];

const approach = [
  {
    number: "01",
    title: "Nous révélons",
    subtitle: "votre potentiel unique",
    description: "Chaque artiste a sa propre voix. Nous l'aidons à la trouver, la développer et la faire entendre.",
    gradient: "from-pink-500/20 to-purple-500/20",
    glowColor: "rgba(236,72,153,0.3)",
    titleGradient: "from-pink-300 via-pink-200 to-pink-300"
  },
  {
    number: "02",
    title: "Nous construisons",
    subtitle: "votre carrière ensemble",
    description: "De la première scène aux plus grandes salles, nous vous accompagnons à chaque étape de votre parcours.",
    gradient: "from-purple-500/20 to-blue-500/20",
    glowColor: "rgba(168,85,247,0.3)",
    titleGradient: "from-purple-300 via-purple-200 to-purple-300"
  },
  {
    number: "03",
    title: "Nous amplifions",
    subtitle: "votre impact",
    description: "Votre talent mérite d'être vu et entendu. Nous mettons notre réseau et notre expertise à votre service.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "rgba(59,130,246,0.3)",
    titleGradient: "from-blue-300 via-blue-200 to-blue-300"
  }
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: stat.delay,
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
    
    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-glow transition-all duration-300">
          {stat.value}
        </div>
        
        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {stat.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const ApproachCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateY: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.3,
      type: "spring",
      stiffness: 80
    }}
    whileHover={{ 
      y: -12,
      scale: 1.02,
      rotateY: 5,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    }}
    className="group relative perspective-1000"
  >
    {/* Glow Effect */}
    <motion.div
      className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0, 0.3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden h-full transform-gpu">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Number Badge */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full glass-effect flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
          {item.number}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative space-y-6">
        <div className="space-y-3">
          <motion.h3 
            className={`text-3xl md:text-4xl font-bold text-gradient ${item.titleGradient} group-hover:text-glow transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
          >
            {item.title}
          </motion.h3>
          <h4 className="text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
            {item.subtitle}
          </h4>
        </div>
        
        <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
    </div>
  </motion.div>
);

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: `radial-gradient(circle, ${
            ['rgba(236,72,153,0.1)', 'rgba(168,85,247,0.1)', 'rgba(59,130,246,0.1)', 'rgba(34,197,94,0.1)'][i % 4]
          } 0%, transparent 70%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const ArtistsServicesSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <FloatingOrbs />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            
            <h2 className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
              <span className="block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Ce que nous faisons
              </span>
              <span className="block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent mt-2">
                pour vous
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16"
          >
            Chez Tiny Team, nous mettons notre expertise complète au service de votre talent.
            De la production à la diffusion, découvrez comment nous transformons vos rêves en succès.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-6xl font-bold mb-6">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Notre approche
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                en trois temps
              </span>
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Une méthode éprouvée qui place l'artiste au cœur de chaque décision
              et transforme le potentiel en performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {approach.map((item, index) => (
              <ApproachCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Transition to Artists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
            <h3 className="relative text-2xl md:text-4xl font-bold text-gradient from-pink-300 via-pink-200 to-pink-300 mb-6">
              Cette expertise se traduit par des succès concrets
            </h3>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Découvrez les artistes qui nous font confiance et les résultats exceptionnels
            que nous obtenons ensemble.
          </p>
        </motion.div>
      </div>
    </section>
  );
};