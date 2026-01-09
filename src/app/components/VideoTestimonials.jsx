import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: "1",
    title: "Transformed My Trading in 30 Days",
    description: "I started with basic knowledge and zero experience in day trading. After following the strategies taught here, I've developed a consistent approach that actually works. The key was understanding risk management and technical analysis. Now I'm seeing profits I never thought possible as a beginner trader.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "From Losses to Consistent Gains",
    description: "After years of losing money trying different approaches, I finally found what works. The systematic approach to forex trading changed everything for me. Learning proper entry and exit points, along with emotional discipline, made all the difference in my trading journey.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Options Trading Success Story",
    description: "Options seemed complicated until I learned the right strategies. Now I understand how to use them for both income and protection. The weekly strategy sessions helped me grasp complex concepts and apply them in real market conditions with confidence.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Building Wealth Through Smart Trading",
    description: "Swing trading fits perfectly with my lifestyle. I don't need to watch charts all day, and I'm still making steady profits. The community support and mentorship program provided insights that books and courses never did. Highly recommend this approach to anyone serious about trading.",
    videoId: "dQw4w9WgXcQ",
  },

 
];

const VideoCard = ({ testimonial, isActive, onBecomeActive }) => {
  const videoRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            onBecomeActive();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [onBecomeActive]);

  const truncatedDescription = testimonial.description.slice(0, 100) + "...";

  return (
    <div
      ref={videoRef}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-500 animate-fade-in"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=${isActive ? 1 : 0}&mute=1&controls=1&rel=0&modestbranding=1`}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
      
      <div className="p-6 space-y-3 bg-gradient-to-br from-card to-muted/20">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {testimonial.title}
        </h3>
        <div 
          className="text-sm text-muted-foreground leading-relaxed"
          onDoubleClick={() => setIsExpanded(false)}
        >
          <p>{isExpanded ? testimonial.description : truncatedDescription}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-green-800 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background via-muted/30 to-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <div className="inline-block">
            <span className="inline-flex text-green-500 items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-sm font-semibold text-primary-foreground shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              Success Stories
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold bg-gradient-primary bg-clip-text ">
            Trader Testimonials
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 text-muted-foreground max-w-2xl mx-auto">
            Real traders, real results. See how our community is achieving consistent profits
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 text-gray-800 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard 
                testimonial={testimonial}
                isActive={activeVideoId === testimonial.id}
                onBecomeActive={() => setActiveVideoId(testimonial.id)}
              />
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default VideoTestimonials;