import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSeenTime = localStorage.getItem('lastSeenWelcomeModal');
    const currentTime = new Date().getTime();

    if (!lastSeenTime || (currentTime - parseInt(lastSeenTime) > 24 * 60 * 60 * 1000)) {
      setIsVisible(true);
      localStorage.setItem('lastSeenWelcomeModal', currentTime.toString());
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative h-[80vh] w-full max-w-4xl mx-4 sm:mx-8 md:mx-12">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute z-20 top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/forest2.png')",
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Gradient overlay with glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/90 to-green-900/80 backdrop-blur-lg"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-3xl w-full mt-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
              Welcome to IntelGreen
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-400">
              IntelGreen is an advanced platform that uses AI and satellite imagery to monitor and protect forests.
            </p>

            <div className="space-y-6 mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                What You'll See
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 mr-2 sm:mr-3 flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-white">{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Value We Provide
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <li key={index} className="p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 mr-2 sm:mr-3 flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-white">{value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
