import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

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

const stats = [
  { value: "100+", label: "artistes accompagnés" },
  { value: "95%", label: "spectacles complets" },
  { value: "50+", label: "villes en France" }
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl h-[88px] flex items-center gap-4 px-6">
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 blur group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500" />
        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <span className="text-xl font-bold text-white">{stat.value}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 truncate">
          {stat.label}
        </div>
      </div>
    </div>
  </motion.div>
);

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F29] via-transparent to-[#0A0F29]" />
        </motion.div>
        <FloatingParticles />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0 mb-16"
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
                <span className="block text-gradient from-white via-blue-100 to-white">
                  Votre talent mérite
                </span>
                <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-4">
                  la meilleure équipe
                </span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Chez Tiny Team, nous croyons en votre potentiel. Notre mission est de vous accompagner
            dans chaque étape de votre parcours artistique, en mettant à votre service notre expertise
            et notre réseau.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 group-hover:from-pink-300 group-hover:to-pink-400 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/50 via-transparent to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-semibold text-black text-lg">Commencer l'aventure</span>
              <motion.div
                className="relative"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6 text-black" />
              </motion.div>
            </Link>
            <Link
              to="#services"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 glass-effect" />
              <span className="relative font-medium text-white group-hover:text-glow transition-all duration-300">
                Découvrir nos services
              </span>
              <motion.div
                className="relative"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm uppercase tracking-wider">Découvrir</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};