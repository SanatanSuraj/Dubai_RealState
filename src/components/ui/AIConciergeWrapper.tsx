'use client';

import dynamic from 'next/dynamic';

// Dynamically import AI Concierge to reduce initial load time
const AIConcierge = dynamic(() => import('@/components/ui/AIConcierge'), { 
  ssr: false,
  loading: () => <div className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-deep-teal/50 animate-pulse" />
});

export default function AIConciergeWrapper() {
  return <AIConcierge />;
}
