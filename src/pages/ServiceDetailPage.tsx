import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft, Star, Shield, Rocket, Layout, Globe, Users, Check, ArrowRight } from 'lucide-react';

const services = {
  production: {
    icon: Star,
    title: "Production de Spectacles",
    description: "De la conception à la réalisation, nous donnons vie à vos projets artistiques avec excellence et créativité.",
    longDescription: `Notre équipe de production accompagne chaque étape de votre projet artistique, de sa conception initiale jusqu'à sa réalisation sur scène. Nous mettons à votre disposition notre expertise technique, notre créativité et notre réseau pour faire de votre spectacle un moment d'exception.

    Nous croyons que chaque artiste est unique et mérite un accompagnement sur mesure. C'est pourquoi nous adaptons notre approche à vos besoins spécifiques, tout en maintenant les plus hauts standards de qualité.`,
    features: [
      "Direction artistique complète",
      "Mise en scène professionnelle",
      "Production technique de pointe",
      "Gestion logistique intégrale",
      "Coordination des équipes",
      "Suivi budgétaire détaillé"
    ],
    benefits: [
      "Expertise technique pointue",
      "Équipe dédiée et réactive",
      "Solutions créatives innovantes",
      "Gestion de projet rigoureuse"
    ],
    process: [
      {
        title: "Conception",
        description: "Définition du concept artistique et des besoins techniques"
      },
      {
        title: "Pré-production",
        description: "Planification détaillée et coordination des équipes"
      },
      {
        title: "Production",
        description: "Réalisation et suivi technique du spectacle"
      },
      {
        title: "Post-production",
        description: "Évaluation et optimisation pour les représentations futures"
      }
    ],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  management: {
    icon: Shield,
    title: "Management d'Artistes",
    description: "Un accompagnement complet et personnalisé pour développer votre carrière et maximiser votre potentiel.",
    longDescription: `Notre service de management d'artistes offre un accompagnement global pour développer votre carrière de manière stratégique et durable. Nous nous positionnons comme de véritables partenaires, investis dans votre réussite à long terme.

    Notre approche combine expertise artistique, vision stratégique et connaissance approfondie du marché pour vous permettre d'atteindre vos objectifs tout en préservant votre authenticité.`,
    features: [
      "Développement de carrière",
      "Stratégie artistique",
      "Gestion administrative",
      "Négociation contrats",
      "Relations professionnelles",
      "Planning & organisation"
    ],
    benefits: [
      "Accompagnement personnalisé",
      "Vision stratégique globale",
      "Réseau professionnel étendu",
      "Support administratif complet"
    ],
    process: [
      {
        title: "Analyse",
        description: "Évaluation de votre projet et de vos objectifs"
      },
      {
        title: "Stratégie",
        description: "Élaboration d'un plan de développement sur mesure"
      },
      {
        title: "Action",
        description: "Mise en œuvre des actions définies"
      },
      {
        title: "Suivi",
        description: "Évaluation continue et ajustements stratégiques"
      }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  digital: {
    icon: Rocket,
    title: "Développement Digital",
    description: "Construisez votre présence en ligne et engagez votre communauté avec des stratégies innovantes.",
    longDescription: `Dans un monde de plus en plus connecté, votre présence digitale est devenue un élément clé de votre succès. Notre équipe digitale combine expertise technique et créativité pour développer votre image en ligne et créer une connexion authentique avec votre public.

    Nous développons des stratégies digitales sur mesure qui amplifient votre impact et renforcent votre marque personnelle.`,
    features: [
      "Stratégie réseaux sociaux",
      "Création de contenu",
      "Community management",
      "Marketing digital",
      "Analyse de performance",
      "Veille stratégique"
    ],
    benefits: [
      "Visibilité accrue",
      "Engagement communautaire",
      "Image de marque cohérente",
      "ROI mesurable"
    ],
    process: [
      {
        title: "Audit",
        description: "Analyse de votre présence digitale actuelle"
      },
      {
        title: "Stratégie",
        description: "Définition des objectifs et du plan d'action"
      },
      {
        title: "Création",
        description: "Production de contenu et mise en place des actions"
      },
      {
        title: "Optimisation",
        description: "Suivi des performances et ajustements"
      }
    ],
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  communication: {
    icon: Layout,
    title: "Communication & Image",
    description: "Développez une image forte et cohérente qui vous distingue dans l'univers du spectacle.",
    longDescription: `Votre image est votre signature dans l'industrie du spectacle. Notre expertise en communication vous aide à construire une identité forte et mémorable qui résonne avec votre public et renforce votre positionnement artistique.

    Nous créons des stratégies de communication sur mesure qui mettent en valeur votre unicité et amplifient votre message.`,
    features: [
      "Relations presse",
      "Identité visuelle",
      "Stratégie de marque",
      "Communication événementielle",
      "Relations publiques",
      "Gestion de crise"
    ],
    benefits: [
      "Image cohérente et forte",
      "Visibilité médiatique",
      "Crédibilité renforcée",
      "Reconnaissance accrue"
    ],
    process: [
      {
        title: "Analyse",
        description: "Étude de votre positionnement actuel"
      },
      {
        title: "Conception",
        description: "Création de votre stratégie de communication"
      },
      {
        title: "Déploiement",
        description: "Mise en œuvre des actions de communication"
      },
      {
        title: "Évaluation",
        description: "Mesure d'impact et optimisation"
      }
    ],
    gradient: "from-teal-500/20 to-green-500/20"
  },
  diffusion: {
    icon: Globe,
    title: "Diffusion & Tournées",
    description: "Portez votre spectacle aux quatre coins de la France avec une organisation millimétrée.",
    longDescription: `La diffusion est l'art de faire voyager votre spectacle et de toucher de nouveaux publics. Notre expertise en tournées vous permet de vous concentrer sur votre performance pendant que nous gérons tous les aspects logistiques et organisationnels.

    Nous construisons des tournées optimisées qui maximisent votre impact tout en respectant vos besoins artistiques et personnels.`,
    features: [
      "Booking national",
      "Gestion de tournées",
      "Relations salles",
      "Support technique",
      "Logistique complète",
      "Planning tournées"
    ],
    benefits: [
      "Optimisation des dates",
      "Gestion professionnelle",
      "Support logistique complet",
      "Réseau national"
    ],
    process: [
      {
        title: "Planification",
        description: "Élaboration du plan de tournée"
      },
      {
        title: "Booking",
        description: "Négociation avec les salles et programmateurs"
      },
      {
        title: "Organisation",
        description: "Coordination logistique et technique"
      },
      {
        title: "Suivi",
        description: "Accompagnement pendant la tournée"
      }
    ],
    gradient: "from-green-500/20 to-yellow-500/20"
  },
  evenements: {
    icon: Users,
    title: "Événements Spéciaux",
    description: "Créez des moments uniques et mémorables pour des occasions exceptionnelles.",
    longDescription: `Les événements spéciaux sont des moments uniques qui méritent une attention particulière. Notre expertise en organisation d'événements vous garantit des moments mémorables, parfaitement exécutés et alignés avec vos objectifs.

    Nous prenons en charge chaque détail pour transformer vos idées en expériences inoubliables.`,
    features: [
      "Conception événementielle",
      "Production sur mesure",
      "Coordination complète",
      "Gestion technique",
      "Logistique dédiée",
      "Suivi budgétaire"
    ],
    benefits: [
      "Événements uniques",
      "Organisation experte",
      "Execution parfaite",
      "Tranquillité d'esprit"
    ],
    process: [
      {
        title: "Conception",
        description: "Définition du concept et des objectifs"
      },
      {
        title: "Planification",
        description: "Organisation détaillée de l'événement"
      },
      {
        title: "Production",
        description: "Mise en place et coordination"
      },
      {
        title: "Réalisation",
        description: "Exécution et suivi le jour J"
      }
    ],
    gradient: "from-yellow-500/20 to-purple-500/20"
  }
};

const ProcessStep = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative"
  >
    <div className="flex gap-4">
      <div className="relative">
        <div className="w-8 h-8 rounded-full glass-effect flex items-center justify-center">
          <span className="text-white/70">{index + 1}</span>
        </div>
        {index < 3 && (
          <div className="absolute top-8 bottom-0 left-1/2 w-px bg-gradient-to-b from-white/20 to-transparent" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
        <p className="text-white/70">{step.description}</p>
      </div>
    </div>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <main className="min-h-screen bg-[#0A0F29]">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl text-white mb-8">Service non trouvé</h1>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux services</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux services</span>
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-2xl glass-effect flex items-center justify-center">
                  <service.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                  <span className="block text-gradient from-white via-blue-100 to-white">
                    {service.title}
                  </span>
                </h1>
              </div>

              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">À propos du service</h2>
                <div className="space-y-4">
                  {service.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Notre processus</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <ProcessStep key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Ce que nous offrons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Vos avantages</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-white/70 mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-black font-semibold hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};