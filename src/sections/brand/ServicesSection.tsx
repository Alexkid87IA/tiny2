import { motion } from 'framer-motion';
import { Star, Users, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Star,
    title: "Création de Contenu",
    description: "Des contenus uniques et engageants qui résonnent avec votre audience.",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: Users,
    title: "Événements Corporate",
    description: "Des moments fédérateurs qui renforcent votre culture d'entreprise.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Globe,
    title: "Campagnes Digitales",
    description: "Une présence en ligne impactante et authentique.",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Sparkles,
    title: "Expériences Uniques",
    description: "Des concepts innovants qui marquent les esprits.",
    gradient: "from-indigo-500/20 to-pink-500/20"
  }
];

const ServiceCard = ({ service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl p-6 overflow-hidden h-full">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
      <div className="relative">
        <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center mb-4">
          <service.icon className="w-6 h-6 text-pink-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/70">{service.description}</p>
      </div>
    </div>
  </motion.div>
);

export const ServicesSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-16">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse-glow" />
            <h2 className="relative text-6xl md:text-7xl font-bold tracking-tight">
              <span className="inline-block text-gradient from-white via-white to-white/70">
                Des services adaptés
              </span>
              <br />
              <span className="inline-block text-gradient from-pink-300 via-pink-200 to-pink-300">
                à vos besoins
              </span>
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Une approche créative et professionnelle pour donner vie à vos projets
            et créer un impact durable auprès de votre audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};