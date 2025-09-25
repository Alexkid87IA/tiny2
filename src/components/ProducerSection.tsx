import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ChevronRight, Mail, Phone, UserCheck, MessageCircle } from 'lucide-react';
import { artists } from '../data/artists';

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
    // Optimisé pour mobile avec clamp()
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
          maxWidth: isMobile ? '100%' : '800px',
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

// Background animé performant
const AnimatedBackground = memo(() => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {/* Orbes de lumière - Optimisés pour performance */}
    <motion.div
      style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        willChange: 'transform'
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
      style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        willChange: 'transform'
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
    
    {/* Étoiles scintillantes - Désactivées sur mobile pour performance */}
    {typeof window !== 'undefined' && window.innerWidth > 768 && (
      [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            background: 'white',
            borderRadius: '50%',
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
      ))
    )}
  </div>
));

// Carte d'artiste optimisée
const ArtistCard = memo(({ artist, index, isMobile, isTablet }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: Math.min(index * 0.05, 0.3), // Limite le delay pour éviter trop d'attente
        type: 'spring',
        stiffness: 100
      }}
    >
      <Link to={`/artiste/${artist.id}`} style={{ textDecoration: 'none' }}>
        <div 
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            borderRadius: isMobile ? '8px' : '12px',
            overflow: 'hidden',
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
          {/* Background placeholder pendant le chargement */}
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
              src={artist.image}
              alt={artist.name}
              onLoad={() => setImageLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
              loading="lazy" // Lazy loading pour performance
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)'
            }} />
          </motion.div>
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: isMobile ? '10px' : '16px'
          }}>
            <h3 style={{
              fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '4px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>{artist.name}</h3>
            <p style={{
              fontSize: isMobile ? '11px' : '12px',
              color: 'rgba(255,255,255,0.7)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.4,
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>{artist.tagline}</p>
          </div>
          
          {!isMobile && (
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none'
              }}
            >
              <div style={{
                padding: '8px 16px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Découvrir l'artiste
              </div>
            </motion.div>
          )}
        </div>
      </Link>
    </motion.div>
  );
});

// Carte d'engagement optimisée
const EngagementCard = memo(({ item, index, isMobile, isTablet }) => {
  const Icon = item.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        background: DESIGN.colors.glass,
        border: `1px solid ${DESIGN.colors.glassBorder}`,
        borderRadius: isMobile ? '8px' : '12px',
        padding: isMobile ? '20px' : '24px',
        textAlign: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        WebkitTapHighlightColor: 'transparent'
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px' 
      }}>
        <div style={{
          width: isMobile ? '48px' : '56px',
          height: isMobile ? '48px' : '56px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(236,72,153,0.2)',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}>
          <Icon style={{ 
            width: isMobile ? '24px' : '28px', 
            height: isMobile ? '24px' : '28px', 
            color: '#ec4899'
          }} />
        </div>
      </div>
      <h3 style={{
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: 700,
        color: 'white',
        marginBottom: '8px'
      }}>{item.title}</h3>
      <p style={{
        fontSize: isMobile ? '13px' : '14px',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.5
      }}>{item.description}</p>
    </motion.div>
  );
});

