import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Layout, Shield, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: "Brand Content",
    description: "Créez du contenu authentique et engageant avec nos artistes talentueux.",
    features: [
      "Contenu sur mesure",
      "Storytelling authentique",
      "Production vidéo",
      "Stratégie éditoriale"
    ],
    gradient: "from-pink-500/20 to-purple-500/20",
    link: "/marque/brand-content"
  },
  {
    icon: Layout,
    title: "Événements Privés",
    description: "Des performances uniques adaptées à votre image et vos objectifs.",
    features: [
      "Spectacles sur mesure",
      "Animation d'événements",
      "Expériences immersives",
      "Coordination complète"
    ],
    gradient: "from-purple-500/20 to-blue-500/20",
    link: "/marque/evenements"
  },
  {
    icon: Shield,
    title: "Partenariats Durables",
    description: "Construisez des relations long terme avec des artistes qui partagent vos valeurs.",
    features: [
      "Ambassadeurs de marque",
      "Collaborations créatives",
      "Projets communs",
      "Visibilité durable"
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
    link: "/marque/partenariats"
  }
];

const SolutionCard = ({ solution, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center">
            <solution.icon className="w-8 h-8 text-pink-400" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {solution.title}
          </h3>
          
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {solution.description}
          </p>

          {/* Features */}
          <div className="space-y-3 pt-4">
            {solution.features.map((feature, i) => (
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
              to={solution.link}
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

export const SolutionsSection = () => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            <span className="block text-gradient from-white via-white to-white/70">
              Des solutions adaptées
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              à vos objectifs
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};