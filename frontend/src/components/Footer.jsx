import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InteliGreen</h3>
            <p className="text-green-200">
              Intelligent Surveillance for Earth's Lungs
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Forest Map</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Live Alerts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} InteliGreen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 