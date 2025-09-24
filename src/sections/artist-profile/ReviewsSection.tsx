import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review, index, artistId }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="relative glass-card rounded-2xl p-8 overflow-hidden h-full">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <Quote className="w-8 h-8 text-pink-400/20 group-hover:text-pink-400/40 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative space-y-6">
        {/* Media Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center">
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-glow transition-all duration-300">
              {review.author}
            </h3>
            <div className="text-sm text-white/60">Critique</div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-300 group-hover:text-yellow-300 transition-colors duration-300"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
          "{review.quote}"
        </blockquote>

        {/* CTA */}
        <div className="pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          <button
            onClick={() => {
              // TODO: Lien vers l'article complet
              console.log(`Lire l'article de ${review.author}`);
            }}
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 group/link"
          >
            <span>Lire l'article complet</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
    </div>
  </motion.div>
);

const PressHighlight = ({ artist }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden group mb-16"
  >
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="relative text-center space-y-6">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center">
          <Award className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            Reconnu par la critique
          </h3>
          <p className="text-white/70">Spectacle {artist.showName}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white mb-2">
            {artist.reviews?.length || 0}
          </div>
          <div className="text-sm text-white/60">Critiques positives</div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sm text-white/60">Note moyenne</div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white mb-2">
            {artist.achievements?.length || 0}
          </div>
          <div className="text-sm text-white/60">Récompenses</div>
        </div>
      </div>

      {artist.achievements && artist.achievements.length > 0 && (
        <div className="pt-6 border-t border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Dernières récompenses</h4>
          <div className="space-y-2">
            {artist.achievements.slice(0, 2).map((achievement, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                <span className="text-white/70">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Shimmer Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
    />
  </motion.div>
);

export const ReviewsSection = ({ artist }) => {
  if (!artist.reviews || artist.reviews.length === 0) {
    return (
      <section className="relative py-32 bg-[#080C20]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Un talent reconnu
              </span>
            </h2>
            <p className="text-lg text-white/70">
              {artist.name} continue de séduire le public et la critique avec son spectacle {artist.showName}.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 bg-[#080C20]">
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
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 rounded-[40px] blur-3xl" />
            <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white">
                La presse
              </span>
              <span className="block text-gradient from-pink-300 via-pink-200 to-pink-300 mt-2">
                en parle
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que les critiques et les médias disent du spectacle {artist.showName}. 
            Une reconnaissance unanime qui témoigne de la qualité exceptionnelle de cet artiste.
          </p>
        </motion.div>

        {/* Press Highlight */}
        <PressHighlight artist={artist} />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {artist.reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} artistId={artist.id} />
          ))}
        </div>

        {/* Additional Press Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
            <div className="relative glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Espace Presse
              </h3>
              <p className="text-white/70 mb-6">
                Journalistes et médias, retrouvez tous les éléments nécessaires pour vos articles : 
                photos haute définition, dossier de presse et contacts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    // TODO: Lien vers le dossier de presse
                    console.log('Télécharger le dossier de presse');
                  }}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Dossier de presse</span>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </button>
                
                <a
                  href="mailto:presse@tinyteam.fr"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <span className="font-semibold text-white group-hover:text-glow transition-all duration-300">Contact presse</span>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};