import { BrowserRouter, Navigate, Routes, Route, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ArtistsSliderSection } from './components/ArtistsSliderSection';
import { StorySection } from './components/StorySection';
import { MissionSection } from './components/MissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ArtistProfilePage } from './pages/ArtistProfilePage';
import { ProducerPage } from './pages/ProducerPage';
import { BrandPage } from './pages/BrandPage';
import { TeamStoriesPage } from './pages/TeamStoriesPage';
import { ShowPage } from './pages/ShowPage';
import { EventsPage } from './pages/EventsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ArtistesPage } from './pages/ArtistesPage';
import { ScrollToTop } from './utils/scrollToTop';

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-deep flex flex-col items-center justify-center text-center px-6">
      <Navigation />
      <span className="eyebrow text-accent/50 mb-4">Erreur 404</span>
      <h1 className="display-text text-paper text-6xl md:text-[88px] mb-4">Perdu ?</h1>
      <p className="body-text text-paper/50 text-md mb-8">Cette page n'existe pas.</p>
      <a
        href="/"
        className="premium-btn premium-btn-paper group"
      >
        Retour à l'accueil
        <span className="premium-btn-icon">
          <ArrowUpRight size={15} strokeWidth={2.4} />
        </span>
      </a>
      <Footer />
    </main>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ArtistsSliderSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function LegacyServiceRedirect() {
  const { id } = useParams();
  return <Navigate to={`/services${id ? `#${id}` : ''}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artistes" element={<ArtistesPage />} />
        <Route path="/artiste/:id" element={<ArtistProfilePage />} />
        <Route path="/programmateur" element={<ProducerPage />} />
        <Route path="/marque" element={<BrandPage />} />
        <Route path="/team-stories" element={<TeamStoriesPage />} />
        <Route path="/spectacle/:id" element={<ShowPage />} />
        <Route path="/evenements" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<LegacyServiceRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
