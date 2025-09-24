import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationControls } from 'framer-motion';
import { Star, Circle, Sparkles, Briefcase, Users, MessageSquare, Image, Scale, FileText, ArrowRight } from 'lucide-react';

const services = [
  { 
    name: "Stratégie",
    icon: Briefcase,
    description: "Développement de carrière",
    details: "Planification stratégique et conseils personnalisés"
  },
  { 
    name: "Production",
    icon: Users,
    description: "Création de spectacles",
    details: "De l'idée à la scène"
  },
  { 
    name: "Management",
    icon: MessageSquare,
    description: "Gestion de carrière",
    details: "Accompagnement professionnel"
  },
  { 
    name: "Communication",
    icon: Image,
    description: "Stratégie digitale",
    details: "Visibilité et image de marque"
  },
  { 
    name: "Conseil",
    icon: Scale,
    description: "Support juridique",
    details: "Protection des intérêts"
  }
];

const teamMembers = [
  {
    name: "Sarah Laurent",
    role: "Directrice Artistique",
    description: "Plus de 15 ans d'expérience dans la production de spectacles",
    quote: "L'art est un pont entre les rêves et la réalité",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1024",
    color: "from-purple-500/30 to-blue-500/30"
  },
  {
    name: "Marc Dubois",
    role: "Producteur",
    description: "Expert en développement et financement de projets artistiques",
    quote: "Chaque spectacle est une nouvelle aventure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1024",
    color: "from-blue-500/30 to-cyan-500/30"
  },
  {
    name: "Julie Chen",
    role: "Chargée de Production",
    description: "Spécialiste en coordination d'événements et logistique",
    quote: "La précision fait la différence",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1024",
    color: "from-pink-500/30 to-purple-500/30"
  },
  {
    name: "Thomas Rey",
    role: "Directeur Technique",
    description: "Maître dans l'art de donner vie aux visions artistiques",
    quote: "La technique au service de l'émotion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1024",
    color: "from-cyan-500/30 to-blue-500/30"
  },
  {
    name: "Emma Martin",
    role: "Relations Artistes",
    description: "Passionnée par l'accompagnement des talents",
    quote: "Votre succès est notre mission",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1024",
    color: "from-rose-500/30 to-pink-500/30"
  }
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimationControls();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / 30) * -1;
      const rotateY = (x - centerX) / 30;

      controls.start({
        rotateX,
        rotateY,
        transition: { duration: 0.2, ease: "linear" }
      });
    };

    const handleMouseLeave = () => {
      controls.start({
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group perspective"
    >
      <div className="relative h-[280px] glass-card rounded-2xl overflow-hidden transform-gpu">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col items-center justify-center">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-2xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
              {service.name}
            </h3>
            <p className="text-sm text-white/70 mb-2 group-hover:text-white/90 transition-colors duration-300">
              {service.description}
            </p>
            <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300">
              {service.details}
            </p>
          </div>

          {/* Hover Effects */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

const TeamMemberCard = ({ member, index }) => {
  const controls = useAnimationControls();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 20) * -1;
      const rotateY = (x - centerX) / 20;

      controls.start({
        rotateX,
        rotateY,
        transition: { duration: 0.2, ease: "linear" }
      });
    };

    const handleMouseLeave = () => {
      controls.start({
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative h-[400px] group perspective"
    >
      <div className="relative h-full rounded-2xl overflow-hidden transform-gpu">
        {/* Image and Overlays */}
        <div className="absolute inset-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${member.color} mix-blend-overlay opacity-40`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-end transform-gpu">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-xl glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-glow transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-white/90 mb-2 group-hover:text-glow transition-all duration-300">
                {member.role}
              </p>
              <p className="text-xs text-white/70 mb-3 group-hover:text-white/90 transition-colors duration-300">
                {member.description}
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-white/80 italic font-medium group-hover:text-white transition-colors duration-300">
                  "{member.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,50,255,0.1),transparent_50%)]" />
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1
              }}
              animate={{
                y: [null, `${Math.random() * 20 - 10}%`],
                opacity: [null, 0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative container mx-auto px-4"
      >
        {/* Header Section */}
        <motion.div
          style={{ scale }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative inline-block mb-16"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
            
            <h2 className="relative text-6xl md:text-7xl font-bold tracking-tight">
              <span className="inline-block text-gradient from-white via-blue-100 to-white pb-2">
                Une équipe,
              </span>
              <br />
              <span className="inline-block text-gradient from-yellow-300 via-yellow-200 to-yellow-300">
                une famille
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-blue-100/90 leading-relaxed mb-16 max-w-3xl mx-auto"
          >
            Tiny Team propose un accompagnement global et personnalisé pour les artistes du spectacle vivant.
            Nous sommes à vos côtés pour construire une carrière solide et pérenne.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-32">
            {services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4 text-gradient from-white via-blue-100 to-white">
              L'équipe de la Tiny Team
            </h3>
            <p className="text-lg text-blue-200/70">
              Des passionnés au service de vos ambitions artistiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};