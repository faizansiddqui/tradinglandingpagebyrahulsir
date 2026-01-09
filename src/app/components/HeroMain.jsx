'use client'; // Add this if using Next.js App Router for client-side detection

import { useState, useEffect } from 'react';
import HeroDesktopUi from '../components/HeroDesktop'; // Adjust import path as needed
import HeroMobileUI from '../components/Hero'; // Adjust import path as needed

const HeroMain = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      // Define mobile as up to 1023px (below lg breakpoint in Tailwind)
      // This covers small mobiles (~320px) to large mobiles/tablets up to ~1024px
      // Tablet/desktop: 1024px+ (lg and above)
      setIsMobile(window.innerWidth < 885);
    };

    checkScreenSize(); // Initial check

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <HeroMobileUI /> : <HeroDesktopUi />;
};

export default HeroMain;