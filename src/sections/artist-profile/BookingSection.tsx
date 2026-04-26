import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BookingSection = ({ artist }: { artist: any }) => {
  return (
    <section className="relative py-20 md:py-28 bg-deep">
      <div className="max-w-container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-paper text-2xl md:text-4xl tracking-tight leading-[0.92] mb-4">
            Booker
            <span className="font-serif italic font-normal text-accent-light"> {artist.name}</span>
          </h2>
          <p className="font-body text-paper/40 text-base max-w-md mx-auto mb-10">
            Vous souhaitez programmer {artist.name} dans votre salle ou pour un événement ?
          </p>
          <a
            href="mailto:contact@tinyteam.fr"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
              Contacter le booking
            </span>
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
