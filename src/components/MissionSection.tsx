import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Rocket, Megaphone, Globe, Calendar, ChevronDown } from 'lucide-react';

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
    // Espacement responsive
    sectionPaddingDesktop: '120px 0',
    sectionPaddingTablet: '100px 0',
    sectionPaddingMobile: '60px 0',
    containerPadding: '0 24px'
  }
};

// Services data
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

// ServicePanel optimisé avec memo
const ServicePanel = memo(({ service, index, isActive, onClick, isMobile, isTablet }) => {
  const Icon = service.icon;
  
  const handleServiceClick = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = `/services/${service.id}`;
  }, [service.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        position: 'relative',
        marginBottom: isMobile ? '12px' : '16px',
        borderRadius: isMobile ? '12px' : '16px',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)', // Support Safari
        background: isActive ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
        border: `2px solid ${isActive ? service.borderColor : 'rgba(255,255,255,0.1)'}`,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 40px ${service.glowColor}` : '0 4px 20px rgba(0,0,0,0.3)',
        willChange: 'transform, background',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
      onClick={onClick}
      onTouchStart={() => {}} // Améliore la réactivité tactile
    >
      {/* Header du panneau */}
      <div style={{ 
        padding: isMobile ? '20px' : isTablet ? '24px' : '32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: isMobile ? 'wrap' : 'nowrap'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '12px' : '24px',
            flex: 1
          }}>
            {/* Badge Acte */}
            <motion.div
              style={{
                padding: isMobile ? '4px 12px' : '6px 16px',
                borderRadius: '50px',
                fontSize: isMobile ? '11px' : '14px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                background: service.gradient,
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap'
              }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {service.acte}
            </motion.div>
            
            {/* Titre et sous-titre */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: isMobile ? '20px' : isTablet ? '24px' : '32px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '4px'
              }}>{service.title}</h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: isMobile ? '13px' : '16px',
                fontStyle: 'italic',
                lineHeight: 1.4
              }}>{service.subtitle}</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '8px' : '12px'
          }}>
            {/* Icône - Caché sur très petits écrans si nécessaire */}
            {(!isMobile || window.innerWidth > 375) && (
              <motion.div
                style={{
                  width: isMobile ? '40px' : isTablet ? '48px' : '64px',
                  height: isMobile ? '40px' : isTablet ? '48px' : '64px',
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
                  width: isMobile ? '20px' : '32px',
                  height: isMobile ? '20px' : '32px',
                  strokeWidth: 2,
                  color: 'white'
                }} />
              </motion.div>
            )}
            
            {/* Chevron */}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: 'rgba(255,255,255,0.4)'
              }}
            >
              <ChevronDown style={{ 
                width: isMobile ? '20px' : '24px', 
                height: isMobile ? '20px' : '24px' 
              }} />
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
              padding: isMobile ? '0 20px 20px' : isTablet ? '0 24px 24px' : '0 32px 32px'
            }}>
              {/* Ligne de séparation */}
              <motion.div 
                style={{
                  height: '1px',
                  marginBottom: isMobile ? '16px' : '24px',
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
                  fontSize: isMobile ? '15px' : '18px',
                  lineHeight: 1.6,
                  marginBottom: isMobile ? '20px' : '24px'
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
                  padding: isMobile ? '10px 20px' : '12px 24px',
                  borderRadius: '50px',
                  background: service.gradient,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: isMobile ? '14px' : '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  WebkitTapHighlightColor: 'transparent', // Supprime le highlight sur iOS
                  touchAction: 'manipulation' // Améliore la réactivité tactile
                }}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }} // Feedback tactile
                whileHover={!isMobile ? { scale: 1.05, boxShadow: '0 6px 16px rgba(0,0,0,0.3)' } : {}}
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
});

// Background animé léger
const AnimatedBackground = memo(() => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
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
        backgroundSize: '50px 50px',
        willChange: 'transform'
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
    
    {/* Orbes de lumière - Réduits sur mobile */}
    {typeof window !== 'undefined' && window.innerWidth > 768 && (
      <>
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: '300px',
            height: '300px',
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
            bottom: '10%',
            right: '-10%',
            width: '300px',
            height: '300px',
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
      </>
    )}
  </div>
));

export const MissionSection = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const togglePanel = useCallback((serviceId) => {
    setActivePanel(prevActive => prevActive === serviceId ? null : serviceId);
  }, []);

  const handleAllServicesClick = useCallback((e) => {
    e.preventDefault();
    window.location.href = '/services';
  }, []);

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

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        padding: DESIGN.spacing.containerPadding
      }}>
        
        {/* Header avec titre uniformisé */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '80px'
          }}
        >
          <SectionTitle 
            line1="Notre approche,"
            line2="Six métiers, une passion"
            subtitle="Nous ne sommes pas les plus gros. Nous sommes peut-être les plus investis."
            isMobile={isMobile}
            isTablet={isTablet}
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
            <span style={{ fontSize: isMobile ? '13px' : '14px' }}>
              {isMobile ? 'Touchez pour découvrir' : 'Cliquez pour découvrir'}
            </span>
          </motion.div>
        </motion.div>

        {/* Services accordéon */}
        <div style={{ marginBottom: isMobile ? '48px' : '64px' }}>
          {servicesData.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              index={index}
              isActive={activePanel === service.id}
              onClick={() => togglePanel(service.id)}
              isMobile={isMobile}
              isTablet={isTablet}
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
            fontSize: isMobile ? '20px' : isTablet ? '28px' : '32px',
            color: 'rgba(255,255,255,0.8)',
            fontStyle: 'italic',
            fontWeight: 300,
            marginBottom: '32px',
            padding: isMobile ? '0 16px' : '0',
            lineHeight: 1.4
          }}>
            "Six expertises, mais une seule philosophie : le spectacle vivant, c'est d'abord une histoire humaine"
          </p>
          
          <motion.button
            onClick={handleAllServicesClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '14px 24px' : '16px 32px',
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
            whileHover={!isMobile ? { scale: 1.05 } : {}}
          >
            <span>{isMobile ? 'NOS SERVICES' : 'EXPLORER TOUS NOS SERVICES'}</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};