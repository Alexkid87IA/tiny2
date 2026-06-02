import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Humoriste",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1024",
    quote: "Tiny Team a transformé ma vision en réalité. Leur approche professionnelle et leur créativité ont donné une nouvelle dimension à mon spectacle.",
    rating: 5,
    show: "One Woman Show 'Rire Sans Filtre'",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "Thomas Martin",
    role: "Comédien",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1024",
    quote: "L'accompagnement personnalisé et la vision stratégique de l'équipe ont été déterminants dans le succès de mon projet.",
    rating: 5,
    show: "'Le Dernier Mot' - Théâtre du Rire",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Sophie Chen",
    role: "Artiste de Stand-up",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1024",
    quote: "Grâce à Tiny Team, j'ai pu me concentrer sur mon art pendant qu'ils géraient parfaitement tous les aspects techniques et logistiques.",
    rating: 5,
    show: "'Rire Sans Frontières' Tour",
    gradient: "from-cyan-500/20 to-purple-500/20"
  }
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="group"
  >
    <div className="relative h-full glass-card rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative p-8">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6">
          <Quote className="w-8 h-8 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-glow transition-all duration-300">
              {testimonial.name}
            </h3>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-300 group-hover:text-yellow-300 transition-colors duration-300"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-white/80 group-hover:text-white/90 transition-colors duration-300 mb-4">
          "{testimonial.quote}"
        </blockquote>

        {/* Show Name */}
        <div className="pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
            {testimonial.show}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,50,255,0.1),transparent_50%)]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative container mx-auto px-4"
      >
        {/* Header */}
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
                Ils nous font
              </span>
              <br />
              <span className="inline-block text-gradient from-yellow-300 via-yellow-200 to-yellow-300">
                confiance
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
            Découvrez les retours d'expérience de nos artistes et leur parcours avec Tiny Team.
            Des collaborations uniques qui donnent vie à des projets exceptionnels.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};