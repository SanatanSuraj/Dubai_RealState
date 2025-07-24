'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() || selectedFilter !== 'all') {
      // Construct query parameters based on the search inputs
      const params = new URLSearchParams();
      
      if (searchQuery.trim()) {
        params.append('query', searchQuery.trim());
      }
      
      if (selectedFilter !== 'all') {
        params.append('filter', selectedFilter);
      }
      
      // Navigate to the properties page with the search parameters
      router.push(`/properties?${params.toString()}`);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-pearl-white overflow-hidden">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/palm-jumeirah-poster.png"
        >
          <source src="/videos/dubai-aerial.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <div className="absolute inset-0 z-5">
          <Image 
            src="/images/palm-jumeirah-poster.png" 
            alt="Dubai Skyline" 
            fill
            className="object-cover opacity-0 video-fallback"
            priority
            onError={(e) => {
              console.log('Fallback to alternate skyline image');
              const target = e.target as HTMLImageElement;
              if (target) target.classList.remove('opacity-0');
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 text-center">
        <motion.h1 
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Find Your Signature Address in Dubai
        </motion.h1>
        
        <motion.p
          className="font-inter text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Exclusive properties in the most prestigious locations, curated for the discerning few
        </motion.p>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center rounded-full overflow-hidden bg-pearl-white/95 shadow-lg">
            <div className="flex items-center flex-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6 text-rich-navy opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text"
                placeholder="Search for properties, locations..."
                className="w-full py-4 px-4 text-rich-navy font-inter outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            
            <div className="hidden md:block h-8 w-px bg-rich-navy/20"></div>
            
            <div className="relative w-full md:w-auto">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-4 font-inter text-rich-navy bg-transparent outline-none cursor-pointer appearance-none w-full pr-10"
              >
                <option value="all">All Properties</option>
                <option value="buy">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="offplan">Off-Plan</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rich-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <button 
              className="bg-deep-teal text-pearl-white font-inter px-8 py-4 w-full md:w-auto hover:bg-desert-gold transition-colors duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button 
              className="bg-pearl-white/30 hover:bg-pearl-white/40 text-pearl-white text-sm font-inter px-4 py-1 rounded-full transition-colors"
              onClick={() => {
                setSearchQuery('Palm Jumeirah');
                handleSearch();
              }}
            >
              Palm Jumeirah
            </button>
            <button 
              className="bg-pearl-white/30 hover:bg-pearl-white/40 text-pearl-white text-sm font-inter px-4 py-1 rounded-full transition-colors"
              onClick={() => {
                setSearchQuery('Downtown Dubai');
                handleSearch();
              }}
            >
              Downtown Dubai
            </button>
            <button 
              className="bg-pearl-white/30 hover:bg-pearl-white/40 text-pearl-white text-sm font-inter px-4 py-1 rounded-full transition-colors"
              onClick={() => {
                setSearchQuery('Dubai Hills');
                handleSearch();
              }}
            >
              Dubai Hills
            </button>
            <button 
              className="bg-pearl-white/30 hover:bg-pearl-white/40 text-pearl-white text-sm font-inter px-4 py-1 rounded-full transition-colors"
              onClick={() => {
                setSearchQuery('Emirates Hills');
                handleSearch();
              }}
            >
              Emirates Hills
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-pearl-white/80 text-sm font-inter mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-desert-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
