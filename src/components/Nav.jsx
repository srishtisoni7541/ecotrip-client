import React, { useState } from 'react';
import { User, Menu, X, Star, MapPin, Calendar, Users, ArrowRight, Phone, Mail, Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Navbar Component
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-gray-800">ecotrip</span>
          <div className="w-2 h-2 bg-[#2A9F00] rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center bg-green-100 rounded-full px-6 py-2 space-x-6">
            <NavLink to='/'  className="text-gray-700 hover:text-gray-900 transition-colors font-medium">   Home </NavLink>
            
            <a href="#tours" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Tours</a>
            <a href="#destinations" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Destinations</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Testimonials</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About us</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact us</a>
          </div>
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <User size={18} className="text-gray-600" />
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;