import React from 'react';
import { Instagram, Youtube, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Social Media Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold">ecotrip</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-4">Let's connect with our socials</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <X size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Discover Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
              DISCOVER US
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Guest Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Customize Your Trip
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
              PAGES
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Indian Wildlife Destination
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  African Wildlife Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Moments With Our Guests
                </a>
              </li>
            </ul>
          </div>

          {/* Support and Contact Section */}
          <div className="space-y-8">
            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
                SUPPORT
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact US
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Leave Your Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
                Get In Touch
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>+91 1234567648</p>
                <p>hello@ecotrip.com</p>
                <p className="text-sm leading-relaxed">
                  23-B, Near Datta College<br />
                  Yavatmal, Maharashtra),<br />
                  pin code
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm">
            ©copyright 2024 all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;