import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../sections/brand/HeroSection';
import { ServicesSection } from '../sections/brand/ServicesSection';
import { BenefitsSection } from '../sections/brand/BenefitsSection';
import { SolutionsSection } from '../sections/brand/SolutionsSection';
import { SuccessStoriesSection } from '../sections/brand/SuccessStoriesSection';
import { CTASection } from '../sections/brand/CTASection';

export const BrandPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <SolutionsSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </main>
  );
};