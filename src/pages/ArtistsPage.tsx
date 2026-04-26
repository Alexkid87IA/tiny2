import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const visibleArtists = artists.filter(a => a.image);

export const ArtistsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]"
          style={{
            top: '5%', right: '-10%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)',
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
            {visibleArtists.length} artistes
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Des talents singuliers,
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">des univers entiers.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            On accompagne les artistes de scène — de l'idée au rideau final.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
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
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div className="mq-overlay absolute inset-0 rounded-[20px]" />

                  {artist.prod && (
                    <span className="absolute top-5 left-5 z-[4] px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-sm border border-paper/10 font-mono text-[9px] tracking-[0.14em] uppercase text-paper/70">
                      {artist.prod}
                    </span>
                  )}

                  <div className="mq-name absolute bottom-6 left-6 right-6 z-[3]">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-light/70 block mb-1.5">
                      {artist.type}
                    </span>
                    <span className="font-display font-black text-paper text-xl md:text-2xl tracking-tight leading-tight block">
                      {artist.name}
                    </span>
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

      <Footer />
    </main>
  );
};
