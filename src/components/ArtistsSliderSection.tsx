import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import type { Artist } from '../types/artist';

const artistsWithImages = artists.filter((artist): artist is Artist => Boolean(artist.image));

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

const preferredArtistIdSet = new Set(preferredArtistIds);

const orderedArtists = [
  ...preferredArtistIds
    .map((id) => artistsWithImages.find((artist) => artist.id === id))
    .filter((artist): artist is Artist => Boolean(artist)),
  ...artistsWithImages.filter((artist) => !preferredArtistIdSet.has(artist.id)),
];

const posterAspectRatioByArtistId: Record<string, string> = {
  djal: '1600 / 2400',
  santini: '1080 / 1350',
  lucie: '1200 / 1801',
  edouard: '1600 / 2400',
  'marc-antoine': '1600 / 2388',
  thomas: '1200 / 1797',
  'sophie-et-alex': '1600 / 2400',
  'djamel-comedy-club': '1200 / 1600',
  morgane: '1600 / 2166',
  urbain: '1600 / 2400',
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="border-l border-paper/10 pl-4">
    <span className="block font-display text-2xl font-black leading-none text-paper">
      {value}
    </span>
    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
      {label}
    </span>
  </div>
);

export const ArtistsSliderSection = () => {
  const [activeArtistId, setActiveArtistId] = useState(() => orderedArtists[0]?.id ?? '');
  const activeArtist =
    orderedArtists.find((artist) => artist.id === activeArtistId) ?? orderedArtists[0];

  const typeCount = useMemo(
    () => new Set(orderedArtists.map((artist) => artist.type)).size,
    []
  );

  if (!activeArtist) {
    return null;
  }

  const achievements = activeArtist.achievements?.slice(0, 3) ?? [];
  const posterAspectRatio = posterAspectRatioByArtistId[activeArtist.id] ?? '2 / 3';

  return (
    <section
      id="artists"
      className="relative overflow-hidden scroll-mt-5 bg-deep py-10 md:py-12 lg:min-h-screen lg:py-6"
    >
      <div className="section-rule absolute left-0 right-0 top-0" />
      <div className="pointer-events-none absolute left-[-14%] top-[12%] h-[360px] w-[360px] rounded-full bg-accent/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#45D4C5]/[0.045] blur-[110px]" />

      <div className="relative mx-auto flex max-w-container flex-col justify-center px-6 md:px-12 lg:min-h-[calc(100vh-80px)] lg:justify-start lg:pt-6">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {orderedArtists.length} artistes accompagnés
            </span>
            <h2 className="artists-section-title max-w-3xl">
              Le plateau <span className="font-serif italic font-normal text-accent-light">complet.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pb-1">
            <p className="max-w-xl font-body text-base leading-[1.5] text-paper/70 md:text-lg lg:text-base">
              Une sélection lisible, complète, et prête à être parcourue sans perdre
              le fil entre artistes, formats et spectacles.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <Stat value={String(orderedArtists.length)} label="Artistes" />
              <Stat value={String(typeCount)} label="Registres" />
              <Stat value="1" label="Équipe" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-12 lg:items-stretch">
          <Link
            to={`/artiste/${activeArtist.id}`}
            aria-label={`Voir le profil de ${activeArtist.name}`}
            style={{ aspectRatio: posterAspectRatio }}
            className="group relative mx-auto flex w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[10px] border border-paper/10 bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:max-w-[460px] lg:col-span-5 lg:h-[620px] lg:w-auto lg:max-w-none lg:justify-self-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeArtist.id}
                src={activeArtist.image}
                alt={activeArtist.name}
                className="absolute inset-0 h-full w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              />
            </AnimatePresence>
          </Link>

          <div className="flex min-h-0 flex-col gap-3 overflow-hidden rounded-[10px] border border-paper/10 bg-paper/[0.035] p-4 lg:col-span-7 lg:h-[620px]">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                Plateau complet
              </span>
              <Link
                to="/artistes"
                className="group inline-flex items-center gap-2 text-paper/60 transition hover:text-paper"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                  Tous
                </span>
                <ArrowRight size={13} className="transition group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            </div>

            <div className="grid shrink-0 grid-cols-1 gap-1.5 sm:grid-cols-3">
              {orderedArtists.map((artist) => {
                const isActive = activeArtist.id === artist.id;
                return (
                  <button
                    key={artist.id}
                    type="button"
                    onClick={() => setActiveArtistId(artist.id)}
                    aria-pressed={isActive}
                    className={`group flex min-w-0 items-center gap-2 rounded-[9px] border px-2 py-1 text-left transition duration-300 ${
                      isActive
                        ? 'border-accent/45 bg-accent/[0.11] shadow-[0_14px_34px_rgba(236,72,153,0.08)]'
                        : 'border-paper/[0.07] bg-deep/20 hover:border-paper/[0.16] hover:bg-paper/[0.04]'
                    }`}
                  >
                    <span className="h-7 w-7 shrink-0 overflow-hidden rounded-[6px] bg-paper/5">
                      <img
                        src={artist.image}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-[13px] font-black leading-tight text-paper">
                        {artist.name}
                      </span>
                      <span className="mt-0.5 block truncate font-body text-[10px] text-paper/[0.58]">
                        {artist.showName || artist.type}
                      </span>
                    </span>
                    {isActive && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />}
                  </button>
                );
              })}
            </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-paper/10 bg-[#f7f5f0] p-4 text-ink md:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Mic2 size={17} />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                      {activeArtist.type}
                    </span>
                    <span className="mt-1 block truncate font-display text-2xl font-black leading-none">
                      {activeArtist.name}
                    </span>
                    <span className="mt-1.5 block truncate font-body text-sm leading-tight text-ink/[0.6]">
                      {activeArtist.tagline}
                    </span>
                    <span className="mt-2.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                      Spectacle
                    </span>
                    <span className="mt-0.5 block truncate font-display text-lg font-black leading-tight">
                      {activeArtist.showName || activeArtist.type}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/artiste/${activeArtist.id}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition duration-300 hover:bg-accent hover:text-ink"
                  aria-label={`Voir le profil de ${activeArtist.name}`}
                >
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <p className="mt-3 font-body text-[13px] leading-[1.42] text-ink/[0.72] md:text-sm">
                {activeArtist.description}
              </p>

              <div className="mt-3 border-t border-ink/10 pt-3">
                {achievements.length > 0 && (
                  <div className="grid gap-2 md:grid-cols-3">
                    {achievements.map((achievement) => (
                      <div key={achievement} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="font-body text-[11px] leading-snug text-ink/[0.68]">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-3">
                <Link
                  to={`/artiste/${activeArtist.id}`}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/[0.68] transition group-hover:text-ink">
                    Voir le profil
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink transition duration-300 group-hover:scale-105">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
