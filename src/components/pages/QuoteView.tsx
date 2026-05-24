/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { SERVICES, BUSINESS_INFO } from '../../data';
import { QuoteRequest } from '../../types';
import {
  FileText,
  Calendar,
  Send,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Shield,
  Trash2
} from 'lucide-react';

interface QuoteViewProps {
  preSelectedService: string;
}

export default function QuoteView({ preSelectedService }: QuoteViewProps) {
  // Setup the form state
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    serviceType: preSelectedService || '',
    propertyAddress: '',
    message: '',
    preferredContact: 'phone',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submissionHistory, setSubmissionHistory] = useState<QuoteRequest[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Sync with preselected state if passed down
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [preSelectedService]);

  // Load history from localstorage to simulate persistence and make it multi-featured
  useEffect(() => {
    const saved = localStorage.getItem('dm_quote_history');
    if (saved) {
      try {
        setSubmissionHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse quote history', e);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactMethod = (method: 'phone' | 'email' | 'whatsapp') => {
    setFormData((prev) => ({ ...prev, preferredContact: method }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Please supply either a phone number or an email so we can reach you.');
      return;
    }
    if (!formData.serviceType) {
      setErrorMsg('Please select a service type.');
      return;
    }
    if (!formData.propertyAddress.trim()) {
      setErrorMsg('Please supply your property address for the assessment.');
      return;
    }

    // Success Simulation
    const updatedHistory = [formData, ...submissionHistory];
    setSubmissionHistory(updatedHistory);
    localStorage.setItem('dm_quote_history', JSON.stringify(updatedHistory));

    setFormSubmitted(true);
    // Reset fields except state logs
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      propertyAddress: '',
      message: '',
      preferredContact: 'phone',
    });
  };

  const clearHistoryItem = (index: number) => {
    const updated = [...submissionHistory];
    updated.splice(index, 1);
    setSubmissionHistory(updated);
    localStorage.setItem('dm_quote_history', JSON.stringify(updated));
  };

  return (
    <div className="bg-cream py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-2 block">
            No Obligation Quotes
          </span>
          <h1 className="font-serif text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Request Your Free Assessment
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
            Supply your project specifications below. Our groundsmanship experts review them instantly and return a transparent, fixed quote within 24 hours.
          </p>
        </div>

        {/* Master Panel */}
        <div className="bg-white rounded-2xl border border-cream-dark shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Side Banner with Contacts */}
          <div className="bg-forest text-cream p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-white leading-tight">
                Why D&M quotes are different:
              </h3>
              <ul className="space-y-4 text-sm text-sage-light text-cream/90">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>Always 100% Free with absolutely no pressure.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>Fixed pricing—what we quote is exactly what you pay.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>Fully insured public-liability protection verified.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-cream/10 text-xs text-cream/75 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sage" />
                <div>
                  <p className="font-bold">24-Hr Guarantee</p>
                  <p className="text-[11px] text-cream/60">We review and phone/email you back.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage" />
                <div>
                  <p className="font-bold">Call Directly</p>
                  <p className="text-[11px] text-cream/60">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Form Section */}
          <div className="p-8 md:p-10 md:col-span-2">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium rounded-lg">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Finch"
                    className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10"
                    required
                  />
                </div>

                {/* Contact Columns (Phone and Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-input" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07551 014741"
                      className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-input" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-input"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.co.uk"
                      className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10"
                    />
                  </div>
                </div>

                {/* Service Dropdown Selector */}
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                    Required Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceType"
                    id="service-select"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10"
                    required
                  >
                    <option value="">-- Please select a service type --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Multiple Services / Whole Garden Reset">Multiple Services / Whole Garden Reset</option>
                    <option value="Other Repairs / Custom Contract">Other Maintenance Request</option>
                  </select>
                </div>

                {/* Property Address */}
                <div>
                  <label htmlFor="address-input" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                    Property Address in Bristol <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    id="address-input"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="e.g. 14 Clifton Road, Bristol, BS8 1AL"
                    className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10"
                    required
                  />
                </div>

                {/* Message Instructions */}
                <div>
                  <label htmlFor="msg-text" className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-2">
                    Message / Project Details (Size, constraints, frequency)
                  </label>
                  <textarea
                    name="message"
                    id="msg-text"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what needs doing. (e.g., hedge conifer height is 3m, lawns overgrown, or want weekly grass maintenance cuts.)"
                    className="w-full px-4 py-3 bg-cream border border-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-light focus:ring-1 focus:ring-forest-light/10 resize-none"
                  ></textarea>
                </div>

                {/* Preferred Contact Speed Buttons */}
                <div>
                  <span className="block text-xs font-bold text-forest-dark uppercase tracking-wider mb-3">
                    How should we contact you?
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleContactMethod('phone')}
                      className={`py-2 px-3 border rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        formData.preferredContact === 'phone'
                          ? 'bg-forest-light text-white border-forest-light'
                          : 'border-cream-dark bg-cream text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" /> Phone Call
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContactMethod('email')}
                      className={`py-2 px-3 border rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        formData.preferredContact === 'email'
                          ? 'bg-forest-light text-white border-forest-light'
                          : 'border-cream-dark bg-cream text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContactMethod('whatsapp')}
                      className={`py-2 px-3 border rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        formData.preferredContact === 'whatsapp'
                          ? 'bg-forest-light text-white border-forest-light'
                          : 'border-cream-dark bg-cream text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </button>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  id="submit-quote-btn"
                  className="w-full py-4 px-6 bg-forest-light hover:bg-forest text-cream font-semibold rounded-lg text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Quote Proposal
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-forest-light/15 text-forest-light rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-forest-dark mb-4">
                  Quote Proposal Lodged!
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6 max-w-sm">
                  Thank you! D&M groundsmen have received your details safely. We will review your property photos/address scope and get back to you within 24 hours.
                </p>
                <div className="bg-cream p-4 rounded-xl border border-cream-dark mb-8 text-xs font-mono text-gray-500 max-w-xs uppercase tracking-wide">
                  Response Guaranteed: BS postcodes
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-forest-light hover:bg-forest text-white text-xs font-semibold rounded-lg transition-all"
                >
                  Lodge Another Enquiry
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Local Persistence Simulator Log */}
        {submissionHistory.length > 0 && (
          <div className="mt-12 bg-white rounded-xl border border-cream-dark p-6 sm:p-8">
            <h4 className="font-serif text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-forest-light" /> Your Lodged Proposals ({submissionHistory.length})
            </h4>
            <div className="space-y-4">
              {submissionHistory.map((item, idx) => (
                <div key={idx} className="p-4 bg-cream rounded-lg border border-cream-dark flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-bold text-forest-dark">{item.name}</span>
                      <span className="px-2 py-0.5 rounded bg-sage/25 text-forest font-semibold text-xxs uppercase font-mono">
                        {item.serviceType}
                      </span>
                    </div>
                    <p className="text-gray-500 font-sans mb-1 text-[11px] sm:text-xs">
                      Address: <strong className="text-gray-700 font-medium">{item.propertyAddress}</strong>
                    </p>
                    {item.message && (
                      <p className="text-gray-600 bg-white p-2 rounded border border-cream-dark/50 text-xxs sm:text-xs mt-1 font-serif italic">
                        "{item.message}"
                      </p>
                    )}
                    <span className="text-xxs font-mono text-gray-400 block mt-1">
                      Preferred contact channel: {item.preferredContact}
                    </span>
                  </div>
                  <button
                    onClick={() => clearHistoryItem(idx)}
                    className="p-1 px-2 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded text-xxs font-semibold flex items-center gap-0.5"
                    aria-label="Remove proposal history log item"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
