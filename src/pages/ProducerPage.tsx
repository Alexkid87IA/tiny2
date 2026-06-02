import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  RadioTower,
  ShieldCheck,
  TicketCheck,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AudienceArtistGridSection } from '../components/AudienceArtistGridSection';

const commitments = [
  {
    title: 'Sélection claire',
    desc: 'On vous oriente vers les artistes et les formats qui correspondent vraiment à votre salle, votre public et votre saison.',
    Icon: TicketCheck,
  },
  {
    title: 'Conditions cadrées',
    desc: 'Interlocuteur unique, informations propres, éléments de communication et suivi de date sans friction.',
    Icon: ShieldCheck,
  },
  {
    title: 'Date amplifiée',
    desc: 'Le spectacle ne s’arrête pas au contrat : on aide à installer la date, le récit et la visibilité.',
    Icon: RadioTower,
  },
];

const process = [
  ['01', 'On comprend votre contexte', 'Salle, jauge, ligne artistique, timing, contraintes et ambition.'],
  ['02', 'On propose le bon plateau', 'Une sélection courte, lisible, argumentée. Pas un catalogue envoyé au hasard.'],
  ['03', 'On cadre la date', 'Conditions, planning, technique, communication : chaque détail doit être fluide.'],
  ['04', 'On suit la suite', 'Retours terrain, prochaines dates, relation programmateur tenue dans le temps.'],
];

export const ProducerPage = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <main className="min-h-screen bg-deep text-paper">
      <Navigation />

      <section className="audience-hero audience-hero-producer pt-28 md:pt-32">
        <div className="mx-auto grid max-w-container gap-10 px-6 pb-12 md:px-12 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end">
          <motion.div
            ref={headRef}
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="premium-kicker text-accent-light/82">Programmateurs & salles</span>
            <h1 className="premium-title mt-7 max-w-5xl text-[52px] text-paper md:text-[76px] lg:text-[96px]">
              Un plateau prêt
              <span className="block font-serif font-normal italic text-accent-light">
                pour votre saison.
              </span>
            </h1>
            <p className="premium-copy mt-7 max-w-2xl text-lg text-paper/68 md:text-xl">
              Des artistes accompagnés, des formats lisibles, une logistique carrée :
              on vous aide à programmer le bon spectacle au bon moment.
            </p>
          </motion.div>

          <motion.div
            className="audience-hero-panel"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="audience-panel-top">
              <span className="premium-kicker text-paper/46">Réseau de diffusion</span>
              <CalendarDays size={18} strokeWidth={2.2} />
            </div>
            <div className="audience-big-number">
              <strong>300+</strong>
              <span>salles partenaires</span>
            </div>
            <div className="mt-5 grid gap-2">
              <div className="audience-panel-line">
                <span>10 artistes accompagnés</span>
                <ArrowUpRight size={14} />
              </div>
              <div className="audience-panel-line">
                <span>Un interlocuteur unique</span>
                <ArrowUpRight size={14} />
              </div>
              <div className="audience-panel-line">
                <span>Dates, supports, relais</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper py-14 text-ink md:py-20 lg:py-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[0.9fr_0.7fr] md:items-end">
            <div>
              <span className="premium-kicker text-accent-dark/70">Ce que vous gagnez</span>
              <h2 className="premium-title mt-4 max-w-3xl text-[44px] md:text-[68px]">
                Moins de bruit, plus de certitude.
              </h2>
            </div>
            <p className="premium-copy max-w-lg text-base text-ink/58 md:text-lg">
              L’objectif : vous faire gagner du temps sans réduire l’exigence artistique.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {commitments.map((item, index) => {
              const Icon = item.Icon;
              return (
                <motion.article
                  key={item.title}
                  className="audience-benefit-card"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="audience-benefit-icon">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <span className="premium-kicker text-accent-dark/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <AudienceArtistGridSection
        eyebrow="Plateau disponible"
        title="Des formats prêts à tourner."
        description="Les 10 artistes accompagnés par Tiny Team, présentés dans une grille claire pour comparer les univers et accéder vite aux profils."
        ctaLabel="Voir tous les artistes"
      />

      <section className="bg-paper py-14 text-ink md:py-20 lg:py-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-12 grid gap-5 md:grid-cols-[0.74fr_0.52fr] md:items-end">
            <div>
              <span className="premium-kicker text-accent-dark/70">Méthode</span>
              <h2 className="premium-title mt-4 max-w-4xl text-[42px] md:text-[58px]">
                Une relation programmateur qui tient.
              </h2>
            </div>
            <p className="premium-copy max-w-lg text-base text-ink/58 md:text-lg">
              Une méthode courte, lisible et tenue jusqu’au terrain.
            </p>
          </div>
          <ol className="audience-process-grid">
            {process.map(([num, title, desc]) => (
              <li key={num}>
                <span>{num}</span>
                <strong>{title}</strong>
                <p>{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="audience-contact-section scroll-mt-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="audience-contact-panel">
            <div>
              <span className="premium-kicker text-accent-light/82">Programmer un artiste</span>
              <h2 className="premium-title mt-5 text-[44px] text-paper md:text-[70px]">
                Une date à
                <span className="block font-serif font-normal italic text-accent-light">
                  construire ?
                </span>
              </h2>
              <p className="premium-copy mt-6 max-w-xl text-lg text-paper/64">
                Donnez-nous le contexte, la salle, la période et l’envie artistique.
                On revient avec une proposition claire.
              </p>
            </div>
            <div className="audience-contact-card">
              <CalendarDays size={20} strokeWidth={2.2} />
              <span className="premium-kicker text-paper/44">Booking</span>
              <a href="mailto:contact@tinyteam.fr">contact@tinyteam.fr</a>
              <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-paper group mt-6">
                Parler programmation
                <span className="premium-btn-icon">
                  <Mail size={15} strokeWidth={2.4} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
