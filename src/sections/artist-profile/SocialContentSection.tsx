import { motion } from 'framer-motion';
import { Instagram, BookText as TikTok, Youtube } from 'lucide-react';

export const SocialContentSection = ({ artist }: { artist: any }) => {
  if (!artist.socialContent?.length) return null;

  const content = [...artist.socialContent];
  while (content.length < 4) content.push(...artist.socialContent);
  content.length = 4;

  const PlatformIcon = (p: string) =>
    p === 'instagram' ? Instagram : p === 'tiktok' ? TikTok : Youtube;

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
            Réseaux
          </span>
          <h2 className="font-display font-black text-paper tracking-tight leading-[0.88]">
            <span className="block text-[clamp(2rem,5vw,4rem)]">Ça cartonne sur</span>
            <span className="block text-[clamp(2rem,5vw,4rem)] mt-1">
              <span className="font-serif italic font-normal text-accent-light">les réseaux.</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {content.map((item: any, i: number) => {
            const Icon = PlatformIcon(item.platform);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mq-card relative aspect-[9/16] rounded-[20px] overflow-hidden"
              >
                <img
                  src={item.thumbnail}
                  alt={`${item.platform} content`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="mq-overlay absolute inset-0 rounded-[20px]" />

                <div className="absolute top-4 left-4 z-[3] flex items-center gap-2 px-3 py-1.5 rounded-full border border-paper/10 bg-deep/60 backdrop-blur-sm">
                  <Icon size={14} className="text-paper/60" />
                  <span className="font-mono text-[10px] text-paper/50 capitalize">{item.platform}</span>
                </div>

                {item.views && (
                  <div className="absolute top-4 right-4 z-[3] px-3 py-1.5 rounded-full border border-paper/10 bg-deep/60 backdrop-blur-sm">
                    <span className="font-mono text-[10px] text-paper/50">{item.views}</span>
                  </div>
                )}

                <div className="mq-border absolute inset-0 rounded-[20px] pointer-events-none z-[5]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
