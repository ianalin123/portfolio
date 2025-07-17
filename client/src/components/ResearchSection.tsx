import { projects } from '@/lib/projects';
import { Calculator, Brain, Bot, Zap, Cpu, TrendingUp } from 'lucide-react';

const iconMap = {
  'calculator': Calculator,
  'brain': Brain,
  'robot': Bot,
  'wave-square': Zap,
  'microchip': Cpu,
  'chart-line': TrendingUp
};

export default function ResearchSection() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'neural':
        return {
          bg: 'bg-neural-500',
          tagBg: 'bg-neural-100 dark:bg-neural-900',
          tagText: 'text-neural-700 dark:text-neural-300'
        };
      case 'synapse':
        return {
          bg: 'bg-synapse-500',
          tagBg: 'bg-synapse-100 dark:bg-synapse-900',
          tagText: 'text-synapse-700 dark:text-synapse-300'
        };
      default:
        return {
          bg: 'bg-gray-600',
          tagBg: 'bg-gray-100 dark:bg-gray-700',
          tagText: 'text-gray-700 dark:text-gray-300'
        };
    }
  };

  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 ragged-left">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 vintage-tilt">
            Research <span className="text-neural-600 dark:text-neural-400">&</span> Technical Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-mono ragged-right">
            Exploring the intersection of formal methods, machine learning, and computational neuroscience.
          </p>
          <div className="w-32 h-1 signal-wave mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                className={`group vintage-border glassmorphism rounded-xl p-6 hover:scale-105 transition-transform duration-300 ${
                  index % 3 === 0 ? 'vintage-tilt' : 
                  index % 3 === 1 ? 'ragged-right' : 'ragged-left'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{project.period}</span>
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 ${colors.tagBg} ${colors.tagText} rounded-full text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="vintage-border glassmorphism rounded-xl p-6 text-center vintage-tilt">
            <div className="text-3xl font-serif font-semibold text-neural-600 dark:text-neural-400">
              4.0
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">GPA</div>
          </div>
          <div className="vintage-border glassmorphism rounded-xl p-6 text-center ragged-right">
            <div className="text-3xl font-serif font-semibold text-synapse-600 dark:text-synapse-400">
              2+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Research</div>
          </div>
          <div className="vintage-border glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-serif font-semibold text-neural-600 dark:text-neural-400">
              1
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Publications</div>
          </div>
          <div className="vintage-border glassmorphism rounded-xl p-6 text-center ragged-left">
            <div className="text-3xl font-serif font-semibold text-synapse-600 dark:text-synapse-400">
              5+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Languages</div>
          </div>
          <div className="vintage-border glassmorphism rounded-xl p-6 text-center vintage-tilt">
            <a
              href="/resume"
              className="block text-2xl font-serif font-semibold text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
            >
              CV
            </a>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Download</div>
          </div>
        </div>
      </div>
    </section>
  );
}
