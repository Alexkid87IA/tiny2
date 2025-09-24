import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Rocket, Trophy, Mail, Ear, Settings, HandshakeIcon } from 'lucide-react';

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

// Études de cas
const caseStudies = [
  {
    id: 1,
    type: "Séminaire annuel",
    sector: "Groupe bancaire français",
    context: "400 collaborateurs réunis pour le séminaire stratégique annuel",
    solution: "Intervention d'un humoriste en ouverture pour briser la glace et créer une dynamique positive",
    results: [
      "96% de satisfaction globale (vs 72% année précédente)",
      "Participation active en hausse de 40%",
      "Ambiance détendue favorisant les échanges"
    ],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    id: 2,
    type: "Communication interne",
    sector: "Leader retail",
    context: "Changement d'ERP complexe à faire accepter à 2000 employés",
    solution: "Série de 5 vidéos humoristiques avec nos artistes pour dédramatiser et expliquer",
    results: [
      "87% des employés ont visionné toute la série",
      "Adoption de l'outil 3 semaines plus rapide",
      "Baisse de 60% des tickets support"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    type: "Team Building",
    sector: "Cabinet de conseil",
    context: "Équipe de 50 consultants en télétravail depuis 2 ans",
    solution: "Atelier d'improvisation et spectacle participatif sur mesure",
    results: [
      "Score de cohésion d'équipe +35% à 3 mois",
      "100% souhaitent renouveler l'expérience",
      "Création de private jokes fédératrices"
    ],
    gradient: "from-pink-500/20 to-pink-500/20"
  },
  {
    id: 4,
    type: "Convention commerciale",
    sector: "Industrie pharmaceutique",
    context: "Lancement d'une nouvelle gamme devant 300 commerciaux",
    solution: "Show sur-mesure intégrant les messages clés de manière humoristique",
    results: [
      "Mémorisation des messages clés : 89%",
      "Engagement sur l'événement x2.5",
      "Standing ovation et demande de rappel"
    ],
    gradient: "from-purple-500/20 to-purple-500/20"
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
          marginTop: '1.5rem'
        }}
      >
        {subtitle}
      </motion.p>
    )}
  </>
);

// Background animé
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
        x: ['120%', '-20%'],
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
        x: ['-20%', '120%'],
        y: ['80%', '20%'],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  </div>
);

// Carte d'étude de cas
const CaseStudyCard = ({ study, index, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div style={{
      position: 'relative',
      background: DESIGN.colors.glass,
      border: `1px solid ${DESIGN.colors.glassBorder}`,
      borderRadius: '16px',
      padding: '24px',
      height: '100%',
      overflow: 'hidden',
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
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        borderRadius: '50px',
        background: 'rgba(236, 72, 153, 0.1)',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        marginBottom: '16px'
      }}>
        <span style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#ec4899'
        }}>{study.type}</span>
      </div>
      
      <h3 style={{
        fontSize: '20px',
        fontWeight: 700,
        color: 'white',
        marginBottom: '12px'
      }}>{study.sector}</h3>
      
      <div style={{ marginBottom: '16px' }}>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 500,
          marginBottom: '4px'
        }}>Contexte :</p>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)'
        }}>{study.context}</p>
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 500,
          marginBottom: '4px'
        }}>Notre intervention :</p>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)'
        }}>{study.solution}</p>
      </div>
      
      <div>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 500,
          marginBottom: '8px'
        }}>Résultats :</p>
        {study.results.map((result, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            marginBottom: '4px'
          }}>
            <span style={{ color: '#ec4899', marginTop: '2px' }}>→</span>
            <span style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)'
            }}>{result}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const BrandSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="entreprises" style={{
      position: 'relative',
      padding: isMobile ? '80px 0' : '120px 0',
      background: DESIGN.colors.backgroundGradient,
      overflow: 'hidden'
    }}>
      <AnimatedBackground />
      
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Header avec titre uniformisé */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
          <SectionTitle 
            line1="Entreprises,"
            line2="L'humour sur mesure"
            subtitle="Pas de formule toute faite. On écoute, on comprend, on adapte."
            isMobile={isMobile}
          />
        </div>
        
        {/* Notre approche - SECTION AVEC ICÔNES LUCIDE */}
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
          }}>Notre approche</h3>
          
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Votre séminaire n'est pas celui du voisin. Votre équipe a sa culture. Vos enjeux sont uniques.
          </p>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {[
              { icon: Ear, title: "On commence par écouter", description: "Vos objectifs, vos contraintes, vos craintes" },
              { icon: Settings, title: "On propose, on ajuste", description: "Jusqu'à trouver le bon artiste, le bon format" },
              { icon: HandshakeIcon, title: "On reste à vos côtés", description: "Avant, pendant, après" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
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
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '16px' 
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(236,72,153,0.2)'
                    }}>
                      <Icon style={{ 
                        width: '28px', 
                        height: '28px', 
                        color: '#ec4899'
                      }} />
                    </div>
                  </div>
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
              );
            })}
          </div>
        </motion.div>
        
        {/* Titre "Ils nous ont fait confiance" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '50px',
              background: DESIGN.colors.glass,
              border: `1px solid ${DESIGN.colors.glassBorder}`,
              fontSize: '14px'
            }}>
              <Trophy style={{ width: '16px', height: '16px', color: '#ec4899' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Cas clients récents • Résultats vérifiés</span>
            </div>
          </div>
          
          <h3 style={{
            textAlign: 'center',
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px'
          }}>Ils nous ont fait confiance</h3>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>Découvrez comment nos interventions transforment les événements d'entreprise</p>
        </motion.div>
        
        {/* Grille des études de cas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto 80px'
        }}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} isMobile={isMobile} />
          ))}
        </div>
        
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            marginBottom: '40px'
          }}>Nos formats d'intervention</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { icon: Briefcase, title: "Séminaires", time: "30min à 1h30" },
              { icon: Users, title: "Team Building", time: "2h à 1 journée" },
              { icon: Rocket, title: "Conventions", time: "Sur mesure" },
              { icon: Trophy, title: "Soirées privées", time: "1h à 2h" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  background: DESIGN.colors.glass,
                  border: `1px solid ${DESIGN.colors.glassBorder}`,
                  borderRadius: '12px',
                  padding: '16px',
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
                <service.icon style={{
                  width: '32px',
                  height: '32px',
                  color: '#ec4899',
                  margin: '0 auto 12px'
                }} />
                <h4 style={{
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '4px'
                }}>{service.title}</h4>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.6)'
                }}>{service.time}</p>
              </motion.div>
            ))}
          </div>
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
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '24px'
            }}>Parlons de votre projet</h3>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Sans engagement, sans PowerPoint de 40 slides. Juste une conversation pour comprendre comment on peut vous aider.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '40px'
            }}>
              {['Conseil personnalisé', 'Budget sur mesure', 'Partout en France'].map((item, i) => (
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
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: isMobile ? '16px 32px' : '20px 40px',
                  borderRadius: '50px',
                  background: DESIGN.colors.buttonGradient,
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <span>Organiser une rencontre</span>
                <ArrowRight style={{ width: '24px', height: '24px' }} />
              </Link>
              
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};