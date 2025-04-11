import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { rtdb } from '../config/firebase';
import { ref, onValue } from 'firebase/database';

// Constants for visualization
const LOSS_THRESHOLD = 0.1; // Minimum prediction difference to show on map
const MAX_RADIUS = 50000; // Maximum circle radius in meters

const MapPage = () => {
  const [forestLossData, setForestLossData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to calculate forest loss percentage
  const calculateLoss = (currentPred, previousPred) => {
    return Math.max(0, currentPred - previousPred);
  };

  // Function to get color based on loss percentage
  const getColor = (loss) => {
    if (loss < LOSS_THRESHOLD) return '#4CAF50'; // Green for low loss
    
    const percentage = (loss - LOSS_THRESHOLD) / (1 - LOSS_THRESHOLD);
    const r = Math.min(255, Math.floor(255 * percentage));
    const g = Math.max(0, Math.floor(255 * (1 - percentage)));
    
    return `rgb(${r}, ${g}, 0)`;
  };

  // Function to get circle radius based on loss
  const getCircleRadius = (loss) => {
    if (loss < LOSS_THRESHOLD) return 0;
    
    const percentage = (loss - LOSS_THRESHOLD) / (1 - LOSS_THRESHOLD);
    return 10000 + (MAX_RADIUS - 10000) * percentage;
  };

  // Function to process and compare predictions
  const processPredictions = (predictions) => {
    // Group predictions by coordinates
    const groupedPredictions = {};
    predictions.forEach(pred => {
      const key = `${pred.coordinates.x},${pred.coordinates.y}`;
      if (!groupedPredictions[key]) {
        groupedPredictions[key] = [];
      }
      groupedPredictions[key].push(pred);
    });

    // Calculate loss for each group
    const processedData = Object.entries(groupedPredictions).map(([key, predGroup]) => {
      // Sort predictions by timestamp (newest first)
      predGroup.sort((a, b) => b.timestamp - a.timestamp);
      
      // Calculate loss using the two most recent predictions
      const currentPred = predGroup[0]?.prediction || 0;
      const previousPred = predGroup[1]?.prediction || 0;
      const loss = calculateLoss(currentPred, previousPred);

      // Parse coordinates from key
      const [x, y] = key.split(',').map(Number);

      return {
        name: `Region ${key}`,
        lat: y,
        lng: x,
        loss,
        currentPrediction: currentPred,
        previousPrediction: previousPred,
        coordinates: { x, y },
        timestamp: predGroup[0]?.timestamp || Date.now() / 1000
      };
    });

    // Filter out regions with low loss
    return processedData.filter(region => region.loss >= LOSS_THRESHOLD);
  };

  // Fetch predictions from Firebase
  useEffect(() => {
    const predictionsRef = ref(rtdb, 'predictions');  // Changed from 'predictions' to 'p1_results'
    
    const unsubscribe = onValue(predictionsRef, (snapshot) => {
      const predictions = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        // Ensure data has the required structure
        if (data && typeof data.prediction === 'number' && data.coordinates) {
          predictions.push({
            id: childSnapshot.key,
            prediction: data.prediction,
            coordinates: data.coordinates,
            timestamp: data.timestamp || Math.floor(Date.now() / 1000)
          });
        }
      });

      const processedData = processPredictions(predictions);
      setForestLossData(processedData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <MapContainer
        center={[20.5937, 78.9629]} // Center on India
        zoom={5}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Forest loss circles with color gradient */}
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
                <h3 className="font-bold text-xl mb-2 text-red-800">Forest Loss Alert</h3>
                <div className="flex items-center">
                  <span className="font-semibold">Current Prediction:</span>
                  <span className="ml-2">{region.currentPrediction * 100}%</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="font-semibold">Previous Prediction:</span>
                  <span className="ml-2">{region.previousPrediction * 100}%</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="font-semibold">Loss:</span>
                  <span className="ml-2">{region.loss * 100}%</span>
                </div>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* Selected region info panel */}
        {selectedRegion && (
          <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-lg z-50 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-800">Forest Loss Details</h2>
              <button
                onClick={() => setSelectedRegion(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-800">Location</h4>
                <p className="text-lg font-bold">{selectedRegion.name}</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800">Forest Loss</h4>
                <p className="text-2xl font-bold">{selectedRegion.loss * 100}%</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-red-800">Predictions</h4>
              <div className="mt-2">
                <div className="flex items-center">
                  <span className="font-semibold">Current:</span>
                  <span className="ml-2">{selectedRegion.currentPrediction * 100}%</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="font-semibold">Previous:</span>
                  <span className="ml-2">{selectedRegion.previousPrediction * 100}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </MapContainer>
    </div>
  );
};

export default MapPage;
