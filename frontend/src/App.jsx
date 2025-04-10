import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MapPlaceholder from './components/MapPlaceholder';
import AlertFeed from './components/AlertFeed';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MapPlaceholder />
      <AlertFeed />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
