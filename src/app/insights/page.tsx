'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Dubai Property Market Trends 2025",
      excerpt: "An analysis of the current market trends and future projections for Dubai's luxury real estate sector in 2025.",
      image: "/images/property-1.png",
      category: "market-trends",
      date: "June 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Investment Hotspots: Emerging Neighborhoods in Dubai",
      excerpt: "Discover the up-and-coming areas in Dubai that offer significant investment potential and attractive returns.",
      image: "/images/property-2.png",
      category: "investment",
      date: "June 5, 2025",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Luxury Interior Design Trends for 2025",
      excerpt: "Explore the latest design aesthetics and materials shaping Dubai's most prestigious residences this year.",
      image: "/images/luxury-interior.png",
      category: "lifestyle",
      date: "May 28, 2025",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "The Impact of New Regulations on Dubai's Real Estate Market",
      excerpt: "An in-depth look at recent regulatory changes and their implications for property investors and homeowners.",
      image: "/images/property-3.png",
      category: "market-trends",
      date: "May 20, 2025",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Sustainable Luxury: Eco-Friendly Features in Premium Properties",
      excerpt: "How sustainability is being integrated into Dubai's luxury real estate sector without compromising on opulence.",
      image: "/images/property-4.png",
      category: "lifestyle",
      date: "May 15, 2025",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Foreign Investment in Dubai: A Complete Guide",
      excerpt: "Everything international investors need to know about purchasing property in Dubai's competitive market.",
      image: "/images/dubai-skyline.png",
      category: "investment",
      date: "May 8, 2025",
      readTime: "12 min read"
    },
    {
      id: 7,
      title: "Palm Jumeirah: A Decade of Price Evolution",
      excerpt: "Analyzing the property value trends on Dubai's iconic Palm Jumeirah over the past ten years.",
      image: "/images/property-1.png",
      category: "market-trends",
      date: "April 30, 2025",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Maximizing Rental Yields in Dubai's Luxury Market",
      excerpt: "Strategic approaches to optimize returns on high-end rental properties in Dubai's competitive landscape.",
      image: "/images/property-2.png",
      category: "investment",
      date: "April 22, 2025",
      readTime: "8 min read"
    },
    {
      id: 9,
      title: "The Art of Staging Ultra-Luxury Properties",
      excerpt: "Professional insights into presenting multi-million dirham properties to attract discerning buyers.",
      image: "/images/luxury-interior.png",
      category: "lifestyle",
      date: "April 15, 2025",
      readTime: "6 min read"
    }
  ];

  const filteredArticles = articles.filter(article => {
    if (activeCategory === 'all') return true;
    return article.category === activeCategory;
  });

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'investment', name: 'Investment' },
    { id: 'lifestyle', name: 'Lifestyle & Design' }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/50 to-obsidian-black/70 z-10"></div>
          <Image 
            src="/images/dubai-skyline.png" 
            alt="Dubai Insights" 
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
            Insights & Perspectives
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
            Expert analysis and perspectives on Dubai&apos;s luxury real estate market
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-desert-gold font-inter text-sm uppercase tracking-wider">Featured Article</span>
                <h2 className="font-playfair text-3xl md:text-4xl text-rich-navy mt-2 mb-4">Dubai Property Market Trends 2025</h2>
                <p className="text-sm font-inter text-rich-navy/60 mb-6">June 10, 2025 • 8 min read</p>
                <div className="h-1 w-20 bg-desert-gold mb-6"></div>
                <p className="font-inter text-lg text-rich-navy/80 leading-relaxed mb-6">
                  As Dubai continues to strengthen its position as a global hub for luxury real estate, several key trends are emerging in 2025 that shape both the market dynamics and investor strategies. From the rising prominence of sustainable luxury to the evolving preferences of ultra-high-net-worth individuals, this article provides an in-depth analysis of the factors influencing Dubai&apos;s premium property sector.
                </p>
                <p className="font-inter text-lg text-rich-navy/80 leading-relaxed mb-8">
                  Our research shows that despite global economic fluctuations, Dubai&apos;s luxury real estate market continues to demonstrate remarkable resilience, with certain neighborhoods experiencing double-digit growth in property values over the past year.
                </p>
                <Link 
                  href="/insights/1" 
                  className="inline-block bg-deep-teal text-pearl-white font-inter px-8 py-3 rounded-full hover:bg-rich-navy transition-colors duration-300"
                >
                  Read Full Article
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image 
                  src="/images/property-1.png" 
                  alt="Dubai Property Market Trends" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-rich-navy/5">
        <div className="max-w-content mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`px-6 py-2 rounded-full font-inter text-sm transition-all ${activeCategory === category.id ? 'bg-desert-gold text-pearl-white' : 'bg-rich-navy/5 hover:bg-rich-navy/10'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                className="bg-pearl-white rounded-xl overflow-hidden shadow-lg border border-rich-navy/10 hover:border-desert-gold transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-desert-gold text-pearl-white px-3 py-1 text-xs font-inter rounded">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-lora text-xl text-rich-navy">{article.title}</h3>
                  <p className="text-sm font-inter text-rich-navy/60 mt-2">
                    {article.date} • {article.readTime}
                  </p>
                  
                  <p className="mt-4 font-inter text-rich-navy/70 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/insights/${article.id}`} 
                    className="inline-block mt-6 font-inter text-desert-gold border-b border-desert-gold pb-1 hover:text-deep-teal hover:border-deep-teal transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-rich-navy text-pearl-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl mb-6">Stay Updated with Market Insights</h2>
              <p className="font-inter text-lg opacity-90 leading-relaxed mb-8">
                Subscribe to our newsletter to receive the latest analysis, trends, and insights on Dubai&apos;s luxury real estate market directly in your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-pearl-white/10 border border-pearl-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-desert-gold transition-colors duration-300 w-full sm:w-auto flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-desert-gold text-rich-navy font-inter px-8 py-3 rounded-full hover:bg-pearl-white transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm opacity-70 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="hidden lg:block">
              <Image 
                src="/images/founder-signature.png" 
                alt="Newsletter" 
                width={500} 
                height={300} 
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
