import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Rocket, Megaphone, Globe, Calendar, ChevronDown } from 'lucide-react';

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

// Services data avec les 6 piliers - Copie authentique et simple
const servicesData = [
  {
    id: "production",
    acte: "Créer",
    title: "Production",
    subtitle: "On investit notre temps et notre argent dans des projets qu'on aime",
    story: "On ne produit pas n'importe quoi. Chaque spectacle est un pari, un engagement personnel. On met notre énergie et nos ressources dans des artistes auxquels on croit vraiment.",
    gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
    borderColor: "rgba(236, 72, 153, 0.5)",
    glowColor: "rgba(236, 72, 153, 0.3)",
    icon: Star
  },
  {
    id: "management",
    acte: "Guider",
    title: "Management",
    subtitle: "On connaît nos artistes. Leurs forces, leurs doutes, leurs ambitions",
    story: "Pas de gestion à la chaîne. Chaque artiste a son histoire, ses besoins, son rythme. On est là pour les comprendre et les accompagner, pas pour les formater.",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    borderColor: "rgba(168, 85, 247, 0.5)",
    glowColor: "rgba(168, 85, 247, 0.3)",
    icon: Shield
  },
  {
    id: "digital",
    acte: "Connecter",
    title: "Digital",
    subtitle: "On raconte leurs histoires, pas des statistiques",
    story: "Les réseaux sociaux ne sont pas une course aux likes. On préfère une vraie connexion avec 100 personnes qu'un million de vues sans lendemain.",
    gradient: "linear-gradient(135deg, #9333ea, #a855f7)",
    borderColor: "rgba(147, 51, 234, 0.5)",
    glowColor: "rgba(147, 51, 234, 0.3)",
    icon: Rocket
  },
  {
    id: "communication",
    acte: "Raconter",
    title: "Communication",
    subtitle: "On privilégie l'authentique au sensationnel",
    story: "Pas de buzzwords, pas de faux scandales. On communique sur ce qui compte vraiment : le talent, le travail, la sincérité de nos artistes.",
    gradient: "linear-gradient(135deg, #f472b6, #c084fc)",
    borderColor: "rgba(244, 114, 182, 0.5)",
    glowColor: "rgba(244, 114, 182, 0.3)",
    icon: Megaphone
  },
  {
    id: "diffusion",
    acte: "Partager",
    title: "Diffusion",
    subtitle: "Pour chaque projet, nous avons une stratégie",
    story: "300 salles partenaires, mais surtout 300 relations de confiance. On sait ce qui marche où, pour qui, et on ne survendons jamais.",
    gradient: "linear-gradient(135deg, #c084fc, #a855f7)",
    borderColor: "rgba(192, 132, 252, 0.5)",
    glowColor: "rgba(192, 132, 252, 0.3)",
    icon: Globe
  },
  {
    id: "evenements",
    acte: "Rassembler",
    title: "Événements",
    subtitle: "On s'adapte à votre culture, pas l'inverse",
    story: "Chaque entreprise a son ADN. On ne plaque pas une formule toute faite. On écoute, on comprend, on propose ce qui vous ressemble.",
    gradient: "linear-gradient(135deg, #ec4899, #9333ea)",
    borderColor: "rgba(236, 72, 153, 0.5)",
    glowColor: "rgba(236, 72, 153, 0.3)",
    icon: Calendar
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

// Composant ServicePanel
const ServicePanel = ({ service, index, isActive, onClick, isMobile }) => {
  const Icon = service.icon;
  
  const handleServiceClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = `/services/${service.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        position: 'relative',
        marginBottom: '16px',
        borderRadius: '16px',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        background: isActive ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
        border: `2px solid ${isActive ? service.borderColor : 'rgba(255,255,255,0.1)'}`,
        transition: 'all 0.5s ease',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 40px ${service.glowColor}` : '0 4px 20px rgba(0,0,0,0.3)'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isMobile && !isActive) {
          e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile && !isActive) {
          e.currentTarget.style.background = 'rgba(0,0,0,0.2)';
        }
      }}
    >
      {/* Header du panneau */}
      <div style={{ padding: isMobile ? '24px' : '32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '16px' : '24px'
          }}>
            {/* Badge Acte */}
            <motion.div
              style={{
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                background: service.gradient,
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {service.acte}
            </motion.div>
            
            {/* Titre et sous-titre */}
            <div>
              <h3 style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '4px'
              }}>{service.title}</h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: isMobile ? '14px' : '16px',
                fontStyle: 'italic'
              }}>{service.subtitle}</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {/* Icône */}
            <motion.div
              style={{
                width: isMobile ? '48px' : '64px',
                height: isMobile ? '48px' : '64px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: service.gradient,
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              animate={isActive ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon style={{
                width: isMobile ? '24px' : '32px',
                height: isMobile ? '24px' : '32px',
                strokeWidth: 2,
                color: 'white'
              }} />
            </motion.div>
            
            {/* Chevron */}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: 'rgba(255,255,255,0.4)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              }}
            >
              <ChevronDown style={{ width: '24px', height: '24px' }} />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Contenu expansible */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: isMobile ? '0 24px 24px' : '0 32px 32px'
            }}>
              {/* Ligne de séparation */}
              <motion.div 
                style={{
                  height: '1px',
                  marginBottom: '24px',
                  background: service.gradient
                }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              
              {/* Story */}
              <motion.p 
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.story}
              </motion.p>
              
              {/* Bouton découvrir */}
              <motion.button
                onClick={handleServiceClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  background: service.gradient,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: isMobile ? '14px' : '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: '0 6px 16px rgba(0,0,0,0.3)' }}
              >
                Découvrir ce service
                <ArrowRight style={{ width: '16px', height: '16px', color: 'white' }} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const MissionSection = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePanel = (serviceId) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  };

  const handleAllServicesClick = (e) => {
    e.preventDefault();
    window.location.href = '/services';
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      padding: isMobile ? '80px 0' : '120px 0',
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden'
    }}>
      {/* Fond animé */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center,rgba(236,72,153,0.1),transparent 70%)'
        }} />
        
        {/* Grille animée subtile */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            x: [0, 50],
            y: [0, 50]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Orbes de lumière */}
        <motion.div
          style={{
            position: 'absolute',
            top: '80px',
            left: '-80px',
            width: '384px',
            height: '384px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '-80px',
            width: '384px',
            height: '384px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        
        {/* Header avec titre uniformisé */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '64px' : '80px'
          }}
        >
          <SectionTitle 
            line1="Notre approche,"
            line2="Six métiers, une passion"
            subtitle="Nous ne sommes pas les plus gros. Nous sommes peut-être les plus investis."
            isMobile={isMobile}
          />
          
          {/* Indicateur de clic */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: 'rgba(236,72,153,0.6)'
            }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown style={{ width: '20px', height: '20px' }} />
            </motion.div>
            <span style={{ fontSize: '14px' }}>Cliquez pour découvrir</span>
          </motion.div>
        </motion.div>

        {/* Services accordéon */}
        <div style={{ marginBottom: '64px' }}>
          {servicesData.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              index={index}
              isActive={activePanel === service.id}
              onClick={() => togglePanel(service.id)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Section finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontSize: isMobile ? '24px' : '32px',
            color: 'rgba(255,255,255,0.8)',
            fontStyle: 'italic',
            fontWeight: 300,
            marginBottom: '32px'
          }}>
            "Six expertises, mais une seule philosophie : le spectacle vivant, c'est d'abord une histoire humaine"
          </p>
          
          <button
            onClick={handleAllServicesClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '16px 32px' : '16px 32px',
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
            <span>EXPLORER TOUS NOS SERVICES</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};