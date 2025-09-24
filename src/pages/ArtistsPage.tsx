import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArtistsHeroSection } from '../sections/artists-page/HeroSection';

export const ArtistsPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      
      {/* Hero avec les images d'artistes qui défilent - Version améliorée */}
      <ArtistsHeroSection />
      
      <Footer />
    </main>
  );
};