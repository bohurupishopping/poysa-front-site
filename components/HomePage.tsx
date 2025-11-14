import React from 'react';
import Hero from './Hero';
import USP from './USP';
import Features from './Features';
import Comparison from './Comparison';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FinalCTA from './FinalCTA';

interface HomePageProps {
  navigate: (page: 'home' | 'features') => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <>
      <Hero />
      <USP />
      <Features navigate={navigate} />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </>
  );
};

export default HomePage;