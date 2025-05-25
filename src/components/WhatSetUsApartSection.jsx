import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Award, Users, Globe, Headphones } from 'lucide-react';

// What Sets EcoTrip Apart Component
const WhatSetsUsApartSection = () => {
  const stats = [
    {
      number: "10+",
      label: "Years of experience",
      icon: <Shield size={24} className="text-green-400" />
    },
    {
      number: "99%",
      label: "Success Rate",
      icon: <Award size={24} className="text-green-400" />
    },
    {
      number: "100%",
      label: "Safe & Well Being",
      icon: <Users size={24} className="text-green-400" />
    }
  ];

  const features = [
    {
      icon: <Shield size={20} className="text-green-400" />,
      title: "Professional Guides",
      description: "Expert wildlife guides"
    },
    {
      icon: <Award size={20} className="text-green-400" />,
      title: "Quality Assurance",
      description: "Premium service guaranteed"
    },
    {
      icon: <Users size={20} className="text-green-400" />,
      title: "Safety First",
      description: "Your safety is our priority"
    },
    {
      icon: <Globe size={20} className="text-green-400" />,
      title: "Global Reach",
      description: "Worldwide destinations"
    },
    {
      icon: <Headphones size={20} className="text-green-400" />,
      title: "24/7 Support",
      description: "Round the clock assistance"
    }
  ];

  return (
    <section className=" w-full py-16 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">What sets ecotrip apart</h2>
          
          {/* Stats Row */}
          <div className="flex justify-center items-center space-x-16 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Row */}
          <div className="flex justify-center items-center space-x-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center max-w-xs">
                <div className="mb-2 flex justify-center">{feature.icon}</div>
                <div className="text-white text-sm font-medium mb-1">{feature.title}</div>
                <div className="text-gray-400 text-xs">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatSetsUsApartSection;