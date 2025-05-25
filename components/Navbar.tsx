import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, NAVBAR_HEIGHT } from '../constants';
import type { NavLinkItem } from '../types';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0]?.id || 'home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);

    let currentSectionId = NAV_LINKS[0]?.id || 'home'; // Ensure fallback if NAV_LINKS is empty
    for (const link of NAV_LINKS) {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop - NAVBAR_HEIGHT - 20; // Adjusted offset
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = link.id;
          break;
        }
      }
    }
    // Fallback to the last section if scrolled past all others
     if (NAV_LINKS.length > 0 && scrollPosition + window.innerHeight >= document.body.offsetHeight - NAVBAR_HEIGHT) {
        currentSectionId = NAV_LINKS[NAV_LINKS.length -1].id;
    }


    setActiveSection(currentSectionId);
  }, []); // Removed activeSection from dependencies as it's updated internally

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -NAVBAR_HEIGHT + 1; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // setActiveSection(sectionId); // Let scroll handler update active section naturally
      setIsMenuOpen(false); 
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen ? 'bg-gray-800/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
            aria-label="MyPortfolio Home"
          >
            MyPortfolio
          </a>
          
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                  ${activeSection === link.id 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 p-2 rounded-md"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out
                  ${activeSection === link.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;