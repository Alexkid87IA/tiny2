import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Handshake,

  Mail,
  Megaphone,
  MessageCircle,
  RadioTower,
  Route,
  Smartphone,
  X,
  type LucideIcon,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type ServiceTheme = CSSProperties & {
  '--service-a': string;
  '--service-b': string;
  '--service-c': string;
  '--service-ink': string;
};

type Service = {
  id: string;
  title: string;
  scope: string;
  intro: string;
  editorialTitle: string;
  editorialBody: string;
  promise: string;
  metric: string;
  features: string[];
  process: string[];
  Icon: LucideIcon;
  theme: ServiceTheme;
  image: string;
};

const services: Service[] = [
  {
    id: 'production',
    title: 'Production',
    scope: 'Création & plateau',
    intro: "Transformer une intuition de scène en spectacle solide, répétable, vendable.",
    editorialTitle: "Faire tenir le spectacle avant de le faire tourner.",
    editorialBody:
      "On structure le projet sans l'aplatir. Texte, rythme, direction artistique, besoins techniques, calendrier, budget : tout doit servir le plateau et rendre le spectacle exploitable dans la vraie vie.",
    promise: "Un cadre clair, pour que l'artiste puisse prendre des risques au bon endroit.",
    metric: 'Du brouillon au format prêt à jouer',
    features: ['Direction artistique', 'Construction du format', 'Budget & production', 'Coordination plateau'],
    process: ['Clarifier le concept', 'Tester la matière', 'Structurer la production', 'Ajuster après les dates'],
    Icon: Route,
    image: '/services/production.png',
    theme: {
      '--service-a': '#EC4899',
      '--service-b': '#45D4C5',
      '--service-c': '#FCE7F3',
      '--service-ink': '#210713',
    },
  },
  {
    id: 'management',
    title: 'Management',
    scope: 'Trajectoire',
    intro: "Construire la route, cadrer les décisions et protéger le temps artistique.",
    editorialTitle: "Décider avec l'artiste, jamais à sa place.",
    editorialBody:
      "Le management sert à garder une direction lisible. On arbitre, on priorise, on négocie, on filtre le bruit et on transforme les opportunités en trajectoire cohérente.",
    promise: "Une stratégie vivante, assez ferme pour avancer, assez souple pour rester juste.",
    metric: 'Positionnement, contrats, rythme de carrière',
    features: ['Stratégie artistique', 'Négociation', 'Planning priorisé', 'Décisions long terme'],
    process: ['Lire le moment', 'Fixer les priorités', 'Ouvrir les bonnes portes', 'Réviser la trajectoire'],
    Icon: Handshake,
    image: '/services/management.png',
    theme: {
      '--service-a': '#FFB703',
      '--service-b': '#5B7CFA',
      '--service-c': '#FFF3C4',
      '--service-ink': '#211707',
    },
  },
  {
    id: 'diffusion',
    title: 'Diffusion',
    scope: 'Réseau salles',
    intro: 'Activer les bonnes salles, au bon moment, avec une lecture claire du marché.',
    editorialTitle: "Faire circuler le spectacle sans perdre son niveau d'exigence.",
    editorialBody:
      "La diffusion ne consiste pas à remplir des cases. On défend un spectacle auprès des salles qui peuvent vraiment l'accueillir, on construit le calendrier et on entretient les relations.",
    promise: "Un réseau utile, qualifié, activé avec précision.",
    metric: '300+ salles partenaires',
    features: ['Booking national', 'Relations programmateurs', 'Tournées', 'Suivi des dates'],
    process: ['Qualifier les salles', 'Présenter le projet', 'Négocier les conditions', 'Piloter la tournée'],
    Icon: RadioTower,
    image: '/services/diffusion.png',
    theme: {
      '--service-a': '#2DD4BF',
      '--service-b': '#7C3AED',
      '--service-c': '#CCFBF1',
      '--service-ink': '#05211D',
    },
  },
  {
    id: 'communication',
    title: 'Communication',
    scope: 'Image & récit',
    intro: "Installer l'image, les messages et les prises de parole sans lisser l'artiste.",
    editorialTitle: "Dire clairement ce qui rend l'artiste impossible à confondre.",
    editorialBody:
      "On travaille la narration, la presse, les éléments de langage et les moments de prise de parole. L'objectif n'est pas d'habiller un projet, mais de le rendre immédiatement lisible.",
    promise: "Une image cohérente, précise, jamais générique.",
    metric: 'Message, presse, identité, lancements',
    features: ['Relations presse', 'Narration', 'Image', 'Lancements de spectacle'],
    process: ['Trouver le bon angle', 'Écrire le récit', 'Activer les relais', 'Mesurer les retours'],
    Icon: Megaphone,
    image: '/services/communication.png',
    theme: {
      '--service-a': '#F43F5E',
      '--service-b': '#FACC15',
      '--service-c': '#FFE4E6',
      '--service-ink': '#22070D',
    },
  },
  {
    id: 'digital',
    title: 'Digital',
    scope: 'Audience',
    intro: 'Faire vivre les contenus là où le public découvre, suit, partage et revient.',
    editorialTitle: "Créer une présence qui ressemble à l'artiste, pas à une machine.",
    editorialBody:
      "Réseaux, contenus, formats courts, communautés, acquisition : on installe une présence régulière et utile, sans fabriquer une personnalité parallèle.",
    promise: "Des contenus pensés pour servir le spectacle et la relation au public.",
    metric: 'Contenus, communautés, conversion',
    features: ['Stratégie social media', 'Formats contenus', 'Calendrier éditorial', 'Suivi performance'],
    process: ['Auditer les canaux', 'Définir les formats', 'Produire et publier', 'Optimiser sans dénaturer'],
    Icon: Smartphone,
    image: '/services/digital.png',
    theme: {
      '--service-a': '#38BDF8',
      '--service-b': '#A3E635',
      '--service-c': '#E0F2FE',
      '--service-ink': '#041A24',
    },
  },
  {
    id: 'evenements',
    title: 'Événements',
    scope: 'Formats spéciaux',
    intro: 'Composer des formats scène, entreprise ou festival avec la bonne intensité.',
    editorialTitle: "Créer un moment précis, pas une animation interchangeable.",
    editorialBody:
      "Corporate, festival, soirée privée ou dispositif sur mesure : on part de l'objectif, du public et du contexte pour proposer le bon artiste, le bon format et la bonne exécution.",
    promise: "Une expérience calibrée, mémorable, tenue jusqu'au jour J.",
    metric: 'Sur mesure, plateau, marque, festival',
    features: ['Casting artistique', 'Production sur mesure', 'Coordination', 'Logistique événementielle'],
    process: ['Comprendre le contexte', 'Composer le format', 'Produire le dispositif', 'Encadrer le jour J'],
    Icon: CalendarDays,
    image: '/services/evenements.png',
    theme: {
      '--service-a': '#FB7185',
      '--service-b': '#22C55E',
      '--service-c': '#FFE4E6',
      '--service-ink': '#241017',
    },
  },
];

