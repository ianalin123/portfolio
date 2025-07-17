import { journalEntries } from '@/lib/journal';
import ReadingSection from './ReadingSection';

export default function JournalSection() {
  const journalStats = {
    totalEntries: 47,
    totalWords: 12847,
    writingStreak: 8
  };

  const frequentTags = [
    { tag: 'neuroscience', size: 'text-sm' },
    { tag: 'machine learning', size: 'text-xs' },
    { tag: 'identity', size: 'text-sm' },
    { tag: 'creativity', size: 'text-xs' },
    { tag: 'learning', size: 'text-xs' },
    { tag: 'consciousness', size: 'text-sm' },
    { tag: 'mathematics', size: 'text-xs' }
  ];

  const currentlyReading = [
    { title: 'Gödel, Escher, Bach', author: 'Douglas Hofstadter', color: 'border-neural-500' },
    { title: 'The Embodied Mind', author: 'Varela, Thompson, Rosch', color: 'border-synapse-500' },
    { title: 'Principles of Neural Design', author: 'Sterling & Laughlin', color: 'border-gray-400' }
  ];

  const getTagColors = (index: number) => {
    const colors = [
      'bg-neural-100 dark:bg-neural-900 text-neural-700 dark:text-neural-300',
      'bg-synapse-100 dark:bg-synapse-900 text-synapse-700 dark:text-synapse-300',
      'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="journal" className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 ragged-left">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 vintage-tilt">
            Digital <span className="text-neural-600 dark:text-neural-400">Journal</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-mono ragged-right">
            Raw thoughts, learning notes, and reflections on the intersection of mind, technology, and creativity.
          </p>
          <div className="w-32 h-1 signal-wave mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {journalEntries.map((entry, index) => (
              <article key={entry.id} className={`vintage-border glassmorphism rounded-2xl p-8 ${
                index % 2 === 0 ? 'ragged-right' : 'ragged-left'
              }`}>
                <header className="mb-6">
                  <time className="text-sm font-mono text-gray-500">{entry.date}</time>
                  <h3 className="font-serif text-2xl font-semibold mt-2 vintage-tilt">{entry.title}</h3>
                </header>
                
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line">{entry.content}</div>
                </div>
                
                <footer className="mt-6 flex items-center space-x-4">
                  {entry.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs ${getTagColors(index)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </footer>
              </article>
            ))}
          </div>

          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6">
              <h4 className="font-serif text-lg font-semibold mb-4">Journal Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total entries</span>
                  <span className="font-mono text-sm">{journalStats.totalEntries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Words written</span>
                  <span className="font-mono text-sm">{journalStats.totalWords.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Current streak</span>
                  <span className="font-mono text-sm">{journalStats.writingStreak} days</span>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <h4 className="font-serif text-lg font-semibold mb-4">Frequent Topics</h4>
              <div className="flex flex-wrap gap-2">
                {frequentTags.map((item, index) => (
                  <span
                    key={item.tag}
                    className={`px-3 py-1 rounded-full ${item.size} ${getTagColors(index)}`}
                  >
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <h4 className="font-serif text-lg font-semibold mb-4">Reading List</h4>
              <ReadingSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
