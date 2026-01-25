import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: "1",
    title: "Transformed My Trading in 30 Days",
    description: "I started with basic knowledge and zero experience in day trading. After following the strategies taught here, I've developed a consistent approach that actually works. The key was understanding risk management and technical analysis. Now I'm seeing profits I never thought possible as a beginner trader.",
    videoId: "5RskS9g03Rc",
  },
  {
    id: "2",
    title: "From Losses to Consistent Gains",
    description: "After years of losing money trying different approaches, I finally found what works. The systematic approach to forex trading changed everything for me. Learning proper entry and exit points, along with emotional discipline, made all the difference in my trading journey.",
    videoId: "_mqVRykdHjk",
  },
  {
    id: "3",
    title: "Options Trading Success Story",
    description: "Options seemed complicated until I learned the right strategies. Now I understand how to use them for both income and protection. The weekly strategy sessions helped me grasp complex concepts and apply them in real market conditions with confidence.",
    videoId: "KGsxezObd0Q",
  },
  {
    id: "4",
    title: "Building Wealth Through Smart Trading",
    description: "Swing trading fits perfectly with my lifestyle. I don't need to watch charts all day, and I'm still making steady profits. The community support and mentorship program provided insights that books and courses never did. Highly recommend this approach to anyone serious about trading.",
    videoId: "YX2ZQPaUkcI",
  },
  {
    id: "5",
    title: "From Beginner to Confident Trader",
    description: "I started with basic knowledge and zero experience in day trading. After following the strategies taught here, I've developed a consistent approach that actually works. The key was understanding risk management and technical analysis.",
    videoId: "VctTjg9D1ZA",
  },
  {
    id: "6",
    title: "The Systematic Approach",
    description: "After years of losing money trying different approaches, I finally found what works. The systematic approach to forex trading changed everything for me. Learning proper entry and exit points is crucial.",
    videoId: "umVpG2O83bI",
  },
];

const VideoCard = ({ testimonial, isActive, onBecomeActive }) => {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab video 60% screen par dikhega tab active hoga
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            onBecomeActive();
          }
        });
      },
      {
        threshold: 0.6, // Sensitivity adjust karne ke liye (0.5 to 1.0)
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [onBecomeActive]);

  const truncatedDescription = testimonial.description.slice(0, 100) + "...";

  // YouTube Parameters Explanation:
  // autoplay=1: Auto play on load
  // mute=0: Try to play with Sound (Browser policy may block if user hasn't interacted)
  // controls=0: Hide bottom player controls
  // modestbranding=1: Remove big YouTube logo
  // rel=0: Show videos from same channel only
  // disablekb=1: Disable keyboard controls
  const embedUrl = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`;

  return (
    <div
      ref={containerRef}
      className={`group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 ${
        isActive 
          ? "ring-2 ring-green-500 shadow-xl scale-[1.01] z-10" 
          : "border border-gray-100 shadow-sm opacity-90 hover:opacity-100"
      }`}
    >
      {/* Video Section - No overlay, No icons */}
      <div className="relative w-full aspect-video bg-black">
        {isActive ? (
          <iframe
            src={embedUrl}
            title={testimonial.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false} // Fullscreen off for cleaner look
            loading="lazy"
          />
        ) : (
          // High Quality Thumbnail jab video pause ho
          <img 
             src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
             onError={(e) => { e.target.src = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg` }}
             alt={testimonial.title}
             className="w-full h-full object-cover opacity-80"
          />
        )}
      </div>

      {/* Text Section - Professional Typography */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
        <div>
          <h3 className={`text-lg font-bold mb-2 leading-tight ${isActive ? 'text-green-900' : 'text-gray-800'}`}>
            {testimonial.title}
          </h3>
          
          <div 
            className="text-sm text-gray-600 leading-relaxed font-normal"
          >
            <p>{isExpanded ? testimonial.description : truncatedDescription}</p>
          </div>
        </div>

        {/* Minimal Read More Link */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 self-start text-xs font-semibold uppercase tracking-wide text-green-600 hover:text-green-800 transition-colors"
        >
          {isExpanded ? "Close" : "Read Full Story"}
        </button>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Traders, Real Results
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Hear directly from our community members who have transformed their trading journey.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <VideoCard 
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeVideoId === testimonial.id}
              onBecomeActive={() => setActiveVideoId(testimonial.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;