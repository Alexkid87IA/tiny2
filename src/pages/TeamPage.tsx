import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const teamMembers = [
  {
    name: 'Bénédicte Lecoq',
    role: 'Fondatrice & Directrice',
    description: 'Visionnaire et passionnée, Bénédicte a créé Tiny Team avec la conviction que chaque artiste mérite un accompagnement aussi unique que son talent.',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
    email: 'benedicte@tinyteam.fr',
  },
  {
    name: 'Isabelle Sabatier',
    role: 'Responsable Diffusion',
    description: 'Experte en diffusion artistique, Isabelle transforme les spectacles en succès nationaux grâce à sa connaissance approfondie du réseau de salles.',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
    email: 'isabelle@tinyteam.fr',
  },
  {
    name: 'Elodie Biffi',
    role: 'Responsable Administrative',
    description: 'Gardienne de l\'excellence opérationnelle, Elodie assure une gestion irréprochable pour que les artistes se concentrent sur leur art.',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
    email: 'elodie@tinyteam.fr',
  },
  {
    name: 'Jérémy Dravigny',
    role: 'Responsable Communication',
    description: 'Stratège digital, Jérémy crée des narratifs percutants qui connectent les artistes à leur public de manière authentique.',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
    email: 'jeremy@tinyteam.fr',
  },
  {
    name: 'Margaux Morel',
    role: 'Chargée de Production',
    description: 'Créative et méthodique, Margaux donne vie aux projets les plus ambitieux en conjuguant vision artistique et rigueur opérationnelle.',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
    email: 'margaux@tinyteam.fr',
  },
];

const milestones = [
  { year: '2020', title: 'La naissance', desc: 'Création de Tiny Team avec une vision claire : un accompagnement sur mesure.' },
  { year: '2021', title: 'Premiers succès', desc: 'Premiers artistes accompagnés, premières tournées organisées.' },
  { year: '2022', title: 'Expansion', desc: 'Élargissement de l\'équipe et du réseau de salles partenaires.' },
  { year: '2023', title: 'Innovation', desc: 'Nouvelles approches en production et diffusion de spectacles.' },
  { year: '2026', title: 'Aujourd\'hui', desc: '10 artistes, 5 passionnés, des succès qui parlent d\'eux-mêmes.' },
];

const TeamCard = ({ member, priority }: { member: typeof teamMembers[number]; priority: boolean }) => (
  <div className="relative rounded-[20px] overflow-hidden group">
    <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>

    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-[3]">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent block mb-2">
        {member.role}
      </span>
      <span className="font-display font-black text-paper text-2xl md:text-3xl tracking-tight leading-tight block">
        {member.name}
      </span>
      <p className="font-body text-paper/50 text-sm leading-relaxed mt-3">
        {member.description}
      </p>
      <a
        href={`mailto:${member.email}`}
        className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-paper/30 hover:text-accent transition-colors duration-300"
      >
        <Mail size={12} />
        <span>{member.email}</span>
      </a>
    </div>

    <div className="absolute inset-0 rounded-[20px] border border-paper/[0.06] group-hover:border-accent/20 transition-colors duration-300 pointer-events-none z-[5]" />
  </div>
);

export const TeamPage = () => {
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
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
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
              Une petite équipe,
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">de grandes</span>{' '}
              ambitions.
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            On est cinq — et c'est notre force. Chaque artiste qu'on accompagne, on le connaît.
          </motion.p>
        </div>
      </section>

      {/* Team grid — row 1: 3 cards, row 2: 2 cards centered */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          {/* First row: 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {teamMembers.slice(0, 3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <TeamCard member={member} priority={i < 3} />
              </motion.div>
            ))}
          </div>

          {/* Second row: 2 members centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 mt-5 md:mt-7 max-w-[calc(66.666%+0.58rem)] lg:mx-auto">
            {teamMembers.slice(3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i + 3) * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <TeamCard member={member} priority={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre histoire
          </motion.span>

          <div className="max-w-2xl">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative pl-10 pb-10 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
                <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(236,72,153,0.4)]" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent/60 block mb-1">
                  {m.year}
                </span>
                <h3 className="font-display font-bold text-paper text-lg tracking-tight mb-1">
                  {m.title}
                </h3>
                <p className="font-body text-paper/35 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
