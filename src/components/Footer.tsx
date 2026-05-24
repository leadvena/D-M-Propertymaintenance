/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Clock, Sprout, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Footer({ onNavigate, onSelectService }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Pick some top key services to list in footer
  const quickServices = SERVICES.slice(0, 6);

  const handleServiceClick = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-cream pt-16 pb-8 border-t border-cream/5 font-sans relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 - Brand Identity info */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-9 h-9 bg-forest-light text-white rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                D&M
              </span>
            </div>
            
            <p className="font-serif italic text-sage text-base mb-4 font-medium">
              "We Maintain, You Enjoy"
            </p>
            <p className="text-cream-dark/65 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              Reliable garden, groundsmanship and property maintenance based out of Bristol, UK. Over 5 years of tradesman satisfaction and conifer reductions.
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-cream/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
              ★ Bristol BS postcodes
            </span>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-5 pb-2 border-b border-cream/10">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-cream-dark/75 hover:text-white transition-colors duration-200"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-cream-dark/75 hover:text-white transition-colors duration-200"
                >
                  Full Services List
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="text-cream-dark/75 hover:text-white transition-colors duration-200"
                >
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('quote')}
                  className="text-cream-dark/75 hover:text-white transition-colors duration-200"
                >
                  Free Quote Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-cream-dark/75 hover:text-white transition-colors duration-200"
                >
                  Contact Info & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 - Select Services */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-5 pb-2 border-b border-cream/10">
              Key Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {quickServices.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="text-cream-dark/75 hover:text-white text-left transition-colors duration-200"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Direct Contact Coordinates */}
          <div className="space-y-5 text-xs sm:text-sm text-cream-dark/80">
            <h4 className="font-serif font-bold text-lg text-white mb-5 pb-2 border-b border-cream/10">
              Direct Contact
            </h4>
            
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-sage uppercase font-mono font-bold">Call / WhatsApp Info</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-bold hover:underline font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-sage uppercase font-mono font-bold">Email</p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:underline text-xs break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-sage uppercase font-mono font-bold">Base Location</p>
                <span className="text-white">
                  Bristol, United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream-dark/60 font-sans">
          <p>
            &copy; {currentYear} D&M Property Maintenance. All Rights Reserved. Co No: Registered in England & Wales.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with pride in Bristol UK <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
