import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const teamStories = [
  {
    name: 'Bénédicte Lecoq',
    role: 'Fondatrice',
    story: 'Après 15 ans dans l\'industrie du spectacle, j\'ai réalisé que les artistes avaient besoin d\'un accompagnement plus humain, plus personnalisé. C\'est ainsi qu\'est née Tiny Team.',
    quote: 'L\'art est un pont entre les rêves et la réalité.',
  },
  {
    name: 'Isabelle Sabatier',
    role: 'Responsable Diffusion',
    story: 'Mon parcours dans la production m\'a appris que chaque spectacle est une aventure unique. Chez Tiny Team, nous créons des tournées qui respectent l\'essence de chaque artiste.',
    quote: 'Chaque ville est une nouvelle scène à conquérir.',
  },
  {
    name: 'Elodie Biffi',
    role: 'Responsable Administrative',
    story: 'La gestion administrative dans le spectacle vivant est un art en soi. Je veille à ce que nos artistes puissent se concentrer sur leur créativité en toute sérénité.',
    quote: 'L\'organisation est la clé de la liberté artistique.',
  },
  {
    name: 'Jérémy Dravigny',
    role: 'Responsable Communication',
    story: 'La communication digitale est devenue essentielle dans le spectacle vivant. Je m\'assure que chaque artiste trouve son public et que chaque spectateur vive une expérience unique.',
    quote: 'L\'innovation au service de l\'émotion.',
  },
  {
    name: 'Margaux Morel',
    role: 'Chargée de Production',
    story: 'Le booking est un mélange subtil d\'intuition et de stratégie. Je travaille chaque jour pour créer des opportunités qui correspondent parfaitement à nos artistes.',
    quote: 'Créer des connexions, construire des ponts.',
  },
];

export const TeamStoriesPage = () => {
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
            top: '10%', left: '-8%',
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
            L'équipe
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Les visages derrière
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">les succès.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Découvrez les parcours de ceux qui font vivre Tiny Team au quotidien.
          </motion.p>
        </div>
      </section>

      {/* Stories */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamStories.map((story, i) => (
              <motion.div
                key={story.name}
                className="mission-card group block relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mission-card-inner relative p-7 md:p-9">
                  <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12">
                    {story.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50 block mt-1 mb-5">
                    {story.role}
                  </span>

                  <p className="font-body text-paper/35 text-sm md:text-base leading-relaxed mb-6">
                    {story.story}
                  </p>

                  <div className="pt-5 border-t border-paper/[0.06]">
                    <p className="font-serif italic text-accent-light/60 text-sm">
                      « {story.quote} »
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/equipe" className="group inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                Rencontrer l'équipe
              </span>
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
