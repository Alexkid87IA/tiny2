import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ChevronRight, Mail } from 'lucide-react';
import { artists } from '../data/artists';

// Composant pour les particules animées améliorées
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient orbs animés */}
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: ['-20%', '120%'],
        y: ['20%', '80%'],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: ['120%', '-20%'],
        y: ['80%', '20%'],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
    
    {/* Étoiles scintillantes */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Composant pour une carte d'artiste interactive (format portrait)
const ArtistCard = ({ artist, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/artiste/${artist.id}`}>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
          {/* Image de fond */}
          <motion.div 
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          {/* Badge de production/diffusion plus visible */}
          {(artist.production || artist.diffusion) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
              className="absolute top-3 left-3 right-3"
            >
              <div className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-center">
                <span className="text-[9px] text-black font-semibold">
                  {artist.production ? artist.production : `Diffusion ${artist.diffusion}`}
                </span>
              </div>
            </motion.div>
          )}
          
          {/* Contenu principal */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <motion.div
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm md:text-lg font-bold text-white mb-1 group-hover:text-glow transition-all duration-300">
                {artist.name}
              </h3>
              <p className="text-xs text-white/70 line-clamp-2">{artist.tagline}</p>
            </motion.div>
          </div>
          
          {/* Overlay au hover */}
          <motion.div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
              Découvrir l'artiste
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

// Section principale
export const ProducerSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section 
      ref={sectionRef}
      id="programmateurs" 
      className="relative py-32 bg-[#0A0F29] overflow-hidden"
    >
      <AnimatedBackground />
      
      {/* Background parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative container mx-auto px-4"
      >
        {/* Header simplifié avec value proposition */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative inline-block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            
            <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <motion.span 
                className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Programmateurs,
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mt-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                enrichissez votre saison
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 max-w-4xl mx-auto mt-8 leading-relaxed"
          >
            Tiny Team accompagne des humoristes talentueux avec exigence et créativité.
            <br />
            <span className="text-pink-300 font-medium">Chaque spectacle devient une expérience inoubliable.</span>
          </motion.p>
        </div>
        
        {/* Pourquoi Tiny Team - Arguments de vente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
            Votre partenaire booking de confiance
          </h3>
          <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto">
            Plus qu'une agence : votre équipe dédiée pour transformer chaque spectacle en succès mémorable.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Artistes triés sur le volet",
                  description: "Seulement les meilleurs, testés et approuvés par nos équipes"
                },
                {
                  icon: "📄",
                  title: "Un seul interlocuteur",
                  description: "Contrat unique, facture unique, suivi de A à Z"
                },
                {
                  icon: "🚀",
                  title: "Clé en main",
                  description: "Technique, com', logistique : on gère tout pour vous"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Grille d'artistes moderne - 2 lignes de 5 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto mb-12">
          {artists.slice(0, 10).map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>
        
        {/* Message de réassurance après la grille */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white/60 max-w-3xl mx-auto">
            <span className="text-pink-300 font-medium">Simplifiez-vous le booking :</span> un contrat unique, 
            une gestion complète, zéro stress. Concentrez-vous sur votre public, 
            on s'occupe du reste.
          </p>
        </motion.div>
        
        {/* Bouton vers la page artistes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Link
            to="/artistes"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
          >
            <Users className="w-6 h-6 text-pink-400" />
            <span className="font-semibold text-white text-lg">
              Explorer la page artistes complète
            </span>
            <ChevronRight className="w-5 h-5 text-pink-400 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
        
        {/* CTA Final amélioré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Effet de lumière derrière la carte */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
          </div>
          
          <div className="relative glass-card rounded-3xl p-10 max-w-3xl mx-auto text-center overflow-hidden">
            {/* Motif de fond animé */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-transparent to-purple-500" />
            </div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bookez votre prochain succès
              </h3>
              
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Choisissez parmi nos artistes et bénéficiez de notre expertise complète.
                De la signature à l'applaudissement final, nous sommes à vos côtés.
              </p>
              
              {/* Points de réassurance */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Réponse sous 48h</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Tarifs dégressifs</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Kit com' offert</span>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <a
                  href="mailto:booking@tinyteam.fr"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-white font-medium">
                    booking@tinyteam.fr
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};