import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight, Star, Shield, Rocket, Layout, Globe, Users } from 'lucide-react';

const expertises = [
  {
    id: "production",
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    icon: Star,
    gradient: "from-pink-500/20 to-pink-300/20",
    features: [
      "Direction artistique complète",
      "Mise en scène professionnelle",
      "Production technique",
      "Gestion logistique"
    ]
  },
  {
    id: "diffusion",
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    icon: Globe,
    gradient: "from-pink-400/20 to-pink-600/20",
    features: [
      "Booking",
      "Gestion de tournées",
      "Relations salles",
      "Support technique"
    ]
  },
  {
    id: "digital",
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    icon: Rocket,
    gradient: "from-pink-300/20 to-pink-500/20",
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenu",
      "Community management",
      "Marketing digital"
    ]
  },
  {
    id: "communication",
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    icon: Layout,
    gradient: "from-pink-500/20 to-purple-500/20",
    features: [
      "Relations presse",
      "Identité visuelle",
      "Communication événementielle",
      "Relations publiques"
    ]
  },
  {
    id: "management",
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    icon: Shield,
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "Développement de carrière",
      "Stratégie artistique",
      "Gestion administrative",
      "Relations professionnelles"
    ]
  },
  {
    id: "evenements",
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    icon: Users,
    gradient: "from-pink-400/20 to-pink-600/20",
    features: [
      "Conception événementielle",
      "Production sur mesure",
      "Coordination complète",
      "Gestion technique"
    ]
  }
];

const ExpertiseCard = ({ expertise, index }) => {
  const Icon = expertise.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative">
          {/* Icon */}
          <div className="mb-6">
            <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
              {expertise.title}
            </h3>
            
            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
              {expertise.description}
            </p>

            {/* Features */}
            <div className="space-y-3 pt-4">
              {expertise.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400/40" />
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-6">
              <Link
                to={`/services/${expertise.id}`}
                className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

export const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"
          />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative px-2 md:px-0"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                  <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                    Nos expertises
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                    sur mesure
                  </span>
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8"
            >
              Une expertise complète pour accompagner votre carrière artistique.
              Des solutions adaptées à chaque étape de votre développement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={expertise.id} expertise={expertise} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};