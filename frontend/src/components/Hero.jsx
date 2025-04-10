import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-green-900 to-green-800">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/forest-bg.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          IntelGreen
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">
          Intelligent Surveillance for Earth's Lungs
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300">
            Launch Forest Map
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 rounded-lg transition-colors duration-300">
            See Live Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 