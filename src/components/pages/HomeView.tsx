/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, ArrowRight, ShieldCheck, Award, ThumbsUp, Check } from 'lucide-react';
import { SERVICES, USPS, TESTIMONIALS, BUSINESS_INFO } from '../../data';
import IconRenderer from '../IconRenderer';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export default function HomeView({ onNavigate, onSelectService }: HomeViewProps) {
  // Let's preview a curated selection of 6 services on the home page
  const previewServices = SERVICES.slice(0, 6);

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-forest-dark py-20 px-4 sm:px-6 lg:px-8">
        {/* Background photo of a gorgeous manicured British lawn & borders */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?q=80&w=1600"
            alt="Lush classic British garden in Bristol"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          {/* Ambient rich green and black gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Small pre-heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/20 border border-sage/40 text-cream text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Professional Bristol Grounds-Care
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream tracking-tight leading-tight mb-6"
          >
            D&M Property Maintenance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-2xl sm:text-3xl text-sage/90 font-medium tracking-wide mb-8 max-w-2xl mx-auto"
          >
            "We Maintain, You Enjoy"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg sm:text-xl text-cream-dark/80 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Your trusted Bristol partners for immaculate garden clearing, routine hedge shaping, turf grooming, bespoke fencing, and power jet washing. Done right, with premium British tradesman pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => onNavigate('quote')}
              id="hero-cta-quote"
              className="w-full sm:w-auto px-8 py-4 bg-cream text-forest-dark hover:bg-cream-dark rounded-lg text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => onNavigate('services')}
              id="hero-cta-services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-cream/30 hover:border-cream text-cream hover:bg-cream/5 rounded-lg text-base font-semibold transition-all duration-300"
            >
              View Services
            </button>
          </motion.div>

          {/* Core contact strip in hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-cream/10 inline-flex items-center gap-6 text-cream/80 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="text-sage">Call directly:</span>
              <a href={`tel:${BUSINESS_INFO.phone}`} id="hero-phone-link" className="text-white hover:underline text-base font-semibold">
                {BUSINESS_INFO.phone}
              </a>
            </span>
            <span className="hidden sm:inline text-cream/40">|</span>
            <span className="hidden sm:inline flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              5.0 Star Rated Business
            </span>
          </motion.div>
        </div>
      </section>

      {/* 3 USP Cards Section */}
      <section className="bg-cream-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {USPS.map((usp, idx) => (
              <motion.div
                key={usp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-xl border border-cream-dark shadow-xs flex flex-col items-start"
              >
                <div className="p-3 bg-forest-light/10 text-forest-light rounded-lg mb-6">
                  <IconRenderer name={usp.iconName} className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-dark mb-3">
                  {usp.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {usp.description}
                </p>
                <div className="mt-auto flex items-center gap-1.5 text-xs text-forest-light font-semibold hover:underline cursor-pointer" onClick={() => onNavigate('quote')}>
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro Paragraph Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-3 block">
            A Established Local Business
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-dark mb-6">
            Dedicated Grounds-Keeping & Outdoor Repairs
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-sans mb-6">
            Based locally in Bristol, UK, <strong>D&M Property Maintenance</strong> is a family-owned trade built upon absolute reliability, professional equipment, and deep respect for the environments we manage. We handle the physical labour—from trimming conifers to power-cleaning driveways—so you can fully enjoy your pristine gardens.
          </p>
          <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
            Whether you need a quick one-off lawn mowing, a full hedge removal, professional gutter clearances, or bespoke timber picket fences assembled from pressure-treated timber, we make sure each task is finished to premium standards. We clear all green waste and leave your property sparkling cleaner than we found it.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-light hover:bg-forest text-white font-medium rounded-lg transition-all shadow-sm"
          >
            Learn About D&M <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8 border-y border-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-1 block">
                Our Services
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-dark tracking-tight">
                Craftsmanship In Every Service
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-4 md:mt-0 inline-flex items-center gap-1 text-forest-light font-semibold hover:text-forest transition-colors"
            >
              See All 12 Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-cream-dark overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center text-forest-light rounded-lg mb-6 group-hover:bg-forest-light group-hover:text-white transition-all duration-500">
                    <IconRenderer name={service.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto px-8 pb-8 pt-0 border-t border-cream-dark/50 bg-cream/30 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 capitalize">
                    Category: {service.category}
                  </span>
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.id);
                      }
                      onNavigate('services');
                    }}
                    className="text-xs text-forest-light font-bold hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-sans text-gray-500 mb-4">
              Need more? We also install planters, fit timber picket gates, clean windows, empty gutters, and do custom maintenance contracts.
            </p>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 border border-forest-light/30 hover:border-forest-light text-forest-light hover:bg-forest/5 rounded-lg text-sm font-semibold transition-all"
            >
              Explore Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Testimonial Badging */}
      <section className="bg-forest py-20 px-4 sm:px-6 lg:px-8 text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sage tracking-widest uppercase mb-2 block">
              Customer Experiences
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              What Bristol Residents Say
            </h2>
            <p className="text-sage/80 font-sans text-sm">
              We care about reputation. Here are verified reviews from happy property and garden owners in Bristol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-forest-dark bg-opacity-40 border border-cream/10 p-8 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif italic text-cream-dark/95 leading-relaxed text-base mb-6">
                    "{t.content}"
                  </p>
                </div>
                <div className="pt-6 border-t border-cream/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">{t.author}</h4>
                    <p className="font-sans text-xs text-sage">{t.role}</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-sage/60">{t.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-forest-dark bg-opacity-60 border border-cream/5 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 font-bold text-lg mb-1">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-white ml-2">5.0 / 5.0 Rating</span>
              </div>
              <p className="text-cream/70 text-xs font-sans">
                Based on 48 independent reviews and referrals in Somerset, Gloucestershire & Greater Bristol.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 bg-white text-forest hover:bg-cream-dark rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              Verify Rating & Quote
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cream text-center overflow-hidden border-t border-cream-dark">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#2d5016_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-3 block">
            Let's Talk About Your Project
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-dark mb-6 tracking-tight">
            Ready to transform your garden or property?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-sans leading-relaxed">
            Reach out today. We offer completely free, prompt, and no-obligation site assessments across Bristol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              id="cta-banner-quote"
              className="px-8 py-4 bg-forest-light hover:bg-forest text-white rounded-lg text-base font-semibold transition-all shadow-md hover:-translate-y-0.5"
            >
              Request A Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="cta-banner-phone"
              className="px-8 py-4 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 rounded-lg text-base font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              <IconRenderer name="Phone" className="w-4 h-4 text-forest-light" />
              Call 07551 014741
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-sans italic">
            No pressure, no obligation — response guaranteed within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
