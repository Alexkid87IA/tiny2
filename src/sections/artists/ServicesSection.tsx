import { motion } from 'framer-motion';
import { Star, Users, Globe, Sparkles, Mic, Layout } from 'lucide-react';

const services = [
  {
    icon: Star,
    title: "Développement Artistique",
    description: "Coaching personnalisé et accompagnement créatif pour affiner votre proposition artistique.",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: Mic,
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets scéniques.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Layout,
    title: "Gestion de Carrière",
    description: "Planification stratégique et développement professionnel sur le long terme.",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Mise en relation avec les acteurs clés du secteur et création d'opportunités.",
    gradient: "from-indigo-500/20 to-pink-500/20"
  },
  {
    icon: Globe,
    title: "Diffusion",
    description: "Stratégie de tournées et présence sur les festivals majeurs.",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: Sparkles,
    title: "Image & Communication",
    description: "Construction de votre identité artistique et présence médiatique.",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl p-8 overflow-hidden h-full">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative">
        <div className="mb-6">
          <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <service.icon className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {service.description}
        </p>
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
                Des services sur mesure
              </span>
              <br />
              <span className="inline-block text-gradient from-pink-300 via-pink-200 to-pink-300">
                pour votre réussite
              </span>
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Une expertise complète pour accompagner votre carrière artistique.
            Des solutions adaptées à chaque étape de votre développement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};