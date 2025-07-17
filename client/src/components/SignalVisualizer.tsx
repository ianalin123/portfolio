import { useState, useEffect } from 'react';

export default function SignalVisualizer() {
  const [signalData, setSignalData] = useState<number[]>([]);
  const [frequency, setFrequency] = useState(42);
  const [amplitude, setAmplitude] = useState(0.8);

  useEffect(() => {
    const generateSignal = () => {
      const newData = Array.from({ length: 8 }, () => Math.random() * 100);
      setSignalData(newData);
      setFrequency(38 + Math.random() * 8); // 38-46 Hz
      setAmplitude(0.6 + Math.random() * 0.4); // 0.6-1.0 mV
    };

    generateSignal();
    const interval = setInterval(generateSignal, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glassmorphism rounded-2xl p-8 max-w-md mx-auto">
      <div className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-4">
        real-time neural signal
      </div>
      <div className="flex items-center justify-center space-x-1 h-16">
        {signalData.map((height, index) => (
          <div
            key={index}
            className={`w-1 rounded-full animate-signal ${
              index % 2 === 0 ? 'bg-neural-500' : 
              index % 3 === 0 ? 'bg-neural-600' : 'bg-synapse-500'
            }`}
            style={{
              height: `${height}%`,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      <div className="text-xs font-mono text-gray-500 mt-2">
        ~{frequency.toFixed(0)}Hz | {amplitude.toFixed(1)}mV
      </div>
    </div>
  );
}
