import { useEffect } from 'react';
import InteractiveBackground from '@/components/InteractiveBackground';
import FloatingConcepts from '@/components/FloatingConcepts';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'Hi! I\'m Iana - Digital Lab for Thought';
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      <InteractiveBackground />
      <FloatingConcepts />
      <Navigation />
      <HomeSection />
      <Footer />
    </div>
  );
}
