/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'garden' | 'property' | 'both';
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'lawn' | 'hedge' | 'clearance' | 'jetwash' | 'fences-planters' | 'other';
  image: string; // fallback if single
  beforeImage?: string;
  afterImage?: string;
  isBeforeAfter: boolean;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  propertyAddress: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
