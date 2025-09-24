import { motion } from 'framer-motion';
import { Heart, Zap, Star, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Accompagnement Personnalisé",
    description: "Une équipe dédiée qui comprend vos besoins et s'adapte à votre vision artistique pour un développement optimal.",
    stats: ["Suivi sur mesure", "Disponibilité 7j/7"],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: Zap,
    title: "Expertise Reconnue",
    description: "15 ans d'expérience dans la production et le management d'artistes, un réseau solide dans le milieu du spectacle.",
    stats: ["100+ artistes", "500+ spectacles"],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Star,
    title: "Vision Stratégique",
    description: "Une approche globale qui optimise chaque aspect de votre carrière pour maximiser votre potentiel artistique.",
    stats: ["95% de réussite", "Objectifs atteints"],
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Sparkles,
    title: "Innovation Créative",
    description: "Des solutions innovantes qui vous démarquent et créent des opportunités uniques pour votre développement.",
    stats: ["Concepts uniques", "Approche moderne"],
    gradient: "from-indigo-500/20 to-pink-500/20"
  }
];

const BenefitCard = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group h-full"
  >
    <div className="relative glass-card rounded-2xl p-8 overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="relative flex-1 flex flex-col">
        <div className="mb-6">
          <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <benefit.icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {benefit.title}
        </h3>
        <p className="text-white/70 mb-6 flex-1 group-hover:text-white/90 transition-colors duration-300">
          {benefit.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {benefit.stats.map((stat, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const BenefitsSection = () => {
  return (
    <section className="relative py-32">
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
              <span className="inline-block text-gradient from-white via-white to-white/70">
                Pourquoi choisir
              </span>
              <br />
              <span className="inline-block text-gradient from-pink-300 via-pink-200 to-pink-300">
                Tiny Team ?
              </span>
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Une équipe passionnée qui met son expertise au service de votre talent
            pour construire ensemble une carrière qui vous ressemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};