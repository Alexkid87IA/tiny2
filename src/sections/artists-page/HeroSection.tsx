import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { artists } from '../../data/artists';

// Créer les rangées pour la rivière desktop (tripler pour l'animation infinie)
const topRow = [...artists.slice(0, 5), ...artists.slice(0, 5), ...artists.slice(0, 5)];
const bottomRow = [...artists.slice(5, 10), ...artists.slice(5, 10), ...artists.slice(5, 10)];

// Composant pour le fond animé amélioré
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient de base */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F29] via-[#0f0f23] to-[#1a1f3a]" />
    
    {/* Orbes de lumière flottants */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 60%)',
        filter: 'blur(100px)',
        top: '10%',
        left: '-200px',
      }}
      animate={{
        x: [0, 200, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    
    <motion.div
      className="absolute rounded-full"
      style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 60%)',
        filter: 'blur(100px)',
        bottom: '10%',
        right: '-150px',
      }}
      animate={{
        x: [0, -150, 0],
        y: [0, 100, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    
    {/* Grille de points lumineux */}
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '3px',
            height: '3px',
            left: `${(i % 6) * 20}%`,
            top: `${Math.floor(i / 6) * 20}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
    
    {/* Particules scintillantes */}
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute"
        style={{
          width: '2px',
          height: '2px',
          background: 'white',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 6px rgba(255,255,255,0.8)',
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 2, 0.5],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Carte d'artiste pour la rivière desktop
const RiverArtistCard = ({ artist, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/artiste/${artist.id}`}
      className="block flex-shrink-0 group"
      style={{
        width: '280px',
        height: '420px',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        border: '2px solid',
        borderColor: isHovered ? 'rgba(236, 72, 153, 0.5)' : 'rgba(255, 255, 255, 0.1)',
        transform: isHovered ? 'scale(1.08) translateY(-15px) rotateY(5deg)' : 'scale(1)',
        zIndex: isHovered ? 30 : 1,
        boxShadow: isHovered 
          ? '0 40px 80px rgba(0, 0, 0, 0.7), 0 0 120px rgba(236, 72, 153, 0.5), inset 0 0 30px rgba(236, 72, 153, 0.2)'
          : '0 15px 40px rgba(0, 0, 0, 0.4)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de brillance au hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
      )}
      
      {/* Badge de production/diffusion */}
      {(artist.production || artist.diffusion) && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.95), rgba(168, 85, 247, 0.95))' 
              : 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            padding: '8px 16px',
            borderRadius: '25px',
            fontSize: '0.7rem',
            color: 'white',
            fontWeight: '700',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            zIndex: 5,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
          <Star size={12} style={{ fill: 'white' }} />
          {artist.production ? `Prod : ${artist.production}` : `Diff : ${artist.diffusion}`}
        </motion.div>
      )}
      
      {/* Image avec effet parallaxe */}
      <motion.img
        src={artist.posterImage || artist.image}
        alt={artist.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.95)',
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      />
      
      {/* Overlay gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isHovered 
          ? `linear-gradient(to top, 
              rgba(0, 0, 0, 0.98) 0%, 
              rgba(0, 0, 0, 0.8) 35%, 
              rgba(0, 0, 0, 0.4) 65%, 
              transparent 100%)` 
          : `linear-gradient(to top, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.3) 30%, 
              transparent 70%)`,
        transition: 'all 0.5s ease',
      }} />
      
      {/* Contenu */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem',
          textAlign: 'center',
          transform: isHovered ? 'translateY(0)' : 'translateY(40px)',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: '1.6rem',
            fontWeight: '900',
            color: 'white',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
          }}
        >
          {artist.name}
        </motion.h3>
        
        {artist.genre && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '0.85rem',
              color: 'rgba(236, 72, 153, 0.9)',
              marginBottom: '1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {artist.genre}
          </motion.p>
        )}
        
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.8rem',
            background: 'linear-gradient(135deg, white, rgba(255,255,255,0.95))',
            color: '#0a0a1a',
            border: 'none',
            borderRadius: '9999px',
            fontWeight: '800',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(255,255,255,0.3)',
          }}
        >
          Découvrir
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
      
      {/* Effet de brillance animé */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
          transform: 'translateX(-100%) skewX(-25deg)',
        }}
        animate={isHovered ? { x: '200%' } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </Link>
  );
};

