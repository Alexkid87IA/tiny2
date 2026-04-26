import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '9', label: 'Artistes' },
  { value: '50+', label: 'Villes' },
  { value: '95%', label: 'Remplissage' },
];

const teamMembers = [
  {
    name: 'Bénédicte Lecoq',
    role: 'Fondatrice & Directrice',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
  },
  {
    name: 'Isabelle Sabatier',
    role: 'Responsable Diffusion',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
  },
  {
    name: 'Elodie Biffi',
    role: 'Responsable Administrative',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
  },
  {
    name: 'Jérémy Dravigny',
    role: 'Responsable Communication',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
  },
  {
    name: 'Margaux Morel',
    role: 'Chargée de Production',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
  },
];

export const StorySection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: '-80px' });

  return (
    <section className="perf-section story relative bg-deep overflow-hidden py-28 md:py-40 lg:py-48">

      {/* ── Floating orbs ── */}
      <div className="story-orb story-orb-1" />
      <div className="story-orb story-orb-2" />
      <div className="story-orb story-orb-3" />

      {/* ── Diagonal accent line ── */}
      <div className="story-diag" style={{ width: '100%' }} />

      <div className="relative max-w-container mx-auto px-6 md:px-12">

        {/* ── Eyebrow ── */}
        <motion.span
          className="font-mono text-[13px] tracking-[0.18em] uppercase text-accent block mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Qui sommes-nous
        </motion.span>
        <motion.p
          className="font-body text-paper/40 text-base md:text-lg mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Cinq personnes, zéro process impersonnel — juste une obsession pour le détail.
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          className="font-display font-black text-paper tracking-tight leading-[0.88]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
            Une petite équipe,
          </span>
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
            <span className="font-serif italic font-normal text-accent-light">de grandes</span>{' '}
            ambitions.
          </span>
        </motion.h2>

        {/* ── Team cards ── */}
        <div className="mt-14 md:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="relative rounded-[16px] overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden rounded-[16px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-[3]">
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-accent block mb-1">
                      {member.role}
                    </span>
                    <span className="font-display font-black text-paper text-sm md:text-base tracking-tight leading-tight block">
                      {member.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-[16px] border border-paper/[0.06] group-hover:border-accent/20 transition-colors duration-300 pointer-events-none z-[5]" />
                </div>
              </motion.div>
            ))}

            {/* 6th card — text, mobile/tablet only */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative rounded-[16px] overflow-hidden h-full">
                <div className="aspect-[3/4] rounded-[16px] bg-surface border border-paper/[0.06] flex flex-col items-center justify-center p-5 text-center">
                  <span className="font-display font-black text-paper text-lg leading-tight tracking-tight">
                    On n'est pas une grosse machine.
                  </span>
                  <span className="font-display font-black text-accent text-lg leading-tight tracking-tight mt-1">
                    On est cinq.
                  </span>
                  <div className="w-8 h-px bg-accent/30 mt-4 mb-3" />
                  <span className="font-body text-paper/30 text-xs leading-relaxed">
                    Et c'est notre force.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Glass card ── */}
        <motion.div
          ref={cardRef}
          className="story-glass mt-10 md:mt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left — text */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14">
              <p className="font-body text-paper/55 text-lg md:text-xl leading-[1.75] max-w-lg">
                On n'est pas une grosse machine. On est cinq — et c'est notre force.
                Chaque artiste qu'on accompagne, on le connaît. Ses doutes, ses envies,
                sa façon de voir la scène.
              </p>
              <p className="font-body text-paper/30 text-base leading-[1.75] mt-5 max-w-lg">
                C'est comme ça qu'on travaille&nbsp;: de près. Pas de process impersonnel,
                juste les bonnes personnes, au bon moment.
              </p>

              <div className="mt-10">
                <Link
                  to="/equipe"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                    Rencontrer l'équipe
                  </span>
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                    <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 relative">
              <div className="absolute top-8 bottom-8 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
            </div>

            {/* Right — stats */}
            <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 border-paper/[0.06]">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="story-stat group flex-1 flex items-center p-8 md:px-10 lg:px-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div>
                    <span className="story-stat-val font-display font-black text-5xl md:text-6xl leading-none tracking-tighter block">
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
        </motion.div>
      </div>
    </section>
  );
};
