import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const visibleArtists = artists.filter(a => a.image);

export const EventsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]"
          style={{
            top: '5%', left: '-8%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
            y: orbY,
          }}
        />

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Spectacles
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Les prochains
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">spectacles.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Découvrez nos artistes en tournée et réservez vos places.
          </motion.p>
        </div>
      </section>

      {/* Artists with shows */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {visibleArtists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link to={`/artiste/${artist.id}`} className="mq-card block relative rounded-[20px] overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="mq-overlay absolute inset-0 rounded-[20px]" />
                  {artist.prod && (
                    <span className="absolute top-5 left-5 z-[4] px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-sm border border-paper/10 font-mono text-[9px] tracking-[0.14em] uppercase text-paper/70">
                      {artist.prod}
                    </span>
                  )}
                  <div className="mq-name absolute bottom-6 left-6 right-6 z-[3]">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-light/70 block mb-1.5">{artist.type}</span>
                    <span className="font-display font-black text-paper text-xl md:text-2xl tracking-tight leading-tight block">{artist.name}</span>
                    {artist.showName && (
                      <span className="font-body text-paper/40 text-sm block mt-1">{artist.showName}</span>
                    )}
                    {artist.dates.length > 0 ? (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-[11px] bg-accent/15 text-accent-light/80 border border-accent/10">
                        {artist.dates.length} date{artist.dates.length > 1 ? 's' : ''} à venir
                      </span>
                    ) : (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-[11px] bg-paper/5 text-paper/30 border border-paper/6">
                        Dates à venir
                      </span>
                    )}
                  </div>
                  <div className="mq-cta absolute top-5 right-5 z-[4] w-11 h-11 rounded-full bg-accent flex items-center justify-center text-ink">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                  <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Vous êtes
            <span className="font-serif italic font-normal text-accent-light"> programmateur ?</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Contactez-nous pour programmer nos artistes dans votre salle ou festival.
          </p>
          <Link
            to="/programmateur"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              Espace programmateurs
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};
