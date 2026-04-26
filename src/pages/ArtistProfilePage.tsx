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

export const ArtistProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    navigate('/');
    return null;
  }

  return (
    <main className="min-h-screen bg-deep">
      <Navigation />
      <HeroSection artist={artist} />
      <ShowSection artist={artist} />
      <VideoSection artist={artist} />
      <SocialContentSection artist={artist} />
      <ReviewsSection artist={artist} />
      <TourSection artist={artist} />
      <BookingSection artist={artist} />
      <Footer />
    </main>
  );
};