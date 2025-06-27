import { Search, TrendingUp, Calendar, MapPin, BookOpen, Target, Users } from 'lucide-react';
import SDGTiles from '@/components/SDGTiles';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import GlobalSearch from '@/components/GlobalSearch';
import CallToActionButtons from '@/components/CallToActionButtons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ecopedia
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your gateway to sustainable development knowledge. Explore, learn, and take action 
              towards a better future for our planet.
            </p>
            
            {/* Global Search Bar */}
            <div className="mb-12">
              <GlobalSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Carousel */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with current SDG issues and trending sustainability topics
            </p>
          </div>
          <FeaturedCarousel />
        </div>
      </section>

      {/* Interactive SDG Tiles */}
      <section className="py-16 bg-gradient-to-r from-green-100/50 to-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-600">
              Explore the 17 SDGs and discover how you can contribute to each goal
            </p>
          </div>
          <SDGTiles />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600">
              Choose your path to sustainability and start your journey today
            </p>
          </div>
          <CallToActionButtons />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-green-100">Articles & Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Local Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">17</div>
              <div className="text-green-100">SDG Goals Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
