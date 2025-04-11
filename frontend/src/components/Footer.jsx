import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InteliGreen</h3>
            <p className="text-green-200">
              Intelligent Surveillance for Earth's Lungs
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/guide" className="text-green-200 hover:text-white transition-colors">Guide</Link></li>
              <li><Link to="/blog" className="text-green-200 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@inteligreen.com" className="text-green-200 hover:text-white transition-colors">Email Us</a></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">Our Team</Link></li>
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