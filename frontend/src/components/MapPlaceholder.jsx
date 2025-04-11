import React from 'react';
import MapPage from '../pages/map';

const Map = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
          InteliGreen Global Threat Map
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Live Map – Powered by Global Forest Intelligence
        </p>        <div className="w-full">
          <MapPage />
        </div>
      </div>
    </div>
  );
};

export default Map;