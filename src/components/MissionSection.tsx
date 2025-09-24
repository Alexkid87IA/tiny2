import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Rocket, Megaphone, Globe, Calendar, ChevronDown } from 'lucide-react';

// Services data avec les 6 piliers - Palette cohérente rose/violet
const servicesData = [
  {
    id: "production",
    acte: "Acte I",
    title: "Production",
    subtitle: "Donner vie aux idées",
    story: "Imaginez une idée qui prend forme. Un rêve griffonné sur un coin de table qui devient un spectacle époustouflant. C'est notre première magie : transformer l'invisible en inoubliable. Nous sculptons vos visions pour qu'elles touchent les cœurs.",
    color: "from-pink-500 to-pink-600",
    borderColor: "border-pink-400/30",
    glowColor: "rgba(236, 72, 153, 0.2)",
    icon: Star
  },
  {
    id: "management",
    acte: "Acte II",
    title: "Management",
    subtitle: "Guider les talents",
    story: "Chaque artiste est unique, chaque parcours singulier. Nous devenons les architectes silencieux de carrières extraordinaires. Avec bienveillance et expertise, nous traçons la route vers les sommets.",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-400/30",
    glowColor: "rgba(168, 85, 247, 0.2)",
    icon: Shield
  },
  {
    id: "digital",
    acte: "Acte III",
    title: "Digital",
    subtitle: "Rayonner dans le monde",
    story: "Dans l'océan numérique, nous créons des phares. Vos histoires traversent les écrans, touchent des milliers d'âmes. Nous orchestrons votre présence digitale comme une symphonie.",
    color: "from-purple-600 to-purple-700",
    borderColor: "border-purple-400/30",
    glowColor: "rgba(168, 85, 247, 0.2)",
    icon: Rocket
  },
  {
    id: "communication",
    acte: "Acte IV",
    title: "Communication",
    subtitle: "Créer l'émotion",
    story: "Les mots ont le pouvoir de créer des mondes. Nous façonnons votre image avec la précision d'un orfèvre et l'âme d'un poète. Chaque message devient une invitation au voyage.",
    color: "from-pink-400 to-purple-500",
    borderColor: "border-pink-400/30",
    glowColor: "rgba(236, 72, 153, 0.2)",
    icon: Megaphone
  },
  {
    id: "diffusion",
    acte: "Acte V",
    title: "Diffusion",
    subtitle: "Conquérir les scènes",
    story: "De théâtre en théâtre, de ville en ville, nous écrivons votre odyssée. Notre réseau devient votre constellation : 300 salles, autant d'étoiles où briller.",
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-400/30",
    glowColor: "rgba(168, 85, 247, 0.2)",
    icon: Globe
  },
  {
    id: "evenements",
    acte: "Final",
    title: "Événements",
    subtitle: "Marquer les esprits",
    story: "Pour les moments qui comptent, nous créons l'exceptionnel. Chaque événement devient une œuvre d'art totale, une expérience qui transcende le temps.",
    color: "from-pink-500 to-purple-500",
    borderColor: "border-purple-400/30",
    glowColor: "rgba(236, 72, 153, 0.2)",
    icon: Calendar
  }
];

interface ServicePanelProps {
  service: typeof servicesData[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ServicePanel: React.FC<ServicePanelProps> = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;
  
  const handleServiceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Navigation sera gérée dans votre App.tsx
    window.location.href = `/services/${service.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative mb-4 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 cursor-pointer
        ${isActive 
          ? `bg-black/40 ${service.borderColor} shadow-2xl` 
          : 'bg-black/20 border-white/10 hover:bg-black/30'
        } border-2`}
      onClick={onClick}
      style={{
        boxShadow: isActive ? `0 0 40px ${service.glowColor}` : undefined
      }}
    >
      {/* Header du panneau */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Badge Acte */}
            <motion.div
              className={`px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-xs lg:text-sm font-bold tracking-wider
                bg-gradient-to-r ${service.color} text-black`}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {service.acte}
            </motion.div>
            
            {/* Titre et sous-titre */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base italic">
                {service.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Icône */}
            <motion.div
              className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center
                bg-gradient-to-br ${service.color} text-black`}
              animate={isActive ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </motion.div>
            
            {/* Chevron indicateur de clic */}
            <motion.div
              animate={{ 
                rotate: isActive ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-white/40 hover:text-white/60"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Contenu expansible */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              {/* Ligne de séparation animée */}
              <motion.div 
                className={`h-[1px] mb-6 bg-gradient-to-r ${service.color}`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              
              {/* Story */}
              <motion.p 
                className="text-white/80 text-base lg:text-lg leading-relaxed mb-6"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.story}
              </motion.p>
              
              {/* Bouton découvrir */}
              <motion.button
                onClick={handleServiceClick}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full
                  bg-gradient-to-r ${service.color} text-black font-bold text-sm lg:text-base
                  hover:scale-105 transition-transform duration-300`}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                Découvrir ce service
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const MissionSection = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const togglePanel = (serviceId: string) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  };

  const handleAllServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/services';
  };

  return (
    <section className="relative min-h-screen py-20 lg:py-32 bg-[#0A0F29] overflow-hidden">
      {/* Fond animé avec particules (comme les autres sections) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
        
        {/* Grille animée subtile */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            x: [0, 50],
            y: [0, 50]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Orbes de lumière flottants */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 max-w-5xl">
        
        {/* Header épique */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 lg:mb-20 px-8"
        >
          <h2 className="font-bold mb-6">
            <motion.span 
              className="block text-white mb-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Comment nous
            </motion.span>
            <motion.span 
              className="block text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl pb-2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ lineHeight: '1.2' }}
            >
              Créons la magie
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            De l'idée au rideau final, chaque étape est une œuvre
          </motion.p>
          
          {/* Indicateur de clic */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2 text-pink-400/60"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
            <span className="text-sm">Cliquez pour découvrir</span>
          </motion.div>
        </motion.div>

        {/* Services accordéon */}
        <div className="mb-16">
          {servicesData.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              index={index}
              isActive={activePanel === service.id}
              onClick={() => togglePanel(service.id)}
            />
          ))}
        </div>

        {/* Section finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl lg:text-3xl text-white/80 italic font-light mb-8">
            "Six expertises, une vision : sublimer votre talent"
          </p>
          
          <button
            onClick={handleAllServicesClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500
              transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105"
          >
            <span className="font-bold text-white text-base lg:text-lg">
              EXPLORER TOUS NOS SERVICES
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};