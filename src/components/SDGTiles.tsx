'use client';

import { useState } from 'react';
import { ArrowRight, Target, Users, Globe, Leaf, Droplets, Zap, Building, Factory, Scale, Building2, Recycle, Cloud, Fish, Trees, Shield, Handshake } from 'lucide-react';

const sdgData = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    icon: Target,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700"
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition",
    icon: Target,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700"
  },
  {
    id: 3,
    title: "Good Health",
    description: "Ensure healthy lives and promote well-being",
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700"
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education",
    icon: Users,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700"
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women",
    icon: Users,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-700"
  },
  {
    id: 6,
    title: "Clean Water",
    description: "Ensure availability of water and sanitation",
    icon: Droplets,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700"
  },
  {
    id: 7,
    title: "Affordable Energy",
    description: "Ensure access to affordable, reliable energy",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-700"
  },
  {
    id: 8,
    title: "Decent Work",
    description: "Promote sustained economic growth and employment",
    icon: Building,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700"
  },
  {
    id: 9,
    title: "Industry Innovation",
    description: "Build resilient infrastructure and foster innovation",
    icon: Factory,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700"
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    icon: Scale,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700"
  },
  {
    id: 11,
    title: "Sustainable Cities",
    description: "Make cities inclusive, safe, resilient and sustainable",
    icon: Building2,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700"
  },
  {
    id: 12,
    title: "Responsible Consumption",
    description: "Ensure sustainable consumption and production",
    icon: Recycle,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700"
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change",
    icon: Cloud,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700"
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use marine resources",
    icon: Fish,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700"
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore and promote terrestrial ecosystems",
    icon: Trees,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700"
  },
  {
    id: 16,
    title: "Peace Justice",
    description: "Promote peaceful and inclusive societies",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700"
  },
  {
    id: 17,
    title: "Partnerships",
    description: "Strengthen global partnerships for sustainable development",
    icon: Handshake,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700"
  }
];

// Function to generate consistent progress based on SDG ID
const getProgressPercentage = (sdgId: number): number => {
  // Use a deterministic approach based on SDG ID
  const progressValues = [
    35, 42, 28, 45, 38, 52, 31, 47, 25, 33, 41, 29, 36, 44, 27, 39, 43
  ];
  return progressValues[sdgId - 1] || 30;
};

export default function SDGTiles() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (sdgId: number) => {
    // Navigate to SDG shelf page
    console.log(`Navigating to SDG ${sdgId} shelf`);
    // You can implement navigation logic here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sdgData.map((sdg) => {
        const IconComponent = sdg.icon;
        const progressPercentage = getProgressPercentage(sdg.id);
        
        return (
          <div
            key={sdg.id}
            className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${sdg.bgColor} ${sdg.borderColor} border-2 rounded-xl p-6 hover:shadow-xl`}
            onMouseEnter={() => setHoveredCard(sdg.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(sdg.id)}
          >
            {/* SDG Number Badge */}
            <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${sdg.color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
              {sdg.id}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${sdg.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className={`text-lg font-bold mb-2 ${sdg.textColor}`}>
              {sdg.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {sdg.description}
            </p>

            {/* Explore Button */}
            <div className="flex items-center justify-between">
              <button className={`flex items-center gap-2 text-sm font-medium ${sdg.textColor} hover:underline`}>
                Explore Goal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${sdg.color} rounded-full transition-all duration-500`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">Progress</span>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            {hoveredCard === sdg.id && (
              <div className={`absolute inset-0 bg-gradient-to-r ${sdg.color} bg-opacity-10 rounded-xl transition-all duration-300`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
} 