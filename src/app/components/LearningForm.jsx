import React, { useState } from 'react';
import { Users, Video, Award, Star } from 'lucide-react';
import Image from 'next/image';

export default function LearningForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  return (
    <div id="webinar" className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:top-1/4 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#00D9B8]/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 sm:bottom-1/4 sm:left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#00D9B8]/4 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* LEFT - Image + Badges Section */}
        <div className="relative hidden lg:flex lg:bg-gradient-to-br lg:from-white lg:to-gray-50 p-6 xl:p-12 items-center justify-center overflow-hidden border-r border-[#00D9B8]/10">
          {/* Floating badges - only on desktop */}
          <div className="absolute z-1 top-8 left-8 bg-[#00D9B8]/10 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-[#00D9B8]/20 text-sm">
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <Star className="w-4 h-4 text-[#00D9B8] fill-[#00D9B8]" />
              4.8
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 mt-1">
              <Users className="w-4 h-4 text-[#00D9B8]" />
              30K+ happy users
            </div>
          </div>

          <div className="absolute z-1 top-8 right-8 bg-white/60 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-gray-200/40 flex items-center gap-2 text-sm font-semibold">
            <Video className="w-4 h-4 text-[#00D9B8]" />
            Online Classes
          </div>

          <div className="absolute z-1 bottom-16 right-12 bg-[#00D9B8]/10 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-[#00D9B8]/20 flex items-center gap-2 text-sm font-bold">
            <Award className="w-4 h-4 text-[#00D9B8]" />
            Best Mentor in India
          </div>

          {/* Mentor Image - centered */}
          <div className="relative w-full max-w-md xl:max-w-lg">
            <div className="aspect-[3/4] bg-gradient-to-b from-white to-gray-50 rounded-3xl overflow-hidden border border-[#00D9B8]/20 shadow-2xl">
              <div className="w-full h-full flex flex-col items-center justify-end pb-10 px-6">
                <div className="w-full max-w-[340px] mb-6 bg-white/50 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    width={400}
                    height={400}
                    alt="Mentor Mahabali Price"
                    src="/tradingWeb.png"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl px-8 py-4 text-center border border-gray-200/30 shadow-md">
                  <p className="text-2xl font-bold text-gray-900">Mr. Suresh Latiyal</p>
                  <p className="text-gray-600 mt-1">Mahabali Price Action</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Form Section (always visible) */}
        <div className="bg-gradient-to-b from-white to-gray-50 px-5 py-12 sm:p-10 lg:p-12 flex items-center relative z-10">
          <div className="w-full max-w-xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let Our Experts Walk You Through The Details
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-600 flex items-center justify-center gap-3">
                Step-By-Step Clarity, Zero Confusion
                <span className="w-3 h-3 bg-[#00D9B8] rounded-full inline-block animate-pulse" />
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-[#00D9B8]/60 focus:border-[#00D9B8]/40 
                           outline-none transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-[#00D9B8]/60 focus:border-[#00D9B8]/40 
                           outline-none transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value="+91"
                    disabled
                    className="w-20 sm:w-24 px-3 sm:px-4 py-4 border border-gray-300 rounded-xl 
                             bg-gray-100 text-gray-600 font-medium text-center"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="flex-1 px-5 py-4 bg-white border border-gray-300 rounded-xl 
                             focus:ring-2 focus:ring-[#00D9B8]/60 focus:border-[#00D9B8]/40 
                             outline-none transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-[#00D9B8] hover:bg-[#00f0c9] 
                         text-gray-900 font-bold text-lg py-5 px-8 rounded-xl 
                         transition-all duration-300 transform hover:scale-[1.02] 
                         active:scale-[0.98] shadow-lg hover:shadow-[0_0_40px_rgba(0,217,184,0.35)]"
              >
                Enquire Now →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile-only simple mentor teaser */}
        <div className="lg:hidden px-6 py-10 bg-gradient-to-b from-gray-50/80 to-white border-t border-gray-100">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#00D9B8]/30 shadow-xl">
              <Image
                width={128}
                height={128}
                alt="Mahabali Price"
                src="/tradingWeb.png"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Mr. Suresh Latiyal</h3>
            <p className="text-gray-600 mt-1">Mahabali Price Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}