import { motion } from 'framer-motion';

export const VideoSection = ({ artist }: { artist: any }) => {
  if (!artist.videoUrl) return null;

  return (
    <section className="relative py-28 md:py-40 bg-deep overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-6">
            Extrait
          </span>
          <h2 className="font-display font-black text-paper tracking-tight leading-[0.88]">
            <span className="block text-[clamp(2rem,5vw,4rem)]">
              {artist.showName}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-[20px] overflow-hidden border border-paper/[0.06]">
            <iframe
              src={artist.videoUrl}
              title={`Extrait — ${artist.showName}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
