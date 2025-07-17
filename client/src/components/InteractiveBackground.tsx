import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create floating particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = `absolute rounded-full ${
        i % 3 === 0 ? 'bg-neural-500' : 
        i % 3 === 1 ? 'bg-synapse-500' : 'bg-neural-600'
      } ${
        i % 4 === 0 ? 'w-2 h-2' : 
        i % 4 === 1 ? 'w-1 h-1' : 
        i % 4 === 2 ? 'w-1.5 h-1.5' : 'w-1 h-1'
      } ${
        i % 3 === 0 ? 'animate-neural-pulse' : 
        i % 3 === 1 ? 'animate-pulse-slow' : 'animate-float'
      }`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      particles.appendChild(particle);
    }

    return () => {
      if (particles) {
        particles.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="neural-bg absolute inset-0"></div>
      <div ref={particlesRef} className="absolute inset-0"></div>
    </div>
  );
}
