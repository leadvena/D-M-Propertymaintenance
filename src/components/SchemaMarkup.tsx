/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BUSINESS_INFO } from '../data';

export default function SchemaMarkup() {
  useEffect(() => {
    // Generate JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness", // Fits property & garden maintenance trade perfectly
      "name": BUSINESS_INFO.name,
      "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800",
      "@id": "https://dmpropertymaintenance.co.uk",
      "url": "https://dmpropertymaintenance.co.uk",
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bristol",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.4545,
        "longitude": -2.5879
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Bristol and surrounding areas"
      },
      "sameAs": []
    };

    const scriptId = "dm-schema-markup";
    let existingScript = document.getElementById(scriptId);
    
    if (existingScript) {
      existingScript.innerHTML = JSON.stringify(schema);
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Dynamic document title & meta tags as required by instructions
    document.title = "Garden & Property Maintenance Bristol | D&M | Free Quotes";
    
    // Find or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', `Professional garden and property maintenance in Bristol. We offer lawn mowing, conifer hedge cutting, jet washing, garden clearances, & custom planters with free quotes!`);

  }, []);

  return null;
}
