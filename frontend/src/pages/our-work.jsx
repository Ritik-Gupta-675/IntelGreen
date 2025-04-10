import React from 'react';
import { motion } from 'framer-motion';

const OurWorkPage = () => {
  const workItems = [
    {
      icon: '📡',
      title: 'Satellite Monitoring',
      description: 'We analyze satellite data to detect illegal deforestation across India in real-time, using change detection models and AI-driven terrain comparison.',
      stats: [
        { label: 'Area Monitored', value: '100,000 km²' },
        { label: 'Satellite Passes', value: '24/hour' },
      ]
    },
    {
      icon: '🚁',
      title: 'Drone Surveillance',
      description: 'Our drones capture real-time aerial and thermal visuals to track illegal poaching and human intrusions, even under thick forest canopies.',
      stats: [
        { label: 'Active Drones', value: '50+' },
        { label: 'Flight Hours', value: '1000+' },
      ]
    },
    {
      icon: '🔍',
      title: 'Intelligent Threat Detection',
      description: 'We identify patterns like gunshots, chainsaw sounds, animal distress calls, and hidden thermal signatures to catch threats before damage is done.',
      stats: [
        { label: 'Alerts Generated', value: '500/month' },
        { label: 'Accuracy Rate', value: '95%' },
      ]
    }
  ];

  const impactStats = [
    { label: 'Forest Area Monitored', value: '100,000 km²', icon: '🌲' },
    { label: 'Deforestation Cases Flagged', value: '500+', icon: '🚫' },
    { label: 'Poaching Alerts Triggered', value: '200+', icon: '🛡️' },
    { label: 'Wildlife Areas Protected', value: '100+', icon: '🦜' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-6">
            Our Mission, Our Methods
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            How IntelGreen is using intelligent technology to protect Earth’s forests and wildlife
          </p>
        </div>
      </section>

      {/* Work Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center text-4xl text-green-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{stat.label}: {stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-green-50 p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-green-800 mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Join the Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be a part of the AI-driven environmental revolution.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/take-action"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Take Action
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
