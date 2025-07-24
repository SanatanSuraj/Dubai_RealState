"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Statistics for counter animation
const statistics = [
  { value: 9.4, suffix: '%', label: 'Average ROI in Premium Areas' },
  { value: 0, suffix: '', label: 'Income Tax' },
  { value: 100, suffix: '+', label: 'Nationalities Living in Dubai' },
  { value: 300, suffix: '+', label: 'Sunny Days per Year' }
];

const WhyDubaiSection = () => {
  // Refs for intersection observer
  const sectionRef = useRef<HTMLDivElement>(null);
  const counters = useRef<HTMLDivElement[]>([]);
  
  // Counter animation function
  const animateCounter = (el: HTMLDivElement, target: number, suffix: string, duration: number = 2000) => {
    const valueElement = el.querySelector('.counter-value');
    if (!valueElement) return;
    
    let startTimestamp: number | null = null;
    const startValue = 0;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * (target - startValue) + startValue;
      
      if (Number.isInteger(target)) {
        valueElement.textContent = Math.floor(currentValue).toString() + suffix;
      } else {
        valueElement.textContent = currentValue.toFixed(1) + suffix;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };
  
  // Setup intersection observer for counter animation
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.current.forEach((counter, index) => {
            animateCounter(counter, statistics[index].value, statistics[index].suffix);
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <section className="py-24 bg-rich-navy text-pearl-white" ref={sectionRef}>
      <div className="max-w-content mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <motion.p 
              className="text-desert-gold font-inter text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Dubai
            </motion.p>
            
            <motion.h2 
              className="font-playfair text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A Global Epicenter of<br />Luxury &amp; Innovation
            </motion.h2>
            
            <motion.p 
              className="font-inter text-lg opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dubai offers an unparalleled investment environment with world-class infrastructure, a strategic global location, and a cosmopolitan lifestyle. With tax-friendly policies and stable economic growth, the city continues to attract discerning investors seeking both exceptional returns and quality of life.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-desert-gold/30 rounded-md bg-rich-navy/50" 
                  ref={(el) => { if (el) counters.current[index] = el; }}
                >
                  <div className="font-playfair text-3xl text-desert-gold mb-2">
                    <span className="counter-value">0{stat.suffix}</span>
                  </div>
                  <p className="font-inter text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Main image */}
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative z-10">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/dubai-skyline.png" 
                    alt="Dubai Skyline" 
                    className="object-cover"
                    fill
                    priority
                    onError={() => {
                      console.log("Error loading Dubai skyline image");
                    }}
                  />
                </div>
              </div>
              
              {/* Gold accent border */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-desert-gold rounded-xl"></div>
              
              {/* Statistics card */}
              <div className="absolute -bottom-10 left-8 bg-pearl-white shadow-xl p-5 rounded-xl border-t-4 border-desert-gold max-w-[240px] z-20">
                <h4 className="font-lora text-rich-navy text-lg font-medium">Growth & Stability</h4>
                <p className="text-rich-navy/70 text-sm mt-2">Dubai&apos;s property market has seen a consistent appreciation of 8-12% annually in premium segments.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubaiSection;
