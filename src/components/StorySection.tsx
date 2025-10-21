import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// DESIGN SYSTEM UNIFIÉ
const DESIGN = {
  colors: {
    titleGradient: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)',
    buttonGradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
    backgroundGradient: 'linear-gradient(180deg, #0A0F29 0%, #16213e 100%)',
    white: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.15)'
  },
  typography: {
    h1Desktop: 'clamp(3.5rem, 7vw, 6rem)',
    h1Mobile: 'clamp(2rem, 10vw, 3rem)',
    bodyDesktop: '18px',
    bodyMobile: '16px'
  },
  spacing: {
    sectionPaddingDesktop: '120px 0',
    sectionPaddingTablet: '100px 0', 
    sectionPaddingMobile: '60px 0',
    containerPadding: '0 24px'
  }
};

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
    image: 'https://26.staticbtf.eno.do/v1/81-default/50f21173d02d28fa4e1ff7ef69c16c44/media.jpg',
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

// Composant titre responsive optimisé
const SectionTitle = memo(({ line1, line2, subtitle, isMobile, isTablet }) => (
  <>
    <motion.h2
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        fontSize: isMobile ? DESIGN.typography.h1Mobile : DESIGN.typography.h1Desktop,
        fontWeight: 900,
        lineHeight: isMobile ? 1.1 : 0.9,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        marginBottom: isMobile ? '1rem' : '0'
      }}
    >
      <span style={{ 
        display: 'block',
        color: DESIGN.colors.white,
        marginBottom: isMobile ? '4px' : '-8px'
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
          maxWidth: isMobile ? '100%' : '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          marginTop: isMobile ? '1rem' : '1.5rem',
          textAlign: 'center',
          padding: isMobile ? '0 16px' : '0'
        }}
      >
        {subtitle}
      </motion.p>
    )}
  </>
));

// Carte membre équipe optimisée
const TeamCard = memo(({ member, index, isMobile, isTablet }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '380px' : isTablet ? '400px' : '420px',
        borderRadius: isMobile ? '12px' : '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: !isMobile && isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)',
        boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.2)',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => {}} // Améliore la réactivité tactile
      >
        {/* Placeholder pendant le chargement */}
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))',
            animation: 'pulse 2s infinite'
          }} />
        )}
        
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            transform: !isMobile && isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src={member.image} 
            alt={`${member.name} ${member.lastName}`}
            onLoad={() => setImageLoaded(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease'
            }}
            loading="lazy"
          />
        </motion.div>
        
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 60%)'
        }} />
        
        {/* Badge numéro */}
        <motion.div 
          style={{
            position: 'absolute',
            top: isMobile ? '12px' : '16px',
            right: isMobile ? '12px' : '16px',
            width: isMobile ? '40px' : '48px',
            height: isMobile ? '40px' : '48px',
            borderRadius: '50%',
            background: 'rgba(236,72,153,0.2)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(236,72,153,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: !isMobile && isHovered ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
            transition: 'all 0.5s ease'
          }}
        >
          <span style={{
            color: 'white',
            fontWeight: 700,
            fontSize: isMobile ? '16px' : '18px'
          }}>{index + 1}</span>
        </motion.div>
        
        {/* Badge star pour fondateur */}
        {index === 0 && (
          <motion.div 
            style={{
              position: 'absolute',
              top: isMobile ? '12px' : '16px',
              left: isMobile ? '12px' : '16px'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles style={{ 
              width: isMobile ? '20px' : '24px', 
              height: isMobile ? '20px' : '24px', 
              color: '#fbbf24' 
            }} />
          </motion.div>
        )}
        
        {/* Contenu */}
        <motion.div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: isMobile ? '20px' : '24px',
            zIndex: 2,
            transform: !isMobile && isHovered ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'transform 0.4s ease'
          }}
        >
          {/* Nom */}
          <motion.div style={{ marginBottom: '8px' }}>
            <h3 style={{
              color: 'white',
              fontSize: isMobile ? '20px' : '22px',
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.2
            }}>
              {member.name}
            </h3>
            <h4 style={{
              background: DESIGN.colors.titleGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2
            }}>
              {member.lastName}
            </h4>
          </motion.div>
          
          {/* Rôle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '50px',
            background: 'rgba(236,72,153,0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(236,72,153,0.3)',
            marginBottom: '12px'
          }}>
            <span style={{
              color: 'white',
              fontSize: isMobile ? '11px' : '12px',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              {member.role}
            </span>
          </div>
          
          {/* Bio - Visible au hover sur desktop */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: !isMobile && isHovered ? 1 : 0,
              height: !isMobile && isHovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            style={{
              color: DESIGN.colors.textSecondary,
              fontSize: '13px',
              lineHeight: 1.4,
              margin: 0,
              overflow: 'hidden'
            }}
          >
            {member.bio}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
});

