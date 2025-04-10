import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All News' },
    { id: 'deforestation', name: 'Deforestation' },
    { id: 'poaching', name: 'Poaching' },
    { id: 'wildfire', name: 'Wildfire' },
    { id: 'conservation', name: 'Conservation' }
  ];

  const timeFilters = [
    { id: 'all', name: 'All Time' },
    { id: '7d', name: 'Last 7 Days' },
    { id: '30d', name: 'Last 30 Days' },
    { id: '90d', name: 'Last 90 Days' }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Urgent: Forest Fire Spreads in Western Ghats",
      image: '/images/news/fire.jpg',
      source: 'Forest Department'
    },
    {
      id: 2,
      title: "Poaching Ring Busted in Kaziranga National Park",
      image: '/images/news/anti-poaching.jpg',
      source: 'WWF India'
    },
    {
      id: 3,
      title: "Government Launches New Anti-Deforestation Initiative",
      image: '/images/news/forest-protection.jpg',
      source: 'Ministry of Environment'
    },
    {
      id: 4,
      title: "Record Tree Planting Drive in Madhya Pradesh",
      image: '/images/news/tree-planting.jpg',
      source: 'Forest Department'
    }
  ];

  const filteredNews = newsItems.filter(news => {
    const matchesFilter = activeFilter === 'all';
    const matchesTime = timeFilter === 'all';
    return matchesFilter && matchesTime;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-32 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Latest Forest & Wildlife News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay updated on deforestation alerts, anti-poaching operations, and environmental breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* News Feed */}
        <div className="space-y-8">
          {filteredNews.map(news => (
            <div
              key={news.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* News Image */}
              {news.image && (
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
              )}

              {/* News Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {news.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Reported by {news.source}</span>
                  </div>
                </div>
              </div>

              {/* Overlay for loading state */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