const getHashId = () => window.location.hash.replace('#', '');

const getServiceFromHash = () => {
  const id = getHashId();
  return services.some((service) => service.id === id) ? id : null;
};

export const ServicesPage = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const activeService = useMemo(
    () => services.find((service) => service.id === activeServiceId) ?? null,
    [activeServiceId]
  );

  const openService = useCallback((id: string) => {
    setActiveServiceId(id);
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
  }, []);

  const closeService = useCallback(() => {
    setActiveServiceId(null);
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const hashId = getHashId();
      const serviceId = getServiceFromHash();

      setActiveServiceId(serviceId);

      if (hashId === 'contact') {
        requestAnimationFrame(() => {
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeService ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeService, closeService]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeService) {
        closeService();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeService, closeService]);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <section className="services-hero relative overflow-hidden bg-deep pt-32 text-paper md:pt-40">
        <div className="section-rule absolute left-0 right-0 top-0" />
        <div className="mx-auto grid max-w-container gap-10 px-6 pb-18 md:px-12 md:pb-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.7fr)] lg:items-end">
          <motion.div
            ref={headRef}
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="premium-kicker block text-accent-light/82">Nos métiers</span>
            <h1 className="premium-title mt-8 max-w-5xl text-[clamp(3.4rem,8.4vw,8.8rem)]">
              Six métiers,
              <span className="block font-serif font-normal italic text-accent-light">
                un système.
              </span>
            </h1>
            <p className="premium-copy mt-8 max-w-2xl text-lg text-paper/68 md:text-xl">
              Production, management, diffusion, communication, digital, événements :
              chaque levier avance avec les autres pour soutenir les artistes sans les diluer.
            </p>
          </motion.div>

          <motion.div
            className="service-hero-plate"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/services/hero-metiers.png" alt="Vue coulisses d'une salle de spectacle" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2">
              <div className="border-t border-r border-paper/12 px-5 py-4 md:px-6 md:py-5">
                <span className="premium-kicker text-paper/42">Salles partenaires</span>
                <strong className="mt-2 block font-display text-3xl font-black tracking-tight text-paper">
                  300<span className="text-accent-light">+</span>
                </strong>
              </div>
              <div className="border-t border-paper/12 px-5 py-4 md:px-6 md:py-5">
                <span className="premium-kicker text-paper/42">Métiers intégrés</span>
                <strong className="mt-2 block font-display text-3xl font-black tracking-tight text-paper">
                  6
                </strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-14 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="premium-kicker text-accent-dark/70">Carte complète</span>
              <h2 className="premium-title mt-4 max-w-3xl text-[clamp(2.7rem,5.2vw,5.8rem)]">
                Chaque métier a sa fiche.
              </h2>
            </div>
            <p className="premium-copy max-w-md text-base text-ink/58 md:text-lg">
              Une lecture rapide en façade, une présentation riche au clic, sans quitter la page.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.Icon;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  className="service-card group text-left"
                  style={service.theme}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: index * 0.045, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => openService(service.id)}
                >
                  <span className="service-card-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="service-card-media" aria-hidden>
                    <img src={service.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="relative z-10 flex min-h-[430px] flex-col p-5 pt-[166px] md:p-6 md:pt-[174px]">
                    <div className="mb-8 flex items-start justify-between gap-5">
                      <span className="service-card-icon">
                        <Icon size={19} strokeWidth={2.25} />
                      </span>
                      <span className="service-card-arrow">
                        <ArrowRight size={15} strokeWidth={2.4} />
                      </span>
                    </div>

                    <span className="premium-kicker text-ink/44">{service.scope}</span>
                    <h3 className="premium-title mt-3 text-[clamp(2.4rem,3.1vw,3.4rem)] text-ink">
                      {service.title}
                    </h3>
                    <p className="premium-copy mt-auto max-w-sm pt-8 text-base text-ink/64">
                      {service.intro}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <motion.div
            className="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeService}
          >
            <motion.article
              className="service-modal-panel"
              style={activeService.theme}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="service-modal-close"
                onClick={closeService}
                aria-label="Fermer la fiche service"
              >
                <X size={18} strokeWidth={2.3} />
              </button>

              <div className="service-modal-media">
                <img src={activeService.image} alt="" className="h-full w-full object-cover" />
              </div>

              <div className="service-modal-content">
                <span className="premium-kicker text-accent-dark/80">{activeService.scope}</span>
                <h2 className="premium-title mt-4 text-[clamp(2.7rem,6vw,5.8rem)] text-ink">
                  {activeService.title}
                </h2>
                <p className="premium-copy mt-6 max-w-3xl text-xl leading-[1.42] text-ink/72 md:text-2xl">
                  {activeService.editorialTitle}
                </p>
                <p className="premium-copy mt-5 max-w-3xl text-base text-ink/62 md:text-lg">
                  {activeService.editorialBody}
                </p>

                <div className="service-modal-promise">
                  <span className="premium-kicker text-ink/42">Promesse</span>
                  <p className="premium-copy mt-3 text-xl font-semibold text-ink md:text-2xl">
                    {activeService.promise}
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
                  <div>
                    <span className="premium-kicker text-ink/42">Périmètre</span>
                    <div className="mt-4 grid gap-2">
                      {activeService.features.map((feature) => (
                        <span key={feature} className="service-modal-chip">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="premium-kicker text-ink/42">Méthode</span>
                    <ol className="mt-4 grid gap-2">
                      {activeService.process.map((step, index) => (
                        <li key={step} className="service-modal-step">
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <span className="premium-kicker text-ink/44">{activeService.metric}</span>
                  <a href="mailto:contact@tinyteam.fr" className="premium-btn premium-btn-dark premium-btn-sm group">
                    Parler d’un projet
                    <span className="premium-btn-icon">
                      <ArrowUpRight size={14} strokeWidth={2.4} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="service-contact-section scroll-mt-24">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="service-contact-panel">
            <div className="service-contact-copy">
              <span className="premium-kicker text-accent-light/86">On discute ?</span>
              <h2 className="premium-title mt-6 text-[clamp(3rem,7vw,7.2rem)] text-paper">
                Un projet,
                <span className="block font-serif font-normal italic text-accent-light">
                  une salle, une idée ?
                </span>
              </h2>
              <p className="premium-copy mt-7 max-w-2xl text-lg text-paper/68 md:text-xl">
                On commence par comprendre le contexte : artiste à accompagner,
                programmation, événement, partenariat ou besoin encore flou.
                Ensuite, on vous dit franchement où Tiny Team peut être utile.
              </p>
            </div>

            <div className="service-contact-card">
              <div className="service-contact-card-head">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink">
                  <MessageCircle size={19} strokeWidth={2.25} />
                </span>
                <span className="premium-kicker text-paper/42">Réponse directe</span>
              </div>

              <div className="mt-10">
                <span className="premium-kicker text-accent-light/78">Contact</span>
                <a
                  href="mailto:contact@tinyteam.fr"
                  className="service-contact-email"
                >
                  contact@tinyteam.fr
                </a>
              </div>

              <div className="mt-9 grid gap-2">
                {['Artiste à accompagner', 'Salle ou festival', 'Projet entreprise'].map((item) => (
                  <div key={item} className="service-contact-line">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="mailto:contact@tinyteam.fr"
                className="premium-btn premium-btn-paper group mt-10 w-full"
              >
                Écrire à Tiny Team
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
