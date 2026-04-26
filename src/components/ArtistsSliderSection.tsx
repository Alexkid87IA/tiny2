import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { artists } from '../data/artists';

const all = artists.filter(a => a.image);
const row1 = all.slice(0, 5);
const row2 = [...all.slice(5), ...all.slice(0, Math.max(0, 5 - (all.length - 5)))];

const Card = ({ artist }: { artist: typeof all[0] }) => (
    <div className="mq-card w-[280px] md:w-[340px] flex-shrink-0 relative rounded-[20px] overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      <div className="mq-overlay absolute inset-0 rounded-[20px]" />

      {artist.prod && (
        <span className="absolute top-5 left-5 z-[4] px-3 py-1.5 rounded-full bg-ink/80 border border-paper/10 font-mono text-[9px] tracking-[0.14em] uppercase text-paper/70">
          {artist.prod}
        </span>
      )}

      <div className="mq-name absolute bottom-6 left-6 right-6 z-[3]">
        <span className="font-display font-black text-paper text-xl md:text-2xl tracking-tight leading-tight block">
          {artist.name}
        </span>
      </div>

      <Link
        to={`/artiste/${artist.id}`}
        className="mq-cta absolute top-5 right-5 z-[4] w-11 h-11 rounded-full bg-accent flex items-center justify-center text-ink hover:scale-110 transition-transform duration-300"
      >
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </Link>

      <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
    </div>
);

export const ArtistsSliderSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: '-15%' });

  return (
    <>
      {/* ── Statement ── */}
      <section className="perf-section relative bg-deep overflow-hidden" ref={textRef}>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-32">
          <motion.span
            className="font-display font-black text-paper text-[clamp(2.4rem,8vw,7rem)] tracking-tight leading-[0.92] text-center block"
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            Des talents singuliers,
          </motion.span>
          <motion.span
            className="font-serif italic font-normal text-accent-light text-[clamp(2.4rem,8vw,7rem)] leading-[0.92] text-center block mt-2 md:mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            des univers entiers.
          </motion.span>
          <motion.div
            className="mx-auto mt-10 md:mt-14 h-px w-20 bg-accent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={textInView ? { opacity: 0.4, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </div>
      </section>

      {/* ── Marquee section ── */}
      <section id="artists" className="perf-section mq-section relative bg-deep overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/[0.04] rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-container mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20">
          <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-accent block mb-3">
            {all.length} artistes
          </span>
          <p className="font-body text-paper/40 text-base md:text-lg mb-8 md:mb-10">
            Des humoristes qu'on connaît par cœur — leurs doutes, leurs forces, leur façon de voir la scène.
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h3 className="font-display font-black text-paper tracking-tight leading-[0.88]">
              <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
                Ceux qu'on
              </span>
              <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
                <span className="font-serif italic font-normal text-accent-light">accompagne.</span>
              </span>
            </h3>
            <Link
              to="/artistes"
              className="group inline-flex items-center gap-3 flex-shrink-0 mb-2"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                Voir tout
              </span>
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mq-tilt pb-24 md:pb-36">
          <div className="mq-row mb-5 md:mb-7">
            <div className="mq-track mq-ltr">
              {[...row1, ...row1, ...row1].map((artist, i) => (
                <Card key={`a-${i}`} artist={artist} />
              ))}
            </div>
          </div>

          <div className="mq-row">
            <div className="mq-track mq-rtl">
              {[...row2, ...row2, ...row2].map((artist, i) => (
                <Card key={`b-${i}`} artist={artist} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
