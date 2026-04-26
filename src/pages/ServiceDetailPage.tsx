import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const services: Record<string, {
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  features: string[];
  process: { title: string; desc: string }[];
}> = {
  production: {
    title: 'Production',
    subtitle: 'De l\'idée à la scène.',
    desc: 'On construit des spectacles avec les artistes. Pas juste un décor et une lumière — un vrai spectacle, pensé, écrit, testé.',
    longDesc: 'Notre équipe accompagne chaque étape du projet artistique, de la conception initiale jusqu\'à la représentation. On met à disposition notre expertise technique, notre créativité et notre réseau pour faire de chaque spectacle un moment d\'exception.',
    features: ['Direction artistique', 'Mise en scène', 'Production technique', 'Gestion logistique', 'Coordination des équipes', 'Suivi budgétaire'],
    process: [
      { title: 'Conception', desc: 'Définition du concept artistique et des besoins techniques' },
      { title: 'Pré-production', desc: 'Planification détaillée et coordination des équipes' },
      { title: 'Production', desc: 'Réalisation et suivi technique du spectacle' },
      { title: 'Ajustements', desc: 'Optimisation continue pour les représentations futures' },
    ],
  },
  management: {
    title: 'Management',
    subtitle: 'Tracer la route ensemble.',
    desc: 'Stratégie, négociation, positionnement. On trace la route avec chaque artiste, pas pour lui.',
    longDesc: 'Notre service de management offre un accompagnement global pour développer la carrière de chaque artiste de manière stratégique et durable. On se positionne comme de véritables partenaires, investis dans la réussite à long terme.',
    features: ['Développement de carrière', 'Stratégie artistique', 'Gestion administrative', 'Négociation contrats', 'Relations professionnelles', 'Planning & organisation'],
    process: [
      { title: 'Analyse', desc: 'Évaluation du projet et des objectifs' },
      { title: 'Stratégie', desc: 'Élaboration d\'un plan de développement sur mesure' },
      { title: 'Action', desc: 'Mise en œuvre des actions définies' },
      { title: 'Suivi', desc: 'Évaluation continue et ajustements stratégiques' },
    ],
  },
  digital: {
    title: 'Digital',
    subtitle: 'Exister là où les gens regardent.',
    desc: 'Réseaux, contenus, communautés. On fait exister les artistes là où les gens regardent.',
    longDesc: 'La présence digitale est devenue un élément clé du succès. Notre équipe combine expertise technique et créativité pour développer l\'image en ligne de chaque artiste et créer une connexion authentique avec son public.',
    features: ['Stratégie réseaux sociaux', 'Création de contenu', 'Community management', 'Marketing digital', 'Analyse de performance', 'Veille stratégique'],
    process: [
      { title: 'Audit', desc: 'Analyse de la présence digitale actuelle' },
      { title: 'Stratégie', desc: 'Définition des objectifs et du plan d\'action' },
      { title: 'Création', desc: 'Production de contenu et mise en place' },
      { title: 'Optimisation', desc: 'Suivi des performances et ajustements' },
    ],
  },
  communication: {
    title: 'Communication',
    subtitle: 'Raconter les bonnes histoires.',
    desc: 'Presse, image, relations. On raconte les bonnes histoires aux bonnes personnes.',
    longDesc: 'L\'image est la signature de chaque artiste. Notre expertise en communication aide à construire une identité forte et mémorable qui résonne avec le public et renforce le positionnement artistique.',
    features: ['Relations presse', 'Identité visuelle', 'Stratégie de marque', 'Communication événementielle', 'Relations publiques', 'Gestion de crise'],
    process: [
      { title: 'Analyse', desc: 'Étude du positionnement actuel' },
      { title: 'Conception', desc: 'Création de la stratégie de communication' },
      { title: 'Déploiement', desc: 'Mise en œuvre des actions' },
      { title: 'Évaluation', desc: 'Mesure d\'impact et optimisation' },
    ],
  },
  diffusion: {
    title: 'Diffusion',
    subtitle: 'Remplir des salles, pas des tableaux.',
    desc: '300 salles partenaires. On remplit des dates, pas des tableaux Excel.',
    longDesc: 'La diffusion est l\'art de faire voyager un spectacle et de toucher de nouveaux publics. Notre expertise en tournées permet à l\'artiste de se concentrer sur sa performance pendant qu\'on gère tous les aspects logistiques.',
    features: ['Booking national', 'Gestion de tournées', 'Relations salles', 'Support technique', 'Logistique complète', 'Planning tournées'],
    process: [
      { title: 'Planification', desc: 'Élaboration du plan de tournée' },
      { title: 'Booking', desc: 'Négociation avec les salles et programmateurs' },
      { title: 'Organisation', desc: 'Coordination logistique et technique' },
      { title: 'Suivi', desc: 'Accompagnement pendant la tournée' },
    ],
  },
  evenements: {
    title: 'Événements',
    subtitle: 'Créer des moments qui restent.',
    desc: 'Corporate, festivals, soirées. On crée des moments qui restent.',
    longDesc: 'Les événements sont des moments uniques qui méritent une attention particulière. Notre expertise garantit des moments mémorables, parfaitement exécutés et alignés avec les objectifs du client.',
    features: ['Conception événementielle', 'Production sur mesure', 'Coordination complète', 'Gestion technique', 'Logistique dédiée', 'Suivi budgétaire'],
    process: [
      { title: 'Conception', desc: 'Définition du concept et des objectifs' },
      { title: 'Planification', desc: 'Organisation détaillée de l\'événement' },
      { title: 'Production', desc: 'Mise en place et coordination' },
      { title: 'Jour J', desc: 'Exécution et suivi en temps réel' },
    ],
  },
};

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = id ? services[id] : null;
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  if (!service) {
    return (
      <main className="min-h-screen bg-deep">
        <Navigation />
        <div className="max-w-container mx-auto px-6 md:px-12 py-32 text-center">
          <h1 className="font-display font-black text-paper text-4xl mb-6">Service non trouvé</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50 hover:text-accent transition-colors"
          >
            <ArrowLeft size={12} />
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] top-[10%] right-[-10%] bg-[radial-gradient(circle,rgba(236,72,153,0.10)_0%,transparent_70%)]" />

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/40 hover:text-accent transition-colors mb-10 block"
          >
            <ArrowLeft size={12} />
            Retour à l'accueil
          </Link>

          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {service.title}
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.2rem,6vw,5.5rem)]">
              {service.subtitle.split(' ').slice(0, -1).join(' ')}
            </span>
            <span className="block text-[clamp(2.2rem,6vw,5.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">
                {service.subtitle.split(' ').slice(-1)[0]}
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {service.longDesc}
          </motion.p>
        </div>
      </section>

      {/* Features + Process */}
      <section className="relative pb-28 md:pb-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

            {/* Features card */}
            <motion.div
              className="story-glass p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50 block mb-6">
                Ce qu'on fait
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="font-body text-sm text-paper/50">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50 block mb-6">
                Notre approche
              </span>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={step.title} className="relative pl-10 pb-8 last:pb-0">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
                    <div className="absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(236,72,153,0.4)]" />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <h4 className="font-display font-bold text-paper text-base mb-1">{step.title}</h4>
                      <p className="font-body text-paper/35 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Un projet en tête<span className="font-serif italic font-normal text-accent-light"> ?</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Discutons de votre projet et voyons comment on peut vous aider.
          </p>
          <a
            href="mailto:contact@tinyteam.fr"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              Nous contacter
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};
