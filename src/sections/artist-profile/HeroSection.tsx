import { motion } from 'framer-motion';
import { Instagram, BookText as TikTok, Youtube } from 'lucide-react';

export const HeroSection = ({ artist }: { artist: any }) => {
  const socials = [
    { key: 'instagram', icon: Instagram, href: artist.social?.instagram },
    { key: 'tiktok', icon: TikTok, href: artist.social?.tiktok },
    { key: 'youtube', icon: Youtube, href: artist.social?.youtube },
  ].filter(s => s.href);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-deep/40" />
        <img src={artist.image} alt={artist.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="relative z-20 max-w-container mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent block mb-6">
              {artist.type}
            </span>

            <h1 className="font-display font-black text-paper tracking-tight leading-[0.88]">
              <span className="block text-[clamp(3rem,8vw,7rem)]">{artist.name}</span>
            </h1>

            <p className="font-body text-paper/60 text-lg md:text-xl leading-[1.7] max-w-xl mt-6">
              {artist.tagline}
            </p>

            {socials.length > 0 && (
              <div className="flex items-center gap-3 mt-8">
                {socials.map(s => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-paper/10 flex items-center justify-center text-paper/40 hover:text-accent hover:border-accent/30 hover:bg-accent/[0.06] transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
