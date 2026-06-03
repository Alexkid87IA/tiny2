import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-deep">
      <div className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[600px]">
        <img
          src="/manifesto.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/60 to-deep" />

        <div className="relative mx-auto flex min-h-[inherit] max-w-container items-center px-6 md:px-12">
          <motion.div
            className="w-full py-16 md:py-20"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
              Manifeste
            </span>

            <div className="max-w-4xl border-l-2 border-accent/40 pl-6 md:pl-10">
              <h2>
                <span
                  className="block font-display font-black leading-[1.05] tracking-tight text-paper"
                  style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                >
                  On s'occupe de tout
                </span>
                <span
                  className="mt-1 block font-display font-black leading-[1.05] tracking-tight text-paper"
                  style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                >
                  ce qui n'est pas drôle,
                </span>
                <span
                  className="mt-2 block font-serif font-normal italic leading-[1.1] text-accent-light md:mt-3"
                  style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                >
                  pour que tout le reste le soit.
                </span>
              </h2>

              <p className="mt-8 max-w-xl font-body text-sm leading-relaxed text-paper/50 md:text-base">
                Production, management, diffusion, communication, digital,
                événements — un seul interlocuteur, une seule exigence.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-paper/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/30">
                La Tiny Team
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
