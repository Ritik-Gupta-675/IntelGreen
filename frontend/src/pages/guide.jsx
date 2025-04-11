import React from 'react';
import { motion } from 'framer-motion';

const GuideMe = () => {
  const sections = [
    {
      title: 'Welcome to IntelGreen Data Analytics',
      content: (
        <div>
          <p className="text-lg mb-4">
            Welcome to IntelGreen's powerful data analytics platform! Our platform provides comprehensive environmental monitoring data to help you make informed decisions about deforestation, unauthorized activities, and environmental changes.
          </p>
          <p className="text-black">
            This guide will help you understand how to access, analyze, and extract valuable insights from our data. Whether you're a beginner or an experienced analyst, you'll find valuable information here.
          </p>
        </div>
      )
    },
    {
      title: 'Understanding Our Data',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Data Types Available:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Satellite Imagery Data</li>
            <li>Thermal Imaging Data</li>
            <li>Environmental Sensor Data</li>
            <li>Historical Activity Records</li>
            <li>Real-time Monitoring Data</li>
          </ul>
          <p className="text-gray-600">
            <strong>Key Data Attributes:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Location Coordinates (Latitude/Longitude)</li>
            <li>Time Stamps</li>
            <li>Environmental Metrics (Temperature, Humidity)</li>
            <li>Activity Detection Scores</li>
            <li>Image Quality Metrics</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Accessing the Data',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>How to Navigate:</strong>
          </p>
          <ol className="list-decimal pl-5 text-gray-600">
            <li>Click on the "Data" tab in the main navigation</li>
            <li>Select your desired data type from the dropdown menu</li>
            <li>Use the date range selector to filter the data</li>
            <li>Apply additional filters as needed (location, activity type, etc.)</li>
          </ol>
          <p className="text-gray-600 mt-4">
            <strong>Download Options:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>CSV format for spreadsheet analysis</li>
            <li>JSON format for programming integration</li>
            <li>GeoJSON for geographic data visualization</li>
            <li>Image data in various formats (JPEG, TIFF)</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Analyzing the Data',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Basic Analysis Tips:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Use time series analysis to track changes over time</li>
            <li>Apply spatial analysis to identify patterns in specific areas</li>
            <li>Utilize statistical methods to identify anomalies</li>
            <li>Create heatmaps to visualize activity density</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>Advanced Analysis:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Machine learning models for predictive analytics</li>
            <li>Image processing for pattern recognition</li>
            <li>Geospatial analysis for environmental impact assessment</li>
            <li>Time-series forecasting for trend prediction</li>
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
            <li>Import CSV data using Power Query</li>
            <li>Create pivot tables for data analysis</li>
            <li>Use Power BI for advanced visualization</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Suggested Use Cases',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Common Questions to Explore:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>What areas are experiencing the highest deforestation rates?</li>
            <li>When do unauthorized activities typically occur?</li>
            <li>How does environmental data correlate with activity patterns?</li>
            <li>What are the seasonal patterns in activity detection?</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>Example Projects:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Create heatmaps of activity hotspots</li>
            <li>Develop predictive models for deforestation</li>
            <li>Analyze temporal patterns of unauthorized activities</li>
            <li>Conduct environmental impact assessments</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Need Help?',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Support Resources:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Documentation: Check our comprehensive API documentation</li>
            <li>Community: Join our user forum for peer support</li>
            <li>Tutorials: Watch our video tutorials on data analysis</li>
            <li>Contact: Reach out to our support team at support@inteligreen.com</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>Best Practices:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Start with small datasets for testing</li>
            <li>Document your analysis process</li>
            <li>Regularly update your data sources</li>
            <li>Share your findings with the community</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-600">
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
