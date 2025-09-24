import { motion } from 'framer-motion';
import { Instagram, BookText as TikTok, Youtube, Play, Heart, Share2, MessageCircle, Bookmark } from 'lucide-react';

const SocialContentCard = ({ content, index }) => {
  const Icon = content.platform === 'instagram' ? Instagram : content.platform === 'tiktok' ? TikTok : Youtube;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-[9/16] rounded-xl overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={content.thumbnail}
          alt={`${content.platform} content`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Platform Badge */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-2">
        <Icon className="w-4 h-4 text-white" />
        <span className="text-sm text-white capitalize">{content.platform}</span>
      </div>

      {/* Views Badge */}
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
        <span className="text-sm text-white">{content.views}</span>
      </div>

      {/* Engagement Stats */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-300">
              <Heart className="w-5 h-5" />
              <span className="text-sm">24.5K</span>
            </button>
            <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">1.2K</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
              <Share2 className="w-4 h-4 text-white" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
              <Bookmark className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        >
          <Play className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export const SocialContentSection = ({ artist }) => {
  if (!artist.socialContent.length) return null;

  // Ensure we have exactly 4 items by duplicating if necessary
  const socialContent = [...artist.socialContent];
  while (socialContent.length < 4) {
    socialContent.push(...artist.socialContent);
  }
  socialContent.length = 4; // Limit to exactly 4 items

  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="block text-gradient from-white via-blue-100 to-white">
              Ça cartonne sur
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              les réseaux
            </span>
          </h2>
        </motion.div>
        
        {/* Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialContent.map((content, index) => (
              <SocialContentCard key={index} content={content} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};