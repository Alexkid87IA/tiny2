import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Compass, Layout, Sun, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Star,
    title: "Imaginer",
    description: "Tout commence par",
    details: "un rêve.",
    subtext: "Nous l'écoutons, nous le façonnons, nous lui donnons vie. Chaque projet est unique, chaque vision mérite une approche sur mesure.",
    gradient: "from-yellow-200/20 to-yellow-400/20",
    glowColor: "rgba(234,179,8,0.2)",
    lineGradient: "from-yellow-200/50 via-yellow-300/30 to-yellow-200/10",
    features: [
      "Analyse approfondie de votre projet",
      "Définition des objectifs artistiques",
      "Étude de faisabilité",
      "Planning stratégique"
    ]
  },
  {
    icon: Compass,
    title: "Connecter",
    description: "Nous ouvrons",
    details: "les portes.",
    subtext: "Notre réseau devient le vôtre. Nous créons les connexions qui feront grandir votre projet et rayonner votre talent.",
    gradient: "from-blue-200/20 to-blue-400/20",
    glowColor: "rgba(59,130,246,0.2)",
    lineGradient: "from-blue-200/50 via-blue-300/30 to-blue-200/10",
    features: [
      "Mise en relation avec les programmateurs",
      "Accès aux salles de spectacle",
      "Partenariats stratégiques",
      "Opportunités médiatiques"
    ]
  },
  {
    icon: Layout,
    title: "Construire",
    description: "Nous donnons vie",
    details: "à votre vision.",
    subtext: "De la conception à la réalisation, chaque étape est méticuleusement orchestrée pour garantir l'excellence de votre spectacle.",
    gradient: "from-purple-200/20 to-purple-400/20",
    glowColor: "rgba(168,85,247,0.2)",
    lineGradient: "from-purple-200/50 via-purple-300/30 to-purple-200/10",
    features: [
      "Production technique complète",
      "Direction artistique",
      "Gestion logistique",
      "Coordination des équipes"
    ]
  },
  {
    icon: Sun,
    title: "Rayonner",
    description: "Votre talent brille",
    details: "de mille feux.",
    subtext: "Votre succès est notre priorité. Nous mettons en place les stratégies qui vous permettront de conquérir votre public.",
    gradient: "from-orange-200/20 to-orange-400/20",
    glowColor: "rgba(249,115,22,0.2)",
    lineGradient: "from-orange-200/50 via-orange-300/30 to-orange-200/10",
    features: [
      "Stratégie de communication",
      "Présence digitale",
      "Relations presse",
      "Développement d'audience"
    ]
  }
];

const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group relative"
  >
    <div className="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-12">
      {/* Icon Container */}
      <div className="relative flex-shrink-0 group/icon">
        <motion.div
          className="absolute -inset-8 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-700"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${step.glowColor} 0%, transparent 70%)`
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-700"
          animate={{
            background: [
              `linear-gradient(45deg, ${step.glowColor}, transparent)`,
              `linear-gradient(225deg, ${step.glowColor}, transparent)`,
              `linear-gradient(45deg, ${step.glowColor}, transparent)`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div 
          className={`relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.gradient} 
                     flex items-center justify-center transform-gpu
                     group-hover/icon:scale-110 transition-all duration-500
                     before:absolute before:inset-0 before:rounded-2xl
                     before:bg-gradient-to-br before:from-white/10 before:to-transparent
                     before:opacity-0 group-hover/icon:before:opacity-100 before:transition-opacity before:duration-500
                     shadow-lg shadow-black/5 group-hover/icon:shadow-2xl`}
        >
          <step.icon 
            className="w-8 h-8 md:w-12 md:h-12 text-white/80 group-hover/icon:text-white transition-colors duration-300" 
            strokeWidth={1.5} 
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="relative group/content"
        >
          <motion.div
            className="absolute -inset-8 rounded-3xl opacity-0 group-hover/content:opacity-100 transition-opacity duration-700 -z-10"
            animate={{
              background: [
                `linear-gradient(45deg, ${step.glowColor}, transparent 80%)`,
                `linear-gradient(225deg, ${step.glowColor}, transparent 80%)`,
                `linear-gradient(45deg, ${step.glowColor}, transparent 80%)`
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover/content:text-glow transition-all duration-300">
              {step.title}
            </h3>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/90 group-hover/content:text-white transition-colors duration-300 leading-relaxed">
                {step.description}{' '}
                <span className="text-gradient from-white via-yellow-200 to-white font-semibold tracking-wide">
                  {step.details}
                </span>
              </p>
              
              <p className="text-base md:text-lg text-white/70 group-hover/content:text-white/90 transition-colors duration-300 leading-relaxed">
                {step.subtext}
              </p>

              <ul className="space-y-2 mt-6">
                {step.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-white/60 group-hover/content:text-white/80 transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Connecting Line */}
    {index < steps.length - 1 && (
      <div className="absolute left-8 md:left-12 top-24 md:top-[4.5rem] bottom-0 w-px">
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
          className={`w-full h-full bg-gradient-to-b ${step.lineGradient}`}
        >
          {/* Animated Particles */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            animate={{
              y: [0, '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white/30 blur-sm" />
          </motion.div>
        </motion.div>
      </div>
    )}
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
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

export const JourneySection = () => {
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
      className="relative min-h-screen py-20 md:py-32 bg-[#0A0F29] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.2),transparent_70%)]" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,50,255,0.15),transparent_50%)]"
        />
        <FloatingParticles />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative container mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative inline-block mb-16"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
            <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Comment nous
              </span>
              <span className="block text-gradient from-yellow-200 via-yellow-100 to-yellow-200 mt-2">
                transformons votre rêve
              </span>
              <span className="block text-gradient from-white via-blue-100 to-white mt-2">
                en trajectoire
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Steps Layout */}
        <div className="flex flex-col gap-16 md:gap-20 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 md:mt-32"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group"
          >
            <span>Commencer votre voyage</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};