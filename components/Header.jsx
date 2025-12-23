import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext.jsx';
import { featureFlags } from '@/config/app.config.js';

const NavLink = ({ href, children, onClick }) => (
  <li>
    <a href={href} onClick={onClick} className="block whitespace-nowrap text-light hover:text-primary transition-colors duration-300 px-1.5 sm:px-2 md:px-3 py-2 rounded-md text-xs sm:text-sm font-medium">
      {children}
    </a>
  </li>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 dark:bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-dark/80 dark:bg-black/70'}`}>
      <div className="w-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#home" className="text-xl sm:text-2xl font-serif font-bold text-primary">
            Sai Ranthu
          </a>
        </div>
        <nav className="flex-1 flex justify-center items-center min-w-0 px-2">
          <div className="w-full overflow-x-auto no-scrollbar" style={{ touchAction: 'pan-x', scrollBehavior: 'smooth' }}>
            <ul className="flex items-center justify-center space-x-1 sm:space-x-2">
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#resume">My Resume</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#skills">Skills & Technologies</NavLink>
              {featureFlags.showCertifications && (
                <NavLink href="#certifications">Certifications</NavLink>
              )}
              <NavLink href="#projects">My Projects</NavLink>
              <NavLink href="#contact">Get In Touch</NavLink>
            </ul>
          </div>
        </nav>
        <div className="flex-shrink-0 flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-light hover:text-primary hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
