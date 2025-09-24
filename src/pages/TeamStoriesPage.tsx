import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Star, Heart, Sparkles, Music, Camera, Coffee, Book, Palette } from 'lucide-react';

const teamStories = [
  {
    name: "Bénédicte Lecoq",
    role: "Fondatrice",
    story: "Après 15 ans dans l'industrie du spectacle, j'ai réalisé que les artistes avaient besoin d'un accompagnement plus humain, plus personnalisé. C'est ainsi qu'est née Tiny Team.",
    passions: ["Théâtre contemporain", "Photographie", "Voyages culturels"],
    quote: "L'art est un pont entre les rêves et la réalité.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1024",
    icons: [Star, Heart, Camera],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "Isabelle Sabatier",
    role: "Responsable Diffusion & Tournées",
    story: "Mon parcours dans la production m'a appris que chaque spectacle est une aventure unique. Chez Tiny Team, nous créons des tournées qui respectent l'essence de chaque artiste.",
    passions: ["Musique live", "Organisation d'événements", "Arts de la scène"],
    quote: "Chaque ville est une nouvelle scène à conquérir.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1024",
    icons: [Music, Star, Heart],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Elodie Biffi",
    role: "Responsable Administrative",
    story: "La gestion administrative dans le spectacle vivant est un art en soi. Je veille à ce que nos artistes puissent se concentrer sur leur créativité en toute sérénité.",
    passions: ["Littérature", "Danse contemporaine", "Gestion de projet"],
    quote: "L'organisation est la clé de la liberté artistique.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1024",
    icons: [Book, Coffee, Palette],
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    name: "Jérémy Dravigny",
    role: "Responsable Billetterie & Communication",
    story: "La communication digitale est devenue essentielle dans le spectacle vivant. Je m'assure que chaque artiste trouve son public et que chaque spectateur vive une expérience unique.",
    passions: ["Marketing digital", "Nouvelles technologies", "Stand-up"],
    quote: "L'innovation au service de l'émotion.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1024",
    icons: [Sparkles, Star, Heart],
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    name: "Margaux Morel",
    role: "Chargée de Production & Booking",
    story: "Le booking est un mélange subtil d'intuition et de stratégie. Je travaille chaque jour pour créer des opportunités qui correspondent parfaitement à nos artistes.",
    passions: ["Musique", "Art contemporain", "Production événementielle"],
    quote: "Créer des connexions, construire des ponts.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1024",
    icons: [Music, Star, Palette],
    gradient: "from-green-500/20 to-yellow-500/20"
  }
];

const StoryCard = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="relative h-64">
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} mix-blend-overlay opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {story.name}
          </h3>
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {story.role}
          </p>
        </div>

        {/* Story */}
        <p className="text-white/80 mb-6 leading-relaxed">
          {story.story}
        </p>

        {/* Passions */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-white/70 mb-3">Passions</h4>
          <div className="flex flex-wrap gap-2">
            {story.passions.map((passion, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
              >
                {passion}
              </span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-2">
              {story.icons.map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full glass-effect flex items-center justify-center relative z-[${i}]"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80 italic">
              "{story.quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

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

export const TeamStoriesPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="block text-gradient from-white via-blue-100 to-white">
                  Les visages derrière
                </span>
                <span className="block text-gradient from-yellow-200 via-yellow-100 to-yellow-200">
                  les succès
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Découvrez les parcours inspirants de ceux qui font vivre Tiny Team au quotidien.
                Des histoires uniques, une passion commune.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {teamStories.map((story, index) => (
              <StoryCard key={story.name} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};