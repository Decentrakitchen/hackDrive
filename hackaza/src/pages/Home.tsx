import React from 'react';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;