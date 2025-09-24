import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TeamHeroSection } from '../sections/team/TeamHeroSection';
import { TeamMembersSection } from '../sections/team/TeamMembersSection';
import { TeamExpertisesSection } from '../sections/team/TeamExpertisesSection';
import { TeamHistorySection } from '../sections/team/TeamHistorySection';
import { TeamCTASection } from '../sections/team/TeamCTASection';

export const TeamPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <TeamHeroSection />
      <TeamMembersSection />
      <TeamExpertisesSection />
      <TeamHistorySection />
      <TeamCTASection />
      <Footer />
    </main>
  );
};