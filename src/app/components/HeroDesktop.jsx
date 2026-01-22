import React, { useState, useEffect, useRef } from 'react';

const HeroDesktop = () => {
  
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 120) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen bg-[#0a0e17] overflow-hidden flex flex-col">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/chart-bg1.png')] bg-cover bg-center opacity-[0.09]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-blue-950/10 pointer-events-none" />

      {/* Floating glow orbs */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-slow-pulse" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-slow-pulse delay-1000" />

      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${headerVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="backdrop-blur-xl bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl overflow-hidden ring-1 ring-emerald-500/30">
                <img src="/finalLogo.png" alt="MahaBali" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-white text-xl font-bold tracking-tight">MahaBali</h2>
                <p className="text-emerald-400 text-xs font-semibold tracking-wider">TRADING ACADEMY</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-lg sm:text-2xl font-black tracking-wider">
                INDIA'S <span className="text-emerald-400">№1</span>
              </div>
              <p className="text-emerald-400/90 text-xs sm:text-sm font-bold tracking-widest uppercase mt-0.5">
                Price Behavior Program
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Perfect one-screen fit */}
      <div className="relative z-10 flex-1 flex items-center  px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">
          {/* LEFT - Text + CTA */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl mt-20 font-black tracking-tight leading-tight text-white">
              <span className="block text-emerald-400">REVEALED</span>
              <span className="block mt-1">SECRET OF</span>
              <span className="block mt-1">SUCCESSFUL</span>
              <span className="block text-emerald-400 mt-1">TRADERS</span>
            </h1>

            {/* LIVE Badge */}
            <div className="inline-flex items-center gap-20 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-3 mx-auto lg:mx-0">

              <div>

                <div className="relative flex items-center gap-2">
                  <span className="absolute flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                  </span>
                  <span className="ml-5 text-red-400 font-black text-2xl tracking-widest">LIVE</span>
                </div>
                <span className="text-white/70 text-sm font-semibold tracking-wider uppercase">Training</span>

              </div>

              <button className="w-[300px] py-5 px-8 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xl font-black uppercase tracking-wide rounded-2xl shadow-xl shadow-emerald-900/40 hover:shadow-2xl hover:shadow-emerald-700/50 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                Register Now — It's Free
              </button>

            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-slate-900/80 to-black/70 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl max-w-md mx-auto lg:mx-0">


              <div className="mt-7 space-y-3  text-center lg:text-left">
                <p className="text-emerald-400/80 text-sm font-bold tracking-widest uppercase">
                  ₹10,000 VALUE PROGRAM
                </p>
                <p className="text-3xl font-black text-white tracking-tight">
                  Now <span className="text-emerald-400">FREE</span>
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Mentored by</p>
                  <p className="text-white text-xl font-bold mt-1">Mr. Suresh Latiyal</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Mentor Image (perfectly centered) */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/70 mentor-glow">
                <img
                  src="/instructor.png"
                  alt="Mr. Suresh Latiyal"
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
                />

                {/* Left Stat */}
                <div className="absolute -left-4 top-1/3 glass-panel backdrop-blur-lg bg-black/50 border border-white/10 p-4 rounded-2xl animate-float">
                  <p className="text-4xl font-black text-white">2700+</p>
                  <p className="text-slate-300 text-sm font-medium mt-1">Success Stories</p>
                </div>

                {/* Right Stat */}
                <div className="absolute -right-4 bottom-1/3 glass-panel backdrop-blur-lg bg-black/50 border border-white/10 p-4 rounded-2xl animate-float delay-500">
                  <p className="text-4xl font-black text-white">14</p>
                  <p className="text-slate-300 text-sm font-medium mt-1">Years Experience</p>
                </div>

                {/* Bottom glow */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-900/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;