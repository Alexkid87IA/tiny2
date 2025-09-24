import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Images des artistes depuis artists.ts
const artistImages = [
  'https://static.eno.do/x/fs-207671-default/a341c6ef1829c317020dc30296639fe4/media.jpg', // Urbain
  'https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg', // Marc-Antoine
  'https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg', // D'Jal
  'https://i.imgur.com/munE7s3.jpeg', // Morgane
  'https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg', // Thomas
  'https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg', // Lucie
  'https://static.eno.do/x/fs-207670-default/35f9701247c1480e4a053de7341d2547/media.jpg', // Edouard
  'https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg', // Julien
  'https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg', // Jamel Comedy Club
  'https://i.imgur.com/ht3EucF.jpeg' // Sophie & Alex
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A0F29 0%, #16213e 100%)',
        paddingTop: '80px' // Espace pour le header
      }}
    >
      {/* Cartes flottantes en arrière-plan - 20 cartes maximum */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {/* Créer 20 cartes avec 2 fois les 10 images */}
        {[...artistImages, ...artistImages].map((image, i) => {
          const positions = [
            { x: '10%', y: '15%', rotate: -8 },
            { x: '80%', y: '10%', rotate: 12 },
            { x: '5%', y: '60%', rotate: -5 },
            { x: '90%', y: '70%', rotate: 8 },
            { x: '45%', y: '8%', rotate: -10 },
            { x: '25%', y: '40%', rotate: 6 },
            { x: '70%', y: '35%', rotate: -12 },
            { x: '15%', y: '85%', rotate: 10 },
            { x: '60%', y: '65%', rotate: -7 },
            { x: '35%', y: '20%', rotate: 9 },
            { x: '85%', y: '45%', rotate: -11 },
            { x: '20%', y: '25%', rotate: 5 },
            { x: '55%', y: '90%', rotate: -6 },
            { x: '40%', y: '50%', rotate: 11 },
            { x: '75%', y: '80%', rotate: -9 },
            { x: '30%', y: '70%', rotate: 7 },
            { x: '65%', y: '15%', rotate: -8 },
            { x: '50%', y: '30%', rotate: 10 },
            { x: '10%', y: '35%', rotate: -4 },
            { x: '95%', y: '25%', rotate: 6 }
          ];
          
          const pos = positions[i];
          const scale = 0.7 + (Math.random() * 0.3); // Entre 0.7 et 1
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.15,
                y: [0, -15, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: i * 0.05 },
                y: { 
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }
              }}
              style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                transform: `rotate(${pos.rotate}deg) scale(${scale})`,
                width: '180px',
                height: '250px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <img 
                src={image} 
                alt="" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.8)'
                }}
              />
            </motion.div>
          );
        })}
        
        {/* Overlay gradient pour améliorer la lisibilité */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(10,15,41,0.5) 0%, rgba(10,15,41,0.85) 100%)',
            zIndex: 2
          }}
        />
      </div>

      {/* Contenu principal */}
      <motion.div 
        style={{ 
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          opacity: contentOpacity
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
            gap: '10px',
            padding: '12px 24px',
            borderRadius: '50px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '40px'
          }}
        >
          <span 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ec4899',
              animation: 'pulse 2s infinite'
            }}
          />
          <span style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '14px', 
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
            Production de spectacles vivants
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '60px',
            padding: '20px 0'
          }}
        >
          <span style={{ 
            display: 'block',
            color: 'white',
            marginBottom: '-10px'  // Espacement réduit
          }}>
            Tiny Team,
          </span>
          <span style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingTop: '0',  // Suppression du padding top
            paddingBottom: '20px',
            lineHeight: 1.1
          }}>
            Big Dreams
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '50px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Découvrez nos artistes exceptionnels et créez des événements inoubliables
        </motion.p>

        {/* Boutons CTA */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '80px'
          }}
        >
          <motion.a
            href="/artistes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(236,72,153,0.3)',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(236,72,153,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(236,72,153,0.3)';
            }}
          >
            Découvrir nos artistes
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="#artists"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            En savoir plus
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Style pour l'animation pulse */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};