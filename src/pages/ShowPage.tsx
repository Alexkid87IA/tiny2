import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

export const ShowPage = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);
  const heroRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  if (!artist) {
    return (
      <main className="min-h-screen bg-deep">
        <Navigation />
        <div className="max-w-container mx-auto px-6 md:px-12 py-32 text-center">
          <h1 className="font-display font-black text-paper text-4xl mb-6">Spectacle non trouvé</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50 hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} />
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      <section ref={heroRef} className="relative pt-28 pb-28 md:pt-36 md:pb-40 overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px]"
          style={{
            top: '20%', right: '-5%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
            y: orbY,
          }}
        />

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          <Link
            to={`/artiste/${artist.id}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/40 hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={12} />
            Retour au profil
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="mq-card rounded-[20px] overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
                <img
                  src={artist.posterImage || artist.image}
                  alt={artist.showName || artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mq-overlay absolute inset-0 rounded-[20px]" />
              <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-6">
                {artist.type}
              </span>

              <h1 className="font-display font-black text-paper tracking-tight leading-[0.88]">
                <span className="block text-[clamp(2.2rem,5vw,4.5rem)]">
                  {artist.showName || artist.name}
                </span>
              </h1>

              {artist.showName && (
                <span className="font-body text-paper/50 text-lg mt-3 block">{artist.name}</span>
              )}

              <div className="h-px w-16 bg-accent/30 my-8" />

              <p className="font-body text-paper/45 text-base md:text-lg leading-[1.7]">
                {artist.showDescription || artist.description}
              </p>

              {artist.longDescription && (
                <p className="font-body text-paper/30 text-sm leading-[1.7] mt-5">
                  {artist.longDescription}
                </p>
              )}

              {artist.achievements.length > 0 && (
                <div className="mt-8">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/25 block mb-3">
                    Parcours
                  </span>
                  <div className="space-y-2">
                    {artist.achievements.map((a, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-accent/50" />
                        <span className="font-body text-sm text-paper/40">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="mailto:contact@tinyteam.fr"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                    Réserver cet artiste
                  </span>
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                    <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
