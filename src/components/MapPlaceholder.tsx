/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Shield, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function MapPlaceholder() {
  const servedAreas = [
    "Clifton", "Redland", "Cotham", "Bedminster", "Henleaze", "Westbury-on-Trym",
    "Kingswood", "Keynsham", "Brislington", "Long Ashton", "Stoke Bishop", "Downend"
  ];

  return (
    <div className="bg-white rounded-xl shadow-md border border-cream-dark overflow-hidden flex flex-col lg:flex-row">
      <div className="p-6 lg:p-10 lg:w-1/2 flex flex-col justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest/10 text-forest-light mb-4">
            <MapPin className="w-3.5 h-3.5" /> Bristol Area Coverage
          </span>
          <h3 className="font-serif text-3xl font-bold text-forest-dark tracking-tight mb-4">
            Proudly Serving Bristol & Surroundings
          </h3>
          <p className="text-gray-600 mb-6 font-sans">
            Our teams serve key areas across Greater Bristol. From hedge pruning in Clifton to fencing in Keynsham, we bring pristine garden care to your doorstep.
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-6">
            {servedAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-forest-light flex-shrink-0" />
                <span className="font-sans font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cream p-4 rounded-lg border border-cream-dark flex items-start gap-3">
          <Shield className="w-5 h-5 text-forest-light flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-sans font-semibold text-sm text-forest-dark">
              100% Fully Insured
            </h4>
            <p className="font-sans text-xs text-gray-500">
              Complete Public Liability Insurance across all gardening, clearance and power-washing tasks.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-72 sm:h-96 lg:h-auto lg:w-1/2 min-h-[350px] bg-cream border-t lg:border-t-0 lg:border-l border-cream-dark">
        {/* Real standard Google Maps embed centered on Bristol, UK without API key requirements */}
        <iframe
          title="D&M Property Maintenance Service Area Map"
          className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[105%]"
          src="https://maps.google.com/maps?q=Bristol&t=&z=12&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
