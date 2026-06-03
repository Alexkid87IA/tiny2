import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const stats = [
  {
    value: '10',
    label: 'artistes accompagnés',
    detail: 'Un plateau resserré, suivi de près.',
  },
  {
    value: '5',
    label: 'personnes dans l’équipe',
    detail: 'Production, management, diffusion.',
  },
  {
    value: '300+',
    label: 'salles partenaires',
    detail: 'Un réseau de diffusion actif, utile, entretenu.',
  },
];

const principles = [
  'Un accompagnement proche, précis, jamais standardisé.',
  'Des décisions artistiques et business prises ensemble.',
  'Une vision long terme : produire, diffuser, installer.',
];

const teamMembers = [
  {
    name: 'Bénédicte Lecoq',
    role: 'Fondatrice & Directrice',
    email: 'benedicte@tinyteam.fr',
    image: 'https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg',
  },
  {
    name: 'Isabelle Sabatier',
    role: 'Responsable Diffusion',
    email: 'booking@tinyteam.fr',
    image: 'https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg',
  },
  {
    name: 'Élodie Biffi',
    role: 'Responsable Administrative',
    email: 'administratif@tinyteam.fr',
    image: 'https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg',
  },
  {
    name: 'Jérémy Dravigny',
    role: 'Responsable Communication',
    email: 'tourmanager@tinyteam.fr',
    image: 'https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg',
  },
  {
    name: 'Margaux Morel',
    role: 'Chargée de Production',
    email: 'diffusion@tinyteam.fr',
    image: 'https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg',
  },
];

export const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-paper py-14 text-ink md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            className="space-y-8"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div>
              <span className="premium-kicker text-ink/[0.46]">Qui sommes-nous</span>
              <h2 className="premium-title mt-4 text-[42px] md:text-[54px] lg:text-[64px]">
                Une petite équipe,
                <span className="block font-serif font-normal italic text-accent-dark">
                  de grandes ambitions.
                </span>
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[22px] bg-ink p-4 text-paper shadow-[0_24px_90px_rgba(10,10,10,0.18)] md:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.34),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(247,245,240,0.2),transparent_26%),linear-gradient(135deg,#0A0A0A_0%,#111833_58%,#291322_100%)]" />
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(247,245,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,240,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-paper/[0.14] px-2 pb-4">
                  <div>
                    <span className="premium-kicker text-paper/[0.64]">Une petite équipe</span>
                    <p className="mt-2 font-display text-xl font-black leading-none text-paper md:text-2xl">
                      5 contacts directs
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2.5">
                  {teamMembers.map((member, index) => (
                    <a
                      key={member.email}
                      href={`mailto:${member.email}`}
                      className={`group relative grid min-w-0 grid-cols-[56px_minmax(0,1fr)] items-center gap-3 rounded-[14px] border p-2 pr-3 transition duration-200 hover:-translate-y-0.5 hover:border-accent/[0.55] hover:bg-paper/[0.09] sm:pr-12 ${
                        index === 0
                          ? 'border-accent/[0.42] bg-paper/[0.105]'
                          : 'border-paper/[0.1] bg-paper/[0.045]'
                      }`}
                    >
                      <span className="h-14 w-14 overflow-hidden rounded-[10px] bg-paper/[0.08]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover grayscale-[0.18] transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                          loading="lazy"
                        />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate font-mono text-[9px] uppercase tracking-[0.14em] text-accent-light/[0.76]">
                          {member.role}
                        </span>
                        <span className="mt-1 block font-display text-[17px] font-black leading-[0.98] text-paper md:text-[19px]">
                          {member.name}
                        </span>
                        <span className="mt-1.5 block truncate font-mono text-[10px] tracking-[0.04em] text-paper/[0.54]">
                          {member.email}
                        </span>
                      </span>

                      <span className="absolute right-2.5 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-paper/[0.12] text-paper/[0.58] transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink sm:flex">
                        <Mail size={14} strokeWidth={2.2} />
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 rounded-[14px] border border-paper/[0.1] bg-ink/[0.36] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <p className="premium-copy text-sm leading-[1.45] text-paper/[0.68]">
                    Le format est volontairement compact : moins d’intermédiaires,
                    plus d’attention sur les artistes et les salles.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-light transition hover:text-paper"
                  >
                    Contact
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-ink">
                      <ArrowUpRight size={13} strokeWidth={2.3} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="rounded-[22px] border border-ink/10 bg-white/50 p-5 md:p-6 lg:p-8">
              <p className="premium-copy max-w-3xl text-[20px] leading-[1.35] text-ink md:text-[26px]">
                On n’est pas une grosse machine. On est cinq, et c’est notre force :
                chaque artiste qu’on accompagne, on le connaît vraiment.
              </p>
              <p className="premium-copy mt-6 max-w-2xl text-base text-ink/60 md:text-lg">
                Ses doutes, ses envies, sa façon de voir la scène. On travaille de près,
                avec les bonnes personnes au bon moment, pour faire tenir les spectacles
                et les trajectoires.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 rounded-[18px] border p-5 md:p-6 ${
                    index === 2
                      ? 'border-ink bg-ink text-paper sm:col-span-2 md:grid md:grid-cols-[auto_1fr] md:items-end md:gap-8'
                      : 'border-ink/10 bg-paper text-ink'
                  }`}
                >
                  <span
                    className={`premium-title block whitespace-nowrap ${
                      index === 2
                        ? 'text-[56px] md:text-[72px]'
                        : 'text-[48px] md:text-[60px]'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <div className="min-w-0">
                    <span
                      className={`mt-3 block font-mono text-[11px] uppercase leading-[1.55] tracking-[0.16em] md:text-xs ${
                        index === 2 ? 'text-paper/[0.62]' : 'text-ink/[0.48]'
                      }`}
                    >
                      {stat.label}
                    </span>
                    <p
                      className={`premium-copy mt-3 text-sm md:text-base ${
                        index === 2 ? 'text-paper/[0.72]' : 'text-ink/[0.58]'
                      }`}
                    >
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {principles.map((principle, i) => (
                <div key={principle} className="flex gap-4 border-b border-ink/[0.08] pb-3 last:border-b-0">
                  <span className="premium-kicker text-accent-dark/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="premium-copy text-ink/[0.68]">{principle}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <a href="#contact" className="premium-btn premium-btn-dark group">
                Nous contacter
                <span className="premium-btn-icon">
                  <ArrowUpRight size={15} strokeWidth={2.4} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
