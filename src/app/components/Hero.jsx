import React, { useState, useEffect, useRef } from "react";

const Index = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll Handler for Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-950 overflow-hidden font-sans text-slate-50 selection:bg-emerald-500/30">
      {/* --- BACKGROUND FX --- */}
      
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Main Glow (Spotlight) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

      {/* 3. Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-0" />

      {/* --- HEADER --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          headerVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl border-b border-white/5 shadow-lg supports-[backdrop-filter]:bg-slate-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/finalLogo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-right flex flex-col items-end justify-center">
            <h1 className="flex items-center text-sm font-bold tracking-wider text-slate-300 uppercase">
              India's 
              <span className="mx-1 text-lg font-black text-white bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                1<sup className="text-xs ml-0.5">st</sup>
              </span>
            </h1>
            <p className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
              Price Behavior Program
            </p>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 pt-28 pb-12 px-4 max-w-md mx-auto flex flex-col gap-8 min-h-screen justify-between">
        
        {/* 1. HEADLINE SECTION */}
        <div className="text-center space-y-5">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(239,68,68,0.3)] animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
              Live Training
            </span>
          </div>

          {/* Main Title */}
          <h1 className="flex flex-col items-center justify-center">
            <span className="text-sm sm:text-base font-bold text-amber-400 tracking-[0.2em] mb-1 animate-pulse">
              REVEALED SECRET
            </span>
            <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-2xl">
              OF SUCCESSFUL
            </span>
            <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-2xl">
              TRADER
            </span>
          </h1>
        </div>

        {/* 2. MENTOR IMAGE SECTION */}
        <div className="relative w-full max-w-[280px] mx-auto group">
            
            {/* Background Glow behind image */}
            <div className="absolute inset-0 bg-emerald-500/30 blur-[60px] rounded-full group-hover:bg-emerald-500/40 transition-all duration-700"></div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                <img
                src="/neerajSirImg.png"
                alt="Mentor"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient at bottom of image for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating Stats - Left */}
            <div className="absolute -left-4 top-1/4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500">
                <p className="text-emerald-400 text-xl font-black">2.7k+</p>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Success<br/>Stories</p>
            </div>

             {/* Floating Stats - Right */}
             <div className="absolute -right-4 bottom-1/4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500">
                <p className="text-amber-400 text-xl font-black">14 Yr</p>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Market<br/>Experience</p>
            </div>
        </div>

        {/* 3. CTA CARD SECTION */}
        <div className="relative">
            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-5 shadow-2xl relative overflow-hidden group">
                
                {/* Subtle shine effect on card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col items-center gap-4 relative z-10">
                    
                    {/* Main Button */}
                    <button
                        onClick={() => scrollToSection("webinar")}
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-emerald-600 text-slate-900 py-4 px-6 rounded-2xl font-black uppercase tracking-wider shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-6"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            Register Now
                            <span className="bg-slate-900 text-white text-[10px] py-0.5 px-2 rounded-full">FREE</span>
                        </span>
                    </button>

                    {/* Details */}
                    <div className="text-center w-full">
                        <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400 mb-3">
                            <span className="line-through decoration-red-500/60 decoration-2">₹10,000</span>
                            <span className="text-emerald-400 animate-pulse">100% OFF TODAY</span>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-3"></div>

                        <div className="space-y-1">
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Training By</p>
                            <p className="text-white text-lg font-bold tracking-tight">Mr. Suresh Latiyal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Index;