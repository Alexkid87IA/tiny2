import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Handshake,

  Megaphone,
  RadioTower,
  Route,
  Smartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'production',
    title: 'Production',
    desc: 'Transformer une intuition de plateau en spectacle solide, répétable, vendable.',
    scope: 'Création',
    Icon: Route,
  },
  {
    id: 'management',
    title: 'Management',
    desc: 'Construire la trajectoire, cadrer les décisions et protéger le temps artistique.',
    scope: 'Trajectoire',
    Icon: Handshake,
  },
  {
    id: 'diffusion',
    title: 'Diffusion',
    desc: 'Activer les bonnes salles, au bon moment, avec une lecture claire du marché.',
    scope: 'Réseau',
    Icon: RadioTower,
  },
  {
    id: 'communication',
    title: 'Communication',
    desc: 'Installer l’image, les messages et les prises de parole sans lisser l’artiste.',
    scope: 'Image',
    Icon: Megaphone,
  },
  {
    id: 'digital',
    title: 'Digital',
    desc: 'Faire vivre les contenus là où le public découvre, suit, partage et revient.',
    scope: 'Audience',
    Icon: Smartphone,
  },
  {
    id: 'evenements',
    title: 'Événements',
    desc: 'Composer des formats scène, entreprise ou festival avec la bonne intensité.',
    scope: 'Formats',
    Icon: CalendarDays,
  },
];

export const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-paper py-20 text-ink md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <motion.div
            className="lg:sticky lg:top-28"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="rounded-[14px] border border-ink/10 bg-white/[0.55] p-6 md:p-8 lg:p-9">
              <span className="premium-kicker text-accent-dark/70">Nos métiers</span>
              <h2 className="premium-title mt-5 max-w-xl text-[52px] md:text-[72px] lg:text-[82px]">
                Une équipe,
                <span className="block font-serif font-normal italic text-accent-dark">
                  six leviers.
                </span>
              </h2>
              <p className="premium-copy mt-7 max-w-lg text-lg text-ink/[0.66] md:text-xl">
                On ne sépare pas l’artistique, la diffusion et l’image. Les métiers
                avancent ensemble, pour éviter les angles morts et les décisions hors-sol.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ['01', 'Produire juste'],
                  ['02', 'Défendre fort'],
                  ['03', 'Diffuser mieux'],
                ].map(([num, label]) => (
                  <div key={num} className="flex items-center justify-between rounded-full border border-ink/10 px-4 py-3">
                    <span className="premium-kicker text-ink/[0.38]">{num}</span>
                    <span className="font-body text-sm font-semibold text-ink">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Link to="/services" className="premium-btn premium-btn-dark group">
                  Voir tous les services
                  <span className="premium-btn-icon">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </span>
                </Link>
              </div>

              <div className="mt-9 overflow-hidden rounded-[16px]">
                <img src="/team.png" alt="L'équipe Tiny Team" className="aspect-[16/10] w-full rounded-[12px] object-cover" />
              </div>
            </div>
          </motion.div>

          <div className="min-w-0">
            <motion.div
              className="mb-4 rounded-[14px] bg-ink p-6 text-paper md:p-8"
              initial={false}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <span className="premium-kicker text-paper/[0.5]">Système intégré</span>
                  <p className="premium-copy mt-4 max-w-2xl text-2xl leading-[1.22] text-paper md:text-[34px]">
                    Chaque métier a son rôle, mais personne ne travaille dans son coin.
                  </p>
                </div>
                <div className="flex gap-3 md:flex-col">
                  <span className="rounded-full border border-paper/[0.14] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/[0.68]">
                    6 métiers
                  </span>
                  <span className="rounded-full border border-paper/[0.14] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/[0.68]">
                    1 équipe
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 xl:grid-cols-2">
              {services.map((service, i) => {
                const Icon = service.Icon;
                const hasLongTitle = service.title.length > 12;

                return (
                  <motion.div
                    key={service.id}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      to={`/services#${service.id}`}
                      className={`group flex min-h-[252px] flex-col justify-between rounded-[14px] border p-6 transition duration-200 md:p-7 ${
                        i === 0
                          ? 'border-accent/[0.35] bg-accent/10'
                          : 'border-ink/10 bg-paper hover:border-ink/[0.22] hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="mb-9 flex items-center justify-between gap-4">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper">
                            <Icon size={18} strokeWidth={2.2} />
                          </span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/[0.42] transition group-hover:border-accent/40 group-hover:bg-accent group-hover:text-ink">
                            <ArrowRight size={14} />
                          </span>
                        </div>
                        <span className="premium-kicker text-accent-dark/70">
                          {String(i + 1).padStart(2, '0')} · {service.scope}
                        </span>
                        <h3
                          className="premium-title mt-3 max-w-full text-ink"
                          style={{
                            fontSize: hasLongTitle
                              ? 'clamp(1.85rem, 2.1vw, 2rem)'
                              : 'clamp(2.05rem, 2.7vw, 2.45rem)',
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p className="premium-copy mt-8 max-w-sm text-base text-ink/[0.62]">
                        {service.desc}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
