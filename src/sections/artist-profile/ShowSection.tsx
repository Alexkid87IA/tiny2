import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShowSection = ({ artist }) => {
  return (
    <section id="show" className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[2/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={artist.posterImage}
              alt={`Affiche du spectacle ${artist.showName}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500 rounded-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="block text-gradient from-white via-blue-100 to-white">
                  {artist.showName}
                </span>
              </h2>
              <div className="glass-card rounded-xl p-4 inline-flex items-center gap-2 text-white/70">
                <Clock className="w-5 h-5 text-pink-400" />
                <span>75 minutes</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-white/80 leading-relaxed">
                  {artist.longDescription}
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  {artist.showDescription}
                </p>
              </div>

              {artist.achievements && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Récompenses & Succès</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {artist.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-xl p-4 flex items-center gap-3 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 transition-colors duration-300" />
                        <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Next Show */}
            {artist.dates && artist.dates[0] && (
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white">Prochaine date</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3 group">
                    <Calendar className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                    <div>
                      <div className="text-sm text-white/60">Date</div>
                      <div className="text-white group-hover:text-glow transition-all duration-300">
                        {artist.dates[0].date}
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3 group">
                    <Clock className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                    <div>
                      <div className="text-sm text-white/60">Heure</div>
                      <div className="text-white group-hover:text-glow transition-all duration-300">
                        {artist.dates[0].time}
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3 group">
                    <MapPin className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                    <div>
                      <div className="text-sm text-white/60">Lieu</div>
                      <div className="text-white group-hover:text-glow transition-all duration-300">
                        {artist.dates[0].venue}
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3 group">
                    <Ticket className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    <div>
                      <div className="text-sm text-white/60">Prix</div>
                      <div className="text-white group-hover:text-glow transition-all duration-300">
                        {artist.dates[0].price}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-white/70 border border-white/10">
                    {artist.dates[0].status}
                  </div>
                  <Link
                    to={artist.dates[0].link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-black font-medium hover:from-pink-300 hover:to-pink-400 transition-all duration-300 group"
                  >
                    <span>Réserver</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};