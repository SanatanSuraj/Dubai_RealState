'use client';
import dynamic from 'next/dynamic';
export default dynamic(() => import('./TestimonialsCarousel'), { ssr: false });
