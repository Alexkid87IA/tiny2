import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Mail,
  Megaphone,
  MessageSquareText,
  PartyPopper,
  Play,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AudienceArtistGridSection } from '../components/AudienceArtistGridSection';

const formats = [
  {
    title: 'Événements internes',
    desc: 'Séminaires, conventions, soirées : un format scène qui donne du rythme et rassemble les équipes.',
    Icon: PartyPopper,
    tags: ['Séminaire', 'Team event', 'Convention'],
  },
  {
    title: 'Lancements & prises de parole',
    desc: 'Un artiste, un ton, une écriture : pour rendre un moment de marque plus vivant et plus mémorable.',
    Icon: Megaphone,
    tags: ['Lancement', 'Animation', 'Scène'],
  },
  {
    title: 'Contenu de marque',
    desc: 'Des formats courts, incarnés, conçus avec les artistes sans lisser leur personnalité.',
    Icon: Play,
    tags: ['Social', 'Brand content', 'Campagne'],
  },
];

const principles = [
  ['01', 'Le bon artiste', 'Un univers aligné avec le public, le contexte et le niveau d’énergie attendu.'],
  ['02', 'Le bon format', 'Show, intervention, animation, contenu ou dispositif hybride : on adapte le cadre.'],
  ['03', 'La bonne exécution', 'Brief, production, coordination et suivi pour que le moment soit fluide.'],
];

export const BrandPage = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <main className="min-h-screen bg-deep text-paper">
      <Navigation />

      <section className="audience-hero audience-hero-brand pt-28 md:pt-32">
        <div className="mx-auto grid max-w-container gap-10 px-6 pb-12 md:px-12 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end">
          <motion.div
            ref={headRef}
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="premium-kicker text-accent-light/82">Entreprises & marques</span>
            <h1 className="premium-title audience-hero-title mt-7 max-w-5xl text-[clamp(2.85rem,11vw,3.75rem)] text-paper md:text-[76px] lg:text-[96px]">
              Des moments vivants,
              <span className="block font-serif font-normal italic text-accent-light">
                jamais corporate.
              </span>
            </h1>
            <p className="premium-copy mt-7 max-w-2xl text-lg text-paper/68 md:text-xl">
              Spectacle, intervention, contenu ou événement : on crée des formats qui gardent
              la personnalité des artistes et servent vraiment votre message.
            </p>
          </motion.div>

          <motion.div
            className="audience-hero-panel"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="audience-panel-top">
              <span className="premium-kicker text-paper/46">Brief marque</span>
              <Briefcase size={18} strokeWidth={2.2} />
            </div>
            <div className="brand-brief-card">
              <span>Objectif</span>
              <strong>Créer un moment vivant, utile, mémorable.</strong>
            </div>
            <div className="mt-3 grid gap-2">
              {['Événement interne', 'Campagne contenu', 'Activation scène'].map((item) => (
                <div key={item} className="audience-panel-line">
                  <span>{item}</span>
                  <ArrowUpRight size={14} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper py-14 text-ink md:py-20 lg:py-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[0.9fr_0.7fr] md:items-end">
            <div>
              <span className="premium-kicker text-accent-dark/70">Formats</span>
              <h2 className="premium-title mt-4 max-w-3xl text-[44px] md:text-[68px]">
                Pas une animation. Un vrai moment.
              </h2>
            </div>
            <p className="premium-copy max-w-lg text-base text-ink/58 md:text-lg">
              On part de votre contexte, puis on choisit le niveau d’écriture,
              de scène et de production qui rend l’expérience juste.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {formats.map((format, index) => {
              const Icon = format.Icon;
              return (
                <motion.article
                  key={format.title}
                  className="brand-format-card"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="brand-format-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3>{format.title}</h3>
                  <p>{format.desc}</p>
                  <div>
                    {format.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-deep py-16 md:py-22 lg:py-28">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="premium-kicker text-accent-light/74">Approche</span>
              <h2 className="premium-title mt-4 text-[44px] text-paper md:text-[68px]">
                Un cadre précis, un ton vivant.
              </h2>
              <p className="premium-copy mt-6 max-w-lg text-lg text-paper/62">
                L’artiste n’est pas un décor. On protège son univers tout en répondant
                à votre objectif de marque.
              </p>
            </div>

            <div className="grid gap-3">
              {principles.map(([num, title, desc]) => (
                <article key={num} className="brand-principle-row">
                  <span>{num}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AudienceArtistGridSection
        eyebrow="Plateau disponible"
        title="Des présences qui marquent."
        description="Les 10 artistes du plateau peuvent être mobilisés selon le contexte : scène, contenu, événement interne ou prise de parole."
        ctaLabel="Voir le plateau"
        theme="paper"
      />

      <section id="contact" className="audience-contact-section scroll-mt-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="audience-contact-panel">
            <div>
              <span className="premium-kicker text-accent-light/82">Projet entreprise</span>
              <h2 className="premium-title mt-5 text-[44px] text-paper md:text-[70px]">
                Une idée à
                <span className="block font-serif font-normal italic text-accent-light">
                  rendre vivante ?
                </span>
              </h2>
              <p className="premium-copy mt-6 max-w-xl text-lg text-paper/64">
                Brief, public, objectif, timing : envoyez-nous le contexte et on imagine
                le bon format avec vous.
              </p>
            </div>
            <div className="audience-contact-card">
              <MessageSquareText size={20} strokeWidth={2.2} />
              <span className="premium-kicker text-paper/44">Contact marque</span>
              <a href="mailto:contact@tinyteam.fr">contact@tinyteam.fr</a>
              <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-paper group mt-6">
                Parler d’un projet
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
