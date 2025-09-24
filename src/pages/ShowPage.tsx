import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowLeft, Star, Heart, Share2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const shows = [
  {
    id: 'sans-filtre',
    title: "Sans Filtre",
    artist: "Clara Martin",
    type: "Stand-up Comedy",
    description: "Un regard acéré sur notre société, entre humour et réflexion. Clara Martin nous livre un spectacle sans concession où rires et émotions se mêlent avec justesse.",
    longDescription: `Dans "Sans Filtre", Clara Martin pose un regard sans concession mais toujours bienveillant sur notre époque. À travers des observations fines et un humour intelligent, elle aborde les grands thèmes de notre société : les réseaux sociaux, les relations humaines à l'ère du numérique, l'écologie, et bien d'autres sujets qui nous touchent tous.

    Formée à l'école du one-woman-show, Clara a perfectionné son art pendant plusieurs années sur les scènes des cafés-théâtres parisiens avant de rejoindre la Tiny Team en 2022. Son spectacle "Sans Filtre" est le fruit de cette expérience riche et variée.

    Un spectacle qui fait rire, réfléchir, et parfois même pleurer, mais qui ne laisse jamais indifférent.`,
    image: 'https://static.eno.do/x/fs-200336-default/f5fcb736ef4f4b4854368f6aa4d32c0d/media.jpg',
    nextShow: "15 Mars 2024",
    time: "20:30",
    duration: "75 minutes",
    location: "Théâtre du Rire, Paris",
    capacity: "300 places",
    price: "À partir de 25€",
    status: "Bientôt complet",
    reviews: [
      { author: "Le Monde", quote: "Une révélation de l'humour qui fait mouche à chaque réplique." },
      { author: "Télérama", quote: "Intelligent, drôle et profondément humain." },
      { author: "Les Inrocks", quote: "Clara Martin redéfinit les codes du stand-up à la française." }
    ],
    withTinyTeam: "Depuis 2022",
    achievements: [
      "Festival d'Humour de Paris 2023 - Prix du Public",
      "Plus de 100 représentations en France",
      "Spectacle nommé aux Molières 2023"
    ],
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  // ... autres spectacles
];

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: 0,
          opacity: 0
        }}
        animate={{
          y: [null, `${Math.random() * 30 - 15}%`],
          x: [null, `${Math.random() * 30 - 15}%`],
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

export const ShowPage = () => {
  const { id } = useParams();
  const show = shows.find(s => s.id === id);

  if (!show) {
    return (
      <main className="min-h-screen bg-[#0A0F29]">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl text-white mb-8">Spectacle non trouvé</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,62,153,0.15),transparent_70%)]" />
          <FloatingParticles />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux spectacles</span>
          </Link>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[2/3] rounded-2xl overflow-hidden group"
            >
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300 rounded-2xl" />
            </motion.div>

            {/* Right Column - Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  {show.title}
                </h1>
                <div className="flex items-center gap-3 text-xl text-white/80">
                  <span>{show.artist}</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/60">{show.type}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                {show.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-white/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Show Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <div>
                    <div className="text-sm text-white/60">Prochaine date</div>
                    <div className="text-white">{show.nextShow}</div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <div>
                    <div className="text-sm text-white/60">Horaire</div>
                    <div className="text-white">{show.time}</div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <div>
                    <div className="text-sm text-white/60">Lieu</div>
                    <div className="text-white">{show.location}</div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-300" />
                  <div>
                    <div className="text-sm text-white/60">Capacité</div>
                    <div className="text-white">{show.capacity}</div>
                  </div>
                </div>
              </div>

              {/* Price and Booking */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-white/60">Prix</div>
                    <div className="text-2xl font-bold text-white">{show.price}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 border border-white/20">
                    {show.status}
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300">
                  Réserver
                </button>
              </div>

              {/* Social Actions */}
              <div className="flex gap-4">
                <button className="flex-1 py-3 rounded-xl glass-card flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                  <Heart className="w-5 h-5" />
                  <span>Favoris</span>
                </button>
                <button className="flex-1 py-3 rounded-xl glass-card flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Partager</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Reviews */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">La presse en parle</h2>
              <div className="space-y-6">
                {show.reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <div className="text-lg text-white/90 italic mb-3">"{review.quote}"</div>
                    <div className="text-sm text-white/60">— {review.author}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Récompenses & Succès</h2>
              <div className="space-y-4">
                <div className="glass-card rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-300" />
                    <div className="text-lg text-white">Avec Tiny Team depuis {show.withTinyTeam}</div>
                  </div>
                </div>
                {show.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-300" />
                    <div className="text-white/80">{achievement}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};