import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ShowSection = ({ artist }: { artist: any }) => {
  return (
    <section className="relative py-28 md:py-40 bg-deep overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px] top-[20%] right-[-5%] bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_70%)]" />

      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mq-card relative rounded-[20px] overflow-hidden"
          >
            <div className="aspect-[2/3] overflow-hidden rounded-[20px]">
              <img
                src={artist.posterImage}
                alt={`Affiche ${artist.showName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mq-overlay absolute inset-0 rounded-[20px]" />
            <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-6">
              Spectacle
            </span>

            <h2 className="font-display font-black text-paper tracking-tight leading-[0.88]">
              <span className="block text-[clamp(2rem,5vw,4rem)]">{artist.showName}</span>
            </h2>

            <div className="h-px w-16 bg-accent/30 my-8" />

            <div className="space-y-4">
              <p className="font-body text-paper/50 text-base md:text-lg leading-[1.7]">
                {artist.longDescription}
              </p>
              <p className="font-body text-paper/40 text-base leading-[1.7]">
                {artist.showDescription}
              </p>
            </div>

            {artist.achievements?.length > 0 && (
              <div className="mt-8">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/25 block mb-3">
                  Parcours
                </span>
                <div className="space-y-2">
                  {artist.achievements.map((a: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-accent/50" />
                      <span className="font-body text-sm text-paper/40">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {artist.dates?.[0] && (
              <div className="story-glass mt-10 p-6 md:p-8">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50 block mb-4">
                  Prochaine date
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-accent/60" />
                    <span className="font-body text-sm text-paper/50">{artist.dates[0].date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-accent/60" />
                    <span className="font-body text-sm text-paper/50">{artist.dates[0].time}</span>
                  </div>
                  <div className="flex items-center gap-3 col-span-2">
                    <MapPin size={16} className="text-accent/60" />
                    <span className="font-body text-sm text-paper/50">{artist.dates[0].venue}</span>
                  </div>
                </div>
                {artist.dates[0].link && (
                  <a
                    href={artist.dates[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 mt-6"
                  >
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/10 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/60 group-hover:text-paper group-hover:border-accent/40 group-hover:bg-accent/[0.06] transition-all duration-300">
                      Réserver
                    </span>
                    <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                      <ArrowRight size={15} className="text-ink group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
