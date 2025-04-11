import React from 'react';

const HeroSection2 = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/forest2.png')" }}
      ></div>

      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-green-900 opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            No Forests
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            =
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            No Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
            Deforestation is the second largest source of carbon emissions, driving climate change and biodiversity loss.
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Rainforest Foundation US provides the tools, training, and resources that ensure the rainforests' best guardians are able to defend their rights — and their forests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