// Carte mobile
const MobileArtistCard = ({ artist, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
  >
    <Link
      to={`/artiste/${artist.id}`}
      className="block relative rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(15,15,35,0.5) 0%, rgba(30,30,60,0.3) 100%)',
        border: '2px solid rgba(255,255,255,0.15)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Badge diffusion mobile */}
        {(artist.production || artist.diffusion) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(168, 85, 247, 0.9))',
              backdropFilter: 'blur(20px)',
              padding: '10px 18px',
              borderRadius: '25px',
              fontSize: '0.7rem',
              color: 'white',
              fontWeight: '800',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              zIndex: 3,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 30px rgba(236, 72, 153, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
            <Star size={12} style={{ fill: 'white' }} />
            {artist.production ? `Prod : ${artist.production}` : `Diff : ${artist.diffusion}`}
          </motion.div>
        )}
        
        <img 
          src={artist.posterImage || artist.image} 
          alt={artist.name}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(0, 0, 0, 0.6) 30%, 
            rgba(0, 0, 0, 0.3) 50%, 
            transparent 70%)`,
        }} />
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '900',
            color: 'white',
            marginBottom: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            textShadow: '0 0 30px rgba(255,255,255,0.5)',
          }}>
            {artist.name}
          </h3>
          
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '1.1rem 2.8rem',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.95) 0%, rgba(168, 85, 247, 0.95) 100%)',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.4)',
            borderRadius: '9999px',
            fontWeight: '800',
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 0 35px rgba(236, 72, 153, 0.6), 0 15px 35px rgba(0, 0, 0, 0.5)',
          }}>
            Découvrir
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

// Composant principal
export const ArtistsHeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: isMobile ? '100px' : '140px',
      paddingBottom: isMobile ? '60px' : '80px',
      background: 'linear-gradient(180deg, #0A0F29 0%, #0f0f23 50%, #1a1f3a 100%)',
      overflow: 'hidden',
    }}>
      {/* Background animé */}
      {!isMobile && <AnimatedBackground />}
      
      {/* Effets de profondeur */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center top, rgba(236,72,153,0.1), transparent 50%), radial-gradient(ellipse at center bottom, rgba(168,85,247,0.1), transparent 50%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'relative' }}
          >
            {/* Effet de lumière derrière le titre */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              style={{
                position: 'absolute',
                inset: '-120px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 40%)',
                filter: 'blur(120px)',
                pointerEvents: 'none',
              }}
            />
            
            {/* Titre principal */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 style={{
                fontSize: isMobile ? '3.5rem' : '7rem',
                fontWeight: '900',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                marginBottom: '0.3em',
                position: 'relative',
              }}>
                <motion.span 
                  style={{
                    display: 'block',
                    background: 'linear-gradient(to right, white, rgba(255,255,255,0.95))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.1em',
                    textShadow: '0 0 80px rgba(255,255,255,0.5)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Nos artistes
                </motion.span>
                <motion.span 
                  style={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #ec4899, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  en lumière
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>
          
          {/* Sous-titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: '400',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '2rem auto 0',
            }}
          >
            Découvrez les <span style={{ color: '#ec4899', fontWeight: '600' }}>talents exceptionnels</span> qui font la richesse de notre collectif.
            <br />
            <span style={{ 
              fontSize: '0.9em', 
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'block',
              marginTop: '1rem',
            }}>
              Des artistes uniques qui partagent notre passion pour le spectacle vivant
            </span>
          </motion.div>
          
          {/* Instruction interactive */}
          {!isMobile && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                fontSize: '0.95rem',
                color: 'rgba(236, 72, 153, 0.7)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: '600',
                marginTop: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
              }}
            >
              <motion.span
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
              Survolez les cartes pour découvrir
              <motion.span
                animate={{ 
                  x: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ←
              </motion.span>
            </motion.p>
          )}
        </div>

        {/* VERSION DESKTOP : Rivière d'artistes */}
        {!isMobile && (
          <div style={{ 
            position: 'relative', 
            margin: '0 -4rem',
            padding: '3rem 0',
          }}>
            {/* Masques de dégradé */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '10rem',
              background: 'linear-gradient(to right, #0A0F29 0%, rgba(10, 15, 41, 0.7) 50%, transparent 100%)',
              zIndex: 10,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              width: '10rem',
              background: 'linear-gradient(to left, #0A0F29 0%, rgba(10, 15, 41, 0.7) 50%, transparent 100%)',
              zIndex: 10,
              pointerEvents: 'none',
            }} />
            
            {/* Rangée du haut - défile vers la droite */}
            <motion.div
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2rem',
                width: 'fit-content',
              }}
              animate={{ x: [0, '-50%'] }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {topRow.map((artist, index) => (
                <RiverArtistCard key={`top-${index}`} artist={artist} index={index} />
              ))}
            </motion.div>
            
            {/* Rangée du bas - défile vers la gauche */}
            <motion.div
              style={{
                display: 'flex',
                gap: '2rem',
                width: 'fit-content',
              }}
              initial={{ x: '-50%' }}
              animate={{ x: ['-50%', 0] }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {bottomRow.map((artist, index) => (
                <RiverArtistCard key={`bottom-${index}`} artist={artist} index={index} />
              ))}
            </motion.div>
          </div>
        )}

        {/* VERSION MOBILE : Grille verticale */}
        {isMobile && (
          <div style={{ padding: '0 20px', marginTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {artists.map((artist, index) => (
                <MobileArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};