"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="py-24 bg-deep-teal">
      <div className="max-w-content mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 items-center">
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-playfair text-4xl text-pearl-white">
              Book a Private Viewing
            </h2>
            <p className="font-inter text-xl text-pearl-white/80 mt-4 max-w-2xl">
              Experience our properties in person. Our luxury concierge team is ready to arrange a private tour tailored to your preferences.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-4 flex justify-start lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="bg-pearl-white text-deep-teal font-inter px-8 py-4 rounded-full inline-flex items-center hover:bg-desert-gold hover:text-pearl-white transition-all duration-300"
            >
              Schedule Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
