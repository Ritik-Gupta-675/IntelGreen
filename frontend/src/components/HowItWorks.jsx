import React from 'react';

const HowItWorks = () => {
  const stages = [
    {
      title: "Satellite Monitoring",
      description: "Wide-scale surveillance for deforestation detection using satellite imagery and AI-powered change detection."
    },
    {
      title: "Drone-Based Surveillance",
      description: "Autonomous drones with thermal cameras detect and deter poaching activities in real-time."
    },
    {
      title: "Sound + Heat Detection",
      description: "Advanced threat detection using audio AI and thermal sensors to identify illegal activities."
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
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