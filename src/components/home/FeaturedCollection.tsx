/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Featured properties data with updated image paths
const featuredProperties = [
  {
    id: 'prop1',
    title: 'Luxurious Palm Jumeirah Villa',
    location: 'Palm Jumeirah',
    price: 'AED 25,000,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8500,
    image: '/images/property-1.png',
    fallbackImage: '/images/property-1.png'
  },
  {
    id: 'prop2',
    title: 'Downtown Dubai Penthouse',
    location: 'Downtown Dubai',
    price: 'AED 18,500,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6200,
    image: '/images/property-2.png',
    fallbackImage: '/images/property-2.png'
  },
  {
    id: 'prop3',
    title: 'Seafront Mansion on The World Islands',
    location: 'The World Islands',
    price: 'AED 42,000,000',
    bedrooms: 7,
    bathrooms: 9,
    sqft: 12000,
    image: '/images/property-3.png',
    fallbackImage: '/images/property-3.png'
  },
  {
    id: 'prop4',
    title: 'Emirates Hills Golf Course Villa',
    location: 'Emirates Hills',
    price: 'AED 35,800,000',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 9800,
    image: '/images/property-4.png',
    fallbackImage: '/images/property-4.png'
  }
];

const FeaturedCollection = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);



  return (
    <section className="py-20 bg-pearl-white">
      <div className="max-w-content mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.p 
              className="text-desert-gold font-inter text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Collection
            </motion.p>
            <motion.h2 
              className="font-playfair text-rich-navy text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Exceptional Properties
            </motion.h2>
          </div>
          
          <motion.div 
            className="mt-4 md:mt-0 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              ref={prevRef}
              className="h-12 w-12 rounded-full border border-rich-navy/20 flex items-center justify-center text-rich-navy hover:bg-desert-gold hover:text-pearl-white hover:border-desert-gold transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              ref={nextRef}
              className="h-12 w-12 rounded-full border border-rich-navy/20 flex items-center justify-center text-rich-navy hover:bg-desert-gold hover:text-pearl-white hover:border-desert-gold transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              loop={true}
              onInit={(swiper) => {
                // @ts-expect-error
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  width: 640,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  width: 960,
                }
              }}
              className="!overflow-visible"
            >
              {featuredProperties.map((property) => (
                <SwiperSlide key={property.id} className="h-auto">
                  <Link href={`/property/${property.id}`} className="card group block h-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t">
                      <span className="absolute top-4 left-4 bg-pearl-white/90 text-rich-navy px-3 py-1 text-sm font-medium z-20 rounded-full">
                        {property.location}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 via-obsidian-black/20 to-transparent z-10 group-hover:opacity-70 transition-opacity"></div>
                      <Image 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => {
                          console.log(`Error loading image for ${property.title}`);
                        }}
                      />
                    </div>
                    <div className="p-6 bg-pearl-white border-b border-x border-rich-navy/10 rounded-b space-y-2">
                      <h3 className="font-lora text-xl text-rich-navy font-medium line-clamp-1">{property.title}</h3>
                      <p className="text-desert-gold font-inter text-lg font-medium">{property.price}</p>
                      <div className="flex justify-between text-rich-navy/70 text-sm pt-2">
                        <span>{property.bedrooms} Bedrooms</span>
                        <span>{property.bathrooms} Bathrooms</span>
                        <span>{property.sqft.toLocaleString()} Sq.Ft</span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
       
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/properties" 
            className="button-primary inline-flex items-center"
          >
            View All Properties
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
