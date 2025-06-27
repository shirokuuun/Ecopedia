'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const sdgGoals = [
  'All SDGs', 'No Poverty', 'Zero Hunger', 'Good Health', 'Quality Education',
  'Gender Equality', 'Clean Water', 'Affordable Energy', 'Decent Work',
  'Industry Innovation', 'Reduced Inequalities', 'Sustainable Cities',
  'Responsible Consumption', 'Climate Action', 'Life Below Water',
  'Life on Land', 'Peace Justice', 'Partnerships'
];

const contentTypes = [
  'All Types', 'Articles', 'Research Papers', 'Case Studies', 'Videos',
  'Infographics', 'Webinars', 'Reports', 'Toolkits'
];

const years = ['All Years', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

const regions = [
  'All Regions', 'Global', 'Africa', 'Asia', 'Europe', 'North America',
  'South America', 'Oceania', 'Middle East'
];

export default function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSDG, setSelectedSDG] = useState('All SDGs');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search:', {
      query: searchQuery,
      sdg: selectedSDG,
      type: selectedType,
      year: selectedYear,
      region: selectedRegion
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Main Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for sustainability content, SDG topics, or specific issues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <Filter className="h-5 w-5" />
            <span className="hidden sm:inline">Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            {/* SDG Goal Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SDG Goal
              </label>
              <select
                value={selectedSDG}
                onChange={(e) => setSelectedSDG(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {sdgGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            {/* Content Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {contentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Search Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Search Content
          </button>
        </div>
      </form>
    </div>
  );
} 