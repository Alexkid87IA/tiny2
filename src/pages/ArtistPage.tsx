import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../sections/artists/HeroSection';
import { ServicesSection } from '../sections/artists/ServicesSection';
import { ProcessSection } from '../sections/artists/ProcessSection';
import { BenefitsSection } from '../sections/artists/BenefitsSection';
import { SuccessStoriesSection } from '../sections/artists/SuccessStoriesSection';
import { CTASection } from '../sections/artists/CTASection';

export const ArtistPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </main>
  );
};