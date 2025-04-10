import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlertsPage = () => {
  const [alertsData, setAlertsData] = useState({
    isIllegalDeforestation: false,
    deforestationImage: null,
    deforestationCoordinates: null,
    isPoaching: false,
    thermalPoachingImage: null,
    lastUpdated: new Date().toLocaleString()
  });

  useEffect(() => {
    const ws = new WebSocket('wss://your-backend-api-url');

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setAlertsData(prev => ({
          ...prev,
          ...data,
          lastUpdated: new Date().toLocaleString()
        }));
      } catch (error) {
        console.error('Error parsing WebSocket data:', error);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Poaching Alert System</h1>
          <Link to="/" className="text-red-600 hover:text-red-800 transition-all duration-300 ease-in-out">
            ← Back to Home
          </Link>
        </div>

        {/* Deforestation Status */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Deforestation Status</h2>
          <div className={`text-center p-10 ${
            alertsData.isIllegalDeforestation ? 'bg-red-100 border border-red-300' : 'bg-green-50 border border-green-300'
          } rounded-3xl`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              alertsData.isIllegalDeforestation ? 'text-red-600' : 'text-green-600'
            }`}>
              {alertsData.isIllegalDeforestation ? 'Deforestation Detected!' : 'No Deforestation Detected'}
            </h3>
            {alertsData.isIllegalDeforestation && alertsData.deforestationCoordinates && (
              <div className="mt-4">
                <p className="font-semibold text-gray-700">Location Coordinates:</p>
                <p className="text-gray-600">X: {alertsData.deforestationCoordinates.x}</p>
                <p className="text-gray-600">Y: {alertsData.deforestationCoordinates.y}</p>
              </div>
            )}
            <p className="text-sm text-gray-600 mt-4">Last Updated: {alertsData.lastUpdated}</p>
          </div>
        </div>

        {/* Illegal Entry Status */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Illegal Entry Status</h2>
          <div className={`text-center p-10 ${
            alertsData.isPoaching ? 'bg-red-100 border border-red-300' : 'bg-green-50 border border-green-300'
          } rounded-3xl`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              alertsData.isPoaching ? 'text-red-600' : 'text-green-600'
            }`}>
              {alertsData.isPoaching ? 'ILLEGAL ENTRY DETECTED!' : 'No Illegal Entry Detected'}
            </h3>
            <p className="text-sm text-gray-600">Last Updated: {alertsData.lastUpdated}</p>
          </div>
        </div>

        {/* Thermal Illegal Entry Image Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Thermal Illegal Entry Image</h2>
          {alertsData.thermalPoachingImage ? (
            <img
              src={alertsData.thermalPoachingImage}
              alt="Thermal Illegal Entry"
              className="w-full rounded-3xl border-4 border-gray-300 shadow-xl"
            />
          ) : (
            <div className="text-center text-gray-500 py-16 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200">
              <p className="text-xl font-semibold">No thermal illegal entry image available</p>
              <p className="text-sm text-gray-400 mt-2">Waiting for new data...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
