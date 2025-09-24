import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            <span className="block text-gradient from-white via-blue-100 to-white">
              Prêt à écrire
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              votre succès ?
            </span>
          </h2>
          <p className="text-white/70 mb-8">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
            à atteindre vos objectifs artistiques.
          </p>
          <Link
            to="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
          >
            <span>Commencer l'aventure</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};