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
    'synaptic.plasticity',
    'graph.theory'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let elements: HTMLElement[] = [];

    // Create floating concept elements
    concepts.forEach((concept, index) => {
      const element = document.createElement('div');
      element.className = `absolute font-mono text-xs opacity-20 hover:opacity-40 transition-opacity duration-300 pointer-events-none`;
      element.textContent = concept;
      
      // Random positioning
      const startX = Math.random() * 90;
      const startY = Math.random() * 90;
      element.style.left = `${startX}%`;
      element.style.top = `${startY}%`;
      
      // Random color from neural palette
      const colors = [
        'text-neural-500/30',
        'text-synapse-500/30', 
        'text-gray-400/30'
      ];
      element.className += ` ${colors[index % colors.length]}`;
      
      container.appendChild(element);
      elements.push(element);
    });

    // Parallax scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      elements.forEach((element, index) => {
        const speed = 0.2 + (index % 4) * 0.1; // Different speeds for each element
        const translateY = scrollY * speed;
        const rotate = scrollY * 0.01 * (index % 2 === 0 ? 1 : -1);
        element.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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