import SignalVisualizer from './SignalVisualizer';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="font-serif text-6xl md:text-8xl font-semibold mb-6 animate-float">
            Neural
            <span className="text-neural-600 dark:text-neural-400"> Lab</span>
          </h1>
          <div className="w-32 h-1 signal-wave mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
          <p className="font-light italic">
            In the space between synapses and silicon,<br />
            where algorithms dream and neurons compute,<br />
            I map the territories of mind and machine.
          </p>
          
          <p className="font-mono text-sm text-neural-600 dark:text-neural-400">
            // EECS + Neuroscience @ UC Berkeley<br />
            // Formal methods, neural networks, creative computation<br />
            // Building bridges between science and story
          </p>
        </div>
        
        <div className="mt-16">
          <SignalVisualizer />
        </div>
      </div>
    </section>
  );
}
