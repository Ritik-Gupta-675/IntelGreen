import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      setIsVisible(true);
      localStorage.setItem('hasSeenWelcomeModal', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const features = [
    'Real-time deforestation alerts',
    'Person detection in protected areas',
    'Comprehensive analytics and reports',
  ];

  const values = [
    'Early detection of deforestation activities',
    'Real-time monitoring of protected areas',
    'Data-driven insights for conservation efforts',
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <img
            src="/forest2.png"
            alt="Forest"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 text-center p-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to IntelGreen
          </h2>
          
          <p className="text-xl text-white mb-8">
            IntelGreen is an advanced platform that uses AI and satellite imagery to monitor and protect forests.
          </p>

          <div className="space-y-6 mb-8">
            <h3 className="text-3xl font-semibold text-white">
              What You'll See
            </h3>
            <ul className="space-y-4 text-white">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white">
              Value We Provide
            </h3>
            <ul className="space-y-4 text-white">
              {values.map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white bg-green-500 p-2 rounded-full hover:bg-green-400"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
