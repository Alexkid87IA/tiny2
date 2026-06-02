import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Artist } from '../../types/artist';

export const BookingSection = ({ artist }: { artist: Artist }) => {
  return (
    <section className="relative py-20 md:py-28 bg-deep">
      <div className="max-w-container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={false}
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
            className="premium-btn premium-btn-paper group"
          >
            Contacter le booking
            <span className="premium-btn-icon">
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
