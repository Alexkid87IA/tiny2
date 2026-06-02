import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
        <FloatingParticles />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative px-2 md:px-0"
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
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
                  Créez l'exception
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  avec nos artistes
                </span>
              </h1>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mt-8 mb-12"
          >
            Des collaborations uniques qui donnent du sens à vos projets.
            Faites vivre des expériences mémorables à votre audience avec nos artistes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group flex items-center gap-2"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="#solutions"
              className="px-8 py-4 rounded-full glass-effect text-white hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
            >
              <span>Découvrir nos solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};