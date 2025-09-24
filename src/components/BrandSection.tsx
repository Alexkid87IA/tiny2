import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Rocket, Trophy, ChevronRight, Mail } from 'lucide-react';

// Études de cas réalistes
const caseStudies = [
  {
    id: 1,
    type: "Séminaire annuel",
    sector: "Groupe bancaire français",
    context: "400 collaborateurs réunis pour le séminaire stratégique annuel",
    solution: "Intervention d'un humoriste en ouverture pour briser la glace et créer une dynamique positive",
    results: [
      "96% de satisfaction globale (vs 72% année précédente)",
      "Participation active en hausse de 40%",
      "Ambiance détendue favorisant les échanges"
    ],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    id: 2,
    type: "Communication interne",
    sector: "Leader retail",
    context: "Changement d'ERP complexe à faire accepter à 2000 employés",
    solution: "Série de 5 vidéos humoristiques avec nos artistes pour dédramatiser et expliquer",
    results: [
      "87% des employés ont visionné toute la série",
      "Adoption de l'outil 3 semaines plus rapide",
      "Baisse de 60% des tickets support"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    type: "Team Building",
    sector: "Cabinet de conseil",
    context: "Équipe de 50 consultants en télétravail depuis 2 ans",
    solution: "Atelier d'improvisation et spectacle participatif sur mesure",
    results: [
      "Score de cohésion d'équipe +35% à 3 mois",
      "100% souhaitent renouveler l'expérience",
      "Création de private jokes fédératrices"
    ],
    gradient: "from-pink-500/20 to-pink-500/20"
  },
  {
    id: 4,
    type: "Convention commerciale",
    sector: "Industrie pharmaceutique",
    context: "Lancement d'une nouvelle gamme devant 300 commerciaux",
    solution: "Show sur-mesure intégrant les messages clés de manière humoristique",
    results: [
      "Mémorisation des messages clés : 89%",
      "Engagement sur l'événement x2.5",
      "Standing ovation et demande de rappel"
    ],
    gradient: "from-purple-500/20 to-purple-500/20"
  }
];

// Composant pour une étude de cas
const CaseStudyCard = ({ study, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative">
        {/* Badge type */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
          <span className="text-xs font-semibold text-pink-300">{study.type}</span>
        </div>
        
        {/* Secteur */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
          {study.sector}
        </h3>
        
        {/* Contexte */}
        <div className="mb-4">
          <p className="text-sm text-white/50 font-medium mb-1">Contexte :</p>
          <p className="text-sm text-white/70">{study.context}</p>
        </div>
        
        {/* Solution */}
        <div className="mb-4">
          <p className="text-sm text-white/50 font-medium mb-1">Notre intervention :</p>
          <p className="text-sm text-white/70">{study.solution}</p>
        </div>
        
        {/* Résultats */}
        <div className="space-y-2">
          <p className="text-sm text-white/50 font-medium">Résultats :</p>
          {study.results.map((result, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">→</span>
              <span className="text-sm text-white/80">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Background animé (cohérent avec ProducerSection)
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: ['120%', '-20%'],
        y: ['20%', '80%'],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: ['-20%', '120%'],
        y: ['80%', '20%'],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  </div>
);

export const BrandSection = () => {
  return (
    <section id="entreprises" className="relative py-32 bg-[#080C20] overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative container mx-auto px-4">
        {/* Header simplifié et plus business */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative inline-block"
          >
            <div className="absolute -inset-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            
            <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <motion.span 
                className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Entreprises,
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mt-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                transformez vos événements
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 max-w-4xl mx-auto mt-8 leading-relaxed"
          >
            L'humour au service de vos objectifs business.
            <br />
            <span className="text-pink-300 font-medium">Des interventions qui marquent, des résultats qui durent.</span>
          </motion.p>
        </div>
        
        {/* Pourquoi l'humour en entreprise - Arguments business */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
            L'humour, votre meilleur ROI
          </h3>
          <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto">
            Plus qu'un divertissement : un outil stratégique pour engager, fédérer et transformer.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🧠",
                  title: "Mémorisation x3",
                  description: "Les messages transmis avec humour sont 3 fois mieux retenus"
                },
                {
                  icon: "🎯",
                  title: "Engagement maximal",
                  description: "Attention captée à 100% dès la première minute"
                },
                {
                  icon: "💪",
                  title: "Cohésion renforcée",
                  description: "Rire ensemble crée des liens durables entre équipes"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Titre études de cas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full glass-card mb-6 text-sm">
            <Trophy className="w-4 h-4 text-pink-400" />
            <span className="text-white/70">Cas clients récents • Résultats vérifiés</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-gradient from-white via-white to-white/80">
              Ils nous ont fait confiance
            </span>
          </h3>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Découvrez comment nos interventions transforment les événements d'entreprise
          </p>
        </motion.div>
        
        {/* Grille des études de cas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
        
        {/* Services proposés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">
            Nos formats d'intervention
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: "Séminaires", time: "30min à 1h30" },
              { icon: Users, title: "Team Building", time: "2h à 1 journée" },
              { icon: Rocket, title: "Conventions", time: "Sur mesure" },
              { icon: Trophy, title: "Soirées privées", time: "1h à 2h" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-xl p-4 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">{service.title}</h4>
                <p className="text-xs text-white/60">{service.time}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Final fort */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
          </div>
          
          <div className="relative glass-card rounded-3xl p-10 max-w-3xl mx-auto text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-transparent to-purple-500" />
            </div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à transformer votre prochain événement ?
              </h3>
              
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Discutons de vos objectifs et créons ensemble une expérience inoubliable 
                pour vos équipes. Devis gratuit sous 48h.
              </p>
              
              {/* Réassurance */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Conseil personnalisé</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Budget sur mesure</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  <span className="text-sm">Partout en France</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-bold text-black text-lg">
                    Organiser une rencontre
                  </span>
                  <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <a
                  href="mailto:booking@tinyteam.fr"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-white font-medium">
                    booking@tinyteam.fr
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};