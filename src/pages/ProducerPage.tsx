import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { artists } from '../data/artists';

const all = artists.filter(a => a.image);
const row1 = all.slice(0, 5);
const row2 = [...all.slice(5), ...all.slice(0, Math.max(0, 5 - (all.length - 5)))];

const Card = ({ artist }: { artist: typeof all[0] }) => (
  <div className="mq-card w-[280px] md:w-[340px] flex-shrink-0 relative rounded-[20px] overflow-hidden">
    <div className="aspect-[3/4] overflow-hidden rounded-[20px]">
      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" loading="lazy" draggable={false} />
    </div>
    <div className="mq-overlay absolute inset-0 rounded-[20px]" />
    {artist.prod && (
      <span className="absolute top-5 left-5 z-[4] px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-sm border border-paper/10 font-mono text-[9px] tracking-[0.14em] uppercase text-paper/70">
        {artist.prod}
      </span>
    )}
    <div className="mq-name absolute bottom-6 left-6 right-6 z-[3]">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-light/70 block mb-1.5">{artist.type}</span>
      <span className="font-display font-black text-paper text-xl md:text-2xl tracking-tight leading-tight block">{artist.name}</span>
      {artist.showName && (
        <span className="inline-block mt-2 px-3 py-1 rounded-full text-[11px] bg-accent/15 text-accent-light/80 border border-accent/10">{artist.showName}</span>
      )}
    </div>
    <Link to={`/artiste/${artist.id}`} className="mq-cta absolute top-5 right-5 z-[4] w-11 h-11 rounded-full bg-accent flex items-center justify-center text-ink hover:scale-110 transition-transform duration-300">
      <ArrowUpRight size={18} strokeWidth={2.5} />
    </Link>
    <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
  </div>
);

const commitments = [
  {
    num: '01',
    title: 'Des artistes prêts pour la scène',
    desc: 'Accompagnés, préparés, rodés. Chaque humoriste arrive avec une énergie et une maîtrise qui font la différence.',
    features: ['Artistes accompagnés et préparés', 'Performances calibrées', 'Expérience scénique confirmée'],
  },
  {
    num: '02',
    title: 'Une logistique fluide',
    desc: 'Un seul interlocuteur, un planning clair, zéro surprise. On gère tout pour que vous n\'ayez rien à gérer.',
    features: ['Interlocuteur dédié', 'Process simplifié', 'Fiches techniques fournies'],
  },
  {
    num: '03',
    title: 'Un marketing qui remplit',
    desc: 'Chaque date est portée par notre équipe com\' : visuels, réseaux, presse. On remplit vos salles.',
    features: ['Stratégie marketing dédiée', 'Kits com\' clé en main', 'Visibilité amplifiée'],
  },
];

const process = [
  { num: '01', title: 'Vous nous appelez', desc: 'On écoute votre projet, votre salle, votre public, vos contraintes.' },
  { num: '02', title: 'On vous propose', desc: 'L\'artiste adapté, le format qui fonctionne, le budget qui tient.' },
  { num: '03', title: 'On prépare tout', desc: 'Contrat, technique, communication, billetterie — on s\'en occupe.' },
  { num: '04', title: 'Le soir J', desc: 'L\'artiste est là, votre salle est pleine, votre public est ravi.' },
];

const stats = [
  { value: '300+', label: 'Salles partenaires' },
  { value: '95%', label: 'Taux de remplissage' },
  { value: '48h', label: 'Délai de réponse' },
  { value: '10', label: 'Artistes disponibles' },
];

const colCount = 4;
const columns: (typeof all)[] = Array.from({ length: colCount }, () => []);
all.forEach((artist, i) => columns[i % colCount].push(artist));

