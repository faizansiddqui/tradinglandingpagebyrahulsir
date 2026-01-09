import React, { useState } from 'react';
import { Users, Video, Award, Star } from 'lucide-react';
import Image from 'next/image';

export default function LearningForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    amount: '₹20,000 to ₹50,000',
    occupation: 'Student',
    whatsapp: 'Yes',
    emailUpdates: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  return (
    <div id="webinar" className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C5FF00]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#C5FF00]/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      </div>
      <div className="grid lg:grid-cols-2 min-h-screen relative ">
        {/* Left Section - Dark Background with Image */}
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 lg:p-12 flex items-center justify-center overflow-hidden border-r border-[#C5FF00]/10">
          {/* Floating Badges */}
          <div className="absolute top-8 left-8 bg-[#C5FF00]/10 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-[#C5FF00]/20">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#C5FF00] fill-[#C5FF00]" />
              <span className="font-bold text-white">4.8</span>
            </div>
            <div className="text-sm text-gray-300 font-medium flex items-center gap-1">
              <Users className="w-4 h-4 text-[#C5FF00]" />
              Join 30K+ happy users
            </div>
          </div>

          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 border border-white/10">
            <Video className="w-4 h-4 text-[#C5FF00]" />
            <span className="font-semibold text-white text-sm">Online Classes</span>
          </div>

          <div className="absolute left-8 z-1 top-1/2 -translate-y-1/2 bg-[#C5FF00]/10 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-[#C5FF00]/20">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-sm font-bold text-white">Happy Students</span>
              <span className="text-lg">🤗</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5FF00] to-[#a3cc00] border-2 border-[#C5FF00]/20 flex items-center justify-center text-black text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-1/3 z-1 right-8 bg-[#C5FF00]/10 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg border border-[#C5FF00]/20">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5FF00]" />
              <span className="font-bold text-white text-sm">Best Mentor in India</span>
            </div>
          </div>

          {/* Mentor Image Placeholder */}
          <div className="relative w-full max-w-md ">
            <div className="aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl shadow-2xl overflow-hidden border border-[#C5FF00]/30">
              <div className="w-full h-full flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <div className="w-full mx-auto mb-4 bg-black/20 rounded-full flex items-center justify-center">
                    <Image
                      width={380}
                      height={380}
                      alt='Mentor Image'
                      src={"https://i.pinimg.com/1200x/7a/75/f6/7a75f6682f7fcc2bc0b9a7e9800587b0.jpg"}
                      className=" text-[#C5FF00]/50 rounded-2xl" 
                    />
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg px-6 py-2 inline-block border border-white/10">
                    <p className="text-lg font-bold">Trendy Traders</p>
                    <p className="text-sm text-gray-300">Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 lg:p-12 flex items-center overflow-y-auto border-l border-[#C5FF00]/10">
          <div className="w-full max-w-2xl mx-auto">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Let Our Experts Walk You Through The Details
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-lg text-gray-300">Step-By-Step Clarity, Zero Confusion</p>
                <div className="w-3 h-3 bg-[#C5FF00] rounded-full"></div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="+91"
                    disabled
                    className="w-20 px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 font-medium"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Age (Please fill the form only if you are 18+) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white placeholder-gray-400"
                />
              </div>

              {/* Amount and Occupation */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Amount you want to trade with? <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white appearance-none cursor-pointer"
                  >
                    <option>₹20,000 to ₹50,000</option>
                    <option>₹50,000 to ₹1,00,000</option>
                    <option>₹1,00,000 to ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    What is your occupation? <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white appearance-none cursor-pointer"
                  >
                    <option>Student</option>
                    <option>Employed</option>
                    <option>Self-Employed</option>
                    <option>Business Owner</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  I would like to receive the brochure via WhatsApp <span className="text-red-400">*</span>
                </label>
                <select
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C5FF00] focus:border-transparent outline-none transition text-white appearance-none cursor-pointer"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Email Updates Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="emailUpdates"
                  id="emailUpdates"
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#C5FF00] border-gray-600 rounded focus:ring-[#C5FF00] bg-gray-800 cursor-pointer"
                />
                <label htmlFor="emailUpdates" className="text-sm text-gray-300 cursor-pointer">
                  I agree to receive email updates
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#C5FF00] hover:bg-[#d4ff33] text-black font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[0_0_30px_rgba(197,255,0,0.3)]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}