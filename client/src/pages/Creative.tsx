import { useEffect } from 'react';
import InteractiveBackground from '@/components/InteractiveBackground';
import Navigation from '@/components/Navigation';
import CreativeSection from '@/components/CreativeSection';
import Footer from '@/components/Footer';

export default function Creative() {
  useEffect(() => {
    document.title = 'Creative & Personal - Neural Lab';
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      <InteractiveBackground />
      <Navigation />
      <div className="pt-20">
        <CreativeSection />
      </div>
      <Footer />
    </div>
  );
}