export const ProducerPage = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);

  const { scrollYProgress: marqueeProgress } = useScroll({
    target: marqueeRef,
    offset: ['start end', 'end start'],
  });

  const row1X = useTransform(marqueeProgress, [0, 1], [0, -60]);
  const row2X = useTransform(marqueeProgress, [0, 1], [0, 40]);

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      {/* ── Hero with mosaic ── */}
      <section className="relative h-screen flex flex-col overflow-hidden bg-deep">
        <div className="absolute inset-[-30%] flex gap-3 -rotate-[15deg] origin-center">
          {columns.map((col, i) => {
            const doubled = [...col, ...col];
            const isDown = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex-1 flex flex-col ${isDown ? 'animate-hero-down' : 'animate-hero-up'}`}
                style={{
                  animationDuration: isDown ? '20s' : '26s',
                  animationDelay: `${-i * 5}s`,
                }}
              >
                {doubled.map((artist, j) => (
                  <div key={`${artist.id}-${j}`} className="pb-3 flex-shrink-0">
                    <div className="aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={artist.image}
                        alt=""
                        className="w-full h-full object-cover saturate-[0.4] brightness-[0.6]"
                        loading={j < col.length ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />

        <motion.div
          className="relative z-10 mt-auto pb-12 md:pb-20 lg:pb-24 px-6 md:px-12 max-w-container mx-auto w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-4">
            Espace programmateurs
          </span>

          <h1 className="font-display font-black tracking-tight leading-[0.88]">
            <span className="block text-paper text-[clamp(2.8rem,9vw,7.5rem)]">
              Nos artistes,
            </span>
            <span className="block text-[clamp(2.8rem,9vw,7.5rem)]">
              <span className="font-serif italic font-normal text-accent-light">votre prochain</span>
              <span className="text-paper"> succès.</span>
            </span>
          </h1>

          <p className="font-body text-paper/45 text-base md:text-lg max-w-lg leading-relaxed mt-8 md:mt-12">
            Des spectacles clé en main, une logistique fluide, un marketing
            qui remplit vos salles. On s'occupe de tout.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-10 md:mt-14">
            <a
              href="mailto:diffusion@tinyteam.fr"
              className="group inline-flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                Demander le catalogue
              </span>
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="mailto:diffusion@tinyteam.fr"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/40 hover:text-accent transition-colors duration-300"
            >
              <Mail size={14} />
              <span>diffusion@tinyteam.fr</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Artists carousel — 2 rows like homepage */}
      <section ref={marqueeRef} className="mq-section relative bg-deep overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-container mx-auto px-6 md:px-12 pt-8 pb-14 md:pb-20">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-2">
            {all.length} artistes disponibles
          </span>
          <p className="font-serif italic text-paper/30 text-base md:text-lg mb-0">
            Stand-up, one-man-show, improvisation — chaque artiste a son univers.
          </p>
        </div>

        <div className="mq-tilt pb-24 md:pb-36">
          <motion.div className="mq-row mb-5 md:mb-7" style={{ x: row1X }}>
            <div className="mq-track mq-ltr">
              {[...row1, ...row1, ...row1].map((artist, i) => (
                <Card key={`a-${i}`} artist={artist} />
              ))}
            </div>
          </motion.div>

          <motion.div className="mq-row" style={{ x: row2X }}>
            <div className="mq-track mq-rtl">
              {[...row2, ...row2, ...row2].map((artist, i) => (
                <Card key={`b-${i}`} artist={artist} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comment ça marche
          </motion.span>
          <motion.p
            className="font-serif italic text-paper/30 text-base md:text-lg mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Du premier appel au dernier applaudissement, en quatre étapes.
          </motion.p>

          <motion.h2
            className="font-display font-black text-paper tracking-tight leading-[0.88] mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2rem,5vw,4rem)]">
              Simple, rapide,
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">efficace.</span>
            </span>
          </motion.h2>

          <div className="max-w-3xl">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative pl-10 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
                <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(236,72,153,0.4)]" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent/60 block mb-1">
                  Étape {step.num}
                </span>
                <h3 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-paper/35 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="story-glass">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="story-stat group flex items-center justify-center p-8 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="text-center">
                    <span className="story-stat-val font-display font-black text-4xl md:text-5xl leading-none tracking-tighter block">
                      {s.value}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/25 block mt-2">
                      {s.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos engagements
          </motion.span>
          <motion.p
            className="font-serif italic text-paper/30 text-base md:text-lg mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Ce qu'on promet — et ce qu'on tient.
          </motion.p>

          <motion.h2
            className="font-display font-black text-paper tracking-tight leading-[0.88] mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2rem,5vw,4rem)]">
              Chaque spectacle devient
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">une expérience.</span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gridAutoRows: '1fr' }}>
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                className="mission-card group block relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mission-card-inner relative p-7 md:p-9 h-full">
                  <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                    {c.num}
                  </span>

                  <h3 className="font-display font-bold text-paper text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12 mb-3">
                    {c.title}
                  </h3>
                  <p className="font-body text-paper/30 text-sm leading-relaxed mb-6">{c.desc}</p>
                  <div className="space-y-2.5 pt-5 border-t border-paper/[0.06]">
                    {c.features.map(f => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-accent/50" />
                        <span className="font-body text-sm text-paper/25">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Prêt à programmer
            <span className="font-serif italic font-normal text-accent-light"> votre prochaine date ?</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Catalogue artistes, fiches techniques, disponibilités — on vous envoie tout sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:diffusion@tinyteam.fr"
              className="group inline-flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                Recevoir le catalogue
              </span>
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="mailto:diffusion@tinyteam.fr"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/40 hover:text-accent transition-colors duration-300"
            >
              <Mail size={14} />
              <span>diffusion@tinyteam.fr</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
