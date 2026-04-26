import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const allImages = artists.filter(a => a.image);

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-deep">
      {/* 3-row horizontal mosaic */}
      <div className="absolute inset-[-30%] flex flex-col gap-3 -rotate-[8deg] origin-center justify-center">
        {[0, 1, 2].map((rowIdx) => {
          const images = [...allImages, ...allImages, ...allImages];
          const isLeft = rowIdx % 2 === 0;
          return (
            <div
              key={rowIdx}
              className={`flex gap-3 will-change-transform ${isLeft ? 'animate-hero-left' : 'animate-hero-right'}`}
              style={{
                animationDuration: isLeft ? '40s' : '45s',
                animationDelay: `${-rowIdx * 6}s`,
              }}
            >
              {images.map((artist, j) => (
                <div key={`${artist.id}-${rowIdx}-${j}`} className="flex-shrink-0 w-[160px] md:w-[220px] lg:w-[260px]">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl">
                    <img
                      src={artist.image}
                      alt=""
                      className="w-full h-full object-cover opacity-40"
                      loading={j < allImages.length ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mt-auto pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 max-w-container mx-auto w-full">
        <h1 className="font-display font-black tracking-tight leading-[0.88]">
          <span className="block text-paper text-[clamp(2.8rem,9vw,7.5rem)]">
            Tiny Team,
          </span>
          <span className="block text-[clamp(2.8rem,9vw,7.5rem)]">
            <span className="font-serif italic font-normal text-accent-light">Big</span>
            <span className="text-paper"> Dreams.</span>
          </span>
        </h1>

        <p className="font-body text-paper/45 text-base md:text-lg max-w-lg leading-relaxed mt-8 md:mt-12">
          Production, management & diffusion de spectacles vivants.
          On accompagne les artistes de scène — de l'idée au rideau final.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-10 md:mt-14">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              On discute ?
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </a>

          <Link
            to="/artistes"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              Découvrir nos artistes
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
