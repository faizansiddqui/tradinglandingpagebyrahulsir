import { BarChart3, PieChart, Clock, CheckCircle2 } from "lucide-react";

const TradingProgram = () => {
  const learningPoints = [
    {
      icon: <BarChart3 className="w-8 h-8" strokeWidth={2.5} />,
      text: "HOW TO READ CHARTS CORRECTLY",
      bgColor: "bg-primary/10",
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-destructive" />
            <div className="absolute right-0 top-0 w-5 h-8 rounded-r-full bg-success" />
          </div>
        </div>
      ),
      text: "HOW TO IDENTIFY BUYING-SELLING PRESSURE",
      bgColor: "bg-primary/10",
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={2.5} />,
      text: "WHICH TIMEFRAME WORKS BEST AND WHEN",
      bgColor: "bg-primary/10",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" strokeWidth={2.5} />,
      text: "HOW TO DECODE PRICE ACTION",
      bgColor: "bg-primary/10",
    },
    {
      icon: (
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
            <div className="bg-destructive text-white text-xs font-bold px-2 py-1 rounded">
              LIVE
            </div>
          </div>
        </div>
      ),
      text: "PRACTICAL LEARNING REAL MARKET",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Trading Chart Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Candlestick decorative elements */}
      <div className="absolute top-1/4 right-10 opacity-30 hidden lg:block">
        <svg width="60" height="120" viewBox="0 0 60 120" className="text-success">
          <rect x="25" y="10" width="10" height="40" fill="currentColor" opacity="0.8" />
          <line x1="30" y1="0" x2="30" y2="10" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-10 opacity-30 hidden lg:block">
        <svg width="60" height="120" viewBox="0 0 60 120" className="text-destructive">
          <rect x="25" y="40" width="10" height="30" fill="currentColor" opacity="0.8" />
          <line x1="30" y1="20" x2="30" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="70" x2="30" y2="90" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-muted-foreground">10,000 VALUE</span>
              <br />
              <span className="text-foreground">PROGRAM FOR </span>
              <span className="text-success">"FREE NOW"</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium">
              In this LIVE session, you will learn:
            </p>
          </div>

          {/* Learning Points */}
          <div className="space-y-6 md:space-y-8">
            {learningPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-success flex items-center justify-center bg-background text-success transition-transform group-hover:scale-110">
                    {point.icon}
                  </div>
                </div>

                {/* Arrow Card */}
                <div className="flex-grow w-full sm:w-auto">
                  <div className="relative bg-foreground text-background px-6 md:px-8 py-4 md:py-5 rounded-lg sm:rounded-r-none shadow-lg transition-all group-hover:shadow-success/20 group-hover:shadow-xl">
                    {/* Arrow pointer for desktop */}
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
                      <div className="w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-foreground border-b-[20px] border-b-transparent" />
                    </div>
                    
                    {/* Arrow pointer for mobile (bottom) */}
                    <div className="sm:hidden absolute left-1/2 -translate-x-1/2 -top-3">
                      <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-foreground border-r-[15px] border-r-transparent" />
                    </div>

                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-center sm:text-left">
                      {point.text}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingProgram;
