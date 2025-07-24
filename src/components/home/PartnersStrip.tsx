"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

// Partner data using the "Slice" SVGs with proper names (now renamed)
const partners = [
  { 
    id: 1, 
    name: 'Premium Partner 1', 
    logo: '/images/partners/partner1.svg',
    fallbackImage: '/images/partners/partner1.svg'
  },
  { 
    id: 2, 
    name: 'Premium Partner 2', 
    logo: '/images/partners/partner2.svg',
    fallbackImage: '/images/partners/partner2.svg'
  },
  { 
    id: 3, 
    name: 'Premium Partner 3', 
    logo: '/images/partners/partner3.svg',
    fallbackImage: '/images/partners/partner3.svg'
  },
  { 
    id: 4, 
    name: 'Premium Partner 4', 
    logo: '/images/partners/partner4.svg',
    fallbackImage: '/images/partners/partner4.svg'
  },
  { 
    id: 5, 
    name: 'Premium Partner 5', 
    logo: '/images/partners/partner5.svg',
    fallbackImage: '/images/partners/partner5.svg'
  },
  { 
    id: 6, 
    name: 'Premium Partner 6', 
    logo: '/images/partners/partner6.svg',
    fallbackImage: '/images/partners/partner6.svg'
  }
];

const PartnersStrip = () => {
  return (
    <section className="py-16 bg-pearl-white border-t border-b border-rich-navy/10">
      <div className="max-w-content mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-desert-gold font-inter text-lg">Trusted Partnerships</p>
          <h2 className="font-playfair text-3xl text-rich-navy mt-2">
            Premier Developer Relations
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-20 w-20 flex items-center justify-center rounded-md bg-pearl-white border border-desert-gold/30 overflow-hidden">
                <div className="h-full w-full rounded-sm flex items-center justify-center bg-white overflow-hidden">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 60px, 72px"
                      style={{ 
                        objectFit: 'contain',
                        padding: '10px'
                      }}
                      className="grayscale hover:grayscale-0 hover:opacity-100 opacity-70 transition-all duration-300 filter hover:drop-shadow-md"
                      onError={() => {
                        // Next/Image handles failures differently
                        console.log(`Error loading ${partner.name} logo`);
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersStrip;
