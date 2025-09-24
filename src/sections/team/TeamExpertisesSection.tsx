import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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

          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {expertise.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-6">
            {expertise.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
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
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 group/link"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TeamExpertisesSection = () => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-16">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse-glow" />
            <h2 className="relative text-6xl md:text-7xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-white to-white/70 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Ces talents
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                se traduisent par
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-1 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                des expertises
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-1 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                concrètes
              </span>
            </h2>
          </div>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Une expertise complète pour accompagner votre carrière artistique.
            Des solutions adaptées à chaque étape de votre développement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertises.map((expertise, index) => (
            <ExpertiseCard key={expertise.id} expertise={expertise} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};