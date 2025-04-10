import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Forest loss data for regions in India
const forestLossData = [
  {
    name: "Western Ghats",
    lat: 13.5,
    lng: 76.5,
    loss: 10 // Percentage of forest loss
  },
  {
    name: "Eastern Ghats",
    lat: 16.5,
    lng: 82.5,
    loss: 12
  },
  {
    name: "North-East India",
    lat: 26.5,
    lng: 92.5,
    loss: 18
  },
  {
    name: "Central India",
    lat: 22.5,
    lng: 82.5,
    loss: 8
  },
  {
    name: "Western Himalayas",
    lat: 31.5,
    lng: 77.5,
    loss: 7
  },
  {
    name: "Eastern Himalayas",
    lat: 27.5,
    lng: 90.5,
    loss: 9
  },
  {
    name: "Deccan Plateau",
    lat: 18.5,
    lng: 78.5,
    loss: 12
  }
];

const MapPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Function to calculate circle radius based on loss
  const getCircleRadius = (loss) => {
    return (loss / 10) * 60000; // Increased scale factor for better visualization
  };

  // Function to get color based on loss
  const getColor = (loss) => {
    if (loss > 20) return '#FF0000'; // Bright red for highest loss
    if (loss > 15) return '#FF4500'; // Orange-red
    if (loss > 10) return '#FF69B4'; // Pink-red
    return '#FFB6C1'; // Light pink
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">India's Forest Loss Map</h1>
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Combating Deforestation one Day at a time</h2>
          
        </div>
      </div> 
      <div className="relative h-[800px] w-full rounded-lg overflow-hidden bg-gray-100 mb-5">
        <MapContainer 
          center={[20.5937, 78.9629]} // Center of India
          zoom={4.5} // Slightly zoomed out for better India view
          style={{ 
            height: '100%', 
            width: '100%',
            margin: '0 20px',
            position: 'relative',
            zIndex: 1
          }}
          maxZoom={12}
          minZoom={4}
          className="rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Forest loss circles with red color palette */}
          {forestLossData.map((region, index) => (
            <Circle
              key={index}
              center={[region.lat, region.lng]}
              pathOptions={{
                color: getColor(region.loss),
                fillColor: getColor(region.loss),
                fillOpacity: 0.7,
                weight: 3,
                dashArray: '5, 5'
              }}
              radius={getCircleRadius(region.loss)}
              eventHandlers={{
                click: () => setSelectedRegion(region)
              }}
            >
              <Popup>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-2 text-red-800">{region.name}</h3>
                  <div className="flex items-center">
                    <span className="font-semibold">Forest Loss:</span>
                    <span className="ml-2">{region.loss}%</span>
                  </div>
                </div>
              </Popup>
            </Circle>
          ))}
        </MapContainer>
      </div>

      {/* Selected region details modal */}
      {selectedRegion && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-red-800">{selectedRegion.name}</h2>
              <button 
                onClick={() => setSelectedRegion(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800">Forest Loss</h4>
                  <p className="text-2xl font-bold">{selectedRegion.loss}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
