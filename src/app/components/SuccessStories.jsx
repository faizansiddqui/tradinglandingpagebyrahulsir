import React from 'react';
import { TrendingUp, Award, Users, ArrowRight, GraduationCap, DollarSign } from 'lucide-react';

const successStories = [
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional, Hyderabad',
    before: 'Lost ₹75,000 in impulsive trades',
    after: 'Now manages ₹5 Lakh portfolio with 250% growth',
    profit: '₹2,50,000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    name: 'Anita Desai',
    role: 'Freelance Designer, Ahmedabad',
    before: 'Struggled with market volatility',
    after: 'Achieved consistent 15% monthly returns',
    profit: '₹1,20,000',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    name: 'Suresh Reddy',
    role: 'Small Business Owner, Chennai',
    before: 'No knowledge of technical analysis',
    after: 'Turned ₹1 Lakh into ₹3.5 Lakh in 6 months',
    profit: '₹2,50,000',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 4.9
  },
  {
    name: 'Meera Singh',
    role: 'MBA Student, Kolkata',
    before: 'Confused by options trading',
    after: 'Mastered strategies, earning passive income',
    profit: '₹80,000',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    name: 'Arjun Patel',
    role: 'Retired Engineer, Pune',
    before: 'Missed opportunities in bull market',
    after: 'Built diversified portfolio with 180% ROI',
    profit: '₹3,00,000',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    name: 'Kavita Sharma',
    role: 'Teacher, Jaipur',
    before: 'Feared stock market risks',
    after: 'Confident trader with steady profits',
    profit: '₹1,50,000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5
  }
];

export default function SuccessStoriesSection() {
  return (
    <div className="relative bg-[#0a0a0a] text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C5FF00]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#C5FF00]/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C5FF00]/10 border border-[#C5FF00]/20 mb-8 mx-auto max-w-max">
            <div className="w-2 h-2 rounded-full bg-[#C5FF00] animate-pulse"></div>
            <span className="text-[#C5FF00] text-sm font-semibold tracking-wide uppercase">Real Transformations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="text-[#C5FF00]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how our students turned their trading dreams into reality. From beginners to profitable traders.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={index} 
              className="relative bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#C5FF00]/20 rounded-3xl p-6 hover:border-[#C5FF00]/40 transition-all hover:scale-105 group overflow-hidden"
            >
              {/* Image and Profit Badge */}
              <div className="relative mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-110 transition-transform"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#C5FF00] to-[#a3cc00] text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  +{story.profit} Profit
                </div>
                <div className="absolute bottom-4 left-4 bg-[#C5FF00]/10 border border-[#C5FF00]/30 p-2 rounded-full">
                  <DollarSign className="w-5 h-5 text-[#C5FF00]" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Award
                        key={i}
                        className={`w-4 h-4 ${i < story.rating ? 'text-[#C5FF00] fill-[#C5FF00]' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({story.rating}/5)</span>
                </div>

                <h3 className="font-bold text-xl">{story.name}</h3>
                <p className="text-sm text-gray-400">{story.role}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <TrendingUp className="w-4 h-4 text-red-400" />
                    <span>Before: {story.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 font-medium">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>After: {story.after}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#C5FF00]/10">
                  <button className="w-full bg-gradient-to-r from-[#C5FF00] via-[#d4ff33] to-[#C5FF00] text-black font-bold py-3 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(197,255,0,0.3)] tracking-wide flex items-center justify-center gap-2">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#C5FF00]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-[#C5FF00]/10">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Join thousands of students who achieved financial freedom through our proven trading academy.
          </p>
          <button className="bg-[#C5FF00] hover:bg-[#d4ff33] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(197,255,0,0.4)] transition-all tracking-wide flex items-center gap-3 mx-auto">
            Start Your Journey
            <GraduationCap className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}