import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// DESIGN SYSTEM UNIFIÉ BASÉ SUR HEROSECTION
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
    h1Desktop: 'clamp(4rem, 8vw, 7rem)',
    h1Mobile: 'clamp(2.5rem, 12vw, 3.5rem)',
    bodyDesktop: '18px',
    bodyMobile: '15px'
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

// Composant titre uniformisé
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
        letterSpacing: '-0.02em',
        textAlign: 'center'
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
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        {subtitle}
      </motion.p>
    )}
  </>
);

// Carte membre équipe
const TeamCard = ({ member, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '350px' : '380px',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.6s ease',
        transform: !isMobile && isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)'
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            transform: !isMobile && isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.6s ease'
          }}
        >
          <img 
            src={member.image} 
            alt={`${member.name} ${member.lastName}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </motion.div>
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, black, rgba(0,0,0,0.4), transparent)'
        }} />
        
        {/* Badge numéro */}
        <motion.div 
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(236,72,153,0.2)',
            backdropFilter: 'blur(12px)',
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
            fontSize: '18px'
          }}>{index + 1}</span>
        </motion.div>
        
        {/* Badge star pour fondateur */}
        {index === 0 && (
          <motion.div 
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles style={{ width: '24px', height: '24px', color: '#fbbf24' }} />
          </motion.div>
        )}
        
        {/* Contenu */}
        <motion.div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px',
            transform: !isMobile && isHovered ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'white',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}>{member.name}</h3>
            <h4 style={{
              fontSize: '20px',
              fontWeight: 600,
              background: 'linear-gradient(to right, #ec4899, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{member.lastName}</h4>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 500,
            marginTop: '12px'
          }}>{member.role}</p>
          <motion.p 
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.7)',
              fontStyle: 'italic',
              marginTop: '8px',
              opacity: !isMobile && isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
          >
            "{member.bio}"
          </motion.p>
        </motion.div>
        
        {/* Bordure animée */}
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '2px solid transparent',
          borderColor: !isMobile && isHovered ? 'rgba(236,72,153,0.5)' : 'transparent',
          transition: 'all 0.5s ease',
          borderRadius: '16px',
          pointerEvents: 'none'
        }} />
      </div>
    </motion.div>
  );
};

export const StorySection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsVisible(true);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    navigate('/equipe');
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      padding: isMobile ? '64px 0' : '96px 0',
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden'
    }}>
      {/* Fond animé minimal */}
      <div style={{
        position: 'absolute',
        inset: 0
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center,rgba(236,72,153,0.08),transparent 70%)'
        }} />
        {/* Quelques particules flottantes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              background: 'rgba(236,72,153,0.2)',
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
        ))}
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Header avec titre uniformisé */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}
        >
          {/* Badge "En scène" */}
          <motion.div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '50px',
              background: 'rgba(236,72,153,0.1)',
              border: '1px solid rgba(236,72,153,0.3)',
              marginBottom: '32px'
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
            <Sparkles style={{ width: '16px', height: '16px', color: '#ec4899' }} />
            <span style={{
              color: '#ec4899',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.1em'
            }}>EN SCÈNE</span>
          </motion.div>

          <SectionTitle 
            line1="L'équipe,"
            line2="Petite par la taille, grande par l'ambition"
            subtitle="Cinq passionnés qui mettent du cœur dans chaque projet"
            isMobile={isMobile}
          />
        </motion.div>

        {/* Grille desktop 5 colonnes */}
        {!isMobile && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '24px'
          }}>
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} isMobile={false} />
            ))}
          </div>
        )}

        {/* Grille tablette 3 + 2 */}
        {isMobile && window.innerWidth > 640 && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {teamMembers.slice(0, 3).map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} isMobile={false} />
              ))}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              marginTop: '24px',
              maxWidth: '66%',
              margin: '24px auto 0'
            }}>
              {teamMembers.slice(3, 5).map((member, index) => (
                <TeamCard key={member.id} member={member} index={index + 3} isMobile={false} />
              ))}
            </div>
          </>
        )}

        {/* Carousel mobile */}
        {isMobile && window.innerWidth <= 640 && (
          <>
            <div style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '24px',
              margin: '0 -32px',
              padding: '0 32px 24px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>
              {teamMembers.map((member, index) => (
                <div key={member.id} style={{
                  flexShrink: 0,
                  width: '280px'
                }}>
                  <TeamCard member={member} index={index} isMobile={true} />
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px'
            }}>
              <span style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '14px'
              }}>Glissez pour découvrir</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight style={{ width: '16px', height: '16px', color: '#ec4899' }} />
              </motion.div>
            </div>
          </>
        )}

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '64px' : '80px'
          }}
        >
          <button 
            onClick={handleCtaClick}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '16px 32px' : '20px 40px',
              borderRadius: '50px',
              background: DESIGN.colors.buttonGradient,
              color: 'white',
              fontWeight: 700,
              fontSize: isMobile ? '16px' : '18px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(236,72,153,0.35)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.5)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(236,72,153,0.35)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <Users style={{ width: '20px', height: '20px' }} />
            <span>DÉCOUVRIR NOTRE HISTOIRE</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </motion.div>
      </div>
      
      {/* CSS pour cacher la scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};