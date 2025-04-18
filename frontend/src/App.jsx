import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Hero2 from './components/Hero2';
import MapPlaceholder from './components/MapPlaceholder';
import Stats from './components/Stats';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';

// Import pages
import MapPage from './pages/map';
import AlertsPage from './pages/alerts';
import OurWorkPage from './pages/our-work';
import AboutPage from './pages/about';
import TakeActionPage from './pages/take-action';
import NewsPage from './pages/News/news';
import BlogPage from './pages/Blog/blog';
import BlogPost from './pages/Blog/blog-post';
import GuideMePage from './pages/guide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WelcomeModal />
              <HowItWorks />
              <MapPlaceholder />
              <Hero2 />
              <Stats />
            </>
          } />
          <Route path="/map" element={<MapPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/take-action" element={<TakeActionPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/guide" element={<GuideMePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
