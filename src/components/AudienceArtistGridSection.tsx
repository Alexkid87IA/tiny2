import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const preferredArtistIds = [
  'djal',
  'santini',
  'lucie',
  'edouard',
  'marc-antoine',
  'thomas',
  'sophie-et-alex',
  'jamel-comedy-club',
  'morgane',
  'urbain',
];

const visibleArtists = artists.filter((artist) => artist.image);

const orderedArtists = [
  ...preferredArtistIds
    .map((id) => visibleArtists.find((artist) => artist.id === id))
    .filter((artist): artist is (typeof visibleArtists)[number] => Boolean(artist)),
  ...visibleArtists.filter((artist) => !preferredArtistIds.includes(artist.id)),
];

type AudienceArtistGridSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  theme?: 'dark' | 'paper';
};

export const AudienceArtistGridSection = ({
  eyebrow,
  title,
  description,
  ctaLabel,
  theme = 'dark',
}: AudienceArtistGridSectionProps) => (
  <section className={`audience-artists-section ${theme === 'paper' ? 'is-paper' : 'is-dark'}`}>
    <div className="mx-auto max-w-container px-6 md:px-12">
      <div className="audience-artists-header">
        <div>
          <span className={`premium-kicker ${theme === 'paper' ? 'text-accent-dark/70' : 'text-accent-light/74'}`}>
            {eyebrow}
          </span>
          <h2 className="premium-title mt-4">{title}</h2>
        </div>
        <div className="audience-artists-header-side">
          <p className="premium-copy">{description}</p>
          <Link
            to="/artistes"
            className={`premium-btn premium-btn-sm group ${
              theme === 'paper' ? 'premium-btn-dark' : 'premium-btn-glass'
            }`}
          >
            {ctaLabel}
            <span className="premium-btn-icon">
              <ArrowRight size={14} strokeWidth={2.4} />
            </span>
          </Link>
        </div>
      </div>

      <div className="audience-artists-grid" aria-label="Plateau complet">
        {orderedArtists.map((artist, index) => (
          <Link key={artist.id} to={`/artiste/${artist.id}`} className="audience-artist-card">
            <span className="audience-artist-card-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="audience-artist-card-media">
              <img src={artist.image} alt={artist.name} loading={index < 5 ? 'eager' : 'lazy'} />
            </span>
            <span className="audience-artist-card-body">
              <span className="premium-kicker">{artist.type}</span>
              <strong>{artist.name}</strong>
              <small>{artist.showName || artist.tagline}</small>
            </span>
            <span className="audience-artist-card-arrow">
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
