import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'deforestation', name: 'Deforestation' },
    { id: 'technology', name: 'Technology' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Protecting India's Forests",
      summary: "Exploring how artificial intelligence and machine learning are revolutionizing forest conservation efforts across India.",
      category: 'technology',
      date: 'March 15, 2024',
      image: '/images/blog/ai-forests.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: "Thermal Drones vs Poachers: A New Era",
      summary: "How thermal imaging drones are becoming the frontline defense against illegal poaching activities in protected areas.",
      category: 'technology',
      date: 'March 10, 2024',
      image: '/images/blog/thermal-drones.jpg',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: "What 10 Years of Satellite Data Reveals",
      summary: "A comprehensive analysis of deforestation patterns and environmental changes captured through satellite monitoring.",
      category: 'deforestation',
      date: 'March 5, 2024',
      image: '/images/blog/satellite-data.jpg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: "The Rise of Eco-Tech in Conservation",
      summary: "Examining how emerging technologies are transforming traditional conservation methods and practices.",
      category: 'technology',
      date: 'February 28, 2024',
      image: '/images/blog/eco-tech.jpg',
      readTime: '5 min read'
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IntelGreen Journal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Latest updates, discoveries, and environmental insights from the field
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Categories */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-green-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white text-gray-800 hover:bg-gray-100 shadow-md hover:shadow-lg'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-80 bg-gray-200 relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <span>{post.date}</span>
                  <span className="mx-3">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-700 line-clamp-3 mb-8">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200">
                    Read More
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;