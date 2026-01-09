import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function HeroDesktopUi() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L20 45 L40 55 L60 40 L80 48 L100 35' stroke='%2334D399' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}

      />

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-8 lg:py-4 min-h-screen flex flex-col justify-between">

        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src={'/finalLogo.png'}
                width={60}
                height={70}
                alt='Logo'
                className='rounded-full'
              />
              <span className="text-2xl sm:text-3xl lg:text-5xl font-black text-emerald-400 tracking-tight">MahaBull</span>
            </div>
            <span className="text-emerald-400/90 text-xs sm:text-sm lg:text-base tracking-[0.3em] mt-1 ml-0 sm:ml-12 lg:ml-16 font-light">PRICE ACTION</span>
          </div>

          <div className="text-center sm:text-right">
            <div className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-none">
              INDIA'S 1<sup className="text-base sm:text-xl lg:text-3xl">ST</sup>
            </div>
            <div className="text-emerald-400 text-base sm:text-lg lg:text-2xl font-bold mt-1 sm:mt-2">Price Behavior Program</div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-20 items-center max-w-7xl w-full">

            <div className="text-center lg:text-right space-y-3 sm:space-y-4 lg:space-y-6 order-1">
              <div>
                <div className="text-red-500 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black italic drop-shadow-lg animate-pulse">
                  LIVE
                </div>
                <div className="text-white/90 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light italic mt-1 sm:mt-2">
                  TRAINING
                </div>
              </div>
              <div className="pt-2 sm:pt-4">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
                  2700+
                </div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-xl xl:text-2xl font-light tracking-widest mt-2 uppercase">
                  Success Stories
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl order-2 mx-auto lg:mx-0">
             
              <div className="relative rounded-3xl  overflow-visible border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-colors duration-300 p-2 sm:p-3 lg:p-4">
             

                <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8 z-10">
                  <div className="text-center w-full space-y-6 sm:space-y-8">
                    <div className="relative inline-block">
                      <Image
                        src={'/neerajSirImg.png'}
                        alt='Neeraj Sir'
                        width={400}
                        height={400}
                        className="rounded-full shadow-2xl border-4 border-emerald-400/40 w-52 h-52 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain hover:scale-105 transition-transform duration-500 hover:shadow-emerald-500/20 max-w-full max-h-full"
                        sizes="(max-width: 768px) 208px, (max-width: 1024px) 224px, 288px"
                      />
                    </div>

                    <div className="inline-block">
                      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 py-3 px-6 sm:py-3.5 sm:px-8 lg:py-4 lg:px-10 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/30">
                        <span className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                          Neeraj Sir
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 order-3">
              <div>
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black italic leading-none tracking-tight animate-fade-in-up delay-200">
                  14 YEAR
                </div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-xl xl:text-2xl font-light tracking-widest italic mt-2 uppercase">
                  Experience
                </div>
              </div>
              <div className="hidden lg:block pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 animate-fade-in-up delay-400">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-sm xl:text-base">Expert Training</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 animate-fade-in-up delay-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <span className="text-sm xl:text-base">Live Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 animate-fade-in-up delay-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm xl:text-base">Proven Strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center pb-4 sm:pb-6 lg:pb-8">
          <button className="group relative bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-500 hover:from-emerald-500 hover:via-emerald-600 hover:to-cyan-600 text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black py-4 sm:py-5 lg:py-6 px-10 sm:px-14 lg:px-18 xl:px-24 rounded-full shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto max-w-lg mx-auto overflow-hidden animate-bounce-slow">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 animate-fade-in-up delay-800">Limited seats available - Join today!</p>
        </footer>
      </div>

      <div className="absolute bottom-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] lg:w-[600px] h-96 sm:h-[500px] lg:h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}