"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't show footer on thank-you page
  if (pathname === '/thank-you/') {
    return null;
  } else if (pathname === '/form/') {
    return null;
  }
  
  return <Footer />;
}