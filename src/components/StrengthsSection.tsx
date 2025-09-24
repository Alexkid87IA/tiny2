import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Globe, Users, Orbit } from 'lucide-react';

const strengths = [
  {
    icon: Rocket,
    title: "Stratégie & Développement",
    description: "Transformer un rêve en trajectoire.",
    gradient: "from-purple-500/20 to-blue-500/20",
    glowColor: "rgba(168,85,247,0.2)"
  },
  {
    icon: Globe,
    title: "Diffusion & Tournées",
    description: "Ouvrir chaque scène, chaque ville.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "rgba(59,130,246,0.2)"
  },
  {
    icon: Users,
    title: "Production & Management",
    description: "Encadrer sans enfermer.",
    gradient: "from-cyan-500/20 to-yellow-500/20",
    glowColor: "rgba(234,179,8,0.2)"
  },
  {
    icon: Orbit,
    title: "Digital & Audience",
    description: "Faire rayonner votre talent à 360°.",
    gradient: "from-yellow-500/20 to-purple-500/20",
    glowColor: "rgba(168,85,247,0.2)"
  }
];

const StrengthCard = ({ strength, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Icon */}
      <div className="relative mb-8">
        <motion.div
          className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle, ${strength.glowColor} 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
          <strength.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {strength.title}
        </h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {strength.description}
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  </motion.div>
);

export const StrengthsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.2),transparent_70%)]" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,50,255,0.15),transparent_50%)]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative container mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative inline-block mb-16"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
            <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
              <span className="inline-block text-gradient from-white via-blue-100 to-white">
                Du rêve à la réalité :
              </span>
              <br />
              <span className="inline-block text-gradient from-yellow-300 via-yellow-200 to-yellow-300">
                nos 4 forces pour écrire
              </span>
              <br />
              <span className="inline-block text-gradient from-purple-300 via-purple-200 to-purple-300">
                votre trajectoire
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.title} strength={strength} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl text-gradient from-yellow-300 via-yellow-200 to-yellow-300 font-medium mb-6">
            Prêt à écrire la vôtre ?
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-300 to-transparent rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};