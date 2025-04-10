import React from 'react';

const HowItWorks = () => {
  const stages = [
    {
      title: "Satellite Monitoring",
      description: "Wide-scale surveillance for deforestation detection using satellite imagery and AI-powered change detection.",
      icon: "🛰️"
    },
    {
      title: "Drone-Based Surveillance",
      description: "Autonomous drones with thermal cameras detect and deter poaching activities in real-time.",
      icon: "🚁"
    },
    {
      title: "Sound + Heat Detection",
      description: "Advanced threat detection using audio AI and thermal sensors to identify illegal activities.",
      icon: "🔊"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          How InteliGreen Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{stage.icon}</div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                {stage.title}
              </h3>
              <p className="text-gray-600">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 