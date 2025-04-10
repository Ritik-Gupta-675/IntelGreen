import React from 'react';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';

const OurWorkPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Our Work</h1>
      <HowItWorks />
      <Stats />
    </div>
  );
};

export default OurWorkPage;
