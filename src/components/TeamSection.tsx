import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Bénédicte Lecoq",
    role: "Fondatrice",
    description: "Plus de 15 ans d'expérience dans la production de spectacles",
    quote: "L'art est un pont entre les rêves et la réalité",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1024",
    color: "from-purple-500/30 to-blue-500/30",
    passions: ["Théâtre contemporain", "Production artistique", "Développement de talents"]
  },
  {
    name: "Isabelle Sabatier",
    role: "Responsable Diffusion",
    description: "Experte en diffusion artistique et développement de carrière",
    quote: "Chaque ville est une nouvelle scène à conquérir",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1024",
    color: "from-blue-500/30 to-cyan-500/30",
    passions: ["Programmation culturelle", "Gestion de tournées", "Relations publiques"]
  },
  {
    name: "Elodie Biffi",
    role: "Responsable Administrative",
    description: "Gardienne de l'excellence opérationnelle et administrative",
    quote: "L'organisation est la clé de la liberté artistique",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1024",
    color: "from-pink-500/30 to-purple-500/30",
    passions: ["Gestion administrative", "Optimisation des process", "Veille juridique"]
  },
  {
    name: "Jérémy Dravigny",
    role: "Resp. Communication",
    description: "Stratège digital et expert en communication artistique",
    quote: "L'innovation au service de l'émotion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1024",
    color: "from-cyan-500/30 to-blue-500/30",
    passions: ["Communication digitale", "Marketing artistique", "Nouvelles technologies"]
  },
  {
    name: "Margaux Morel",
    role: "Chargée de Production",
    description: "Créative et méthodique, experte en production de spectacles",
    quote: "Créer des connexions, construire des ponts",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1024",
    color: "from-rose-500/30 to-pink-500/30",
    passions: ["Production artistique", "Direction technique", "Gestion de projet"]
  }
];

const MobileSlider = ({ members, currentIndex, setCurrentIndex }) => (
  <div className="relative">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="relative glass-card rounded-2xl overflow-hidden">
          {/* Background Image & Gradient */}
          <div className="relative h-[420px]">
            <img
              src={members[currentIndex].image}
              alt={members[currentIndex].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${members[currentIndex].color} mix-blend-overlay opacity-60`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-[#0A0F29]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative -mt-48 p-6 pb-8">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">
                {members[currentIndex].name}
              </h3>
              <p className="text-white/90">{members[currentIndex].role}</p>
            </div>

            <p className="text-white/80 mb-4 line-clamp-2">
              {members[currentIndex].description}
            </p>

            <blockquote className="text-sm italic text-white/70 mb-6">
              "{members[currentIndex].quote}"
            </blockquote>

            <div className="space-y-2">
              <p className="text-sm font-medium text-white/60">Passions</p>
              <div className="flex flex-wrap gap-2">
                {members[currentIndex].passions.map((passion, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Navigation Buttons */}
    <div className="absolute top-1/3 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)}
        className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
        className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-2 mt-6">
      {members.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-white w-6'
              : 'bg-white/30 hover:bg-white/50'
          }`}
        />
      ))}
    </div>
  </div>
);

const DesktopGrid = ({ members }) => (
  <div className="grid grid-cols-5 gap-4">
    {members.map((member, index) => (
      <motion.div
        key={member.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-[calc(100vh-16rem)]"
      >
        <div className="relative h-full glass-card rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${member.color} mix-blend-overlay opacity-60`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0F29]" />
          </div>

          {/* Content */}
          <div className="relative h-full p-6 flex flex-col justify-end">
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-white/90 mb-3">{member.role}</p>
              <p className="text-sm text-white/80 mb-4 line-clamp-2">
                {member.description}
              </p>

              {/* Quote */}
              <div className="pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                <p className="text-sm text-white/70 italic">
                  "{member.quote}"
                </p>
              </div>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-[#0A0F29]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="p-6">
                <h4 className="text-sm font-medium text-white/70 mb-4">Passions</h4>
                <div className="grid grid-cols-1 gap-2">
                  {member.passions.map((passion, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-lg p-2 text-xs text-white/60 text-center"
                    >
                      {passion}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative py-32 bg-[#0A0F29] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
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
              className="absolute -inset-x-4 -inset-y-8 md:-inset-y-16 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 rounded-[40px] blur-3xl"
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
                  L'équipe
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                  Tiny Team
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto mt-8"
          >
            Une équipe passionnée qui donne vie à vos projets artistiques.
            Des talents complémentaires unis par l'amour du spectacle vivant.
          </motion.p>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <MobileSlider
            members={teamMembers}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <DesktopGrid members={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;