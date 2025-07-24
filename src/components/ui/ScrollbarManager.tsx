'use client';

import { useEffect } from 'react';

export default function ScrollbarManager() {
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Add scrolling class to body
      document.body.classList.add('scrolling');
      
      // Clear the previous timeout
      clearTimeout(scrollTimer);
      
      // Set a timeout to remove the class after scrolling stops
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000); // Hide scrollbar 1 second after scrolling stops
    };
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);
  
  return null; // This component doesn't render anything
}
