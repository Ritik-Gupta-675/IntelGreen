import React from 'react';

const NewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News items will be dynamically populated */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Environmental News</h2>
          <p className="text-gray-600">Stay updated with the latest environmental news and developments.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
