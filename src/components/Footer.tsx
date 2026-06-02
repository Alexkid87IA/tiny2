import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Production', href: '/services#production' },
      { label: 'Management', href: '/services#management' },
      { label: 'Digital', href: '/services#digital' },
      { label: 'Communication', href: '/services#communication' },
      { label: 'Diffusion', href: '/services#diffusion' },
      { label: 'Événements', href: '/services#evenements' },
    ],
  },
  {
    title: 'Découvrir',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Artistes', href: '/artistes' },
      { label: 'Services', href: '/services' },
      { label: 'Événements', href: '/evenements' },
    ],
  },
  {
    title: 'Travailler ensemble',
    links: [
      { label: 'Programmateurs', href: '/programmateur' },
      { label: 'Entreprises', href: '/marque' },
    ],
  },
];

const history = [
  {
    year: '2020',
    title: 'La naissance',
    text: 'Création de Tiny Team avec une vision claire : un accompagnement sur mesure.',
  },
  {
    year: '2021',
    title: 'Premiers succès',
    text: 'Premiers artistes accompagnés, premières tournées organisées.',
  },
  {
    year: '2022',
    title: 'Expansion',
    text: "Élargissement de l'équipe et du réseau de salles partenaires.",
  },
  {
    year: '2023',
    title: 'Innovation',
    text: 'Nouvelles approches en production, image et diffusion de spectacles.',
  },
  {
    year: "Aujourd'hui",
    title: 'Plateau complet',
    text: '10 artistes, 5 personnes dans l’équipe, 300+ salles partenaires.',
  },
];

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-container px-6 py-12 md:px-12 md:py-16">
        <div className="site-footer-top">
          <Link to="/" className="site-footer-brand" aria-label="Tiny Team - Accueil">
            <span className="site-footer-brand-orb" />
            <span className="site-footer-brand-text">
              <span>La Tiny</span>
              <span>Team</span>
            </span>
          </Link>

          <div className="site-footer-meta">
            <span>Depuis 2020</span>
            <span>Production</span>
            <span>Management</span>
            <span>Diffusion</span>
            <span>Spectacle vivant</span>
          </div>
        </div>

        <div className="site-footer-statement">
          <div>
            <span className="premium-kicker text-accent-light/80">Tiny team, big dream</span>
            <h2>
              Une petite équipe
              <span> pour de grandes trajectoires.</span>
            </h2>
          </div>

          <div className="site-footer-contact">
            <span className="premium-kicker text-paper/44">Conversation directe</span>
            <a href="mailto:contact@tinyteam.fr" className="site-footer-email">
              contact@tinyteam.fr
            </a>
            <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-paper group mt-6">
              On discute ?
              <span className="premium-btn-icon">
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </span>
            </a>
          </div>
        </div>

        <div className="site-footer-main">
          <div className="site-footer-note">
            <span className="site-footer-since">Depuis 2020</span>
            <p>
              Tiny Team accompagne les artistes et les projets de scène avec une
              attention resserrée : production, image, réseau, diffusion et formats
              spéciaux.
            </p>
            <div className="site-footer-pills">
              <span>
                <MapPin size={14} />
                Paris, France
              </span>
              <a href="mailto:contact@tinyteam.fr">
                <Mail size={14} />
                Écrire
              </a>
              <a href="https://www.instagram.com/latinyteam/" target="_blank" rel="noopener noreferrer">
                <Instagram size={14} />
                Instagram
              </a>
            </div>
          </div>

          <div className="site-footer-history">
            <span className="premium-kicker block text-accent-light/80">Notre histoire</span>
            <ol>
              {history.map((item) => (
                <li key={item.year}>
                  <span>{item.year}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <nav className="site-footer-links" aria-label="Navigation de pied de page">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <span className="premium-kicker block text-paper/36">
                  {col.title}
                </span>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href}>
                        <span>{link.label}</span>
                        <ArrowUpRight size={12} strokeWidth={2.2} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer-bottom">
          <span>
            © {new Date().getFullYear()} Tiny Team · Depuis 2020
          </span>
          <span>Production, management et diffusion de spectacles vivants.</span>
        </div>
      </div>
    </footer>
  );
};
