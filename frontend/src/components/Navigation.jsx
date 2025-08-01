import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { toggleTheme } from '../utils/theme';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const linkClasses = ({ isActive }) =>
    `px-3 py-1 rounded-full transition relative overflow-hidden no-underline hover:no-underline ${
      isActive
        ? 'bg-espresso-leaf text-white font-semibold'
        : 'hover:bg-espresso-leaf hover:text-white dark:hover:bg-espresso-leaf dark:hover:text-white'
    }`;

  return (
    <nav className="w-full py-6 px-4 bg-white dark:bg-espresso-bg dark:text-espresso-text transition-colors duration-300 shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
      <NavLink
        to="/"
        className="block w-8 h-8 text-espresso-leaf dark:text-espresso-cream transition duration-300"
        aria-label="Kris Celeste"
      >
        <svg
          viewBox="0 0 624.07 552.07"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M614.3,295.8c-14.9-4.8-59.8,9.6-75.7,15.2-2.2.8-4.6,2.5-6,3-18.4,6.7-35,13.5-53,21-16.8,7-30.7,14.8-49,18-.7-1.7-3-.7-4-1-.5-.7-1-1.4-1.4-2.1-4.4-7.6-3.8-18.8-11.6-23.9-3.2-2.1-2.7-1.4-6-2-5.5-1.1-7.3-1.3-13,0-4.2,1-7.4,3.2-11,5-11.2,5.5-18.8,12.1-29,19-6.4,4.3-12.7,8.6-19,13-2.9,2-6,3.9-9,6-6,4.3-12,8.7-18,13-3.7,2.6-7.3,5.4-11,8-3.5,2.5-6.6,5.5-10,8-3.7,2.7-7.3,5.4-11,8-1.4,1-2.6,2-4,3-1.8,1.3-3.3,2.9-5,4-4.5,3.1-9.4,6.1-14,9-3.4,2.1-22.8,11.7-23,13-15,5.5-4.5-15.3-2-22,1.2-.8,1.2-.8,2-2,9.8-3.4,18.9-8.1,28-13,2.8-1.5,5.3-3.4,8-5,1.3-.8,2.7-1.2,4-2,11.6-7.1,22.2-14.7,33-23,1.3-1,2.7-1.9,4-3,.9-.7,1.5-1.5,2-2,1.7-1.4,3.3-2.5,5-4,3.7-3.2,6.4-5.6,10-9,3.5-3.3,6.7-6.5,10-10,1.2-1.3,2.5-2.4,4-4,1.1-1.2,2-2.8,3-4,.7-.9,1.9-1.6,3-3,.8-.9,1.3-2.1,2-3,1.6-2,3.4-3.9,5-6,1.4-1.9,2.6-4,4-6,3.9-5.6,7.6-11,11-17,5.7-10.2,11.9-22.8,15-34,3.7-13.4,6.4-32.1-4-43-.8-.8-1-1.2-2-2-8.1-6.3-20.4-4.8-29,0-2.7.8-4.5,1.8-7,3-7.2,3.5-12.8,8.1-19,13-1.3,1-2.7,1.9-4,3-1.4,1.1-2.1,2.2-3,3-6.4,5.5-11.1,9.9-17,16-.6.7-1.3,1.3-2,2-2.5,2.6-4.6,5.4-7,8-.5.6-1.3,1.2-2,2-1.4,1.6-2.6,3.4-4,5-.5.6-1.3,1.1-2,2-1.7,2-3.4,4-5,6-.4.5-1.3,1.1-2,2-.8.9-1.3,2.1-2,3-7,8.9-13.5,17.7-20,27-5.6,8-10.8,15.7-16,24-10.9,17.5-18.1,31.7-27,50-.6,1.2-2.2,4.1-3,5-4.4,4.6-17.8,8.3-24.2,10.3-31.6,9.8-66.7,16.9-99.8,16.7-1.3-1.6-.9-3-.3-4.8,2.8-9.6,10.9-19.9,12.3-30.2,7.9-15.1,14.4-31,20-47,5.8-10.6,9.7-13.8,18-22,1.7-1.6,3.3-3.4,5-5,3.2-3.1,6.8-5.9,10-9,1.7-1.6,3.3-3.4,5-5,6.6-6.4,13.3-12.7,20-19,1.8-1.7,3.4-3.5,5-5,2.6-2.4,5.4-4.6,8-7,.7-.7,1.3-1.4,2-2,2.9-2.7,6.1-5.3,9-8,.7-.7,1.3-1.4,2-2,4.3-4,8.7-8,13-12,1.8-1.7,3.4-3.5,5-5,3.6-3.4,7.4-6.6,11-10,4.7-4.3,9.3-8.7,14-13,2.2-2,4.8-4,7-6,1.9-1.7,3.4-3.6,5-5,1.9-1.7,4.1-3.3,6-5,.8-.7,1.4-1.4,2-2,1.7-1.6,4-2.6,5-5,1-.7,1.8-1.1,3-2,2-1.4,3.8-2.8,5-5,1.8-1.2,2.4-1.8,4-3,1.7-1.3,3.4-2.6,5-4,.9-.8,1.3-1.4,2-2,3.4-3.1,5.1-4.7,8-8,1.2-.9,3.3-1.7,5-3,1-.7,1.5-1.6,2-2,1.7-1.3,3.4-2.6,5-4,.9-.7,1.4-1.4,2-2,1-.9,2.5-1.4,3-3,1.5-.9,1.6-1,3-2,2.1-1.6,4-3.4,6-5,2.4-1.9,4.6-4.1,7-6,.9-.7,2.1-1.3,3-2,2-1.6,4-3.4,6-5,1.3-1,2.7-2,4-3,3.4-2.6,6.6-5.4,10-8,4.3-3.3,8.6-6.8,13-10,1.3-1,2.7-2,4-3,1.8-1.3,4.1-2.6,6-4,1.7-1.3,3.3-2.8,5-4,1-.7,2-1.3,3-2,4.6-3.3,9.3-6.9,14-10,3.6-2.4,7.3-4.8,11-7,2-1.3,4.2-3,6-4,6.3-3.6,13.7-6.4,20-10,.9-.5,2.8-.8,3-2,6.1-.8,12.5-4.3,18.6-4.9,9.2-.9,21.4,5.5,18-11.2-3.8-18-31.6-13-43.5-6.9-7.5,2-14.2,5.3-21,9-7.7,4.2-14.8,9.2-22,14-4,2.7-8.1,5.2-12,8-3.1,2.2-6,4.8-9,7-2.3,1.7-4.7,3.3-7,5-2.7,2-5.4,4-8,6-1,.7-1.5,1.6-2,2-3,2.3-6,4.7-9,7-1.7,1.3-3.3,2.7-5,4-.9.7-2.1,1.3-3,2-2,1.6-4,3.4-6,5-3.3,2.7-6.7,5.3-10,8-2,1.6-4,3.4-6,5-.9.7-1.5,1.6-2,2-.9.8-2.1,1.2-3,2-1.3,1.1-2.2,2.3-3,3-1.3,1.1-2.7,1.9-4,3-.9.7-1.5,1.6-2,2-1.3,1.1-2.7,1.9-4,3-.9.7-1.5,1.6-2,2-2.9,2.4-6.1,4.6-9,7-.9.7-1.5,1.5-2,2-1.2,1.1-2.8,1.9-4,3-.9.7-1.4,1.5-2,2-2.3,2-4.7,4-7,6-.8.7-1.4,1.5-2,2-2.3,2-4.7,4-7,6-1.6,1.4-2.8,2.9-4,4-2.3,2-4.7,4-7,6-1.9,1.7-3.4,3.6-5,5-2.6,2.4-5.4,4.6-8,7-.8.7-1.4,1.4-2,2-1.5,1.4-3.5,2.6-5,4s-2.8,2.9-4,4c-2.9,2.7-6.1,5.3-9,8-1.5,1.4-2.7,2.8-4,4-2.6,2.4-5.4,4.6-8,7-1.2,1.1-2.1,2.1-3,3-1.9,1.7-4,3.4-6,5,0-2,1.9-6.5,3-9l-1.3,2.1c.4-.7.8-1.4,1.3-2.1,2.1-4.6,4.9-9.3,7-14,3.8-8.2,7.2-17,11-25,2.4-5,5.6-9.9,8-15,1.1-2.3,2-4.9,3-7,7.1-14.7,14.8-29.3,22-44,3.4-6.9,6.6-14.1,10-21,3.1-6.4,6.9-12.6,10-19,7.3-15,14.9-30,22-45,4.6-7.6,17.6-28.4,18-36.5.4-6.6-7.4-19.9-14.5-19.5-5.2.3-11.8,14.5-14.6,19-8.4,13.7-15.4,27.9-23,42-15.2,28.1-29.6,56.4-44,85-7.4,14.6-14.8,29.3-22,44-7.4,15-14.8,29.9-22,45-5.7,12-11.4,23.9-17,36-6.2,13.5-14.1,36.9-22,48-.3.5-2.1,1.9-3,3-4.1,4.9-8.8,9.2-13,14-.8.9-1.9,1.8-3,3-2.7,3-5.4,6-8,9-.5.6-1.3,1.2-2,2,0,2.3-2.1,3.9-4,5-2,2.4-4.1,4.6-6,7-.2,2.2-1.2,3.5-3,4-1.3,1.7-2.8,3.2-4,5l-.3,2.8c-11,12.7-23.1,36-11.6,51.2,1.4,2.9,3.4,5.6,6,8-4.2,14.4-9.6,27.9-16.2,40.6l-.8.4c-.7,1.7-2.1,3.8-3,6-3.1,10.1-6.8,20.2-11.1,30.4-4.5,11.8-8.7,24.1-1.9,35.6,1.2,1.6,1.4,1.8,3,3,6.9,3.8,15.8,5,21-2,4-2.3,4.2-6.4.5-12.3,2.5-9.6,5.7-19.2,9.5-28.7,3.7-7.1,7-14.5,10-22,3.1-5.2,5.1-10.6,6-16.2l1.4-.2c2.4-7.1,5.1-13.7,8.2-19.8,0,0,.2.1.4.2l4.5-5.6c5.7,0,12.7,1.7,18.1,1.7,2.1,0,4.1-1,6-1.1,35.2-1.2,69.7-11.4,103-21.9.2.2.3.4.5.5v13.8c0,3,3.5,9.7,5,12.5,11.6,21.4,35.8,12.8,52.9,3.4,2.7-1.5,5.1-4.2,7.1-5.4,3.8-2.3,7.9-4.3,12-7,2.4-1.6,4.6-3.4,7-5,4-2.7,8.1-5.2,12-8,1.4-1,2.7-2,4-3,1-.7,2-1.3,3-2,1.8-1.3,3.3-2.6,5-4,3-2.4,4-2.9,7-6,1-.6,2.5-1,4-2,2.9-1.9,5.3-4,8-6,1.5-1.1,2.2-2.3,3-3,3-2.4,5.7-4.2,9-7,4.8-3.1,6.5-4.2,11-8,.8-.8,1.7-1.5,2.5-2.2-.8.7-1.7,1.5-2.5,2.2,5.1-3.3,10-6.6,15-10,2.7-1.9,5.5-4.4,8-6,9.7-6.5,19.7-12.7,29.5-19,2.8,5.3,3.9,11,7.5,16,9.2,12.7,22.1,13.1,36,10,16.2-3.6,30.2-11.3,45-18,22.5-8.1,44.4-19.2,67-27,10.3-3.5,28-9.5,38.5-10,9.5-.5,20.4,4.2,28.5-3,7.1-6.3,2.6-19.4-6.3-22.2h0ZM381.7,256.8c-.3,1.5-.7,2.7-1.1,3.2.4-1,.8-2.1,1.1-3.2ZM347.6,216c-.1,0-.3,0-.5,0h.5ZM246.3,368.3c2.2-5.6,6.1-11.6,10-16,1.7-3,3.4-6.2,5-9,3.5-3.9,6.3-8.4,8.8-13h1.2c1.2-1.7,2.7-3.3,4-5-.5-1.4.7-2.9,2-3,2.2-3,4.7-6,7-9,.6-2.2,1.9-4.2,4-6,.8-1.6,1.8-2.6,3-3,2.1-2.3,4-4.6,6-7,2.3-4.6,5.7-8.6,10-12,6.2-6.8,14.2-14.8,21-21,1.6-2.6,4-5.3,7-6,5.3-4.6,11-9.4,17-13,.4-1.5,2.4-2.4,4-2,2,2.2.5,2.9,0,5-.9,9.3-5.1,20.4-10,28-.4.7-1.4,1.8-2,3-.3,2.6-1.5,5.1-3.6,7.5.7,1.3-.5,2.8-3.4,4.5-1.5,2.3-3.4,4.7-5,7-2,5.3-6.6,11.4-11,15-.5.5-1.3,1.2-2,2-5.3,8-13,15.6-21,21-1.5,1.3-2.8,3-4,4-1.2,2.8-4.2,4.8-7,6-.9,1.5-2.2,3.5-4,3-3.2,2.5-6.9,5.7-10,8-.2.5-.4,1-.7,1.4-.7.8-15.8,11.2-17.3,12-.5.2-1.2,0-1.9-.4-1,.6-2.1,1.4-3,2-.5,1.5-1.8,2.1-4,2-.4,0-1.9,1.3-2,0-1.4-1.1.7-4.7,2-6h0ZM234.6,336c-.3.5-.6,1-.9,1.5.2-.5.5-1.1.9-1.5ZM426.6,40c-.1,0-.3,0-.5,0h.5ZM251,2.1c-.4.4-.8.9-1.2,1.3.2-.6.6-1,1.2-1.3ZM94.6,442c7.1-.5,14.1-1.3,21.2-2.2-7.1,1.1-14.1,1.9-21.2,2.2ZM210.6,382c.8-2,1.4-5.4,3-7.1-1,2.4-2,4.7-3,7.1ZM214.6,372.5h0c0-.1.1-.2.2-.4,0,.1-.1.2-.2.4h0ZM259.6,446c.9-.6,1.8-1.2,2.6-1.8-.9.6-1.7,1.2-2.6,1.8ZM482.2,334.9c3.2-1.4,7-3.1,10.6-4.6-3.5,1.5-7,3-10.6,4.6Z" />
        </svg>
      </NavLink>
        {/* Desktop pills */}
        <ul className="hidden sm:flex gap-4 text-neutral-800 text-sm">
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><a href="https://theiamgroup.org/web" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full transition relative overflow-hidden no-underline hover:no-underline hover:bg-espresso-leaf hover:text-white dark:hover:bg-espresso-leaf dark:hover:text-white">Work</a></li>
          <li><NavLink to="/code" className={linkClasses}>Code</NavLink></li>
          <li><NavLink to="/resume" className={linkClasses}>Resume</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
        </ul>

        {/* Grouped: Dark Mode Toggle + Badges */}
        <div className="flex items-center space-x-2 ml-4">
          {/* Drupal Badge */}
          <a href="https://www.drupal.org/u/kc2bj" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 bg-white dark:bg-neutral-800 transition"
            aria-label="Drupal Profile"
            title="Drupal"
          >
            <img
              src="https://www.drupal.org/sites/all/themes/bluecheese/images/drupal-drop-062025.svg"
              alt="Drupal Logo"
              style={{ width: '24px', height: '24px', borderRadius: '50%' }}
            />
          </a>
          {/* MIT CSAIL Badge */}
          <a href="https://mitcsail.credential.getsmarter.com/963c43ed-6621-4e17-8866-856b7b850b22#acc.OTVLq9Y1" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 bg-white dark:bg-neutral-800 transition"
            aria-label="MIT CSAIL Certificate"
            title="MIT"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="2" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#B94700">M</text>
            </svg>
          </a>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              setIsDark(document.documentElement.classList.contains('dark'));
            }}
            className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
            aria-label="Toggle Theme"
            title="Light/Dark Mode"
          >
            <span className="transition-transform duration-300 ease-in-out transform hover:rotate-90">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>

        {/* Hamburger toggle (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md hover:bg-neutral-200 transition"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-4 transition-all duration-300 ease-in-out transform">
          <ul className="flex flex-col gap-2 text-sm font-medium p-4 rounded-lg shadow bg-neutral-100 dark:bg-neutral-800">
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><a href="https://theiamgroup.org/web" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full transition relative overflow-hidden no-underline hover:no-underline hover:bg-espresso-leaf hover:text-white dark:hover:bg-espresso-leaf dark:hover:text-white">Work</a></li>
          <li><NavLink to="/code" className={linkClasses}>Code</NavLink></li>
          <li><NavLink to="/resume" className={linkClasses}>Resume</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
