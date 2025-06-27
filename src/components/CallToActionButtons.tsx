'use client';

import { BookOpen, Target, Calendar, ArrowRight, TrendingUp, MapPin, Users } from 'lucide-react';

export default function CallToActionButtons() {
  const actions = [
    {
      title: "Explore Articles",
      description: "Dive into our comprehensive library of sustainability articles, research papers, and educational content",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      stats: "1,000+ Articles",
      action: () => console.log("Navigate to Articles")
    },
    {
      title: "Track Impact",
      description: "Monitor your sustainability journey and see the real-world impact of your actions and contributions",
      icon: Target,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      stats: "Track Progress",
      action: () => console.log("Navigate to Impact Tracker")
    },
    {
      title: "Join Local Events",
      description: "Connect with your community through sustainability events, workshops, and volunteer opportunities",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      stats: "500+ Events",
      action: () => console.log("Navigate to Events")
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {actions.map((action, index) => {
        const IconComponent = action.icon;
        return (
          <div
            key={index}
            className={`group relative overflow-hidden ${action.bgColor} ${action.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            onClick={action.action}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Icon */}
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold mb-4 ${action.textColor}`}>
              {action.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {action.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">
                {action.stats}
              </span>
            </div>

            {/* Action Button */}
            <button className={`group/btn w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r ${action.color} text-white font-semibold hover:shadow-lg transition-all duration-200 transform group-hover:scale-105`}>
              Get Started
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Hover Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
          </div>
        );
      })}
    </div>
  );
} 