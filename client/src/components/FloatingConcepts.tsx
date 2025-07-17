import { useEffect, useRef } from 'react';

export default function FloatingConcepts() {
  const containerRef = useRef<HTMLDivElement>(null);

  const concepts = [
    'neural.networks',
    'formal.verification',
    'machine.learning',
    'computational.neuroscience',
    'signal.processing',
    'theorem.proving',
    'consciousness.models',
    'pattern.recognition',
    'synaptic.plasticity',
    'graph.theory'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating concept elements
    concepts.forEach((concept, index) => {
      const element = document.createElement('div');
      element.className = `absolute font-mono text-xs opacity-20 hover:opacity-40 transition-opacity duration-300 pointer-events-none animate-drift`;
      element.textContent = concept;
      
      // Random positioning
      element.style.left = `${Math.random() * 90}%`;
      element.style.top = `${Math.random() * 90}%`;
      element.style.animationDelay = `${index * 0.8}s`;
      element.style.animationDuration = `${12 + Math.random() * 8}s`;
      
      // Random color from neural palette
      const colors = [
        'text-neural-500/30',
        'text-synapse-500/30',
        'text-gray-400/30'
      ];
      element.className += ` ${colors[index % colors.length]}`;
      
      container.appendChild(element);
    });

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
    />
  );
}