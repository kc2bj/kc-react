import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { toggleTheme } from '../utils/theme';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  return (
    <nav className="w-full py-6 px-4 dark:bg-espresso-bg dark:text-espresso-text transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-semibold">Kris Celeste</h1>

        {/* Desktop pills */}
        <ul className="hidden sm:flex gap-4 text-neutral-800 rounded-full px-6 py-2 shadow-md text-sm">
          <li><a href="#" className="px-3 py-1 rounded-full hover:bg-neutral-200 transition">About</a></li>
          <li><a href="#" className="px-3 py-1 rounded-full hover:bg-neutral-200 transition">Articles</a></li>
          <li><a href="#" className="px-3 py-1 rounded-full hover:bg-neutral-200 transition">Projects</a></li>
          <li><a href="#" className="px-3 py-1 rounded-full hover:bg-neutral-200 transition">Speaking</a></li>
          <li><a href="#" className="px-3 py-1 rounded-full hover:bg-neutral-200 transition">Uses</a></li>
        </ul>

        {/* Dark Mode Light Mode Theme toggle icon button */}
        <button
          onClick={() => {
            toggleTheme();
            const newIsDark = document.documentElement.classList.contains('dark');
            setIsDark(newIsDark);
          }}
          className="ml-4 p-2 rounded-fullborder-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          aria-label="Toggle Theme"
        >
          <span title="Toggle Dark Mode"
          className="transition-transform duration-300 ease-in-out transform hover:rotate-90"
          >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </span>
        </button>

        {/* Hamburger toggle (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md hover:bg-neutral-200 transition"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 transition-all duration-300 ease-in-out transform scale-y-100 origin-topsm:hidden mt-4 transition-all duration-300 ease-in-out transform">
          <ul className="flex flex-col gap-2 text-sm font-medium  p-4 rounded-lg shadow">
            <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-neutral-200 transition">About</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-neutral-200 transition">Articles</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-neutral-200 transition">Projects</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-neutral-200 transition">Speaking</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-neutral-200 transition">Uses</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
