import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const visibleArtists = artists.filter(a => a.image).slice(0, 6);

const solutions = [
  {
    num: '01',
    title: 'Soirées corporate',
    desc: 'Des shows sur mesure pour vos séminaires, team buildings et événements d\'entreprise.',
    features: ['Spectacles personnalisés', 'Animation de soirées', 'Concepts clé en main'],
  },
  {
    num: '02',
    title: 'Conventions & lancements',
    desc: 'De l\'humour pour marquer les esprits lors de vos grands moments.',
    features: ['Présentateurs humoristes', 'Sketches sur mesure', 'Formats hybrides'],
  },
  {
    num: '03',
    title: 'Contenu de marque',
    desc: 'Associez votre image à celle de nos artistes pour des campagnes qui résonnent.',
    features: ['Partenariats artistes', 'Création de contenu', 'Activation digitale'],
  },
];

export const BrandPage = () => {
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
            top: '5%', right: '-10%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)',
            y: orbY,
          }}
        />

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={false}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Entreprises & marques
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              L'humour au service
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">de votre marque.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Séminaires, lancements, contenu de marque — on crée des moments qui marquent avec des artistes qui comptent.
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent/50 block mb-10">
            Nos solutions
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                className="mission-card group block relative"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mission-card-inner relative p-7 md:p-9">
                  <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                    {s.num}
                  </span>

                  <h3 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12 mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-paper/30 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <div className="space-y-2.5 pt-5 border-t border-paper/[0.06]">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-accent/50" />
                        <span className="font-body text-sm text-paper/25">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists preview */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <motion.h2
            className="font-display font-black text-paper tracking-tight leading-[0.88] mb-16 md:mb-20"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2rem,5vw,4rem)]">
              Des artistes qui
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">font la différence.</span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {visibleArtists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/artiste/${artist.id}`} className="mq-card block relative rounded-[20px] overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="mq-overlay absolute inset-0 rounded-[20px]" />
                  <div className="mq-name absolute bottom-5 left-5 right-5 z-[3]">
                    <span className="font-display font-black text-paper text-lg md:text-xl tracking-tight leading-tight block">{artist.name}</span>
                  </div>
                  <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/artistes" className="premium-btn premium-btn-glass premium-btn-sm group">
              Tous nos artistes
              <span className="premium-btn-icon">
                <ArrowRight size={13} strokeWidth={2.4} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Un événement
            <span className="font-serif italic font-normal text-accent-light"> à imaginer ?</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Racontez-nous votre projet — on trouve l'artiste et le format qui vous correspondent.
          </p>
          <a
            href="mailto:contact@tinyteam.fr"
            className="premium-btn premium-btn-paper group"
          >
            Nous contacter
            <span className="premium-btn-icon">
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};
