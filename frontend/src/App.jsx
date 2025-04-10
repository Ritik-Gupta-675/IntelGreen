import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MapPlaceholder from './components/MapPlaceholder';
import AlertFeed from './components/AlertFeed';
import Stats from './components/Stats';
import Footer from './components/Footer';

// Import pages
import MapPage from './pages/map';
import AlertsPage from './pages/alerts';
import OurWorkPage from './pages/our-work';
import AboutPage from './pages/about';
import TakeActionPage from './pages/take-action';
import NewsPage from './pages/news';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <MapPlaceholder />
              <AlertFeed />
              <Stats />
            </>
          } />
          <Route path="/map" element={<MapPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/take-action" element={<TakeActionPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
