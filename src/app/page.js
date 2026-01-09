"use client";

import EnrollNowSection from "./components/EnrollNow";
import HeroMain from "./components/HeroMain";
import LearningForm from "./components/LearningForm";
import Testimonials from "./components/Testimonials";
import TradingAcademyFeatures from "./components/TradingAcadimyFeatures";
import TradingProgram from "./components/TradingProgram";
import VideoTestimonials from "./components/VideoTestimonials";
import GallerySection from "./event/GallerySection";


function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2F1F] via-[#0D3D2A] to-[#0A2F1F] text-white overflow-x-hidden">
      <main>
        <HeroMain />
        <VideoTestimonials />
        <TradingProgram />
        <GallerySection />
        <LearningForm />
        <TradingAcademyFeatures />
        <EnrollNowSection />
        <Testimonials />
      </main>
    </div>
  );
}

export default Hero;