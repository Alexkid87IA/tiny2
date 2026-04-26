import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '300+', label: 'Salles partenaires' },
  { value: '95%', label: 'Taux de remplissage' },
  { value: '48h', label: 'Délai de réponse' },
  { value: '10', label: 'Artistes disponibles' },
];

const engagements = [
  {
    num: '01',
    title: 'Un seul interlocuteur',
    desc: 'Vous appelez, on décroche. Un contact dédié du premier appel au dernier applaudissement.',
  },
  {
    num: '02',
    title: 'Suivi personnalisé',
    desc: 'On connaît vos contraintes et vos publics. Chaque spectacle est pensé pour votre salle.',
  },
  {
    num: '03',
    title: 'Transparence totale',
    desc: 'Les bonnes et les moins bonnes nouvelles. On travaille ensemble, pas en boîte noire.',
  },
];

export const ProducerSection = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section id="programmateurs" className="perf-section relative py-28 md:py-40 lg:py-48 bg-deep overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px]"
        style={{
          top: '10%', right: '-10%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
        <motion.span
          className="font-mono text-[13px] tracking-[0.18em] uppercase text-accent block mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Programmateurs & salles
        </motion.span>
        <motion.p
          className="font-body text-paper/40 text-base md:text-lg mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Vous cherchez un spectacle fiable, clé en main ? C'est exactement ce qu'on fait.
        </motion.p>

        <motion.h2
          className="font-display font-black text-paper tracking-tight leading-[0.88]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
            Enrichissez
          </span>
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
            <span className="font-serif italic font-normal text-accent-light">votre saison.</span>
          </span>
        </motion.h2>

        <motion.p
          className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Des artistes accompagnés, une logistique fluide, un marketing qui remplit vos salles.
        </motion.p>

        {/* Engagements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {engagements.map((e, i) => (
            <motion.div
              key={e.title}
              className="mission-card group block relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mission-card-inner relative p-7 md:p-9">
                <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                  {e.num}
                </span>
                <h3 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12 mb-3">
                  {e.title}
                </h3>
                <p className="font-body text-paper/30 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="story-glass mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="story-stat group flex items-center justify-center p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="text-center">
                  <span className="story-stat-val font-display font-black text-4xl md:text-5xl leading-none tracking-tighter block">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/25 block mt-2">
                    {s.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
