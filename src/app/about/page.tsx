'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
          <Image 
            src="/images/dubai-skyline.png" 
            alt="Dubai Skyline" 
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
            About Dubai Signature Estates
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
            Redefining luxury real estate in Dubai since 2010
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-desert-gold font-inter text-lg">Our Story</p>

              <h2 className="font-playfair text-4xl text-rich-navy">
                From Vision to Reality:<br />
                A Decade of Excellence
              </h2>

              <div className="h-1 w-20 bg-desert-gold"></div>

              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                Dubai Signature Estates was founded in 2010 by Ahmed Al Maktoum with a singular vision — to bridge the gap between extraordinary properties and discerning clients seeking the pinnacle of Dubai luxury living.
              </p>

              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                What began as a boutique agency specializing in Palm Jumeirah properties has evolved into Dubai&apos;s most respected luxury real estate consultancy, with a portfolio spanning the emirate&apos;s most prestigious addresses, from Downtown penthouses to Emirates Hills mansions.
              </p>
              
              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                Our journey mirrors Dubai&apos;s remarkable transformation into a global luxury destination. At each step, we&apos;ve maintained our founding principles of discretion, expertise, and uncompromising service.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/founder-portrait.png"
                  alt="Founder of Dubai Signature Estates"
                  width={600}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-desert-gold/10 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-24 bg-rich-navy/5">
        <div className="max-w-content mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-desert-gold font-inter text-lg">Our Philosophy</p>
            <h2 className="font-playfair text-4xl text-rich-navy mt-2">Vision & Mission</h2>
            <div className="h-1 w-20 bg-desert-gold mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-pearl-white p-10 rounded-xl shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-playfair text-3xl text-rich-navy mb-6">Our Vision</h3>
              <div className="h-1 w-16 bg-desert-gold mb-6"></div>
              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                To be recognized globally as the definitive authority on Dubai luxury real estate, setting the standard for service excellence and market expertise in the region.
              </p>
              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed mt-4">
                We envision a future where every high-net-worth individual seeking property in Dubai instinctively turns to Dubai Signature Estates as their trusted advisor and gateway to the city&apos;s most exclusive addresses.
              </p>
            </motion.div>

            <motion.div
              className="bg-pearl-white p-10 rounded-xl shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-playfair text-3xl text-rich-navy mb-6">Our Mission</h3>
              <div className="h-1 w-16 bg-desert-gold mb-6"></div>
              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                To curate exceptional property experiences that transcend transactions, fostering lasting relationships built on deep market understanding, discretion, and personalized service.
              </p>
              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed mt-4">
                We are committed to understanding the unique requirements of each client, presenting only properties that align perfectly with their lifestyle aspirations and investment objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-desert-gold font-inter text-lg">Our People</p>
            <h2 className="font-playfair text-4xl text-rich-navy mt-2">Meet Our Expert Team</h2>
            <div className="h-1 w-20 bg-desert-gold mx-auto mt-6"></div>
            <p className="font-inter text-lg text-rich-navy/80 max-w-3xl mx-auto mt-6">
              Our team combines local insight with global expertise, bringing together seasoned professionals from luxury real estate markets around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[3/4] group">
                  <Image 
                    src={`/images/testimonial-${index}.png`} 
                    alt="Team Member" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <a href="#" className="text-pearl-white hover:text-desert-gold transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-pearl-white hover:text-desert-gold transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-lora text-xl text-rich-navy">
                  {index === 1 && "Sarah Johnson"}
                  {index === 2 && "Mohammed Al Faisal"}
                  {index === 3 && "Elena Rodriguez"}
                  {index === 4 && "David Chen"}
                </h3>
                <p className="font-inter text-desert-gold mt-1">
                  {index === 1 && "Managing Director"}
                  {index === 2 && "Head of Luxury Sales"}
                  {index === 3 && "Client Relations Director"}
                  {index === 4 && "Investment Advisor"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
