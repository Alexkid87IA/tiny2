import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const approaches = [
  {
    num: '01',
    title: 'On commence par écouter',
    desc: 'Vos objectifs, vos contraintes, vos craintes. Votre séminaire n\'est pas celui du voisin.',
  },
  {
    num: '02',
    title: 'On propose, on ajuste',
    desc: 'Jusqu\'à trouver le bon artiste, le bon format. Pas de formule toute faite.',
  },
  {
    num: '03',
    title: 'On reste à vos côtés',
    desc: 'Avant, pendant, après. On ne lâche rien tant que vous n\'êtes pas satisfait.',
  },
];

const caseStudies = [
  {
    type: 'Séminaire annuel',
    sector: 'Groupe bancaire français',
    context: '400 collaborateurs réunis pour le séminaire stratégique annuel.',
    result: '96% de satisfaction globale (vs 72% année précédente)',
  },
  {
    type: 'Communication interne',
    sector: 'Leader retail',
    context: 'Changement d\'ERP complexe à faire accepter à 2 000 employés.',
    result: 'Adoption de l\'outil 3 semaines plus rapide que prévu',
  },
  {
    type: 'Team Building',
    sector: 'Cabinet de conseil',
    context: 'Équipe de 50 consultants en télétravail depuis 2 ans.',
    result: 'Score de cohésion d\'équipe +35% à 3 mois',
  },
  {
    type: 'Convention commerciale',
    sector: 'Industrie pharmaceutique',
    context: 'Lancement d\'une nouvelle gamme devant 300 commerciaux.',
    result: 'Mémorisation des messages clés : 89%',
  },
];

const formats = ['Séminaires', 'Team Building', 'Conventions', 'Soirées privées'];

export const BrandSection = () => {
  return (
    <section id="entreprises" className="perf-section relative py-28 md:py-40 lg:py-48 bg-deep overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px]"
        style={{
          top: '15%', left: '-10%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-container mx-auto px-6 md:px-12">
        <motion.span
          className="font-mono text-[13px] tracking-[0.18em] uppercase text-accent block mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Entreprises
        </motion.span>
        <motion.p
          className="font-body text-paper/40 text-base md:text-lg mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Séminaire, convention, soirée — on transforme vos événements avec l'humour qu'il faut.
        </motion.p>

        <motion.h2
          className="font-display font-black text-paper tracking-tight leading-[0.88]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
            L'humour
          </span>
          <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
            <span className="font-serif italic font-normal text-accent-light">sur mesure.</span>
          </span>
        </motion.h2>

        <motion.p
          className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Pas de formule toute faite. On écoute, on comprend, on adapte — pour des événements qui marquent.
        </motion.p>

        {/* Approach cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {approaches.map((a, i) => (
            <motion.div
              key={a.title}
              className="mission-card group block relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mission-card-inner relative p-7 md:p-9">
                <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                  {a.num}
                </span>
                <h3 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12 mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-paper/30 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-16 md:mt-24">
          <motion.h3
            className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ils nous ont fait confiance
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.sector}
                className="mission-card group block relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mission-card-inner relative p-7 md:p-9">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent block mb-3">
                    {study.type}
                  </span>
                  <h4 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight mb-3">
                    {study.sector}
                  </h4>
                  <p className="font-body text-paper/30 text-sm leading-relaxed mb-4">
                    {study.context}
                  </p>
                  <p className="font-body text-accent-light/80 text-sm font-medium">
                    {study.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <motion.div
          className="flex flex-wrap gap-3 mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {formats.map((f, i) => (
            <motion.span
              key={f}
              className="px-5 py-2.5 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
            >
              {f}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/marque"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              Espace entreprises
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </Link>

          <a
            href="mailto:diffusion@tinyteam.fr"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/40 hover:text-accent transition-colors duration-300"
          >
            <Mail size={14} />
            <span>diffusion@tinyteam.fr</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
