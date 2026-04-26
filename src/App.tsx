import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { ArtistsSliderSection } from './components/ArtistsSliderSection';
import { StorySection } from './components/StorySection';
import { ProducerSection } from './components/ProducerSection';
import { BrandSection } from './components/BrandSection';
import { MissionSection } from './components/MissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ArtistProfilePage } from './pages/ArtistProfilePage';
import { BrandPage } from './pages/BrandPage';
import { ProducerPage } from './pages/ProducerPage';
import { TeamStoriesPage } from './pages/TeamStoriesPage';
import { ShowPage } from './pages/ShowPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './utils/scrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ArtistsSliderSection />
      <StorySection />
      <ProducerSection />
      <BrandSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artiste/:id" element={<ArtistProfilePage />} />
        <Route path="/artistes" element={<ArtistsPage />} />
        <Route path="/programmateur" element={<ProducerPage />} />
        <Route path="/marque" element={<BrandPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/team-stories" element={<TeamStoriesPage />} />
        <Route path="/spectacle/:id" element={<ShowPage />} />
        <Route path="/evenements" element={<EventsPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;