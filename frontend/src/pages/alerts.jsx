import React from 'react';
import AlertFeed from '../components/AlertFeed';

const AlertsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Environmental Alerts</h1>
      <AlertFeed />
    </div>
  );
};

export default AlertsPage;
