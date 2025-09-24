import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Zap, Heart, Users, Star, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: "Brand Content",
    description: "Contenus authentiques avec nos artistes",
    example: "Campagnes digitales virales"
  },
  {
    icon: Sparkles,
    title: "Événements Privés",
    description: "Spectacles sur mesure pour vos équipes",
    example: "Conventions, séminaires, lancements"
  },
  {
    icon: Zap,
    title: "Partenariats Créatifs",
    description: "Collaborations long terme",
    example: "Ambassadeurs de marque"
  }
];

const successMetrics = [
  {
    value: "2.5M+",
    label: "impressions générées",
    icon: TrendingUp,
    gradient: "from-pink-400 to-pink-500"
  },
  {
    value: "92%",
    label: "d'engagement authentique",
    icon: Heart,
    gradient: "from-purple-400 to-purple-500"
  },
  {
    value: "+45%",
    label: "ROI moyen",
    icon: Star,
    gradient: "from-blue-400 to-blue-500"
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
    <div className="relative glass-card rounded-2xl p-6 overflow-hidden h-full">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <solution.icon className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
          {solution.title}
        </h3>
        <p className="text-white/70 mb-3 group-hover:text-white/90 transition-colors duration-300">
          {solution.description}
        </p>
        <div className="text-sm text-pink-400 font-medium">
          {solution.example}
        </div>
      </div>
    </div>
  </motion.div>
);

const MetricCard = ({ metric, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -8,
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    className="group relative"
  >
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <metric.icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-glow transition-all duration-300">
          {metric.value}
        </div>
        
        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {metric.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
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

export const BrandSection = () => {
  return (
    <section className="relative py-32 bg-[#080C20] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] md:leading-[0.9]">
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Marques,
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  créez l'exception
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8"
          >
            Collaborez avec nos artistes pour créer des expériences authentiques qui marquent les esprits.
            Du brand content aux événements privés, donnez une dimension unique à vos projets.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Des résultats qui parlent
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nos collaborations génèrent un impact mesurable et durable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/marque"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300"
            >
              <span className="font-bold text-white text-lg">Collaborer avec nous</span>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
            >
              <Heart className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Discuter de votre projet</span>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};