'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
          <Image 
            src="/images/luxury-interior.png" 
            alt="Dubai Luxury Interior" 
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
            Contact Us
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
            Reach out to our team of luxury real estate experts
          </motion.p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-24 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-desert-gold font-inter text-lg">Get in Touch</p>
                <h2 className="font-playfair text-4xl text-rich-navy mt-2">
                  We&apos;d Love to Hear from You
                </h2>
                <div className="h-1 w-20 bg-desert-gold mt-6"></div>
              </div>

              <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
                Whether you&apos;re looking to buy, sell, or just explore the Dubai luxury property market, our team is here to assist you with expert advice and personalized service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-desert-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-desert-gold" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-lora text-xl text-rich-navy">Phone</h3>
                    <a href="tel:+97144555777" className="font-inter text-base text-rich-navy/80 hover:text-desert-gold transition-colors">+971 4 455 5777</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-desert-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-desert-gold" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-lora text-xl text-rich-navy">Email</h3>
                    <a href="mailto:info@dubaisignature.ae" className="font-inter text-base text-rich-navy/80 hover:text-desert-gold transition-colors">info@dubaisignature.ae</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-desert-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-desert-gold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8 3.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H8.5V4a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-lora text-xl text-rich-navy">Office Hours</h3>
                    <p className="font-inter text-base text-rich-navy/80">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-desert-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-desert-gold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-lora text-xl text-rich-navy">Address</h3>
                    <address className="font-inter text-base text-rich-navy/80 not-italic">
                      Dubai Signature Estates<br />
                      Level 42, Emirates Towers<br />
                      Sheikh Zayed Road, Dubai, UAE
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-pearl-white shadow-lg rounded-xl p-8 border border-rich-navy/10">
                <h3 className="font-playfair text-2xl text-rich-navy mb-6">Send Us a Message</h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-deep-teal/10 text-deep-teal rounded-lg">
                    Thank you for your message. Our team will get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-inter text-rich-navy mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-rich-navy/30 bg-transparent py-2 px-1 focus:outline-none focus:border-desert-gold transition-all duration-300 font-inter"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-inter text-rich-navy mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-rich-navy/30 bg-transparent py-2 px-1 focus:outline-none focus:border-desert-gold transition-all duration-300 font-inter"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-inter text-rich-navy mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-rich-navy/30 bg-transparent py-2 px-1 focus:outline-none focus:border-desert-gold transition-all duration-300 font-inter"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-inter text-rich-navy mb-2">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-rich-navy/30 bg-transparent py-2 px-1 focus:outline-none focus:border-desert-gold transition-all duration-300 font-inter"
                      >
                        <option value="">Select a subject</option>
                        <option value="Property Inquiry">Property Inquiry</option>
                        <option value="Selling Property">Selling Property</option>
                        <option value="Property Valuation">Property Valuation</option>
                        <option value="Investment Consultation">Investment Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter text-rich-navy mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full border-b border-rich-navy/30 bg-transparent py-2 px-1 focus:outline-none focus:border-desert-gold transition-all duration-300 font-inter resize-none"
                    ></textarea>
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className={`bg-deep-teal text-pearl-white font-inter px-8 py-3 rounded-full shadow-md hover:bg-transparent hover:border hover:border-desert-gold hover:text-deep-teal transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-rich-navy/5">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl text-rich-navy">Our Location</h2>
            <p className="font-inter text-lg text-rich-navy/80 mt-4">
              Visit our office in the heart of Dubai&apos;s business district
            </p>
          </div>
          
          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dubai-skyline.png"
              alt="Map Location"
              className="w-full h-full object-cover"
              width={1200}
              height={500}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
