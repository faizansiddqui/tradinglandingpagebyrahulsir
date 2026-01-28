"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isValidAccess, setIsValidAccess] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Check if this is a valid form submission by looking for a timestamp
    const saved = localStorage.getItem("thankyouData");
    if (!saved) {
      router.push("/");
      return;
    }
    
    try {
      const parsedData = JSON.parse(saved);
      
      // Additional validation: check if data has required fields and recent timestamp
      if (!parsedData.name || !parsedData.email || !parsedData.phone || !parsedData.timestamp) {
        router.push("/");
        return;
      }
      
      const submissionTime = new Date(parsedData.timestamp);
      const currentTime = new Date();
      const timeDiff = currentTime - submissionTime;
      
      // Allow access only if form was submitted within last 1 hour
      if (timeDiff >= 60 * 60 * 1000) { // 1 hour in milliseconds
        // Expired submission
        localStorage.removeItem("thankyouData");
        router.push("/");
        return;
      }
      
      // Valid submission - set data and allow access
      setData(parsedData);
      setIsValidAccess(true);
      
      // Clear the data after displaying it (one-time access)
      const timer = setTimeout(() => {
        localStorage.removeItem("thankyouData");
      }, 5000); // Remove after 5 seconds
      
      // Cleanup timer
      return () => clearTimeout(timer);
    } catch (e) {
      // Invalid JSON
      router.push("/");
    }
  }, []); // Only run once on mount

  // Show loading state while checking
  if (!isValidAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2F1F] via-[#0D3D2A] to-[#0A2F1F] text-white">
        <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00D9B8] border-t-transparent mx-auto"></div>
          <p className="mt-6 text-xl font-bold text-[#00D9B8]">Verifying your submission...</p>
          <p className="mt-2 text-gray-300">Please wait while we process your request</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2F1F] via-[#0D3D2A] to-[#0A2F1F] text-white p-4">
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl max-w-md w-full">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">Access Denied</h2>
          <p className="text-gray-300 mb-6">This page is only accessible after form submission</p>
          <Link 
            href="/" 
            className="inline-block bg-[#00D9B8] hover:bg-[#00B894] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2F1F] via-[#0D3D2A] to-[#0A2F1F] text-white flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md w-full mt-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-black text-[#00D9B8] mb-2">
            Thank You!
          </h1>
          <p className="text-gray-300">Your submission was successful</p>
        </div>

        {/* User Data */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
          <h2 className="text-lg font-bold text-[#00D9B8] mb-4 flex items-center gap-2">
            <span>📋</span> Your Details
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#00D9B8]/20 p-2 rounded-lg">
                <span className="text-[#00D9B8] font-bold">👤</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Name</p>
                <p className="text-white font-medium">{data.name}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#00D9B8]/20 p-2 rounded-lg">
                <span className="text-[#00D9B8] font-bold">@</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email</p>
                <p className="text-white font-medium">{data.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#00D9B8]/20 p-2 rounded-lg">
                <span className="text-[#00D9B8] font-bold">📞</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Phone</p>
                <p className="text-white font-medium">+91 {data.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
          <h3 className="font-bold text-[#00D9B8] mb-4 flex items-center gap-2">
            <span>📌</span> Next Steps
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#00D9B8] mt-1">✓</span>
              <span className="text-gray-300">Our team will contact you on <span className="text-[#00D9B8] font-bold">WhatsApp</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9B8] mt-1">✓</span>
              <span className="text-gray-300">Please save our number for future communication</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="w-full block text-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#00D9B8]/30"
        >
          ⬅ Back to Home
        </Link>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-4">
          We will get back to you within 24 hours
        </p>
      </div>
    </div>
  );
}
