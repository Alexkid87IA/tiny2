import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import type { Artist } from '../../types/artist';

type TourDate = Artist['dates'][number];

export const TourSection = ({ artist }: { artist: Artist }) => {
  if (!artist.dates?.length) return null;

  return (
    <section className="relative py-28 md:py-40 bg-deep overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-6">
            Tournée
          </span>
          <h2 className="font-display font-black text-paper tracking-tight leading-[0.88]">
            <span className="block text-[clamp(2rem,5vw,4rem)]">Prochaines</span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">dates.</span>
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-4">
          {artist.dates.map((date: TourDate, i: number) => (
            <motion.div
              key={i}
              className="mission-card group block relative"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="mission-card-inner relative p-5 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Calendar size={15} className="text-accent/60 flex-shrink-0" />
                    <span className="font-body text-sm text-paper/60">{date.date} — {date.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={15} className="text-accent/60 flex-shrink-0" />
                    <span className="font-body text-sm text-paper/40">{date.venue} — {date.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {date.price && (
                    <span className="font-mono text-[11px] text-paper/30">{date.price}</span>
                  )}
                  {date.link && (
                    <a
                      href={date.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-btn premium-btn-glass premium-btn-sm group"
                    >
                      Réserver
                      <span className="premium-btn-icon">
                        <ArrowRight size={13} strokeWidth={2.4} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
