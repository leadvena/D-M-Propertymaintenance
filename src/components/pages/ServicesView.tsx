/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../../data';
import IconRenderer from '../IconRenderer';
import { Check, ArrowRight, Shield, Award, HelpCircle } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
  selectedServiceId: string | null;
  onPreSelectService: (serviceName: string) => void;
  resetSelectedServiceId: () => void;
}

export default function ServicesView({
  onNavigate,
  selectedServiceId,
  onPreSelectService,
  resetSelectedServiceId,
}: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'garden' | 'property'>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Filters services based on active tab selection
  const filteredServices = SERVICES.filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'garden') return service.category === 'garden' || service.category === 'both';
    if (activeTab === 'property') return service.category === 'property' || service.category === 'both';
    return true;
  });

  // Handle scrolling to service when navigated from home preview
  useEffect(() => {
    if (selectedServiceId) {
      // Find the service in list
      const service = SERVICES.find(s => s.id === selectedServiceId);
      if (service) {
        // Set tab to cater for this service
        if (service.category === 'garden') {
          setActiveTab('garden');
        } else if (service.category === 'property') {
          setActiveTab('property');
        } else {
          setActiveTab('all');
        }

        // Expand it
        setExpandedService(selectedServiceId);

        // Scroll to it on next tick after tab/expansion takes place
        setTimeout(() => {
          const el = serviceRefs.current[selectedServiceId];
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          resetSelectedServiceId();
        }, 300);
      }
    }
  }, [selectedServiceId]);

  const handleBookNow = (serviceName: string) => {
    onPreSelectService(serviceName);
    onNavigate('quote');
  };

  return (
    <div className="bg-cream py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-2 block">
            What We Do Best
          </span>
          <h1 className="font-serif text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Professional Garden & Property Upkeep
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            We operate fully equipped groundskeeping and outer property maintenance services throughout Bristol. Choose regular visits or a comprehensive one-off clean.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mt-8 bg-cream-dark p-1.5 rounded-xl border border-cream-dark max-w-sm sm:max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-forest-light text-white shadow-sm'
                  : 'text-gray-600 hover:text-forest-dark'
              }`}
            >
              All (12)
            </button>
            <button
              onClick={() => setActiveTab('garden')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'garden'
                  ? 'bg-forest-light text-white shadow-sm'
                  : 'text-gray-600 hover:text-forest-dark'
              }`}
            >
              Garden Care
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'property'
                  ? 'bg-forest-light text-white shadow-sm'
                  : 'text-gray-600 hover:text-forest-dark'
              }`}
            >
              Property Care
            </button>
          </div>
        </div>

        {/* Services Master Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isExpanded = expandedService === service.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={service.id}
                  ref={(el) => { serviceRefs.current[service.id] = el; }}
                  className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden shadow-xs hover:shadow-md ${
                    isExpanded ? 'border-forest-light ring-1 ring-forest-light/20 shadow-md' : 'border-cream-dark'
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-cream flex items-center justify-center text-forest-light rounded-xl flex-shrink-0">
                        <IconRenderer name={service.iconName} className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-medium text-gray-400 border border-クリーム-dark px-2.5 py-1 rounded bg-cream/30 uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-forest-dark mt-6 mb-3">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    {/* Expandable highlights container */}
                    <div className="mt-4 pt-4 border-t border-cream-dark">
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className="text-xs font-semibold text-forest-light hover:text-forest flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? 'Hide Professional Details' : 'View What’s Included in Service'}
                        <span className="text-xxs">{isExpanded ? '▲' : '▼'}</span>
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 animate-fade-in"
                        >
                          <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
                            Our Standards Include:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-forest-light flex-shrink-0 mt-0.5" />
                                <span className="font-sans">{detail}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleBookNow(service.name)}
                              className="flex-1 py-3 px-4 bg-forest-light hover:bg-forest text-white rounded-lg text-xs font-semibold tracking-wide transition-all inline-flex items-center justify-center gap-1.5 shadow-sm"
                            >
                              Quote on {service.name} <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Guarantee Block */}
        <div className="bg-forest rounded-2xl text-cream p-8 sm:p-12 mb-16 border border-cream/5 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
            <Award className="w-96 h-96 text-white" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sage mb-4">
                <Shield className="w-3.5 h-3.5 text-sage" /> Proud Members of Bristol Groundwork Trade
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                The D&M Quality Guarantee
              </h2>
              <p className="text-sage-light text-cream/80 text-sm sm:text-base leading-relaxed">
                If, in any scenario, you discover a detail that was missed on our visit, call within 24 hours. We visit immediately to rectifying the issue at absolute zero charge to you. That's the trademark of genuine British tradesperson pride.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-1 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                <Check className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-xs text-cream/90 font-sans">Full green waste recycling clearance with every booking.</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                <Check className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-xs text-cream/90 font-sans">Professional petrol mowers and conifer shears utilized.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick FAQ Strip */}
        <div className="bg-white rounded-xl border border-cream-dark p-6 sm:p-10">
          <h3 className="font-serif text-2xl font-bold text-forest-dark mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 bg-cream rounded-lg">
              <h4 className="font-sans font-bold text-forest-dark mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-forest-light flex-shrink-0" /> Do I need to be home for visits?
              </h4>
              <p className="text-gray-600 font-sans">
                As long as we have clear access to the gardens or outer structures via a side gate or driveway, you do not need to stay home. We can email photographs of your completed lawn cuts and hedges right upon completion.
              </p>
            </div>
            <div className="p-4 bg-cream rounded-lg">
              <h4 className="font-sans font-bold text-forest-dark mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-forest-light flex-shrink-0" /> Do you dispose of green waste?
              </h4>
              <p className="text-gray-600 font-sans">
                Yes, indeed. We sort and transport all lawn clippings, trimmed conifer branches, and fallen leaves directly to licensed recycling and compost centers in Bristol. All disposal is factored straight into your fixed quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
