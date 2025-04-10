import React from 'react';

const TakeActionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Take Action</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Report Environmental Issues</h2>
          <p className="text-gray-600 mb-4">Help us identify and address environmental concerns in your area.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Report Now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-4">Connect with like-minded individuals and participate in local initiatives.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeActionPage;
