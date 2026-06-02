import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <img
          src="/manifesto.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            className="text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block font-display text-2xl font-black tracking-tight text-paper sm:text-4xl md:text-5xl lg:text-6xl">
              On s'occupe de tout ce qui n'est pas drôle,
            </span>
            <span className="block font-serif text-2xl font-normal italic text-accent-light sm:text-4xl md:text-5xl lg:text-6xl mt-1 md:mt-2">
              pour que tout le reste le soit.
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
