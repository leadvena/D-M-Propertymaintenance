/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi D&M, I’d like to enquire about getting a free quote for garden/property maintenance.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber.replace(/[\s+]/g, '')}&text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group font-sans"
      aria-label="Contact D&M on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-200"></span>
        </span>
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm whitespace-nowrap">
        Chat with Us
      </span>
    </a>
  );
}
