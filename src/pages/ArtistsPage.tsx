import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArtistsHeroSection } from '../sections/artists-page/HeroSection';
import { ArtistsServicesSection } from '../sections/artists-page/ServicesSection';
import { ArtistsListSection } from '../sections/artists-page/ArtistsListSection';
import { ArtistsCTASection } from '../sections/artists-page/CTASection';

export const ArtistsPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <ArtistsHeroSection />
      <ArtistsServicesSection />
      <ArtistsListSection />
      <ArtistsCTASection />
      <Footer />
    </main>
  );
};