// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedGames from '../components/FeaturedGames';
import SeeMoreSection from '../components/SeeMoreSection';
import InfoSection from '../components/InfoSection';
import PaymetSection from '../components/Pay';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedGames />
      <SeeMoreSection />
      <InfoSection />
      <PaymetSection />
    </div>
  );
}

export default Home;
