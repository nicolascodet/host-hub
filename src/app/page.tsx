import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