// Carousel mobile optimisé
const MobileCarousel = memo(({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < members.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [touchStart, touchEnd, currentIndex, members.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, members.length - 1));
  }, [members.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Carousel container */}
      <div 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ 
          overflow: 'hidden',
          touchAction: 'pan-y pinch-zoom',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            display: 'flex',
            width: `${members.length * 100}%`
          }}
        >
          {members.map((member, index) => (
            <div key={member.id} style={{ width: '100%', padding: '0 8px' }}>
              <TeamCard 
                member={member} 
                index={index} 
                isMobile={true}
                isTablet={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        disabled={currentIndex === 0}
        style={{
          position: 'absolute',
          left: '-12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(236,72,153,0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          opacity: currentIndex === 0 ? 0.3 : 1,
          transition: 'all 0.3s ease',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        <ChevronLeft style={{ width: '24px', height: '24px', color: 'white' }} />
      </button>

      <button
        onClick={goToNext}
        disabled={currentIndex === members.length - 1}
        style={{
          position: 'absolute',
          right: '-12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(236,72,153,0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          opacity: currentIndex === members.length - 1 ? 0.3 : 1,
          transition: 'all 0.3s ease',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        <ChevronRight style={{ width: '24px', height: '24px', color: 'white' }} />
      </button>

      {/* Dots indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px'
      }}>
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentIndex === index 
                ? 'linear-gradient(135deg, #ec4899, #a855f7)' 
                : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
});

// Background animé léger
const AnimatedBackground = memo(() => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at center,rgba(236,72,153,0.08),transparent 70%)'
    }} />
    
    {/* Particules flottantes - Réduites sur mobile */}
    {typeof window !== 'undefined' && window.innerWidth > 768 && (
      [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            background: 'rgba(236,72,153,0.3)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [`0%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))
    )}
  </div>
));

export const StorySection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsSmallMobile(width <= 480);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleCtaClick = useCallback((e) => {
    e.preventDefault();
    navigate('/equipe');
  }, [navigate]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      padding: isMobile ? DESIGN.spacing.sectionPaddingMobile : 
               isTablet ? DESIGN.spacing.sectionPaddingTablet : 
               DESIGN.spacing.sectionPaddingDesktop,
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden'
    }}>
      <AnimatedBackground />

      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: DESIGN.spacing.containerPadding
      }}>
        {/* Header avec titre uniformisé */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}
        >
          {/* Badge "En scène" */}
          <motion.div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '10px 20px' : '12px 24px',
              borderRadius: '50px',
              background: 'rgba(236,72,153,0.1)',
              border: '1px solid rgba(236,72,153,0.3)',
              marginBottom: isMobile ? '24px' : '32px'
            }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(236,72,153,0.2)",
                "0 0 30px rgba(236,72,153,0.3)",
                "0 0 20px rgba(236,72,153,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles style={{ 
              width: isMobile ? '14px' : '16px', 
              height: isMobile ? '14px' : '16px', 
              color: '#ec4899' 
            }} />
            <span style={{
              color: '#ec4899',
              fontWeight: 600,
              fontSize: isMobile ? '12px' : '14px',
              letterSpacing: '0.1em'
            }}>EN SCÈNE</span>
          </motion.div>

          <SectionTitle 
            line1="L'équipe,"
            line2="Petite par la taille, grande par l'ambition"
            subtitle="Cinq passionnés qui mettent du cœur dans chaque projet"
            isMobile={isMobile}
            isTablet={isTablet}
          />
        </motion.div>

        {/* Layout Desktop - Grille 5 colonnes */}
        {!isMobile && !isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '24px'
          }}>
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                index={index} 
                isMobile={false}
                isTablet={false}
              />
            ))}
          </div>
        )}

        {/* Layout Tablette - Grille responsive */}
        {isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                index={index} 
                isMobile={false}
                isTablet={true}
              />
            ))}
          </div>
        )}

        {/* Layout Mobile - Carousel ou Grille selon taille */}
        {isMobile && (
          isSmallMobile ? (
            // Très petit mobile : Carousel
            <MobileCarousel members={teamMembers} />
          ) : (
            // Mobile normal : Grille 2 colonnes
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {teamMembers.map((member, index) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  index={index} 
                  isMobile={true}
                  isTablet={false}
                />
              ))}
            </div>
          )
        )}

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '48px' : '80px'
          }}
        >
          <motion.button 
            onClick={handleCtaClick}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '14px 28px' : '20px 40px',
              borderRadius: '50px',
              background: DESIGN.colors.buttonGradient,
              color: 'white',
              fontWeight: 700,
              fontSize: isMobile ? '15px' : '18px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(236,72,153,0.35)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={!isMobile ? { 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(236,72,153,0.5)'
            } : {}}
          >
            <Users style={{ width: '20px', height: '20px' }} />
            <span>{isMobile ? 'NOTRE HISTOIRE' : 'DÉCOUVRIR NOTRE HISTOIRE'}</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};