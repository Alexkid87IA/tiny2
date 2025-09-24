import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@tinyteam.fr",
    href: "mailto:contact@tinyteam.fr",
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Paris, France",
    href: "#",
    gradient: "from-purple-500/20 to-blue-500/20"
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

const ContactInfoCard = ({ info, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={info.href}
        target={info.href.startsWith('http') ? '_blank' : undefined}
        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{
          display: 'block',
          textDecoration: 'none',
          transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <div style={{
          position: 'relative',
          background: DESIGN.colors.glass,
          border: `1px solid ${DESIGN.colors.glassBorder}`,
          borderRadius: '16px',
          padding: '32px',
          overflow: 'hidden',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 24px',
              borderRadius: '16px',
              background: DESIGN.colors.glass,
              border: `1px solid ${DESIGN.colors.glassBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isHovered && !isMobile ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.5s ease'
            }}>
              <info.icon style={{
                width: '32px',
                height: '32px',
                color: '#ec4899',
              }} />
            </div>
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '8px'
              }}>{info.title}</h3>
              <p style={{
                fontSize: '20px',
                color: 'white',
                fontWeight: 600
              }}>{info.value}</p>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const FloatingParticles = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [`0%`, `${Math.random() * 30 - 15}%`],
          x: [`0%`, `${Math.random() * 30 - 15}%`],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    ))}
  </div>
);

export const ContactSection = () => {
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
      padding: isMobile ? '80px 0' : '120px 0',
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center,rgba(44,62,153,0.15),transparent 70%)'
      }} />
      <FloatingParticles />

      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Header avec titre uniformisé */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
          <SectionTitle 
            line1="Contactez-nous,"
            line2="Sans filtre"
            subtitle="Pas de formulaire de 15 champs. Pas de bot. Des vrais gens qui répondent vraiment."
            isMobile={isMobile}
          />
        </div>

        {/* Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '600px',
          margin: '0 auto 64px'
        }}>
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} info={info} index={index} isMobile={isMobile} />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <div style={{
            position: 'relative',
            background: DESIGN.colors.glass,
            border: `1px solid ${DESIGN.colors.glassBorder}`,
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: DESIGN.colors.glass,
                border: `1px solid ${DESIGN.colors.glassBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MessageSquare style={{ width: '32px', height: '32px', color: '#ec4899' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'white'
                }}>On préfère les vraies conversations</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Appelez, écrivez, passez nous voir</p>
              </div>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6
            }}>
              Le café est toujours chaud et la porte toujours ouverte.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};