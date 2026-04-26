import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const services = [
  { id: 'production', title: 'Production', desc: 'De l\'idée griffonnée au spectacle debout. On construit, on teste, on ajuste — jusqu\'à ce que ça tienne.' },
  { id: 'management', title: 'Management', desc: 'Stratégie, négociation, positionnement. On trace la route avec chaque artiste, pas pour lui.' },
  { id: 'digital', title: 'Digital', desc: 'Réseaux, contenus, communautés. On fait exister les artistes là où les gens regardent.' },
  { id: 'communication', title: 'Communication', desc: 'Presse, image, relations. On raconte les bonnes histoires aux bonnes personnes.' },
  { id: 'diffusion', title: 'Diffusion', desc: '300 salles partenaires. On remplit des dates, pas des tableaux Excel.' },
  { id: 'evenements', title: 'Événements', desc: 'Corporate, festivals, soirées. On crée des moments qui restent.' },
];

export const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const counterY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      <section ref={heroRef} className="relative pt-32 pb-28 md:pt-40 md:pb-40 overflow-hidden">
        {/* Orbs */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none blur-[100px]"
          style={{
            top: '15%', left: '-8%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',
            y: orbY,
          }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none blur-[90px]"
          style={{
            bottom: '10%', right: '-5%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
            y: useTransform(scrollYProgress, [0, 1], [-40, 40]),
          }}
        />

        {/* Decorative "6" */}
        <motion.span
          className="mission-bg-num absolute right-[-2%] md:right-[3%] top-[12%]"
          style={{ y: counterY }}
          aria-hidden
        >
          6
        </motion.span>

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          {/* Header */}
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nos métiers
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Ce qu'on
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">sait faire.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Six métiers, une obsession : que l'artiste soit au bon endroit,
            au bon moment, dans les bonnes conditions.
          </motion.p>

          {/* Services grid */}
          <div className="mission-grid mt-16 md:mt-24" style={{ gridAutoRows: '1fr' }}>
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="mission-card group block relative"
                >
                  <div className="mission-card-inner relative p-7 md:p-9">
                    <span className="mission-card-num font-display font-black absolute top-7 right-8 md:top-9 md:right-9">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300 pr-12">
                      {service.title}
                    </h3>
                    <p className="font-body text-paper/30 text-sm md:text-base leading-relaxed mt-3 max-w-xs">
                      {service.desc}
                    </p>

                    <div className="mission-card-arrow mt-6">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
