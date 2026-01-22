import { useEffect, useRef, useState } from "react";

import GalleryCard from "./GalleryCard";

const galleryItems = [
  {
    image: "/assets/gallery/auditorium-full.png",
    title: "Advanced Trading Masterclass",
    event: "Deep dive into market psychology and advanced chart patterns with live demonstrations",
    participants: "400+ Attendees",
    location: "Mumbai",
    date: "Oct 2024",
    highlight: "Sold Out",
  },

  {
    image: "/assets/gallery/chart-analysis.png",
    title: "Live Chart Analysis",
    event: "Real-time market breakdown and trading setup identification workshop",
    participants: "350+ Live",
    location: "Online + Venue",
    date: "Nov 2024",
    highlight: "Interactive",
  },
  {
    image: "/assets/gallery/exam-hall.png",
    title: "Trading Certification Exam",
    event: "Rigorous assessment testing practical trading knowledge and strategy execution",
    participants: "280+ Candidates",
    location: "Lucknow",
    date: "Dec 2024",
    highlight: "92% Pass Rate",
  },
  {
    image: "/assets/gallery/interactive-session.png",
    title: "Q&A and Mentorship",
    event: "Direct interaction with mentors addressing individual trading challenges",
    participants: "200+ Active",
    location: "Jaipur",
    date: "Aug 2024",
  },
  {
    image: "/assets/gallery/croud-session.png",
    title: "Foundation Workshop",
    event: "Essential trading concepts and risk management fundamentals for beginners",
    participants: "450+ Participants",
    location: "Patna",
    date: "Jul 2024",
  },
  {
    image: "/assets/gallery/winners-stage.png",
    title: "Top Performers Recognition",
    event: "Celebrating traders who achieved exceptional results in the certification program",
    participants: "15 Winners",
    location: "Annual Event",
    date: "Dec 2024",
    highlight: "Awards Ceremony",
  },
];

const GallerySection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px 0px" }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20">
          <span className="mb-4 inline-block rounded-full bg-[#00D9B8]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#00D9B8] sm:px-4 sm:py-1.5">
            Event Gallery
          </span>
          <h2 className="mb-4 text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Moments That <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9B8] to-[#00D9B8]/70">Define Excellence</span>
          </h2>
          <p className="text-base text-gray-600 sm:text-lg md:text-xl max-w-2xl mx-auto">
            From intense exam halls to electrifying workshops, witness the journey of traders pushing their limits and achieving breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`opacity-0 translate-y-8 transition-all duration-500 ease-out ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : ""
              } ${index % 3 === 1 ? "delay-100" : index % 3 === 2 ? "delay-200" : ""} sm:${index % 2 === 1 ? "delay-100" : ""}`}
            >
              <GalleryCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16 lg:mt-20">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-white/50 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:scale-105 sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900">
                Ready to join the next batch?
              </p>
              <p className="text-sm text-gray-600">
                Limited seats available for upcoming sessions
              </p>
            </div>
            <button className="rounded-lg bg-[#00D9B8] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00D9B8]/90 hover:shadow-md sm:text-base">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;