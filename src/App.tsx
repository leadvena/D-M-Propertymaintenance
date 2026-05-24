/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SchemaMarkup from './components/SchemaMarkup';

// Pages
import HomeView from './components/pages/HomeView';
import ServicesView from './components/pages/ServicesView';
import GalleryView from './components/pages/GalleryView';
import QuoteView from './components/pages/QuoteView';
import ContactView from './components/pages/ContactView';

import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [preSelectedService, setPreSelectedService] = useState<string>('');

  // Scroll to top automatically whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const handlePreSelectService = (serviceName: string) => {
    setPreSelectedService(serviceName);
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <HomeView
              onNavigate={setCurrentPage}
              onSelectService={setSelectedServiceId}
            />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <ServicesView
              onNavigate={setCurrentPage}
              selectedServiceId={selectedServiceId}
              onPreSelectService={handlePreSelectService}
              resetSelectedServiceId={() => setSelectedServiceId(null)}
            />
          </motion.div>
        );
      case 'gallery':
        return (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <GalleryView />
          </motion.div>
        );
      case 'quote':
        return (
          <motion.div
            key="quote"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <QuoteView preSelectedService={preSelectedService} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <ContactView />
          </motion.div>
        );
      default:
        return (
          <div className="py-20 text-center font-sans">
            Page Not Found
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col antialiased">
      {/* Dynamic Local Business JSON-LD and page meta tag configs */}
      <SchemaMarkup />

      {/* Primary Sticky Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main View Driver */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
      </main>

      {/* Floating Interactive elements */}
      <WhatsAppButton />

      {/* Bottom Layout Info & Links */}
      <Footer
        onNavigate={setCurrentPage}
        onSelectService={setSelectedServiceId}
      />
    </div>
  );
}
