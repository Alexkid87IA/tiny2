import React from 'react';
import './TeamHeroSection.css';

export const TeamHeroSection: React.FC = () => {
  return (
    <section className="team-hero-section">
      {/* Overlay gradient */}
      <div className="team-hero-overlay"></div>

      {/* Contenu principal */}
      <div className="team-hero-content">
        {/* Badge Depuis 2014 */}
        <div className="team-hero-badge">
          <span>DEPUIS 2014</span>
          <span className="team-badge-star"></span>
        </div>

        {/* Titre principal */}
        <h1 className="team-hero-main-title">
          <div className="team-title-wrapper">
            <span className="team-title-tiny">TINY</span>
            <span className="team-title-mais">MAIS</span>
          </div>
          <span className="team-title-costaud">COSTAUD</span>
        </h1>

        {/* Sous-titre */}
        <div className="team-hero-subtitle">
          <p className="team-subtitle-line-1">Plus qu'une équipe, une famille de passionnés</p>
          <p className="team-subtitle-line-2">AU SERVICE DE VOS PROJETS ARTISTIQUES DEPUIS 2014</p>
        </div>

        {/* Timeline sous forme de cartes */}
        <div className="team-hero-timeline">
          <div className="team-timeline-item">
            <div className="team-timeline-year">2014</div>
            <div className="team-timeline-label">CRÉATION</div>
            <div className="team-timeline-desc">Prestations de services</div>
          </div>
          
          <div className="team-timeline-item">
            <div className="team-timeline-year">2020</div>
            <div className="team-timeline-label">ÉVOLUTION</div>
            <div className="team-timeline-desc">Boîte de production</div>
          </div>
          
          <div className="team-timeline-item active">
            <div className="team-timeline-year">Aujourd'hui</div>
            <div className="team-timeline-label">EXCELLENCE</div>
            <div className="team-timeline-desc">Approche unique</div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="team-hero-cta-buttons">
          <a href="#team-section" className="team-cta-btn team-primary">
            <span>Découvrir l'équipe</span>
            <span className="team-btn-icon">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};