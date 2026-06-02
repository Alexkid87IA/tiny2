import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const visibleArtists = artists.filter(a => a.image);

const commitments = [
  {
    num: '01',
    title: 'Des artistes prêts à créer l\'exception',
    desc: 'Chaque humoriste arrive sur scène avec une énergie, une générosité et une maîtrise qui font la différence.',
    features: ['Artistes accompagnés et préparés', 'Performances calibrées', 'Expérience scénique confirmée'],
  },
  {
    num: '02',
    title: 'Une logistique fluide, pensée pour vous',
    desc: 'Interlocuteur unique, process simplifié, planning millimétré. La sérénité est notre standard.',
    features: ['Interlocuteur dédié', 'Process optimisés', 'Planning détaillé'],
  },
  {
    num: '03',
    title: 'Votre événement propulsé au sommet',
    desc: 'Chaque date est portée par notre équipe marketing pour maximiser l\'impact et remplir vos salles.',
    features: ['Stratégie marketing dédiée', 'Communication multi-canal', 'Visibilité amplifiée'],
  },
];

export const ProducerPage = () => {
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
            Programmateurs & salles
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Nos artistes,
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">votre prochain</span>{' '}
              succès.
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Une programmation fluide, fiable et amplifiée pour faire rayonner vos événements.
          </motion.p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent/50 block mb-10">
            {visibleArtists.length} artistes disponibles
          </span>

          {/* Mobile: carousel */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:hidden">
            {visibleArtists.map((artist) => (
              <Link key={artist.id} to={`/artiste/${artist.id}`} className="mq-card relative shrink-0 w-[200px] snap-start rounded-[16px] overflow-hidden">
                <div className="aspect-square overflow-hidden rounded-[16px]">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mq-overlay absolute inset-0 rounded-[16px]" />
                <div className="mq-name absolute bottom-4 left-4 right-4 z-[3]">
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-accent-light/70 block mb-1">{artist.type}</span>
                  <span className="font-display font-black text-paper text-sm tracking-tight leading-tight block">{artist.name}</span>
                </div>
                <div className="mq-border absolute inset-0 rounded-[16px] pointer-events-none z-[5]" />
              </Link>
            ))}
          </div>

          {/* Desktop: 2 rows of 5 */}
          <div className="hidden md:grid md:grid-cols-5 gap-4">
            {visibleArtists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link to={`/artiste/${artist.id}`} className="mq-card block relative rounded-[16px] overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-[16px]">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="mq-overlay absolute inset-0 rounded-[16px]" />
                  <div className="mq-name absolute bottom-4 left-4 right-4 z-[3]">
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-accent-light/70 block mb-1">{artist.type}</span>
                    <span className="font-display font-black text-paper text-base tracking-tight leading-tight block">{artist.name}</span>
                  </div>
                  <div className="mq-border absolute inset-0 rounded-[16px] pointer-events-none z-[5]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos engagements
          </motion.span>

          <motion.h2
            className="font-display font-black text-paper tracking-tight leading-[0.88] mb-16 md:mb-20"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2rem,5vw,4rem)]">
              Chaque spectacle devient
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">une expérience.</span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                className="mission-card group block relative"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mission-card-inner relative p-7 md:p-9">
                  <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                    {c.num}
                  </span>

                  <h3 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12 mb-3">
                    {c.title}
                  </h3>
                  <p className="font-body text-paper/30 text-sm leading-relaxed mb-6">{c.desc}</p>
                  <div className="space-y-2.5 pt-5 border-t border-paper/[0.06]">
                    {c.features.map(f => (
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

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Prêt à créer quelque chose
            <span className="font-serif italic font-normal text-accent-light"> d'unique ?</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Discutons de votre projet et découvrons ensemble comment nos artistes peuvent contribuer à son succès.
          </p>
          <a
            href="mailto:contact@tinyteam.fr"
            className="premium-btn premium-btn-paper group"
          >
            Commencer la discussion
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
