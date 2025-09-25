import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Images des artistes
const artistImages = [
  'https://static.eno.do/x/fs-207671-default/a341c6ef1829c317020dc30296639fe4/media.jpg',
  'https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg',
  'https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg',
  'https://i.imgur.com/munE7s3.jpeg',
  'https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg',
  'https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg',
  'https://static.eno.do/x/fs-207670-default/35f9701247c1480e4a053de7341d2547/media.jpg',
  'https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg',
  'https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg',
  'https://i.imgur.com/ht3EucF.jpeg'
];

// Composant pour les cartes flottantes
const FloatingCards = ({ isMobile }: { isMobile: boolean }) => {
  const cardCount = isMobile ? 8 : 15;
  const cards = [...artistImages].slice(0, cardCount);
  
  return (
    <>
      {cards.map((image, i) => {
        const positions = [
          { x: 10, y: 15 }, { x: 85, y: 10 }, { x: 5, y: 60 },
          { x: 90, y: 70 }, { x: 45, y: 8 }, { x: 25, y: 40 },
          { x: 70, y: 35 }, { x: 15, y: 85 }, { x: 60, y: 65 },
          { x: 35, y: 20 }, { x: 80, y: 45 }, { x: 20, y: 25 },
          { x: 55, y: 90 }, { x: 40, y: 50 }, { x: 75, y: 80 }
        ];
        
        const pos = positions[i];
        const rotate = (i % 2 === 0 ? -1 : 1) * (5 + (i % 3) * 3);
        const scale = isMobile ? 0.6 : 0.8;
        const size = isMobile ? { w: 100, h: 140 } : { w: 160, h: 220 };
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isMobile ? 0.08 : 0.12,
              scale: scale,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: i * 0.1 },
              scale: { duration: 0.8, delay: i * 0.1 },
              y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              width: `${size.w}px`,
              height: `${size.h}px`,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            <img 
              src={image} 
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.9)'
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Système d'espacement cohérent
  const spacing = {
    headerHeight: isMobile ? 60 : 80,
    contentGap: isMobile ? 'clamp(16px, 4vw, 24px)' : 'clamp(24px, 3vw, 40px)',
    sectionPadding: isMobile ? '20px' : '32px',
    bottomPadding: isMobile ? '32px' : '48px'
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        minHeight: '100dvh', // Dynamic viewport height
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #0A0F29 0%, #16213e 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Cartes flottantes en arrière-plan */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <FloatingCards isMobile={isMobile} />
        
        {/* Overlay gradient optimisé */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(
              ellipse at center,
              rgba(10,15,41,${isMobile ? 0.7 : 0.6}) 0%,
              rgba(10,15,41,${isMobile ? 0.92 : 0.88}) 100%
            )`,
            zIndex: 2
          }}
        />
      </div>

      {/* Container principal avec espacement optimisé */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: `${spacing.headerHeight}px`,
          paddingBottom: `${spacing.bottomPadding}`,
          paddingLeft: spacing.sectionPadding,
          paddingRight: spacing.sectionPadding,
          gap: spacing.contentGap
        }}
      >
        {/* Wrapper pour le contenu centré */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: isMobile ? '20px' : '32px',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            opacity
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '10px 20px' : '12px 28px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <span 
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ec4899',
                boxShadow: '0 0 12px rgba(236,72,153,0.8)'
              }}
            />
            <span style={{ 
              color: 'white',
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity: 0.9
            }}>
              Production de spectacles vivants
            </span>
          </motion.div>

          {/* Titre principal avec espacement interne optimisé */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: isMobile 
                ? 'clamp(2.5rem, 12vw, 3.5rem)' 
                : 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.02em'
            }}
          >
            <span style={{ 
              display: 'block',
              color: 'white',
              marginBottom: isMobile ? '-2px' : '-8px'
            }}>
              Tiny Team,
            </span>
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.15em'
            }}>
              Big Dreams
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: isMobile ? '15px' : '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              lineHeight: 1.6,
              paddingInline: isMobile ? '0' : '20px'
            }}
          >
            Découvrez nos artistes exceptionnels et créez des événements inoubliables
          </motion.p>

          {/* Boutons avec espacement optimal */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: isMobile ? '12px' : '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: isMobile ? '8px' : '16px'
            }}
          >
            <motion.div
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/artistes"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: isMobile 
                    ? '14px 28px' 
                    : '16px 36px',
                  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                  color: 'white',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: isMobile ? '14px' : '16px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(236,72,153,0.35)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
                Découvrir nos artistes
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/equipe"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: isMobile 
                    ? '14px 28px' 
                    : '16px 36px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: isMobile ? '14px' : '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }
                }}
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animation de pulsation pour le badge */}
      <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};