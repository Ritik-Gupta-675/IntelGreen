import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const blogPost = {
    id: 1,
    title: "How AI is Protecting India's Forests",
    content: `
      <div className="prose prose-lg prose-green max-w-none">
        <p class="lead mb-8">In recent years, artificial intelligence has emerged as a powerful tool in the fight against deforestation and illegal logging. Across India's vast forested regions, AI-powered systems are being deployed to monitor and protect these vital ecosystems.</p>
        
        <h2 class="mb-8">The Technology Behind Forest Protection</h2>
        <p class="mb-6">Advanced machine learning algorithms analyze satellite imagery and drone footage to detect changes in forest cover. These systems can identify patterns of illegal logging, track wildlife movements, and even predict potential deforestation hotspots before they occur.</p>
        
        <h2 class="mb-8">Real-World Impact</h2>
        <p class="mb-6">In the Western Ghats, one of India's most biodiverse regions, AI monitoring systems have helped reduce illegal logging by 45% in the past year. Forest rangers now receive real-time alerts when suspicious activities are detected, allowing for rapid response to potential threats.</p>
        
        <h2 class="mb-8">Future Prospects</h2>
        <p class="mb-6">As the technology continues to evolve, we're seeing even more innovative applications. From predictive analytics that help prevent forest fires to automated wildlife tracking systems, AI is revolutionizing how we protect and manage our forests.</p>
      </div>
    `,
    author: "Dr. Priya Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/ai-forests.jpg",
    category: "Technology"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative">
        <div className="h-[70vh] bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <span className="inline-block px-5 py-2 bg-green-600 text-white text-base font-medium rounded-full mb-6">
                  {blogPost.category}
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">{blogPost.title}</h1>
                <div className="flex items-center text-lg text-white/90">
                  <span>{blogPost.author}</span>
                  <span className="mx-4">•</span>
                  <span>{blogPost.date}</span>
                  <span className="mx-4">•</span>
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-12">
            <div 
              className="prose prose-lg prose-green max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>

        {/* Share and Navigation */}
        <div className="mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                <Link 
                  to="/blog"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200 group"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="group-hover:text-green-700 transition-colors duration-200">Back to Blog</span>
                </Link>
                <div className="flex gap-6">
                  <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                    <svg className="w-6 h-6 group-hover:text-gray-900 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                    <span className="sr-only">Share</span>
                  </button>
                  <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                    <svg className="w-6 h-6 group-hover:text-gray-900 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="sr-only">Bookmark</span>
                  </button>
                  <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
                    <svg className="w-6 h-6 group-hover:text-gray-900 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="sr-only">Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;