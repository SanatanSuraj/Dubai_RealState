"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Updated testimonials data with correct image paths
const testimonials = [
  {
    id: 1,
    name: 'James Richardson',
    position: 'CEO, Global Investments',
    location: 'United Kingdom',
    quote: 'Dubai Signature Estates provided a level of service that was truly exceptional. From understanding my specific requirements to handling all the paperwork, they made the process of acquiring my Palm Jumeirah villa seamless and stress-free.',
    image: '/images/testimonial-1.png',
    fallbackImage: '/images/testimonial-1.png'
  },
  {
    id: 2,
    name: 'Elena Volkova',
    position: 'Art Collector',
    location: 'Russia',
    quote: 'What sets Dubai Signature Estates apart is their intimate knowledge of the luxury market and their attention to detail. They found me a property that not only meets my investment criteria but also perfectly complements my lifestyle.',
    image: '/images/testimonial-2.png',
    fallbackImage: '/images/testimonial-2.png'
  },
  {
    id: 3,
    name: 'Sheikh Mohammed Al Nahyan',
    position: 'Chairman, Al Nahyan Group',
    location: 'UAE',
    quote: 'I have worked with many real estate agencies across the globe, but few understand the luxury market like Dubai Signature Estates. Their discretion and professionalism are unmatched, making them my trusted advisors for all property matters.',
    image: '/images/testimonial-3.png',
    fallbackImage: '/images/testimonial-3.png'
  },
  {
    id: 4,
    name: 'Sophia Chen',
    position: 'Technology Entrepreneur',
    location: 'Singapore',
    quote: 'Dubai Signature Estates didn\'t just sell me a property; they introduced me to a lifestyle. Their knowledge of Dubai\'s evolving luxury landscape helped me make a sound investment that has appreciated significantly.',
    image: '/images/testimonial-4.png',
    fallbackImage: '/images/testimonial-4.png'
  }
];

const TestimonialsCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // Return null on server side to prevent hydration errors
  }
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-obsidian-black/60 z-10"></div>
          <div className="absolute inset-0">
            <Image 
              src="/images/luxury-interior.png" 
              alt="Luxury Interior" 
              className="object-cover"
              fill
              priority
              onError={() => {
                console.log('Error loading luxury interior image');
              }}
            />
          </div>
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-content mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-desert-gold font-inter text-lg">Testimonials</p>
          <h2 className="font-playfair text-4xl text-pearl-white mt-2">
            What Our Clients Say
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={32}
              pagination={{
                clickable: true,
                bulletActiveClass: 'bg-desert-gold',
                bulletClass: 'swiper-pagination-bullet bg-pearl-white/50 inline-block h-2 w-2 rounded-full mx-1 my-0 opacity-100 cursor-pointer transition-all'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="!pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="glass-morphism rounded-xl p-8 h-full flex flex-col">
                    <svg className="text-desert-gold h-10 w-10 mb-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12H9.8C9.8 9 12 8 12 8H10zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-6.2C21.8 9 24 8 24 8h-2z"/>
                    </svg>
                    
                    <p className="font-inter text-lg text-rich-navy mb-8 flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full overflow-hidden mr-4 relative">
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover"
                          fill
                          sizes="56px"
                          onError={() => {
                            console.log(`Error loading image for ${testimonial.name}`);
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-inter font-medium text-rich-navy">{testimonial.name}</p>
                        <p className="font-inter text-sm text-rich-navy/70 mt-0.5">{testimonial.position}</p>
                        <p className="font-inter text-sm text-desert-gold mt-0.5">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
