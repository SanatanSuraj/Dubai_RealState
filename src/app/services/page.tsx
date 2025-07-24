'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const services = [
    {
      id: 1,
      title: "Luxury Property Sales",
      description: "Our elite portfolio features the most prestigious addresses in Dubai, from Palm Jumeirah villas to Downtown penthouses. We provide comprehensive marketing strategies, professional photography, and targeted exposure to qualified buyers worldwide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Luxury Property Acquisitions",
      description: "Our experts curate a selection of properties matching your exact requirements, often including off-market opportunities exclusive to our network. We handle all negotiations, due diligence, and paperwork to ensure a seamless acquisition process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Investment Advisory",
      description: "Our investment experts analyze market trends, potential returns, and growth areas to guide your property investment decisions. We provide detailed reports on emerging neighborhoods, rental yields, and capital appreciation forecasts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Property Management",
      description: "Our comprehensive property management service includes tenant screening, maintenance coordination, rent collection, and financial reporting. We ensure your investment is well-maintained and generates optimal returns with minimal involvement from you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Luxury Vacation Rentals",
      description: "For property owners seeking to generate income from short-term rentals, we provide a complete service including listing creation, guest screening, check-in coordination, and cleaning services. Our vacation rental management maximizes your property's income potential.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Interior Design & Renovation",
      description: "Our network of elite interior designers and contractors can transform your property to reflect your personal style or optimize it for the rental market. From concept to completion, we manage the entire renovation process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
          <Image 
            src="/images/property-1.png" 
            alt="Luxury Property Services" 
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
            Our Services
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
            Comprehensive real estate services tailored to exceed your expectations
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-desert-gold font-inter text-lg">What We Offer</p>
            <h2 className="font-playfair text-4xl text-rich-navy mt-2">Exclusive Services</h2>
            <div className="h-1 w-20 bg-desert-gold mx-auto mt-6"></div>
            <p className="font-inter text-lg text-rich-navy/80 max-w-3xl mx-auto mt-6">
              From property acquisition to management, we provide end-to-end services designed for discerning clients who expect nothing but excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`bg-pearl-white p-8 rounded-xl shadow-md border transition-all duration-300 ${activeService === service.id ? 'border-desert-gold transform scale-105' : 'border-rich-navy/10 hover:border-desert-gold'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="text-desert-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="font-lora text-xl text-rich-navy mb-4">{service.title}</h3>
                <p className="font-inter text-rich-navy/80">{service.description}</p>
                <div className={`mt-6 overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-96' : 'max-h-0'}`}>
                  <Link 
                    href="/contact" 
                    className="inline-block mt-4 font-inter text-desert-gold border-b border-desert-gold pb-1 hover:text-deep-teal hover:border-deep-teal transition-colors duration-300"
                  >
                    Inquire about this service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-rich-navy/5">
        <div className="max-w-content mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-desert-gold font-inter text-lg">How We Work</p>
            <h2 className="font-playfair text-4xl text-rich-navy mt-2">Our Process</h2>
            <div className="h-1 w-20 bg-desert-gold mx-auto mt-6"></div>
            <p className="font-inter text-lg text-rich-navy/80 max-w-3xl mx-auto mt-6">
              We follow a meticulous approach to ensure every client receives personalized service that addresses their unique requirements.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-desert-gold/30 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We begin with a comprehensive consultation to understand your needs, preferences, budget, and timeline. This allows us to create a tailored strategy specific to your requirements.",
                },
                {
                  step: 2,
                  title: "Strategic Planning",
                  description: "Our team develops a customized plan drawing on market insights, our extensive network, and years of experience in Dubai's luxury real estate market.",
                },
                {
                  step: 3,
                  title: "Execution & Implementation",
                  description: "We implement your tailored plan with precision and attention to detail, keeping you informed throughout the process. Our team handles all aspects of the transaction or service.",
                },
                {
                  step: 4,
                  title: "Continuous Support",
                  description: "Our relationship extends beyond the initial transaction. We provide ongoing support and advice to ensure your property continues to meet your objectives.",
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.step}
                  className={`flex flex-col items-center md:items-start md:grid md:grid-cols-5 md:gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`col-span-2 flex ${index % 2 === 0 ? 'md:justify-end md:text-right' : 'md:justify-start md:text-left'} mb-4 md:mb-0`}>
                    <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-none'}`}>
                      <div className="bg-desert-gold text-pearl-white rounded-full w-12 h-12 flex items-center justify-center font-playfair text-xl mb-4 mx-auto md:mx-0">
                        {item.step}
                      </div>
                      <h3 className="font-lora text-xl text-rich-navy">{item.title}</h3>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-center items-center col-span-1 relative">
                    <div className="absolute w-4 h-4 rounded-full bg-desert-gold"></div>
                  </div>

                  <div className={`col-span-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <p className="font-inter text-rich-navy/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rich-navy text-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl mb-6">Ready to Experience Exceptional Service?</h2>
              <p className="font-inter text-lg opacity-90 leading-relaxed mb-8">
                Contact our team today to discuss how Dubai Signature Estates can assist with your luxury real estate needs. Whether you&apos;re buying, selling, investing, or seeking property management, we&apos;re here to exceed your expectations.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-desert-gold text-rich-navy font-inter px-8 py-3 rounded-full hover:bg-pearl-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Image 
                src="/images/property-2.png" 
                alt="Luxury Dubai Property" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
