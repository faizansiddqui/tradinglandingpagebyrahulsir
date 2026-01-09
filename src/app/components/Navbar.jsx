"use client";

import { TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 bg-[#0A2F1F]/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#00D9B8]" strokeWidth={2.5} />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">Trading Action</span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-[#00D9B8] transition-colors font-medium">Features</a>
          <a href="#learning" className="text-gray-300 hover:text-[#00D9B8] transition-colors font-medium">Learn</a>
          <a href="#testimonials" className="text-gray-300 hover:text-[#00D9B8] transition-colors font-medium">Reviews</a>
          <a href="#pricing" className="text-gray-300 hover:text-[#00D9B8] transition-colors font-medium">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00D9B8] text-[#0A2F1F] rounded-lg font-semibold hover:bg-[#00F5D4] transition-all transform hover:scale-105 text-sm sm:text-base shadow-md">
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#00D9B8] hover:text-[#00F5D4] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-3 bg-[#0A2F1F]/90 rounded-lg">
          <a href="#features" className="block text-gray-300 hover:text-[#00D9B8] transition-colors py-2 px-4 font-medium">Features</a>
          <a href="#learning" className="block text-gray-300 hover:text-[#00D9B8] transition-colors py-2 px-4 font-medium">Learn</a>
          <a href="#testimonials" className="block text-gray-300 hover:text-[#00D9B8] transition-colors py-2 px-4 font-medium">Reviews</a>
          <a href="#pricing" className="block text-gray-300 hover:text-[#00D9B8] transition-colors py-2 px-4 font-medium">Pricing</a>
          <button className="w-full sm:hidden px-6 py-3 bg-[#00D9B8] text-[#0A2F1F] rounded-lg font-semibold hover:bg-[#00F5D4] transition-all shadow-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;