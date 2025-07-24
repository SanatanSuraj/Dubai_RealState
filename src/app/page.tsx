import MainLayout from '@/components/layout/MainLayout';

// Import static components
import HeroSection from '@/components/home/HeroSection';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import WhyDubaiSection from '@/components/home/WhyDubaiSection';
import AboutUsTeaser from '@/components/home/AboutUsTeaser';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import PartnersStrip from '@/components/home/PartnersStrip';
import CTABanner from '@/components/home/CTABanner';
import AIConciergeWrapper from '@/components/ui/AIConciergeWrapper';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedCollection />
      <WhyDubaiSection />
      <AboutUsTeaser />
      <TestimonialsCarousel />
      <PartnersStrip />
      <CTABanner />
      <AIConciergeWrapper />
    </MainLayout>
  );
}
