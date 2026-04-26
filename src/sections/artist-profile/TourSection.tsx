import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export const TourSection = ({ artist }: { artist: any }) => {
  if (!artist.dates?.length) return null;

  return (
    <section className="relative py-28 md:py-40 bg-deep overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          {artist.dates.map((date: any, i: number) => (
            <motion.div
              key={i}
              className="mission-card group block relative"
              initial={{ opacity: 0, y: 20 }}
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
                      className="group/btn inline-flex items-center gap-2"
                    >
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover/btn:text-paper group-hover/btn:border-accent/40 group-hover/btn:bg-accent/[0.06] transition-all duration-300">
                        Réserver
                      </span>
                      <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                        <ArrowRight size={15} className="text-ink group-hover/btn:translate-x-0.5 transition-transform duration-300" />
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
