import React from 'react';
import { TrendingUp, Award, BookOpen, Target, BarChart3, Users, ArrowUp, Link2, Briefcase } from 'lucide-react';

export default function TradingAcademyFeatures() {
  const trustedPartners = [
    { name: 'NSE Academy', logo: '📊' },
    { name: 'BSE Institute', logo: '💹' },
    { name: 'SEBI Certified', logo: '🏛️' },
    { name: 'NISM Approved', logo: '✓' }
  ];

  const featuredCourses = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Technical Analysis',
      category: 'Most Popular',
      students: '15,234',
      iconBg: 'bg-orange-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Price Action',
      category: 'Top Rated',
      students: '12,890',
      iconBg: 'bg-blue-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Options Trading',
      category: 'New Batch',
      students: '8,456',
      iconBg: 'bg-purple-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Risk Management',
      category: 'Most Enrolled',
      students: '10,234',
      iconBg: 'bg-pink-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Intraday Trading',
      category: 'Trending',
      students: '9,876',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Live Market',
      category: 'Exclusive',
      students: '5,432',
      iconBg: 'bg-cyan-500'
    }
  ];

  const features = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: 'Live Trading Sessions With Expert Mentors'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Start Your Trading Journey Today'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Practical Market Analysis & Strategy'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Build Your Trading Portfolio'
    }
  ];

  const learningProgress = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      course: 'Technical Analysis',
      module: 'Module 5/10',
      progress: 4.5,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      course: 'Price Action',
      module: 'Module 3/8',
      progress: 3.2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <Target className="w-8 h-8" />,
      course: 'Options Trading',
      module: 'Module 6/12',
      progress: 5.1,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: <Award className="w-8 h-8" />,
      course: 'Risk Management',
      module: 'Module 4/6',
      progress: 4.8,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <div id="earn" className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <p className="text-gray-400 text-sm mb-8 tracking-wider">Trusted by top institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-4xl">{partner.logo}</span>
                <span className="text-lg font-semibold text-white">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="mb-20">
          <p className="text-gray-400 text-sm text-center mb-4 tracking-wider">Featured learning programs</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Top Trading Courses Updates
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${course.iconBg} p-3 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    {course.icon}
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm">
                  <Users className="w-4 h-4 inline mr-1" />
                  {course.students} Students
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div>
            <p className="text-gray-400 text-sm mb-4">Why choose <span className="text-orange-500">Mahabali Price Action</span></p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Features of the trading academy learning platform
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-800/50 transition-all cursor-pointer"
                >
                  <div className="bg-gray-700/50 p-3 rounded-lg text-orange-500">
                    {feature.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-300">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Learning Progress Card */}
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>

            {/* Progress Card */}
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Your learning progress</p>
                  <p className="text-3xl font-bold">
                    Up <span className="text-green-500">68%</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-2 rounded-full text-xs font-semibold">
                  🚀 Made in India
                </div>
              </div>

              <div className="space-y-4">
                {learningProgress.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex items-center justify-between hover:border-gray-600 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${item.bgColor} p-3 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{item.course}</p>
                        <p className="text-xs text-gray-400">{item.module}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 font-bold flex items-center gap-1">
                        {item.progress}% <ArrowUp className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart decoration */}
              <div className="mt-6 h-20 relative overflow-hidden rounded-xl">
                <svg className="w-full h-full" viewBox="0 0 400 80">
                  <path
                    d="M 0 60 Q 50 40, 100 45 T 200 35 T 300 30 T 400 20"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}