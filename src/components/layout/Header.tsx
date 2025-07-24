'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const propertiesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();                       // 1st paint now identical to server
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close properties menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        propertiesMenuRef.current && 
        !propertiesMenuRef.current.contains(event.target as Node)
      ) {
        setIsPropertiesOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPropertiesOpen) {
        setIsPropertiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isPropertiesOpen]);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'EN' ? 'العربية' : 'EN');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-8 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-3 shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-playfair font-bold text-rich-navy"
          >
            <span className="text-desert-gold">Dubai</span> Signature Estates
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-8">
          {/* <Link href="/" className="font-inter text-lg hover:text-desert-gold transition-colors duration-300">
            Home
          </Link> */}
          
          {/* Properties mega menu trigger */}
          <div className="static lg:relative" ref={propertiesMenuRef}>
            <button 
              className={`font-inter text-lg hover:text-desert-gold transition-colors duration-300 flex items-center ${isPropertiesOpen ? 'text-desert-gold' : ''}`}
              onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsPropertiesOpen(!isPropertiesOpen);
                }
                if (e.key === 'Escape') {
                  setIsPropertiesOpen(false);
                }
              }}
              aria-expanded={isPropertiesOpen}
              aria-haspopup="true"
            >
              <span className="relative">
                Properties
                {isPropertiesOpen && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-desert-gold"></span>}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${isPropertiesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega Menu */}
            {isPropertiesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[90vw] max-w-[600px] bg-pearl-white shadow-2xl rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-5 md:p-6 z-50 border-t-2 border-desert-gold"
              >
                <div className="mb-6 md:mb-0">
                  <h3 className="font-lora text-xl mb-4 text-rich-navy">Featured Properties</h3>
                  <div className="relative h-40 md:h-48 rounded-md overflow-hidden featured-property-container shadow-md">
                    <Image 
                      src="/images/property-1.png" 
                      alt="Featured Luxury Property" 
                      fill
                      className="object-cover"
                      onError={() => {
                        // Handle image error in a Next.js compatible way
                        const imgElement = document.createElement('img');
                        imgElement.src = 'https://via.placeholder.com/400x200?text=Luxury+Property';
                        imgElement.alt = 'Featured Luxury Property';
                        imgElement.className = 'w-full h-full object-cover';
                        const container = document.querySelector('.featured-property-container');
                        if (container) {
                          container.innerHTML = '';
                          container.appendChild(imgElement);
                        }
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-black p-4 z-10">
                      <p className="text-pearl-white font-inter font-medium">Palm Jumeirah Villa</p>
                      <p className="text-desert-gold font-inter font-bold">AED 25,000,000</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-lora text-xl mb-4 text-rich-navy">Quick Filters</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link 
                      href="/properties?type=villa" 
                      className="bg-rich-navy/5 hover:bg-desert-gold/10 p-3 rounded transition-colors flex items-center"
                      onClick={() => setIsPropertiesOpen(false)}
                    >
                      <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                      Luxury Villas
                    </Link>
                    <Link 
                      href="/properties?type=apartment" 
                      className="bg-rich-navy/5 hover:bg-desert-gold/10 p-3 rounded transition-colors flex items-center"
                      onClick={() => setIsPropertiesOpen(false)}
                    >
                      <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                      Premium Apartments
                    </Link>
                    <Link 
                      href="/properties?type=penthouse" 
                      className="bg-rich-navy/5 hover:bg-desert-gold/10 p-3 rounded transition-colors flex items-center"
                      onClick={() => setIsPropertiesOpen(false)}
                    >
                      <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                      Penthouses
                    </Link>
                    <Link 
                      href="/properties?area=palm" 
                      className="bg-rich-navy/5 hover:bg-desert-gold/10 p-3 rounded transition-colors flex items-center"
                      onClick={() => setIsPropertiesOpen(false)}
                    >
                      <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                      Palm Jumeirah
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          <Link href="/about" className="font-inter text-lg hover:text-desert-gold transition-colors duration-300">
            About Us
          </Link>
          
          <Link href="/services" className="font-inter text-lg hover:text-desert-gold transition-colors duration-300">
            Services
          </Link>
          
          <Link href="/insights" className="font-inter text-lg hover:text-desert-gold transition-colors duration-300">
            Insights
          </Link>
          
          {/* <Link href="/contact" className="font-inter text-lg hover:text-desert-gold transition-colors duration-300">
            Contact
          </Link> */}
        </div>

        {/* Right-aligned items */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language toggle */}
          <button 
            onClick={toggleLanguage}
            className="font-inter text-base hover:text-desert-gold transition-colors"
          >
            {currentLanguage === 'EN' ? 'EN | العربية' : 'العربية | EN'}
          </button>
          
          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="button-primary"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button 
          className="lg:hidden text-rich-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-pearl-white absolute top-full left-0 w-full shadow-lg p-4"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="font-inter text-lg py-2 border-b border-rich-navy/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="border-b border-rich-navy/10">
              <div 
                className="font-inter text-lg py-2 flex justify-between items-center cursor-pointer"
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
              >
                <span>Properties</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${isPropertiesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {isPropertiesOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-4 pb-4 pt-2 space-y-3 overflow-hidden"
                >
                  <Link 
                    href="/properties?type=villa" 
                    className="flex items-center py-2 text-rich-navy/80 hover:text-desert-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                    Luxury Villas
                  </Link>
                  <Link 
                    href="/properties?type=apartment" 
                    className="flex items-center py-2 text-rich-navy/80 hover:text-desert-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                    Premium Apartments
                  </Link>
                  <Link 
                    href="/properties?type=penthouse" 
                    className="flex items-center py-2 text-rich-navy/80 hover:text-desert-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                    Penthouses
                  </Link>
                  <Link 
                    href="/properties?area=palm" 
                    className="flex items-center py-2 text-rich-navy/80 hover:text-desert-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-desert-gold rounded-full mr-2"></span>
                    Palm Jumeirah
                  </Link>
                  <Link 
                    href="/properties" 
                    className="flex items-center py-2 font-medium text-desert-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View All Properties
                  </Link>
                </motion.div>
              )}
            </div>
            
            <Link 
              href="/about" 
              className="font-inter text-lg py-2 border-b border-rich-navy/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              href="/services" 
              className="font-inter text-lg py-2 border-b border-rich-navy/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            <Link 
              href="/insights" 
              className="font-inter text-lg py-2 border-b border-rich-navy/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            
            <Link 
              href="/contact" 
              className="font-inter text-lg py-2 border-b border-rich-navy/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <button 
              onClick={toggleLanguage}
              className="font-inter text-lg py-2 text-left"
            >
              {currentLanguage === 'EN' ? 'EN | العربية' : 'العربية | EN'}
            </button>
            
            <Link 
              href="/contact" 
              className="button-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Inquire
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
