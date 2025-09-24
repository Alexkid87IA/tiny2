import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ChevronRight, Mail } from 'lucide-react';
import { artists } from '../data/artists';

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
          maxWidth: '800px',
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

// Background animé minimal
const AnimatedBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
    <motion.div
      style={{
        position: 'absolute',
        width: '384px',
        height: '384px',
        borderRadius: '50%',
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
      style={{
        position: 'absolute',
        width: '384px',
        height: '384px',
        borderRadius: '50%',
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
    
    {/* Étoiles scintillantes minimales */}
    {[...Array(15)].map((_, i) => (
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
    ))}
  </div>
);

// Carte d'artiste
const ArtistCard = ({ artist, index, isMobile }) => {
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
    >
      <Link to={`/artiste/${artist.id}`}>
        <div style={{
          position: 'relative',
          aspectRatio: '3/4',
          borderRadius: '12px',
          overflow: 'hidden',
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
              src={artist.image}
              alt={artist.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, black, rgba(0,0,0,0.3), transparent)'
            }} />
          </motion.div>
          
          {(artist.production || artist.diffusion) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                right: '12px'
              }}
            >
              <div style={{
                padding: '4px 8px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}>
                <span style={{
                  fontSize: '9px',
                  color: 'black',
                  fontWeight: 600
                }}>
                  {artist.production ? artist.production : `Diffusion ${artist.diffusion}`}
                </span>
              </div>
            </motion.div>
          )}
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: isMobile ? '12px' : '16px'
          }}>
            <h3 style={{
              fontSize: isMobile ? '14px' : '18px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '4px'
            }}>{artist.name}</h3>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.7)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
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
                justifyContent: 'center'
              }}
            >
              <div style={{
                padding: '8px 16px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
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
};

export const ProducerSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="programmateurs" 
      style={{
        position: 'relative',
        padding: isMobile ? '80px 0' : '120px 0',
        background: DESIGN.colors.backgroundGradient,
        overflow: 'hidden'
      }}
    >
      <AnimatedBackground />
      
      <motion.div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          y: backgroundY
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center,rgba(236,72,153,0.1),transparent 70%)'
        }} />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
      >
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px'
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
            />
          </div>
          
          {/* Pourquoi Tiny Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '80px' }}
          >
            <h3 style={{
              textAlign: 'center',
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px'
            }}>Nos 3 engagements</h3>
            
            <p style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
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
                gap: '24px'
              }}>
                {[
                  { icon: "☎️", title: "Un seul interlocuteur", description: "Vous appelez, on décroche" },
                  { icon: "👥", title: "Suivi personnalisé", description: "On connaît vos contraintes et vos publics" },
                  { icon: "💬", title: "Transparence totale", description: "Les bonnes et les moins bonnes nouvelles" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: DESIGN.colors.glass,
                      border: `1px solid ${DESIGN.colors.glassBorder}`,
                      borderRadius: '12px',
                      padding: '24px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = DESIGN.colors.glass;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '8px'
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)'
                    }}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Grille d'artistes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
            gap: isMobile ? '16px' : '24px',
            maxWidth: '1100px',
            margin: '0 auto 48px'
          }}>
            {artists.slice(0, 10).map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} isMobile={isMobile} />
            ))}
          </div>
          
          {/* Réassurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <span style={{ color: '#ec4899', fontWeight: 500 }}>Nous travaillons avec des salles de 100 comme de 1000 places.</span><br/>
              Ce qui compte, c'est la réussite de votre soirée.
            </p>
          </motion.div>
          
          {/* Bouton vers artistes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <Link
              to="/artistes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(to right, rgba(236,72,153,0.1), rgba(168,85,247,0.1))',
                border: '1px solid rgba(236,72,153,0.2)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <Users style={{ width: '24px', height: '24px', color: '#ec4899' }} />
              <span style={{ fontWeight: 600, fontSize: '18px' }}>
                Explorer la page artistes complète
              </span>
              <ChevronRight style={{ width: '20px', height: '20px', color: '#ec4899' }} />
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
              borderRadius: '24px',
              padding: isMobile ? '40px 24px' : '60px',
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
              overflow: 'hidden'
            }}>
              <h3 style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '24px'
              }}>Créons votre prochaine soirée ensemble</h3>
              
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '40px',
                maxWidth: '500px',
                margin: '0 auto 40px'
              }}>
                On ne vous promet pas la lune. On vous promet d'être là, du premier appel au dernier applaudissement.
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                marginBottom: '40px'
              }}>
                {['Réponse sous 48h', 'Tarifs dégressifs', 'Kit com\' offert'].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgba(255,255,255,0.6)'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ec4899'
                    }}></span>
                    <span style={{ fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="mailto:booking@tinyteam.fr"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  background: DESIGN.colors.glass,
                  border: `1px solid ${DESIGN.colors.glassBorder}`,
                  color: 'white',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = DESIGN.colors.glass;
                  }
                }}
              >
                <Mail style={{ width: '20px', height: '20px', color: '#ec4899' }} />
                <span>booking@tinyteam.fr</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};