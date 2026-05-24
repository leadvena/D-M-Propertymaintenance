/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Star, Sprout } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitors page scroll to dynamically style navigation bar backgrounds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'quote', label: 'Free Quote' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-cream-dark py-3'
          : 'bg-white border-b border-cream-dark py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-forest-light text-white rounded-lg flex items-center justify-center group-hover:bg-forest transition-colors duration-300 shadow-sm">
              <Sprout className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-dark block leading-none">
                D&M
              </span>
              <span className="font-sans text-[10px] font-bold tracking-widest text-sage uppercase block mt-1">
                Property Maintenance
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-forest-light/10 text-forest-light'
                      : 'text-gray-600 hover:text-forest-dark hover:bg-cream/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call Now action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-current text-amber-400" /> 5.0 Rated
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="desktop-header-call"
              className="bg-forest-light hover:bg-forest text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-xs hover:shadow transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="mobile-header-call"
              className="bg-forest-light text-white p-2.5 rounded-lg text-sm font-bold shadow-xs"
              aria-label="Call D&M Property Maintenance"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-600 hover:text-forest-dark hover:bg-cream select-none focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Expansion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cream-dark bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-forest-light text-white'
                        : 'text-gray-600 hover:text-forest-dark hover:bg-cream/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-cream-dark flex items-center justify-between text-xs text-gray-500 font-sans">
                <span>Direct Hotline:</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-forest-light hover:underline text-sm font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
