import React from 'react';
import './TeamMembersSection.css';

interface TeamMember {
  id: string;
  firstname: string;
  lastname: string;
  role: string;
  description: string;
  quote: string;
  skills: string[];
  email: string;
  image: string;
  color: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export const TeamMembersSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'benedicte',
      firstname: "Bénédicte",
      lastname: "Lecoq",
      role: "Fondatrice & Directrice",
      description: "Passionnée et visionnaire, Bénédicte fait ses armes dans les grandes maisons du spectacle vivant entre Paris et Marseille. Convaincue que chaque artiste mérite un accompagnement aussi unique que son talent, elle crée Tiny Team pour offrir cette proximité essentielle.",
      quote: "Chaque artiste a une histoire unique à raconter",
      skills: ["Direction stratégique", "Production artistique", "Développement de talents"],
      email: "benedicte@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg",
      color: "#ec4899"
    },
    {
      id: 'isabelle',
      firstname: "Isabelle",
      lastname: "Sabatier",
      role: "Responsable Diffusion",
      description: "Animée par une passion profonde pour le spectacle vivant, Isabelle développe depuis toujours de multiples compétences : planification de tournées, structuration artistique, stratégie de développement personnalisée.",
      quote: "La scène est un lieu de rencontres magiques",
      skills: ["Programmation culturelle", "Gestion de tournées", "Relations publiques"],
      email: "booking@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg",
      color: "#06b6d4"
    },
    {
      id: 'elodie',
      firstname: "Élodie",
      lastname: "Biffi",
      role: "Responsable Administrative",
      description: "Gardienne de l'excellence opérationnelle, Élodie assure une gestion irréprochable permettant aux artistes de se concentrer sur leur art. Son expertise administrative garantit la fluidité de tous les projets.",
      quote: "L'organisation est la clé de la créativité",
      skills: ["Gestion administrative", "Optimisation des process", "Veille juridique"],
      email: "administratif@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg",
      color: "#3b82f6"
    },
    {
      id: 'jeremy',
      firstname: "Jérémy",
      lastname: "Dravigny",
      role: "Responsable Communication",
      description: "Fort de 20 ans dans le spectacle, Jérémy apporte une vision globale unique. Créateur d'un festival en 2006, il cultive l'art de faire les choses sérieusement sans se prendre au sérieux.",
      quote: "La communication, c'est créer des ponts entre les cœurs",
      skills: ["Communication digitale", "Marketing artistique", "Relations presse"],
      email: "tourmanager@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg",
      color: "#fbbf24"
    },
    {
      id: 'margaux',
      firstname: "Margaux",
      lastname: "Morel",
      role: "Chargée de Production",
      description: "Nouvelle recrue dynamique de l'équipe, Margaux apporte fraîcheur et créativité. Forte de plus de 10 ans d'expérience dans l'événementiel, elle enrichit Tiny Team de son enthousiasme communicatif.",
      quote: "Transformer les rêves en réalité spectaculaire",
      skills: ["Production artistique", "Direction technique", "Gestion de projet"],
      email: "diffusion@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg",
      color: "#10b981"
    }
  ];

  const achievements: Achievement[] = [
    {
      icon: "🚀",
      title: "Accompagnement",
      description: "De nos premiers artistes"
    },
    {
      icon: "🎯",
      title: "Développement",
      description: "De notre approche unique"
    },
    {
      icon: "🤝",
      title: "Élargissement",
      description: "De notre réseau de partenaires"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Dans la diffusion de spectacles"
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        
        {/* Header Section */}
        <header className="team-header">
          <h2 className="team-title">
            <span className="title-prefix">Les visages derrière</span>
            <span className="title-main">LA MAGIE</span>
          </h2>
          
          <p className="team-intro">
            Depuis notre création en <span className="year-highlight">2014</span>, 
            nous avons évolué d'une équipe de prestations de services pour devenir 
            en <span className="year-highlight">2020</span> une boîte de production à part entière.
          </p>
        </header>

        {/* Hero Image */}
        <div className="hero-image-container">
          <img 
            src="https://26.staticbtf.eno.do/v1/58-default/751b10844065d6d7491e15142e893bd0/media.jpg" 
            alt="L'équipe Tiny Team" 
            className="hero-image"
            loading="eager"
          />
        </div>

        {/* Achievements Grid */}
        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="achievement-icon">{achievement.icon}</span>
              <div className="achievement-text">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="members-container">
          {teamMembers.map((member, index) => (
            <article 
              key={member.id}
              className={`member-block ${index % 2 === 1 ? 'member-block--reversed' : ''}`}
              style={{ 
                '--member-color': member.color,
                '--animation-delay': `${index * 0.15}s`
              } as React.CSSProperties}
            >
              {/* Member Photo */}
              <div className="member-photo-container">
                <img 
                  src={member.image} 
                  alt={`${member.firstname} ${member.lastname}`} 
                  className="member-photo"
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <p className="member-quote">"{member.quote}"</p>
                </div>
                <span className="member-role-badge">{member.role}</span>
              </div>
              
              {/* Member Info */}
              <div className="member-info">
                <h3 className="member-name">
                  <span className="name-first">{member.firstname}</span>
                  <span className="name-last">{member.lastname}</span>
                </h3>
                
                <p className="member-description">{member.description}</p>
                
                <div className="member-skills">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`mailto:${member.email}`} 
                  className="member-contact-btn"
                  aria-label={`Contacter ${member.firstname} ${member.lastname}`}
                >
                  <span>Contacter</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};