'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Eye } from 'lucide-react';

const featuredContent = [
  {
    id: 1,
    title: "Climate Action: Global Initiatives Making Real Impact",
    description: "Discover how countries and organizations are implementing effective climate solutions and achieving measurable results in reducing carbon emissions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
    category: "Climate Action",
    readTime: "5 min read",
    views: "2.3k",
    trending: true,
    sdg: "SDG 13"
  },
  {
    id: 2,
    title: "Sustainable Cities: Urban Innovation for the Future",
    description: "Explore cutting-edge urban development projects that are creating more livable, sustainable cities around the world.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    category: "Sustainable Cities",
    readTime: "7 min read",
    views: "1.8k",
    trending: true,
    sdg: "SDG 11"
  },
  {
    id: 3,
    title: "Clean Energy Revolution: Solar and Wind Power Breakthroughs",
    description: "Latest developments in renewable energy technology and how they're transforming the global energy landscape.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    category: "Clean Energy",
    readTime: "6 min read",
    views: "3.1k",
    trending: false,
    sdg: "SDG 7"
  },
  {
    id: 4,
    title: "Ocean Conservation: Protecting Marine Biodiversity",
    description: "Learn about innovative marine conservation efforts and how they're helping to preserve our oceans for future generations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    category: "Ocean Conservation",
    readTime: "4 min read",
    views: "1.5k",
    trending: true,
    sdg: "SDG 14"
  },
  {
    id: 5,
    title: "Circular Economy: Redefining Waste as Resource",
    description: "How businesses and communities are embracing circular economy principles to create sustainable value chains.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    category: "Circular Economy",
    readTime: "8 min read",
    views: "2.7k",
    trending: false,
    sdg: "SDG 12"
  }
];

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Ensure component only runs on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance slides only on client side
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isClient]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Don't render carousel until client side
  if (!isClient) {
    return (
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-96 md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-2xl mx-auto px-6 md:px-12">
                <div className="h-8 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-12 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredContent.map((content, index) => (
            <div key={content.id} className="w-full flex-shrink-0">
              <div className="relative h-96 md:h-[500px]">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${content.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative h-full flex items-center">
                  <div className="max-w-2xl mx-auto px-6 md:px-12 text-white">
                    {/* Category and Trending Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {content.sdg}
                      </span>
                      {content.trending && (
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {content.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                      {content.description}
                    </p>
                    
                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        {content.views} views
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <button className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-green-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Featured Content Preview */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredContent.slice(0, 3).map((content) => (
          <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                  {content.sdg}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {content.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{content.readTime}</span>
                <span>{content.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 