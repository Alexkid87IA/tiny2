import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Film, Lightbulb, Users, PenTool, Globe } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous vous accompagnons dans la création de spectacles uniques.",
    features: ["Conception artistique", "Direction technique", "Gestion logistique"],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Film,
    title: "Captation Vidéo",
    description: "Immortalisez vos performances avec des captations professionnelles de haute qualité.",
    features: ["Multi-caméras", "Post-production", "Distribution"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Lightbulb,
    title: "Développement Créatif",
    description: "Explorez et développez votre potentiel créatif avec notre équipe d'experts.",
    features: ["Coaching artistique", "Écriture", "Mise en scène"],
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    icon: Users,
    title: "Management d'Artistes",
    description: "Une gestion complète de votre carrière pour vous permettre de vous concentrer sur votre art.",
    features: ["Booking", "Promotion", "Administration"],
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    icon: PenTool,
    title: "Communication",
    description: "Construisez votre image et votre présence médiatique de manière professionnelle.",
    features: ["Stratégie digitale", "Relations presse", "Content creation"],
    gradient: "from-green-500/20 to-yellow-500/20"
  },
  {
    icon: Globe,
    title: "Diffusion",
    description: "Élargissez votre audience grâce à notre réseau de diffusion national et international.",
    features: ["Programmation", "Tournées", "Festivals"],
    gradient: "from-yellow-500/20 to-purple-500/20"
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
    <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative">
        <div className="mb-6 relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-6">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  </motion.div>
);

export const ServicesSection = () => {
  return (
    <section className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,50,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative inline-block mb-16"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
            <h2 className="relative text-6xl md:text-7xl font-bold tracking-tight">
              <span className="inline-block text-gradient from-white via-blue-100 to-white">
                Nos services
              </span>
              <br />
              <span className="inline-block text-gradient from-yellow-300 via-yellow-200 to-yellow-300">
                sur mesure
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto"
          >
            Découvrez nos prestations clés conçues pour répondre à tous vos besoins artistiques.
            Des services complets qui s'adaptent à chaque étape de votre parcours professionnel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};