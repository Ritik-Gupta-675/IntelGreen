import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ritik Gupta',
    role: 'Frontend Developer',
    description: 'Designed and built a responsive, clean, and intuitive UI for IntelGreen, ensuring an engaging experience for users.',
    image: 'https://avatars.githubusercontent.com/u/940001?v=4', // Replace with actual profile image
    color: 'bg-green-500'
  },
  {
    name: 'Manvir Singh',
    role: 'Backend Developer',
    description: 'Developed and integrated APIs, database systems, and backend logic powering the real-time map, alerts, and forest data.',
    image: 'https://avatars.githubusercontent.com/u/940002?v=4', // Replace with actual profile image
    color: 'bg-blue-500'
  },
  {
    name: 'Praveen Shahi',
    role: 'Machine Learning Engineer',
    description: 'Worked on satellite imagery analysis and deforestation detection using change detection models.',
    image: 'https://avatars.githubusercontent.com/u/940003?v=4', // Replace with actual profile image
    color: 'bg-purple-500'
  },
  {
    name: 'Prince Kumar',
    role: 'ML & AI Specialist',
    description: 'Implemented audio and thermal-based detection models for identifying gunshots, poaching activity, and environmental anomalies.',
    image: 'https://avatars.githubusercontent.com/u/940004?v=4', // Replace with actual profile image
    color: 'bg-pink-500'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-6">
            Meet the Minds Behind IntelGreen
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            A dedicated team of professionals committed to protecting our forests and wildlife using advanced technology and intelligent monitoring systems.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform translate-y-1/2"></div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Built Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Mission-Driven Innovation
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              IntelGreen was founded with a clear vision: to leverage cutting-edge technology to solve one of Earth’s biggest crises — deforestation and wildlife poaching. 
              We've built a comprehensive platform that combines satellite data, drone surveillance, thermal detection, and artificial intelligence to create a powerful monitoring and alert system.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <div className="h-1 bg-green-100 w-1/4"></div>
              <div className="h-1 bg-green-200 w-1/4"></div>
              <div className="h-1 bg-green-300 w-1/4"></div>
              <div className="h-1 bg-green-400 w-1/4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">UI/UX</h3>
                <p className="text-gray-600">Clean, intuitive interface</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">Backend</h3>
                <p className="text-gray-600">Real-time data processing</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">ML Models</h3>
                <p className="text-gray-600">Advanced detection algorithms</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">Integration</h3>
                <p className="text-gray-600">Unified platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <blockquote className="text-2xl font-semibold text-green-800 mb-4">
                "We believe that forests aren’t just resources — they’re life itself. With IntelGreen, we aim to give nature its own line of defense."
              </blockquote>
              <p className="text-gray-500 italic">— The IntelGreen Team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To protect and preserve Earth's natural habitats using cutting-edge technology and intelligent monitoring systems.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  Real-time monitoring, rapid response, and proactive protection of wildlife and forests across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
