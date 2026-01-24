import React, { useState, useEffect } from "react";
import {
  Users,
  Video,
  Award,
  Star,
  User,
  Mail,
  Phone,
  ChevronRight,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function LearningForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          // Timer reached 0, reset to 30 minutes
          return 30 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}h ${mins
      .toString()
      .padStart(2, "0")}m ${secs.toString().padStart(2, "0")}s`;
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("webinar");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! Our team will contact you shortly.");
  };

  return (
    <div
      id="webinar"
      className="relative min-h-screen bg-[#f8fafc] flex items-center justify-center overflow-hidden py-12 px-4"
    >
      {/* --- Background Design --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00D9B8_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00D9B8]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* LEFT PANEL: Mentor Visuals (Desktop) */}
          <div className="relative hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-50 to-white border-r border-slate-100">
            {/* Badges */}
            <div className="absolute top-10 left-10 animate-float">
              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800 leading-none">
                    4.8/5
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                    Top Rated Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-10 animate-float delay-700">
              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="bg-[#00D9B8] p-2 rounded-lg text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800 leading-none">
                    30K+
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                    Active Students
                  </p>
                </div>
              </div>
            </div>

            {/* Main Mentor Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00D9B8]/20 rounded-full blur-3xl group-hover:bg-[#00D9B8]/30 transition-all duration-500" />
              <div className="relative w-72 h-96 xl:w-120 xl:h-[500px] bg-white rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  fill
                  alt="Mentor Mahabali"
                  src="/tradingWeb.png"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-black text-slate-800">
                Mr. Suresh Latiyal
              </h3>
              <p className="text-[#00D9B8] font-bold tracking-[0.2em] uppercase text-sm mt-1">
                Price Action Expert
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Form Section */}
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="max-w-md mx-auto">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.15]">
                  Start Your <span className="text-[#00D9B8]">Trading</span>{" "}
                  Journey Today
                </h2>
                <p className="mt-4 text-slate-500 font-medium">
                  Fill the form below to get a personalized roadmap from our
                  experts.
                </p>

                {/* Mobile Mentor Teaser (Hidden on Desktop) */}
                <div className="flex lg:hidden items-center gap-4 mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-[#00D9B8]">
                    <Image
                      width={48}
                      height={48}
                      src="/tradingWeb.png"
                      alt="Suresh Latiyal"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800">
                      Mr. Suresh Latiyal
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-[#00D9B8] font-black uppercase tracking-widest">
                      <Users className="w-3 h-3" /> 30k+ Learners
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00D9B8] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#00D9B8]/20 focus:border-[#00D9B8] transition-all text-slate-800"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00D9B8] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#00D9B8]/20 focus:border-[#00D9B8] transition-all text-slate-800"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Phone Number
                  </label>
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-16 bg-slate-100 border border-slate-200 rounded-2xl text-slate-500 font-bold text-sm">
                      +91
                    </div>
                    <div className="relative flex-1 group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00D9B8] transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#00D9B8]/20 focus:border-[#00D9B8] transition-all text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group mt-4 bg-slate-900 hover:bg-[#00D9B8] text-white font-black text-lg py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-slate-400 font-medium">
                By submitting, you agree to our{" "}
                <span className="underline cursor-pointer">Terms</span> &{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Access Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-gradient-to-r from-[#00D9B8] to-emerald-500 shadow-2xl">
        <div className="flex flex-col px-12 sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto">
          <div className="text-center sm:text-left text-white text-[0.9rem] sm:text-[1rem]">
            <h3 className="font-semibold">Offer Expires In</h3>
            <div className="text-[1.4rem] sm:text-[1.6rem] font-bold">
              {formatTime(remainingTime)}
            </div>
          </div>
          <button
            onClick={() => scrollToForm()}
            className="py-3 sm:py-2.5 px-6 sm:px-8 font-[700] cursor-pointer bg-white text-[#00c0a0] hover:bg-[#00c186] hover:text-white hover:border-2 hover:border-white text-[0.9rem] sm:text-[1rem] rounded-full w-full sm:w-auto transition-all duration-300 transform btn-animated"
          >
            Free Access Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes blink {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 1);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .animate-blink {
          animation: blink 1.5s ease-in-out infinite;
        }
        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }

        .btn-animated {
          animation: blink 2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .btn-animated:hover {
          border-color: white !important;
          animation: blink 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
