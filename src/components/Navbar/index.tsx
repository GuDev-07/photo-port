import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PORTFOLIO_DATA } from '../../constants';
import { Menu, X } from 'lucide-react';
import { Button } from '../Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A231C]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-white text-2xl font-bold tracking-tighter">
          {PORTFOLIO_DATA.brand.logoText}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-gray-300 hover:text-[#F6AE2D] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Fale Comigo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A231C] border-t border-gray-800 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-300 hover:text-[#F6AE2D] transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-4" onClick={() => { setIsMobileMenuOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Fale Comigo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
