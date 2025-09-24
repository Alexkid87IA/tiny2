import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    id: 'benedicte',
    name: 'Bénédicte',
    lastName: 'Lecoq',
    role: 'Fondatrice & Directrice',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
    bio: 'Visionnaire du spectacle vivant',
  },
  {
    id: 'isabelle',
    name: 'Isabelle',
    lastName: 'Sabatier', 
    role: 'Diffusion & Tournées',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
    bio: 'Architecte des tournées internationales',
  },
  {
    id: 'elodie',
    name: 'Élodie',
    lastName: 'Biffi',
    role: 'Administration',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
    bio: 'Garante de l\'excellence opérationnelle',
  },
  {
    id: 'jeremy',
    name: 'Jérémy',
    lastName: 'Dravigny',
    role: 'Communication & Prod',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
    bio: 'Créateur d\'expériences mémorables',
  },
  {
    id: 'margaux',
    name: 'Margaux',
    lastName: 'Morel',
    role: 'Production & Events',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
    bio: 'Orchestratrice d\'événements uniques',
  }
];

// Types TypeScript
interface TeamMember {
  id: string;
  name: string;
  lastName: string;
  role: string;
  image: string;
  bio: string;
}

interface CardProps {
  member: TeamMember;
  index: number;
}

// Carte pour Desktop et Mobile
const TeamCard: React.FC<CardProps> = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative w-full h-[380px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden cursor-pointer">
      {/* Image de fond avec effet parallax au hover */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={member.image} 
          alt={`${member.name} ${member.lastName}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      {/* Effet de brillance au hover (desktop) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent hidden lg:block"
        initial={{ x: '-100%', y: '-100%' }}
        whileHover={{ x: '100%', y: '100%' }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Badge numéro */}
      <motion.div 
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-400/30 flex items-center justify-center"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white font-bold text-lg">{index + 1}</span>
      </motion.div>
      
      {/* Badge "Star" pour le fondateur */}
      {index === 0 && (
        <motion.div 
          className="absolute top-4 left-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      )}
      
      {/* Contenu */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl lg:text-2xl font-bold text-white drop-shadow-lg">
              {member.name}
            </h3>
            <h4 className="text-xl lg:text-xl font-semibold text-transparent bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text">
              {member.lastName}
            </h4>
          </div>
          <p className="text-sm text-white/90 font-medium">
            {member.role}
          </p>
          <motion.p 
            className="text-xs text-white/70 italic"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            "{member.bio}"
          </motion.p>
        </div>
        
        {/* Ligne décorative en bas */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      
      {/* Bordure animée au hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/50 transition-all duration-500 rounded-2xl" />
    </div>
  </motion.div>
);

export const StorySection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/equipe');
  };

  return (
    <section className="relative min-h-screen py-16 lg:py-24 bg-[#0A0F29] overflow-hidden">
      {/* Fond animé avec particules (plus subtiles) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_70%)]" />
        {/* Quelques particules flottantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Badge "En scène" */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-8"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(236,72,153,0.2)",
                "0 0 30px rgba(236,72,153,0.3)",
                "0 0 20px rgba(236,72,153,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 font-semibold text-sm tracking-wider">EN SCÈNE</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
            <span className="block text-white mb-2">Les Artistes</span>
            <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 bg-clip-text text-transparent">
              de l'Ombre
            </span>
          </h2>
          
          <p className="mt-6 text-lg lg:text-xl text-white/60 max-w-2xl mx-auto">
            Découvrez les talents exceptionnels qui orchestrent la magie en coulisses
          </p>
        </motion.div>

        {/* VERSION DESKTOP - Grille de 5 cartes */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* VERSION TABLETTE - Grille 3 + 2 */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 mt-6 max-w-[66%] mx-auto">
          {teamMembers.slice(3, 5).map((member, index) => (
            <TeamCard key={member.id} member={member} index={index + 3} />
          ))}
        </div>

        {/* VERSION MOBILE - Carousel horizontal */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
               style={{ 
                 msOverflowStyle: 'none', 
                 scrollbarWidth: 'none',
                 WebkitOverflowScrolling: 'touch' 
               }}>
            {teamMembers.map((member, index) => (
              <div key={member.id} className="flex-shrink-0 w-[280px] snap-center">
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
          
          {/* Indicateur de scroll mobile */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-white/40 text-sm">Glissez pour découvrir</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 text-pink-400" />
            </motion.div>
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 lg:mt-20"
        >
          <button 
            onClick={handleCtaClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105"
          >
            <Users className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-base lg:text-lg">DÉCOUVRIR NOTRE HISTOIRE</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
      
      {/* CSS pour cacher la scrollbar sur mobile */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};