import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../sections/artist-profile/HeroSection';
import { ShowSection } from '../sections/artist-profile/ShowSection';
import { VideoSection } from '../sections/artist-profile/VideoSection';
import { SocialContentSection } from '../sections/artist-profile/SocialContentSection';
import { ReviewsSection } from '../sections/artist-profile/ReviewsSection';
import { TourSection } from '../sections/artist-profile/TourSection';
import { BookingSection } from '../sections/artist-profile/BookingSection';
import { artists } from '../data/artists';
import { motion } from 'framer-motion';

export const ArtistProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    navigate('/');
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection artist={artist} />
      
      {/* Show Section - Présentation du spectacle */}
      <ShowSection artist={artist} />
      
      {/* Video Section - Extrait vidéo */}
      {artist.videoUrl && <VideoSection artist={artist} />}
      
      {/* Social Content Section - Si l'artiste a du contenu social */}
      {artist.socialContent && artist.socialContent.length > 0 && (
        <SocialContentSection artist={artist} />
      )}
      
      {/* Reviews Section - Critiques presse */}
      {artist.reviews && artist.reviews.length > 0 && (
        <ReviewsSection artist={artist} />
      )}
      
      {/* Tour Section simplifiée - Dates et billetterie */}
      {artist.websiteUrl && <SimplifiedTourSection artist={artist} />}
      
      {/* Booking Section - Contact */}
      <BookingSection artist={artist} />
      
      <Footer />
    </main>
  );
};

// Section Tour simplifiée et intégrée
const SimplifiedTourSection = ({ artist }) => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#080C20] to-[#0A0F29]">
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
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500/20 via-pink-500/5 to-pink-500/10 blur-3xl" />
            <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight">
              <span className="block text-gradient from-white via-blue-100 to-white">
                Dates & Billetterie
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Retrouvez toutes les dates de {artist.name} et réservez vos places directement sur son site officiel.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden group text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Toutes les dates de {artist.name}
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Découvrez le calendrier complet des représentations et réservez vos places en quelques clics.
              </p>

              <motion.a
                href={artist.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)",
                      "linear-gradient(225deg, #ec4899, #8b5cf6, #3b82f6)",
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative font-bold text-white text-lg">Voir les dates & réserver</span>
              </motion.a>
              
              <p className="text-sm text-white/50">
                Vous serez redirigé vers le site officiel de {artist.name}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};