import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/forest.png')" }}
      ></div>

      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-green-900 opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          InteliGreen
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">
          Intelligent Surveillance for Earth's Lungs
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/map" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 inline-block">
            Launch Forest Map
          </Link>
          <Link to="/alerts" className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 rounded-lg transition-colors duration-300">
            See Live Alerts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 