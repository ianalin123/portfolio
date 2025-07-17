import { useState, useEffect } from 'react';
import { quotes } from '@/lib/quotes';

export default function QuoteRotator() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 150);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleQuoteChange = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentQuoteIndex(index);
      setIsVisible(true);
    }, 150);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="glassmorphism rounded-2xl p-8 min-h-[300px] flex flex-col justify-center">
      <div className="text-center">
        <div className="text-2xl text-synapse-500 mb-6">❝</div>
        <blockquote 
          className={`font-serif text-xl md:text-2xl italic leading-relaxed mb-6 min-h-[100px] flex items-center justify-center transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          "{currentQuote.text}"
        </blockquote>
        <cite className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          {currentQuote.attribution}
        </cite>
      </div>
      
      <div className="flex justify-center space-x-2 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuoteChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuoteIndex
                ? 'bg-synapse-500'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-synapse-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
