import React from 'react';
import { motion } from 'framer-motion';

const TakeActionPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative py-24 mb-12 bg-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Take Action Today</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
            Join us in our mission to protect and preserve our planet's forests
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
          {/* Report Issues Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/forest2.png')" }}></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Report Environmental Issues</h2>
              <p className="text-gray-600 mb-8">
                Help us identify and address environmental concerns in your area. Your reports make a real difference.
              </p>
              <button className="w-full bg-green-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
                <span>Report Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Join Community Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/forest1.png')" }}></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Join Our Community</h2>
              <p className="text-gray-600 mb-8">
                Connect with like-minded individuals and participate in local initiatives to make a lasting impact.
              </p>
              <button className="w-full bg-green-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
                <span>Get Involved</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Donate Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/forest3.png')" }}></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Support Our Cause</h2>
              <p className="text-gray-600 mb-8">
                Your contribution helps us continue our work in forest conservation and environmental protection.
              </p>
              <button className="w-full bg-green-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
                <span>Donate Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TakeActionPage;