export const ProducerSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const engagements = [
    { icon: Phone, title: "Un seul interlocuteur", description: "Vous appelez, on décroche" },
    { icon: UserCheck, title: "Suivi personnalisé", description: "On connaît vos contraintes et vos publics" },
    { icon: MessageCircle, title: "Transparence totale", description: "Les bonnes et les moins bonnes nouvelles" }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="programmateurs" 
      style={{
        position: 'relative',
        padding: isMobile ? DESIGN.spacing.sectionPaddingMobile : 
                 isTablet ? DESIGN.spacing.sectionPaddingTablet : 
                 DESIGN.spacing.sectionPaddingDesktop,
        background: DESIGN.colors.backgroundGradient,
        overflow: 'hidden'
      }}
    >
      <AnimatedBackground />
      
      {/* Parallax background layer */}
      <motion.div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          y: backgroundY,
          pointerEvents: 'none'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center,rgba(236,72,153,0.1),transparent 70%)'
        }} />
      </motion.div>
      
      <motion.div style={{ opacity }}>
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: DESIGN.spacing.containerPadding
        }}>
          {/* Header avec titre uniformisé */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
            <SectionTitle 
              line1="Programmateurs,"
              line2="Enrichissez votre saison"
              subtitle={
                <>
                  Tiny Team accompagne des humoristes talentueux avec exigence et créativité.
                  <br />
                  <span style={{ color: '#ec4899', fontWeight: 500 }}>
                    Chaque spectacle devient une expérience inoubliable.
                  </span>
                </>
              }
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>
          
          {/* Nos 3 engagements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: isMobile ? '60px' : '80px' }}
          >
            <h3 style={{
              textAlign: 'center',
              fontSize: isMobile ? '22px' : isTablet ? '28px' : '32px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px'
            }}>Nos 3 engagements</h3>
            
            <p style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              fontSize: isMobile ? '14px' : '16px'
            }}>
              On connaît vos contraintes et vos publics.
            </p>
            
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '16px' : '24px'
              }}>
                {engagements.map((item, index) => (
                  <EngagementCard
                    key={index}
                    item={item}
                    index={index}
                    isMobile={isMobile}
                    isTablet={isTablet}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Grille d'artistes responsive */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 
                               isTablet ? 'repeat(4, 1fr)' : 
                               'repeat(5, 1fr)',
            gap: isMobile ? '12px' : isTablet ? '16px' : '24px',
            maxWidth: '1100px',
            margin: '0 auto',
            marginBottom: isMobile ? '40px' : '48px'
          }}>
            {artists.slice(0, 10).map((artist, index) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                index={index} 
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))}
          </div>
          
          {/* Réassurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              textAlign: 'center', 
              marginBottom: isMobile ? '48px' : '64px',
              padding: isMobile ? '0 16px' : '0'
            }}
          >
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: 1.6
            }}>
              <span style={{ color: '#ec4899', fontWeight: 500 }}>
                Nous travaillons avec des salles de toute capacité.
              </span><br/>
              Ce qui compte, c'est la réussite de votre soirée.
            </p>
          </motion.div>
          
          {/* Bouton vers artistes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '60px' : '80px' }}
          >
            <Link
              to="/artistes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '12px' : '16px',
                padding: isMobile ? '12px 24px' : '16px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(to right, rgba(236,72,153,0.1), rgba(168,85,247,0.1))',
                border: '1px solid rgba(236,72,153,0.2)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(236,72,153,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <Users style={{ 
                width: isMobile ? '20px' : '24px', 
                height: isMobile ? '20px' : '24px', 
                color: '#ec4899' 
              }} />
              <span style={{ 
                fontWeight: 600, 
                fontSize: isMobile ? '15px' : '18px' 
              }}>
                {isMobile ? 'Voir tous les artistes' : 'Explorer la page artistes complète'}
              </span>
              <ChevronRight style={{ 
                width: '20px', 
                height: '20px', 
                color: '#ec4899' 
              }} />
            </Link>
          </motion.div>
          
          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              position: 'relative',
              background: DESIGN.colors.glass,
              border: `1px solid ${DESIGN.colors.glassBorder}`,
              borderRadius: isMobile ? '16px' : '24px',
              padding: isMobile ? '32px 20px' : isTablet ? '48px 40px' : '60px',
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(236,72,153,0.05), transparent 70%)',
                pointerEvents: 'none'
              }} />
              
              <h3 style={{
                fontSize: isMobile ? '24px' : isTablet ? '32px' : '36px',
                fontWeight: 700,
                color: 'white',
                marginBottom: isMobile ? '20px' : '24px',
                position: 'relative'
              }}>Créons votre prochaine soirée ensemble</h3>
              
              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: isMobile ? '32px' : '40px',
                maxWidth: '500px',
                margin: '0 auto',
                marginBottom: isMobile ? '32px' : '40px',
                lineHeight: 1.6,
                position: 'relative'
              }}>
                On ne vous promet pas la lune. On vous promet d'être là, du premier appel au dernier applaudissement.
              </p>
              
              <motion.a
                href="mailto:booking@tinyteam.fr"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: isMobile ? '14px 24px' : '16px 32px',
                  borderRadius: '50px',
                  background: DESIGN.colors.glass,
                  border: `1px solid ${DESIGN.colors.glassBorder}`,
                  color: 'white',
                  fontWeight: 500,
                  fontSize: isMobile ? '15px' : '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={!isMobile ? { 
                  scale: 1.05,
                  boxShadow: '0 8px 24px rgba(236,72,153,0.2)'
                } : {}}
              >
                <Mail style={{ 
                  width: '20px', 
                  height: '20px', 
                  color: '#ec4899' 
                }} />
                <span>booking@tinyteam.fr</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};