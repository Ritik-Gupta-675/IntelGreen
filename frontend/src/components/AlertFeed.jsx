import React from 'react';

const AlertFeed = () => {
  const alerts = [
    {
      type: 'high',
      title: 'Gunshot Detected',
      location: 'Amazon Rainforest - Sector 4',
      time: '2 minutes ago',
      description: 'Multiple gunshots detected in protected area'
    },
    {
      type: 'medium',
      title: 'Chainsaw Activity',
      location: 'Congo Basin - Zone B',
      time: '15 minutes ago',
      description: 'Suspected illegal logging activity'
    },
    {
      type: 'low',
      title: 'Thermal Anomaly',
      location: 'Borneo - Eastern Region',
      time: '30 minutes ago',
      description: 'Unusual heat signature detected'
    }
  ];

  const getAlertColor = (type) => {
    switch (type) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Real-Time Alert Feed
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {alerts.map((alert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getAlertColor(alert.type)}`}>
                    {alert.type.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{alert.title}</h3>
                  <p className="text-gray-600">{alert.location}</p>
                  <p className="text-sm text-gray-500 mt-2">{alert.description}</p>
                </div>
                <span className="text-sm text-gray-500">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlertFeed; 