'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// SearchParamsComponent to handle the useSearchParams logic
function SearchParamsComponent({ 
  setSearchQuery, 
  setActiveFilter 
}: { 
  setSearchQuery: (query: string) => void, 
  setActiveFilter: (filter: string) => void 
}) {
  const searchParams = useSearchParams();
  
  // Initialize filters from URL params
  useEffect(() => {
    const query = searchParams.get('query');
    const filter = searchParams.get('filter');
    
    if (query) {
      setSearchQuery(query);
    }
    
    if (filter) {
      // Map from HeroSection filter to property type
      const filterMap: {[key: string]: string} = {
        'buy': 'villa', // Assuming 'buy' corresponds to villas
        'rent': 'apartment', // Assuming 'rent' corresponds to apartments
        'offplan': 'all', // Adjust based on your actual property types
      };
      
      setActiveFilter(filterMap[filter] || 'all');
    }
  }, [searchParams, setSearchQuery, setActiveFilter]);
  
  return null;
}

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const properties = [
    {
      id: 1,
      title: "Palm Jumeirah Villa",
      price: "AED 25,000,000",
      bedrooms: 6,
      bathrooms: 7,
      area: 12000,
      type: "villa",
      location: "Palm Jumeirah",
      featured: true,
      image: "/images/property-1.png",
      description: "Spectacular 6-bedroom villa with private beach access and panoramic sea views. Features include infinity pool, smart home technology, and private elevator."
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      price: "AED 18,500,000",
      bedrooms: 4,
      bathrooms: 5,
      area: 8500,
      type: "apartment",
      location: "Downtown Dubai",
      featured: true,
      image: "/images/property-2.png",
      description: "Luxurious 4-bedroom penthouse with unobstructed views of Burj Khalifa. Features floor-to-ceiling windows, private terrace, and premium finishes throughout."
    },
    {
      id: 3,
      title: "Emirates Hills Mansion",
      price: "AED 40,000,000",
      bedrooms: 7,
      bathrooms: 9,
      area: 18000,
      type: "villa",
      location: "Emirates Hills",
      featured: true,
      image: "/images/property-3.png",
      description: "Opulent 7-bedroom mansion overlooking the golf course. Features include home theater, indoor swimming pool, and landscaped gardens."
    },
    {
      id: 4,
      title: "Dubai Marina Apartment",
      price: "AED 8,200,000",
      bedrooms: 3,
      bathrooms: 4,
      area: 3200,
      type: "apartment",
      location: "Dubai Marina",
      featured: false,
      image: "/images/property-4.png",
      description: "Premium 3-bedroom apartment with marina views. Features include designer kitchen, private balcony, and access to world-class amenities."
    },
    {
      id: 5,
      title: "Bluewaters Island Penthouse",
      price: "AED 15,000,000",
      bedrooms: 4,
      bathrooms: 5,
      area: 6000,
      type: "apartment",
      location: "Bluewaters Island",
      featured: false,
      image: "/images/property-1.png",
      description: "Exclusive 4-bedroom penthouse with breathtaking views of the Arabian Gulf and Dubai Eye. Features include private pool and smart home technology."
    },
    {
      id: 6,
      title: "District One Mansion",
      price: "AED 32,000,000",
      bedrooms: 6,
      bathrooms: 8,
      area: 15000,
      type: "villa",
      location: "District One",
      featured: false,
      image: "/images/property-2.png",
      description: "Luxurious 6-bedroom mansion with Crystal Lagoon views. Features include contemporary design, smart home automation, and expansive outdoor entertaining areas."
    },
    {
      id: 7,
      title: "DIFC Luxury Apartment",
      price: "AED 12,500,000",
      bedrooms: 3,
      bathrooms: 4,
      area: 4000,
      type: "apartment",
      location: "DIFC",
      featured: true,
      image: "/images/property-3.png",
      description: "Sophisticated 3-bedroom residence in the heart of Dubai's financial district. Features include designer finishes, floor-to-ceiling windows, and stunning city views."
    },
    {
      id: 8,
      title: "Jumeirah Bay Island Villa",
      price: "AED 50,000,000",
      bedrooms: 5,
      bathrooms: 7,
      area: 10000,
      type: "villa",
      location: "Jumeirah Bay Island",
      featured: true,
      image: "/images/property-4.png",
      description: "Exquisite 5-bedroom beachfront villa with private beach access. Features include minimalist design, panoramic sea views, and premium Italian finishes."
    }
  ];

  const filteredProperties = properties.filter(property => {
    // Filter by type
    if (activeFilter !== 'all' && property.type !== activeFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <MainLayout>
      <Suspense fallback={null}>
        <SearchParamsComponent
          setSearchQuery={setSearchQuery}
          setActiveFilter={setActiveFilter}
        />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
          <Image 
            src="/images/property-3.png" 
            alt="Luxury Properties" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-4 text-pearl-white">
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Properties
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 w-24 bg-desert-gold mb-6"
          ></motion.div>
          
          <motion.p
            className="font-inter text-lg md:text-xl max-w-2xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Discover Dubai&apos;s most exclusive addresses
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-pearl-white border-b border-rich-navy/10">
        <div className="max-w-content mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by property name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 py-3 px-4 pl-12 rounded-full border border-rich-navy/20 focus:outline-none focus:border-desert-gold"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rich-navy/50 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                className={`px-6 py-2 rounded-full font-inter text-sm transition-all ${activeFilter === 'all' ? 'bg-desert-gold text-pearl-white' : 'bg-rich-navy/5 hover:bg-rich-navy/10'}`}
                onClick={() => setActiveFilter('all')}
              >
                All Properties
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-inter text-sm transition-all ${activeFilter === 'villa' ? 'bg-desert-gold text-pearl-white' : 'bg-rich-navy/5 hover:bg-rich-navy/10'}`}
                onClick={() => setActiveFilter('villa')}
              >
                Villas
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-inter text-sm transition-all ${activeFilter === 'apartment' ? 'bg-desert-gold text-pearl-white' : 'bg-rich-navy/5 hover:bg-rich-navy/10'}`}
                onClick={() => setActiveFilter('apartment')}
              >
                Apartments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div 
                  key={property.id}
                  className="bg-pearl-white rounded-xl overflow-hidden shadow-lg border border-rich-navy/10 group hover:border-desert-gold transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    <Image 
                      src={property.image} 
                      alt={property.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-desert-gold text-pearl-white px-3 py-1 text-xs font-inter rounded">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-black to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 text-pearl-white font-playfair text-xl">
                      {property.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-lora text-xl text-rich-navy">{property.title}</h3>
                    <p className="text-desert-gold font-inter mt-1">{property.location}</p>
                    
                    <p className="mt-3 font-inter text-rich-navy/70 line-clamp-2">
                      {property.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-rich-navy/10">
                      <div className="flex space-x-4 text-rich-navy/70 text-sm">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          {property.bedrooms} Beds
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {property.bathrooms} Baths
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          </svg>
                          {property.area.toLocaleString()} sqft
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/properties/${property.id}`} 
                      className="block text-center bg-deep-teal text-pearl-white font-inter py-2 rounded-full mt-6 hover:bg-rich-navy transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <h3 className="font-lora text-2xl text-rich-navy mb-4">No properties found</h3>
              <p className="font-inter text-rich-navy/70">
                Try adjusting your search criteria or filters.
              </p>
              <button 
                onClick={() => {setActiveFilter('all'); setSearchQuery('');}} 
                className="mt-6 px-6 py-2 bg-deep-teal text-pearl-white rounded-full hover:bg-rich-navy transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rich-navy text-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl mb-6">Looking for Something Specific?</h2>
              <p className="font-inter text-lg opacity-90 leading-relaxed mb-8">
                Our extensive portfolio includes numerous off-market properties not listed publicly. Contact our team to discuss your specific requirements and let us find your perfect Dubai address.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-desert-gold text-rich-navy font-inter px-8 py-3 rounded-full hover:bg-pearl-white transition-colors duration-300"
              >
                Contact Our Property Specialists
              </Link>
            </div>
            <div className="relative">
              <Image 
                src="/images/property-4.png" 
                alt="Luxury Dubai Property" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-desert-gold text-pearl-white p-4 rounded font-playfair text-xl">
                Exclusive Listings
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
