import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const artistsWithImages = artists.filter(a => a.image);

const colCount = 5;
const columns: (typeof artistsWithImages)[] = Array.from({ length: colCount }, () => []);
artistsWithImages.forEach((artist, i) => columns[i % colCount].push(artist));

const marqueeJobs = [
  'Production',
  'Management',
  'Diffusion',
  'Communication',
  'Digital',
  'Événements',
  'Booking',
  'Relations presse',
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const contentY = useTransform(scrollY, [0, 520], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] overflow-hidden bg-deep pt-[84px]"
    >
      <div className="absolute inset-[-28%] flex origin-center -rotate-[12deg] gap-3 opacity-100">
        {columns.map((col, i) => {
          const doubled = [...col, ...col, ...col];
          const isDown = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex flex-1 flex-col ${isDown ? 'animate-hero-down' : 'animate-hero-up'}`}
              style={{
                animationDuration: isDown ? '24s' : '31s',
                animationDelay: `${-i * 4.5}s`,
              }}
            >
              {doubled.map((artist, j) => (
                <div key={`${artist.id}-${j}`} className="shrink-0 pb-3">
                  <div className="aspect-[3/4] overflow-hidden rounded-[10px]">
                    <img
                      src={artist.image}
                      alt=""
                      className="h-full w-full object-cover saturate-[0.78] brightness-[0.58]"
                      loading={j < col.length ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(10,15,41,0.9)_0%,rgba(10,15,41,0.68)_43%,rgba(10,15,41,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(236,72,153,0.16),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-deep via-deep/62 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-container flex-col justify-center px-6 pb-8 pt-7 md:px-12 md:pb-10 md:pt-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid justify-items-center gap-7 text-center lg:grid-cols-12 lg:items-center lg:justify-items-stretch lg:text-left">
          <div className="flex w-full flex-col items-center lg:col-span-8 lg:items-start">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="premium-kicker whitespace-nowrap rounded-full border border-paper/16 bg-paper/[0.055] px-3 py-1.5 text-[9px] tracking-[0.1em] text-paper/72 backdrop-blur-md sm:text-[10px] sm:tracking-[0.14em]">
                <span className="sm:hidden">Production · Diffusion · Spectacle vivant</span>
                <span className="hidden sm:inline">Production · Management · Diffusion · Spectacles vivants</span>
              </span>
            </div>

            <h1 className="premium-title max-w-5xl text-center text-paper lg:text-left">
              <span
                className="block whitespace-nowrap"
                style={{ fontSize: 'clamp(3.1rem, 7.4vw, 7.25rem)' }}
              >
                Tiny Team
              </span>
              <span
                className="mt-1 block whitespace-nowrap"
                style={{ fontSize: 'clamp(3rem, 6.9vw, 6.65rem)' }}
              >
                <span className="font-serif font-normal italic text-accent-light">Big</span> Dream
              </span>
            </h1>
          </div>

          <div className="w-full lg:col-span-4">
            <div className="mx-auto max-w-[380px] rounded-[10px] border border-paper/12 bg-deep/48 p-4 backdrop-blur-xl md:p-5 lg:ml-auto lg:mr-0 lg:max-w-[360px]">
              <p className="premium-copy mx-auto max-w-md text-center text-sm leading-[1.6] text-paper/76 md:text-base lg:mx-0 lg:text-left lg:text-[15px]">
                Une équipe resserrée pour produire, défendre et diffuser des artistes
                qui tiennent la salle, le rythme et la trajectoire.
              </p>

              <div className="mt-4 border-y border-paper/12 py-4">
                <div>
                  <div>
                    <span className="premium-kicker text-paper/42">
                      Réseau de diffusion
                    </span>
                    <div className="mt-2 flex items-end justify-center gap-2.5 lg:justify-start">
                      <span className="premium-title text-[3.2rem] leading-[0.8] text-paper md:text-[3.85rem]">
                        300+
                      </span>
                      <span className="premium-kicker pb-1.5 text-[8.5px] text-paper/62">
                        salles partenaires
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 border-t border-paper/10 pt-3 sm:grid-cols-2">
                  <div className="flex items-center justify-between gap-4 rounded-full border border-paper/10 px-3 py-1.5">
                    <span className="premium-kicker text-[8.5px] text-paper/40">Artistes</span>
                    <span className="font-display text-lg font-black text-paper">10</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-full border border-paper/10 px-3 py-1.5">
                    <span className="premium-kicker text-[8.5px] text-paper/40">Métiers</span>
                    <span className="font-display text-lg font-black text-paper">5</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:flex-col">
                <a href="#contact" className="premium-btn premium-btn-paper premium-btn-sm group">
                  Parler d’un projet
                  <span className="premium-btn-icon">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </a>

                <Link to="/artistes" className="premium-btn premium-btn-glass premium-btn-sm group">
                  Voir le plateau
                  <span className="premium-btn-icon">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-jobs-marquee mt-8 border-y border-accent-light/18 bg-deep/28 py-2.5 backdrop-blur-sm md:py-3">
          <div className="hero-jobs-track">
            {[...marqueeJobs, ...marqueeJobs, ...marqueeJobs].map((job, index) => (
              <span key={`${job}-${index}`} className="hero-jobs-item">
                {job}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
