import InteractiveBackground from '@/components/InteractiveBackground';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import ResearchSection from '@/components/ResearchSection';
import CreativeSection from '@/components/CreativeSection';
import JournalSection from '@/components/JournalSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 custom-scrollbar">
      <InteractiveBackground />
      <Navigation />
      <HomeSection />
      <ResearchSection />
      <CreativeSection />
      <JournalSection />
      <Footer />
    </div>
  );
}
