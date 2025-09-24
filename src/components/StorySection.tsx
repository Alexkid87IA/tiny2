import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    id: 'benedicte',
    name: 'Bénédicte',
    lastName: 'Lecoq',
    role: 'Fondatrice & Directrice',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
  },
  {
    id: 'isabelle',
    name: 'Isabelle',
    lastName: 'Sabatier', 
    role: 'Diffusion & Tournées',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
  },
  {
    id: 'elodie',
    name: 'Elodie',
    lastName: 'Biffi',
    role: 'Administration',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
  },
  {
    id: 'jeremy',
    name: 'Jérémy',
    lastName: 'Dravigny',
    role: 'Communication & Prod',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
  },
  {
    id: 'margaux',
    name: 'Margaux',
    lastName: 'Morel',
    role: 'Production & Events',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
  }
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-3 transition-all duration-500"
  >
    {/* Background Image */}
    <img 
      src={member.image} 
      alt={`${member.name} ${member.lastName}`} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29] via-[#0A0F29]/30 to-transparent" />
    
    {/* Glass Effect Border */}
    <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-all duration-500 rounded-2xl" />
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-glow transition-all duration-300 drop-shadow-lg">
        {member.name}
      </h3>
      <h4 className="text-xl font-semibold text-pink-400 mb-2 group-hover:text-yellow-300 transition-all duration-300 drop-shadow-lg">
        {member.lastName}
      </h4>
      <span className="text-sm text-white/95 font-medium drop-shadow-lg group-hover:text-white transition-all duration-300">
        {member.role}
      </span>
    </div>

    {/* Hover Effects */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

export const StorySection = () => {
  const navigate = useNavigate();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/equipe');
  };

  return (
    <section className="relative min-h-screen py-32 bg-[#0A0F29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <FloatingParticles />
      </div>

      {/* Content */}
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
                  Notre Force,
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  Notre Team
                </span>
              </h2>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="flex flex-col items-center gap-12 mb-20">
          
          {/* Première ligne - 3 cartes */}
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Deuxième ligne - 2 cartes */}
          <div className="flex flex-wrap justify-center gap-8 max-w-[650px]">
            {teamMembers.slice(3, 5).map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Section finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <span className="block text-2xl md:text-4xl font-bold text-white/90">
              Ensemble, nous créons
            </span>
            <span className="block text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent tracking-[0.1em]">
              L'EXCELLENCE
            </span>
          </div>
          
          <motion.button
            onClick={handleCtaClick}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-bold text-black text-lg">DÉCOUVRIR NOTRE HISTOIRE</span>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};