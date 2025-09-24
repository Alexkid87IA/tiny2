import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Ticket, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const paths = [
  {
    icon: Mic,
    title: "Je suis artiste",
    description: "Construire votre carrière avec Tiny Team. Un accompagnement sur mesure pour développer votre talent et atteindre vos objectifs.",
    features: [
      "Développement artistique personnalisé",
      "Production de spectacles",
      "Gestion de carrière",
      "Stratégie de communication"
    ],
    link: "/artiste",
    gradient: "from-purple-500/20 to-blue-500/20",
    glowColor: "rgba(168,85,247,0.2)",
    hoverGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]",
    delay: 0.2
  },
  {
    icon: Ticket,
    title: "Je suis programmateur",
    description: "Accueillir nos talents sur vos scènes. Une sélection d'artistes uniques pour enrichir votre programmation.",
    features: [
      "Catalogue d'artistes exclusifs",
      "Support technique complet",
      "Gestion de billetterie",
      "Communication événementielle"
    ],
    link: "/programmateur",
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "rgba(59,130,246,0.2)",
    hoverGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]",
    delay: 0.3
  },
  {
    icon: Handshake,
    title: "Je suis une marque",
    description: "Collaborer avec nos artistes pour vos projets. Des partenariats créatifs qui donnent vie à vos ambitions.",
    features: [
      "Collaborations sur mesure",
      "Brand content original",
      "Événements privés",
      "Activation de marque"
    ],
    link: "/marque",
    gradient: "from-cyan-500/20 to-yellow-500/20",
    glowColor: "rgba(234,179,8,0.2)",
    hoverGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(234,179,8,0.3)]",
    delay: 0.4
  }
];

const PathCard = ({ path }) => (
  <Link
    to={path.link}
    className="group block perspective-1000"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: path.delay }}
      className={`relative glass-card rounded-2xl p-8 overflow-hidden cursor-pointer transition-all duration-500 ${path.hoverGlow} preserve-3d hover:transform hover:scale-[1.02]`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 0% 0%, ${path.glowColor} 0%, transparent 50%)`,
              `radial-gradient(circle at 100% 100%, ${path.glowColor} 0%, transparent 50%)`,
              `radial-gradient(circle at 0% 0%, ${path.glowColor} 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Icon */}
      <div className="relative mb-8">
        <motion.div
          className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle, ${path.glowColor} 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
          <path.icon className="w-8 h-8 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {path.title}
          </h3>
          <p className="mt-2 text-lg text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
            {path.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {path.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-base text-white/60 group-hover:text-white/80 transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-6 h-6 text-yellow-300" />
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  </Link>
);

export const PathChoiceSection = () => {
  return (
    <section className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Nos offres
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                  pour vous
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mt-8"
          >
            Que vous soyez artiste, programmateur ou marque, nous avons l'expertise pour répondre à vos besoins.
            Découvrez nos solutions sur mesure et donnez vie à vos projets.
          </motion.p>
        </div>

        {/* Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paths.map((path) => (
            <PathCard key={path.title} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
};