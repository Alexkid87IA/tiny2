import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoSection = ({ artist }) => {
  return (
    <section className="relative py-32 bg-[#080C20]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="block text-gradient from-white via-blue-100 to-white">
              Extrait du spectacle
            </span>
            <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
              {artist.showName}
            </span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300 rounded-2xl" />
            
            <iframe
              src={artist.videoUrl}
              title={`Extrait du spectacle ${artist.showName}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              >
                <Play className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>

          <div className="absolute -inset-4 md:-inset-8 rounded-3xl bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-pink-500/10 -z-10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};