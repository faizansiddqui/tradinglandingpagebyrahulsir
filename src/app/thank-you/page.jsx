"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  // Validate access and get data - pure function, no side effects
  const validateAccess = () => {
    if (typeof window === "undefined") return null;

    const saved = localStorage.getItem("thankyouData");
    if (!saved) return null;

    try {
      const parsedData = JSON.parse(saved);
      if (
        !parsedData.name ||
        !parsedData.email ||
        !parsedData.phone ||
        !parsedData.timestamp
      ) {
        return null;
      }

      const submissionTime = new Date(parsedData.timestamp);
      const currentTime = new Date();
      const timeDiff = currentTime - submissionTime;

      if (timeDiff >= 60 * 60 * 1000) {
        localStorage.removeItem("thankyouData");
        return null;
      }

      return parsedData;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    // Only run validation logic, don't set state directly
    const userData = validateAccess();

    if (!userData) {
      router.push("/");
      return;
    }

    // Set state outside the immediate effect execution
    setTimeout(() => {
      setData(userData);
    }, 0);

    // Setup cleanup timer
    const timer = setTimeout(() => {
      localStorage.removeItem("thankyouData");
    }, 10000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  // Show loading state while checking or if no data
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#A3E635] border-solid"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Glows for modern look */}
      <div className="fixed top-0 left-1/4 w-64 h-64 bg-[#A3E635]/10 blur-[100px] rounded-full"></div>
      <div className="fixed bottom-0 right-1/4 w-64 h-64 bg-[#A3E635]/10 blur-[100px] rounded-full"></div>

      <div className="relative bg-[#1A1A1A] border border-white/10 backdrop-blur-md rounded-[2rem] shadow-2xl p-6 sm:p-10 max-w-xl w-full overflow-hidden">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#75c13f]/20 to-[#5da432]/20 rounded-full mb-4">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
            REGISTRATION <span className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent">SUCCESSFUL!</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Welcome to the community of successful traders.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Details Section */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h2 className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest mb-4">
              Your Profile
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Full Name
                </p>
                <p className="text-sm font-semibold truncate">{data.name}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Email Address
                </p>
                <p className="text-sm font-semibold truncate">{data.email}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Contact No.
                </p>
                <p className="text-sm font-semibold">+91 {data.phone}</p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h3 className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest mb-4">
              Next Steps
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent font-bold">01.</span>
                <span className="text-gray-300">
                  Check your{" "}
                  <span className="text-white font-medium">WhatsApp</span> for
                  the updates.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent font-bold">02.</span>
                <span className="text-gray-300">
                  Our team will contact you shortly.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="bg-gradient-to-r from-[#75c13f] to-[#5da432] bg-clip-text text-transparent font-bold">03.</span>
                <span className="text-gray-300">
                  Join 10 mins early for the Live Session.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="w-full py-4 bg-gradient-to-r from-[#75c13f] to-[#5da432] hover:from-[#75c13f] hover:to-[#5da432] text-gray-900 font-black uppercase tracking-tighter text-center block rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(117,193,63,0.3)] hover:shadow-[0_0_30px_rgba(117,193,63,0.5)] active:scale-95"
          >
            Go to Home
          </Link>
          <p className="text-center text-[10px] text-gray-600 mt-4 uppercase font-bold tracking-widest">
            Mahhabali Education • India&apos;s No.1 Price Behavior Training
          </p>
        </div>
      </div>
    </div>
  );
}
