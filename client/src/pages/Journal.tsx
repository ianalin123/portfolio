import { useEffect } from 'react';
import InteractiveBackground from '@/components/InteractiveBackground';
import Navigation from '@/components/Navigation';
import JournalSection from '@/components/JournalSection';
import Footer from '@/components/Footer';

export default function Journal() {
  useEffect(() => {
    document.title = 'Digital Journal - Neural Lab';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar min-h-screen">
      <InteractiveBackground />
      <Navigation />
      <div className="pt-20">
        <JournalSection />
      </div>
      <Footer />
    </div>
  );
}