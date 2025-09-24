import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { artists } from '../data/artists';

// DESIGN SYSTEM UNIFIÉ BASÉ SUR HEROSECTION
const DESIGN = {
  colors: {
    // Gradient exact du Hero
    titleGradient: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)',
    buttonGradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
    backgroundGradient: 'linear-gradient(180deg, #0A0F29 0%, #16213e 100%)',
    white: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.15)'
  },
  typography: {
    // Tailles exactes du Hero
    h1Desktop: 'clamp(4rem, 8vw, 7rem)',
    h1Mobile: 'clamp(2.5rem, 12vw, 3.5rem)',
    bodyDesktop: '18px',
    bodyMobile: '15px'
  },
  spacing: {
    sectionDesktop: '120px 0',
    sectionMobile: '80px 0',
    container: '1200px',
    containerPadding: '0 32px',
    gap: '24px'
  },
  animation: {
    duration: 0.8,
    easing: [0.16, 1, 0.3, 1],
    delay: 0.1
  }
};

// Composant titre standardisé EXACT comme le Hero
const SectionTitle = ({ line1, line2, subtitle, isMobile }) => (
  <>
    <motion.h2
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        fontSize: isMobile ? DESIGN.typography.h1Mobile : DESIGN.typography.h1Desktop,
        fontWeight: 900,
        lineHeight: 0.9,
        letterSpacing: '-0.02em'
      }}
    >
      <span style={{ 
        display: 'block',
        color: DESIGN.colors.white,
        marginBottom: isMobile ? '-2px' : '-8px'
      }}>
        {line1}
      </span>
      <span style={{ 
        display: 'block',
        background: DESIGN.colors.titleGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        paddingBottom: '0.15em'
      }}>
        {line2}
      </span>
    </motion.h2>
    
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: isMobile ? DESIGN.typography.bodyMobile : DESIGN.typography.bodyDesktop,
          color: DESIGN.colors.textSecondary,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          paddingInline: isMobile ? '0' : '20px',
          marginTop: '1.5rem'
        }}
      >
        {subtitle}
      </motion.p>
    )}
  </>
);

// Composant bouton identique au Hero
const PrimaryButton = ({ to, children, isMobile }) => {
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: isMobile ? '14px 28px' : '16px 36px',
    background: DESIGN.colors.buttonGradient,
    color: 'white',
    borderRadius: '100px',
    fontWeight: 600,
    fontSize: isMobile ? '14px' : '16px',
    textDecoration: 'none',
    boxShadow: '0 8px 32px rgba(236,72,153,0.35)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };
  
  return (
    <Link
      to={to}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.5)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(236,72,153,0.35)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {children}
    </Link>
  );
};

// Particules minimales
const StandardParticles = () => (
  <>
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: 'easeInOut',
        }}
      />
    ))}
  </>
);

// Carte d'artiste standardisée
const ArtistCard = ({ artist, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/artiste/${artist.id}`}
      style={{
        display: 'block',
        width: isMobile ? '100%' : '220px',
        height: isMobile ? 'auto' : '330px',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        background: DESIGN.colors.glass,
        border: `1px solid ${DESIGN.colors.glassBorder}`,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: !isMobile && isHovered ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
        boxShadow: !isMobile && isHovered 
          ? '0 25px 50px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <img
        src={artist.posterImage || artist.image}
        alt={artist.name}
        style={{
          width: '100%',
          height: isMobile ? 'auto' : '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: !isMobile && isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 60%)',
      }} />
      
      {(artist.production || artist.diffusion) && (
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          background: DESIGN.colors.buttonGradient,
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '0.65rem',
          color: 'white',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(236, 72, 153, 0.4)',
        }}>
          {artist.production ? `Production ${artist.production}` : `Diffusion ${artist.diffusion}`}
        </div>
      )}
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
      }}>
        <h3 style={{
          fontSize: isMobile ? '1.2rem' : '1.1rem',
          fontWeight: 700,
          color: 'white',
          marginBottom: '8px',
        }}>
          {artist.name}
        </h3>
        
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'white',
            }}
          >
            Découvrir
            <ArrowRight size={12} />
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export const ArtistsSliderSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const topRow = [...artists.slice(0, 5), ...artists.slice(0, 5), ...artists.slice(0, 5)];
  const bottomRow = [...artists.slice(5, 10), ...artists.slice(5, 10), ...artists.slice(5, 10)];

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      padding: isMobile ? DESIGN.spacing.sectionMobile : DESIGN.spacing.sectionDesktop,
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden',
    }}>
      {!isMobile && <StandardParticles />}
      
      <div style={{
        position: 'relative',
        maxWidth: DESIGN.spacing.container,
        margin: '0 auto',
        padding: DESIGN.spacing.containerPadding,
      }}>
        {/* Header avec style exact du Hero */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '4rem',
        }}>
          <SectionTitle 
            line1="Nos artistes,"
            line2="Notre fierté"
            subtitle="Chaque talent est choisi, accompagné et révélé avec soin"
            isMobile={isMobile}
          />
        </div>

        {/* Content : Rivière d'artistes desktop */}
        {!isMobile && (
          <div style={{ 
            position: 'relative',
            margin: '0 -32px',
            padding: '2rem 0',
          }}>
            <motion.div
              style={{
                display: 'flex',
                gap: DESIGN.spacing.gap,
                marginBottom: DESIGN.spacing.gap,
                width: 'fit-content',
              }}
              animate={{ x: [0, '-50%'] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {topRow.map((artist, index) => (
                <ArtistCard key={`top-${index}`} artist={artist} index={0} isMobile={false} />
              ))}
            </motion.div>
            
            <motion.div
              style={{
                display: 'flex',
                gap: DESIGN.spacing.gap,
                width: 'fit-content',
              }}
              initial={{ x: '-50%' }}
              animate={{ x: ['-50%', 0] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {bottomRow.map((artist, index) => (
                <ArtistCard key={`bottom-${index}`} artist={artist} index={0} isMobile={false} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Content mobile : grille verticale */}
        {isMobile && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: DESIGN.spacing.gap 
          }}>
            {artists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} isMobile={true} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginTop: isMobile ? '3rem' : '4rem',
          }}
        >
          <PrimaryButton to="/artistes" isMobile={isMobile}>
            <span>Voir tous nos artistes</span>
            <ArrowRight size={18} />
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
};