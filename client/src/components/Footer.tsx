import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-24 h-1 signal-wave mx-auto mb-6"></div>
          <p className="font-serif text-lg mb-4">
            Building bridges between mind and machine, one synapse at a time.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
            // Always walking, sitting, or standing
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:ianalin123@berkeley.edu"
            className="text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ianalin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ianalin123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/iana.lin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400 transition-colors duration-200"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-500">
          <p>© 2025 Iana Lin. Built with Replit, chrysanthemum tea, and audiobooks.</p>
        </div>
      </div>
    </footer>
  );
}
