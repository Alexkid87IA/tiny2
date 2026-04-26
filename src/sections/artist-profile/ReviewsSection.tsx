import { motion } from 'framer-motion';

export const ReviewsSection = ({ artist }: { artist: any }) => {
  if (!artist.reviews?.length) return null;

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
            Presse
          </span>
          <h2 className="font-display font-black text-paper tracking-tight leading-[0.88]">
            <span className="block text-[clamp(2rem,5vw,4rem)]">La presse</span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">en parle.</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artist.reviews.map((review: any, i: number) => (
            <motion.div
              key={i}
              className="mission-card group block relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mission-card-inner relative p-7 md:p-9">
                <blockquote className="font-body text-paper/50 text-base leading-relaxed mb-6">
                  « {review.quote} »
                </blockquote>
                <div className="pt-5 border-t border-paper/[0.06]">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent/50">
                    — {review.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
