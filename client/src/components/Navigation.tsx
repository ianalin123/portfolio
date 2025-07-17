import { useThemeContext } from './ThemeProvider';
import { useLocation } from 'wouter';
import { Link } from 'wouter';
import { Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useThemeContext();
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Lab' },
    { path: '/research', label: 'Research' },
    { path: '/creative', label: 'Creative' },
    { path: '/journal', label: 'Journal' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="font-serif text-xl font-semibold text-neural-600 dark:text-neural-400 cursor-pointer hover:text-neural-700 dark:hover:text-neural-300 transition-colors duration-200">
              Iana Lin
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-mono font-medium transition-colors duration-200 cursor-pointer ${
                    location === item.path
                      ? 'text-neural-600 dark:text-neural-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-neural-600 dark:hover:text-neural-400'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
