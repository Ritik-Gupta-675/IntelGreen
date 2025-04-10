import React from 'react';
import MapPlaceholder from '../components/MapPlaceholder';

const MapPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Interactive Map</h1>
      <MapPlaceholder />
    </div>
  );
};

export default MapPage;
