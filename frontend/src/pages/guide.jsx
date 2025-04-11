import React from 'react';
import { motion } from 'framer-motion';

const GuideMe = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <div>
          <p className="text-lg mb-4">
            Welcome to IntelGreen, your powerful tool for real-time deforestation monitoring and unauthorized activity detection.
          </p>
          <p className="text-gray-600">
            This platform uses advanced AI-powered analytics to help you monitor and protect restricted zones effectively.
          </p>
        </div>
      )
    },
    {
      title: 'How to Analyze the Map',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Map Visuals:</strong> The map displays different colors to indicate various conditions:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Red areas: Active deforestation zones</li>
            <li>Green areas: Safe zones</li>
            <li>Yellow areas: Potential risk zones</li>
          </ul>
          <p className="text-gray-600">
            <strong>Navigation Tips:</strong> Use the zoom controls and drag the map to explore different areas.
          </p>
        </div>
      )
    },
    {
      title: 'Detecting Unauthorized Entries',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            The system uses advanced sensors and thermal cameras to detect unauthorized human presence in restricted zones.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Real-time alerts for detected intrusions</li>
            <li>Image capture with coordinates</li>
            <li>Immediate notification system</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Understanding the Images',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Our platform uses multiple imaging technologies to provide comprehensive monitoring:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Satellite Images: High-resolution overview of large areas</li>
            <li>Drone Captures: Detailed ground-level views</li>
            <li>Thermal Images: Detection of heat signatures and movement</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Alert System Guide',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Alert Features:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Real-time notifications for critical events</li>
            <li>Alert history and timeline</li>
            <li>Customizable alert preferences</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Additional Tips',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Use a larger screen for better map navigation</li>
            <li>Regularly check alert notifications</li>
            <li>Keep your device updated for latest features</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Guide Me: How to Use IntelGreen
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-700">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideMe;
