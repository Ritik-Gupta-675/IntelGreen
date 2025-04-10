import React from 'react';

const MapPlaceholder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
          IntelGreen Global Threat Map
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Live Map Coming Soon – Powered by Global Forest Intelligence
        </p>
        <div 
          className="w-full h-[600px] bg-gray-100 rounded-lg shadow-lg flex items-center justify-center"
          id="map-placeholder"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-gray-500">Interactive Map Loading...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPlaceholder; 