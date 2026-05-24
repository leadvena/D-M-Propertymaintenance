/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, TESTIMONIALS } from '../../data';
import { ContactMessage } from '../../types';
import MapPlaceholder from '../MapPlaceholder';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  PhoneCall,
  Activity,
  UserCheck
} from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMsg('Please supply either an email or a phone number so we can write back.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter a message or question.');
      return;
    }

    // Success Simulation
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-2 block">
            Always Available
          </span>
          <h1 className="font-serif text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Have questions about periodic visits or specific property maintenance repairs? Speak directly to our Bristol team using details below, or send an automated query.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 - Phone */}
          <div className="bg-cream border border-cream-dark p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-forest-light/10 text-forest-light rounded-full flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest-dark mb-1">Phone Team</h3>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-mono">Mobile Hotline</p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-forest-light font-semibold hover:underline text-base font-mono">
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Card 2 - Email */}
          <div className="bg-cream border border-cream-dark p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-forest-light/10 text-forest-light rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest-dark mb-1">Email</h3>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-mono">Professional Enquiries</p>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-forest-light font-semibold hover:underline text-sm break-all">
              {BUSINESS_INFO.email}
            </a>
          </div>

          {/* Card 3 - Location */}
          <div className="bg-cream border border-cream-dark p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-forest-light/10 text-forest-light rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest-dark mb-1">Our Base</h3>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-mono">coverage</p>
            <span className="text-gray-700 text-sm font-medium">
              {BUSINESS_INFO.location}
            </span>
          </div>

          {/* Card 4 - Working Hours */}
          <div className="bg-cream border border-cream-dark p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-forest-light/10 text-forest-light rounded-full flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest-dark mb-1">Working Hours</h3>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-mono">availability</p>
            <span className="text-gray-600 text-xs text-center leading-relaxed">
              Mon-Fri: 8am - 6pm<br />Sat: 9am - 4pm<br />Sun: Closed
            </span>
          </div>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
          
          {/* Quick statement details */}
          <div className="lg:col-span-2 flex flex-col justify-between p-2">
            <div>
              <span className="text-xs font-bold text-forest-light tracking-wide uppercase mb-3 block">
                Local Trade Values
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight leading-tight mb-6">
                Direct Communication With Our Craftsmen
              </h2>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                At D&M Property Maintenance, we don't route calls through remote call-centers. When you dial <strong>{BUSINESS_INFO.phone}</strong>, you connect directly to our hands-on supervisors who coordinate and perform the field groundskeeping.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <UserCheck className="w-5 h-5 text-forest-light flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-forest-dark">In-Person Site Assessments</h4>
                    <p className="text-xs text-gray-500 font-sans">We check gardens on-site so we supply accurate quotes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Activity className="w-5 h-5 text-forest-light flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-forest-dark">Licensed Waste Transporters</h4>
                    <p className="text-xs text-gray-500 font-sans">We hold standard environmental licenses to haul green waste.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-cream-dark flex items-center gap-4 bg-cream p-5 rounded-2xl">
              <PhoneCall className="w-8 h-8 text-forest-light flex-shrink-0 animate-bounce" />
              <div>
                <p className="text-xs text-gray-500">Need emergency storm tree-clearing?</p>
                <p className="font-sans font-bold text-forest-dark text-base">Call 07551 014741 now</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-cream rounded-2xl p-8 border border-cream-dark">
            <h3 className="font-serif text-2xl font-bold text-forest-dark mb-6">
              Send an Enquiry
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold rounded">
                    {errorMsg}
                  </div>
                )}
                
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light"
                    placeholder="e.g. Richard Davies"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light"
                      placeholder="e.g. richard@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light"
                      placeholder="e.g. 07551 014741"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-600 mb-1">
                    Message / Query
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light resize-none"
                    placeholder="Ask about our rates, conifer trimming, or custom requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="send-contact-btn"
                  className="w-full py-3.5 px-6 bg-forest-light hover:bg-forest text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center bg-white rounded-xl p-8 border border-cream-dark/60 animate-fade-in">
                <div className="w-14 h-14 bg-forest-light/10 text-forest-light rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest-dark mb-2">Message Dispatched!</h4>
                <p className="text-gray-500 font-sans text-xs max-w-xs leading-relaxed mb-6">
                  Thanks for getting in touch. We have received your query and will reply within 24 hours. Emergency garden calls are prioritized instantly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-cream border border-cream-dark hover:border-gray-300 rounded text-xs text-gray-600 font-semibold"
                >
                  Post Another Query
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map Placeholder Block */}
        <MapPlaceholder />
      </div>
    </div>
  );
}
