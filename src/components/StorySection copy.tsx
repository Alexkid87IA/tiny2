import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StorySection.css';

const teamMembers = [
  {
    id: 'benedicte',
    name: 'Bénédicte',
    lastName: 'Lecoq',
    role: 'Fondatrice & Directrice',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
    color: '#ff00ff'
  },
  {
    id: 'isabelle',
    name: 'Isabelle',
    lastName: 'Sabatier', 
    role: 'Diffusion & Tournées',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
    color: '#00ffff'
  },
  {
    id: 'elodie',
    name: 'Elodie',
    lastName: 'Biffi',
    role: 'Administration',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
    color: '#00ffff'
  },
  {
    id: 'jeremy',
    name: 'Jérémy',
    lastName: 'Dravigny',
    role: 'Communication & Prod',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
    color: '#ffff00'
  },
  {
    id: 'margaux',
    name: 'Margaux',
    lastName: 'Morel',
    role: 'Production & Events',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
    color: '#00ff88'
  }
];

// Icône ChevronRight simple
const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const StorySection = () => {
  const navigate = useNavigate();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/equipe');
  };

  return (
    <section className="story-section">
      {/* Contenu principal */}
      <div className="story-main-content">
        
        {/* Header */}
        <div className="story-header">
          <h2 className="story-title">
            <span className="story-hero-line-1">Notre Force,</span>
            <span className="story-hero-line-2">Notre Team</span>
          </h2>
        </div>

        {/* Grille de cartes team */}
        <div className="story-team-grid">
          
          {/* Première ligne - 3 cartes */}
          <div className="story-grid-row story-grid-three">
            {teamMembers.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className={`story-team-card story-card-${member.id}`}
                style={{ '--card-accent': member.color } as React.CSSProperties}
              >
                {/* Image en background */}
                <div className="story-card-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={`${member.name} ${member.lastName}`} 
                    className="story-card-image"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="story-card-overlay" />
                
                {/* Contenu toujours visible */}
                <div className="story-card-content">
                  <h3 className="story-member-name">{member.name}</h3>
                  <h4 className="story-member-lastname">{member.lastName}</h4>
                  <span className="story-member-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Deuxième ligne - 2 cartes */}
          <div className="story-grid-row story-grid-two">
            {teamMembers.slice(3, 5).map((member) => (
              <div
                key={member.id}
                className={`story-team-card story-card-${member.id}`}
                style={{ '--card-accent': member.color } as React.CSSProperties}
              >
                {/* Image en background */}
                <div className="story-card-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={`${member.name} ${member.lastName}`} 
                    className="story-card-image"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="story-card-overlay" />
                
                {/* Contenu toujours visible */}
                <div className="story-card-content">
                  <h3 className="story-member-name">{member.name}</h3>
                  <h4 className="story-member-lastname">{member.lastName}</h4>
                  <span className="story-member-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section finale */}
        <div className="story-finale">
          <div className="story-finale-title">
            <span className="story-finale-line-1">Ensemble, nous créons</span>
            <span className="story-finale-line-2">L'EXCELLENCE</span>
          </div>
          
          <a href="/equipe" className="story-cta-button" onClick={handleCtaClick}>
            <span>DÉCOUVRIR NOTRE HISTOIRE</span>
            <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};