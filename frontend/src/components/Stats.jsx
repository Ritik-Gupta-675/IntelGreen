import React from 'react';

const Stats = () => {
  const stats = [
    {
      title: "Forest Area Protected",
      value: "2.5M",
      unit: "acres",
      icon: "🌳"
    },
    {
      title: "Deforestation Incidents Prevented",
      value: "1",
      unit: "incidents",
      icon: "🛡️"
    },
    {
      title: "Active Drones",
      value: "1",
      unit: "drones",
      icon: "🚁"
    },
    {
      title: "Alerts in Last 24h",
      value: "1",
      unit: "alerts",
      icon: "🔔"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.title}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {stat.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 