import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Mic2, Route } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const preferredArtistIds = [
  'djal',
  'santini',
  'lucie',
  'edouard',
  'marc-antoine',
  'thomas',
  'sophie-et-alex',
  'djamel-comedy-club',
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

export const ArtistesPage = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });
  const featuredArtists = orderedArtists.slice(0, 4);
  const typeCount = useMemo(
    () => new Set(orderedArtists.map((artist) => artist.type)).size,
    []
  );

  return (
    <main className="min-h-screen bg-deep text-paper">
      <Navigation />

      <section className="audience-hero audience-hero-artists pt-28 md:pt-32">
        <div className="mx-auto grid max-w-container gap-10 px-6 pb-12 md:px-12 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.7fr)] lg:items-end">
          <motion.div
            ref={headRef}
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="premium-kicker text-accent-light/82">Plateau vivant</span>
            <h1 className="premium-title mt-7 max-w-5xl text-[54px] text-paper md:text-[78px] lg:text-[96px]">
              Des artistes qui
              <span className="block font-serif font-normal italic text-accent-light">
                tiennent la scène.
              </span>
            </h1>
            <p className="premium-copy mt-7 max-w-2xl text-lg text-paper/68 md:text-xl">
              Un plateau volontairement resserré : des univers identifiables,
              des spectacles défendus de près, et une trajectoire construite avec chaque artiste.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="audience-stat">
                <strong>{orderedArtists.length}</strong>
                <span>artistes</span>
              </div>
              <div className="audience-stat">
                <strong>{typeCount}</strong>
                <span>registres</span>
              </div>
              <div className="audience-stat">
                <strong>300+</strong>
                <span>salles</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="audience-hero-panel"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="audience-panel-top">
              <span className="premium-kicker text-paper/46">Sélection</span>
              <Mic2 size={18} strokeWidth={2.2} />
            </div>
            <div className="mt-5 grid gap-3">
              {featuredArtists.map((artist) => (
                <Link key={artist.id} to={`/artiste/${artist.id}`} className="audience-feature-row">
                  <span className="audience-feature-thumb">
                    <img src={artist.image} alt="" loading="eager" />
                  </span>
                  <span className="min-w-0">
                    <strong>{artist.name}</strong>
                    <span>{artist.showName || artist.type}</span>
                  </span>
                  <ArrowUpRight size={15} strokeWidth={2.4} />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper py-14 text-ink md:py-20 lg:py-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <span className="premium-kicker text-accent-dark/70">Tous les artistes</span>
              <h2 className="premium-title mt-4 max-w-3xl text-[44px] md:text-[68px]">
                Parcourir le plateau.
              </h2>
            </div>
            <p className="premium-copy max-w-lg text-base text-ink/58 md:text-lg">
              Les affiches restent lisibles et les informations essentielles sont séparées :
              nom, registre, spectacle, accès au profil.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orderedArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.035, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link to={`/artiste/${artist.id}`} className="artist-directory-card">
                  <span className="artist-directory-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="artist-directory-media">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      loading={index < 4 ? 'eager' : 'lazy'}
                    />
                  </span>
                  <span className="artist-directory-content">
                    <span className="premium-kicker text-accent-dark/74">{artist.type}</span>
                    <strong>{artist.name}</strong>
                    <span>{artist.showName || artist.tagline}</span>
                  </span>
                  <span className="artist-directory-arrow">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="audience-contact-section scroll-mt-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="audience-contact-panel">
            <div>
              <span className="premium-kicker text-accent-light/82">Accompagnement artiste</span>
              <h2 className="premium-title mt-5 text-[44px] text-paper md:text-[70px]">
                Un univers à
                <span className="block font-serif font-normal italic text-accent-light">
                  défendre ?
                </span>
              </h2>
              <p className="premium-copy mt-6 max-w-xl text-lg text-paper/64">
                On parle création, diffusion, rythme, image et trajectoire. La conversation
                commence simplement, puis on voit si Tiny Team est le bon endroit.
              </p>
            </div>
            <div className="audience-contact-card">
              <Route size={20} strokeWidth={2.2} />
              <span className="premium-kicker text-paper/44">Écrire à l'équipe</span>
              <a href="mailto:contact@tinyteam.fr">contact@tinyteam.fr</a>
              <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-paper group mt-6">
                On discute ?
                <span className="premium-btn-icon">
                  <Mail size={15} strokeWidth={2.4} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
