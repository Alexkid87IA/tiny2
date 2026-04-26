import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />

      <section ref={heroRef} className="relative pt-32 pb-28 md:pt-40 md:pb-40 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]"
          style={{
            top: '5%', right: '-10%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)',
            y: orbY,
          }}
        />

        <div className="relative max-w-container mx-auto px-6 md:px-12" ref={headRef}>
          <motion.span
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.span>

          <motion.h1
            className="font-display font-black text-paper tracking-tight leading-[0.88]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">
              Parlons de
            </span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] mt-1 md:mt-2">
              <span className="font-serif italic font-normal text-accent-light">votre projet.</span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-paper/40 text-lg md:text-xl leading-[1.7] max-w-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Sans engagement, sans PowerPoint de 40 slides. Juste une conversation pour comprendre comment on peut vous aider.
          </motion.p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 md:mt-24">
            <motion.div
              className="contact-card group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative p-8 md:p-10">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent block mb-4">
                  Artistes & tournées
                </span>
                <h2 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight mb-3">
                  Vous êtes artiste ?
                </h2>
                <p className="font-body text-paper/30 text-sm leading-relaxed mb-8">
                  Vous cherchez une équipe qui vous accompagne sur scène et en coulisses — production, management, diffusion.
                </p>
                <a
                  href="mailto:booking@tinyteam.fr"
                  className="group/link inline-flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover/link:text-paper group-hover/link:border-accent/40 group-hover/link:bg-accent/[0.06] transition-all duration-300">
                    <Mail size={14} />
                    booking@tinyteam.fr
                  </span>
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                    <ArrowRight size={15} className="text-ink group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-card group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative p-8 md:p-10">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent block mb-4">
                  Programmateurs & entreprises
                </span>
                <h2 className="font-display font-bold text-paper text-xl md:text-2xl tracking-tight mb-3">
                  Vous cherchez un spectacle ?
                </h2>
                <p className="font-body text-paper/30 text-sm leading-relaxed mb-8">
                  Salle, festival, séminaire ou événement corporate — on trouve le bon artiste pour votre projet.
                </p>
                <a
                  href="mailto:diffusion@tinyteam.fr"
                  className="group/link inline-flex items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover/link:text-paper group-hover/link:border-accent/40 group-hover/link:bg-accent/[0.06] transition-all duration-300">
                    <Mail size={14} />
                    diffusion@tinyteam.fr
                  </span>
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                    <ArrowRight size={15} className="text-ink group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* General contact */}
          <motion.div
            className="mt-16 md:mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-body text-paper/30 text-sm mb-4">
              Une question générale ?
            </p>
            <a
              href="mailto:contact@tinyteam.fr"
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50 hover:text-accent transition-colors duration-300"
            >
              contact@tinyteam.fr
            </a>
            <p className="font-body text-paper/20 text-xs mt-6">
              Réponse garantie sous 48h
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
