import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const missions = [
  {
    id: "strategie",
    title: "Stratégie",
    subtitle: "Votre vision, notre expertise",
    description: "Nous élaborons ensemble une stratégie sur mesure pour développer votre carrière. De l'analyse du marché à la planification détaillée, chaque étape est pensée pour votre réussite.",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 md:w-12 md:h-12 text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    features: [
      "Analyse de marché approfondie",
      "Positionnement artistique", 
      "Plan de développement",
      "Objectifs personnalisés"
    ]
  },
  {
    id: "production",
    title: "Production",
    subtitle: "De l'idée à la scène",
    description: "Une approche globale de la production artistique. Nous gérons tous les aspects techniques et créatifs pour que vous puissiez vous concentrer sur votre art.",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 md:w-12 md:h-12 text-white"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    features: [
      "Direction artistique",
      "Production exécutive",
      "Gestion des tournées",
      "Communication digitale"
    ]
  },
  {
    id: "digital",
    title: "Digital",
    subtitle: "Votre présence en ligne",
    description: "Maîtrisez les enjeux du numérique et développez votre présence en ligne. Une stratégie digitale complète pour maximiser votre impact et votre visibilité.",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 md:w-12 md:h-12 text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenus",
      "Monétisation digitale",
      "Gestion de communauté"
    ]
  },
  {
    id: "protection",
    title: "Protection",
    subtitle: "Sécuriser votre avenir",
    description: "Un accompagnement juridique et stratégique complet pour protéger vos intérêts et valoriser votre travail dans un environnement en constante évolution.",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 md:w-12 md:h-12 text-white"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    features: [
      "Protection des droits",
      "Monétisation des contenus",
      "Conseil juridique",
      "Gestion contractuelle"
    ]
  }
];

const MissionCard = ({ mission, index, isActive, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`min-h-[calc(100vh-6rem)] md:min-h-screen flex items-center justify-center py-12 md:py-20 transition-all duration-700 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="relative">
            {/* Title Section with Icon */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="relative group">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl glass-effect flex items-center justify-center backdrop-blur-xl">
                  <mission.icon />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                  <span className="block text-gradient from-white via-blue-100 to-white">
                    {mission.title}
                  </span>
                </h2>
                <span className="text-xl md:text-2xl lg:text-3xl block mt-2 md:mt-4 text-gradient from-pink-300 via-pink-200 to-pink-300">
                  {mission.subtitle}
                </span>
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-xl text-white/70 leading-relaxed">
                {mission.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {mission.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative glass-card rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl overflow-hidden">
                    <div className="relative">
                      <span className="text-sm md:text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to={`/mission/${mission.id}`}
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
            >
              <span className="text-sm md:text-base">En savoir plus</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MissionSection = () => {
  const [activeMission, setActiveMission] = React.useState(0);

  return (
    <section className="relative bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
      </div>

      <div className="relative pt-20 md:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative px-2 md:px-0"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
              <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                Une team au service
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                de votre carrière
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            mission={mission}
            index={index}
            isActive={index === activeMission}
            onSelect={setActiveMission}
          />
        ))}
      </div>
    </section>
  );
};