import { Link } from 'wouter';
import SignalVisualizer from './SignalVisualizer';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Main content - ragged left */}
          <div className="lg:col-span-3 text-left space-y-8 ragged-left">
            <div className="vintage-tilt">
              <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight flex items-start">
                <span className="text-4xl mr-4 mt-2">👋</span>
                <div>
                  Hi! I'm
                  <span className="text-neural-600 dark:text-neural-400"> Iana</span>
                </div>
              </h1>
              <div className="w-24 h-1 signal-wave mt-4 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p className="font-serif italic text-xl ragged-right distressed">
                In the space between synapses and silicon,<br />
                where algorithms dream and neurons compute,<br />
                I map the territories of mind and machine.
              </p>
              
              <p className="font-mono text-sm text-neural-600 dark:text-neural-400 vintage-tilt distressed">
                // EECS + Neuroscience @ UC Berkeley<br />
                // Formal methods, neural networks, creative computation<br />
                // Building bridges between science and story
              </p>
            </div>

            {/* Navigation cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <Link href="/research">
                <div className="vintage-border glassmorphism rounded-xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <h3 className="font-mono text-sm font-medium mb-2">Research</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Formal methods & neural networks</p>
                  <ArrowRight className="text-neural-500 mt-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </div>
              </Link>

              <Link href="/creative">
                <div className="vintage-border glassmorphism rounded-xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group ragged-right">
                  <h3 className="font-mono text-sm font-medium mb-2">Creative</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Visual stories & entrepreneurship</p>
                  <ArrowRight className="text-synapse-500 mt-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </div>
              </Link>

              <Link href="/journal">
                <div className="vintage-border glassmorphism rounded-xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group vintage-tilt">
                  <h3 className="font-mono text-sm font-medium mb-2">Journal</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Raw thoughts & reflections</p>
                  <ArrowRight className="text-neural-600 mt-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </div>
              </Link>
            </div>

            {/* Contact link */}
            <div className="pt-8">
              <a
                href="mailto:ianalin123@berkeley.edu"
                className="inline-flex items-center font-mono text-sm text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
              >
                <span>ianalin123@berkeley.edu</span>
                <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </div>

          {/* Signal visualizer - ragged right */}
          <div className="lg:col-span-2 flex justify-center ragged-right">
            <SignalVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}
