/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "D&M Property Maintenance",
  tagline: "We Maintain, You Enjoy",
  phone: "07551 014741",
  email: "info@dmpropertymaintenance.co.uk", // Clean placeholder matching domain
  location: "Bristol, UK",
  serviceArea: "Bristol, Keynsham, Kingswood, Clifton, Long Ashton, and surrounding areas",
  whatsappNumber: "+447551014741", // Format for WhatsApp link api.whatsapp.com/send?phone=...
  workingHours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM, Sunday: Closed",
  rating: "5.0",
  totalReviews: "48",
};

export const SERVICES: Service[] = [
  {
    id: "lawn-mowing",
    name: "Lawn Mowing & Strimming",
    description: "Expert lawn trimming, tidy border strimming, and clipping disposal. We construct beautiful stripes and keep lawns dense, weed-free, and tidy.",
    iconName: "Scissors",
    category: "garden",
    details: ["Regular weekly or fortnightly visits", "Crisp border and edge strimming", "Clipping mulching or professional disposal", "Turf inspection and advice"]
  },
  {
    id: "hedge-trimming",
    name: "Hedge Trimming & Removals",
    description: "Precision-trimmed hedges for a clean property perimeter. We handle complete hedge shaping, scale reduction, and professional clearance/root removal.",
    iconName: "Shrub",
    category: "garden",
    details: ["Formal hedge trimming and shaping", "Hedge reduction and scaling down", "Complete hedge removal and root extraction", "Litter and twig cleanup"]
  },
  {
    id: "tree-trimming",
    name: "Small Tree Trimming & Removal",
    description: "Safe, skilled pruning and removal of small ornamental and garden trees. We clear low branches, shape canopies, and improve light penetration.",
    iconName: "Trees",
    category: "garden",
    details: ["Deadwooding and pruning", "Crown thinning and lifting", "Small tree / sapling extraction", "Full branches woodchipping and clearance"]
  },
  {
    id: "borders",
    name: "Borders Care & Maintenance",
    description: "Definition of garden borders, soil turning, weeding, and beautiful clean dividing lines. We make your flower beds stand out sharply.",
    iconName: "Flower",
    category: "garden",
    details: ["Edge cutting & re-shaping", "Mulching & compost dressing", "Weed removal & soil aeration", "Perennial splitting and seasonal bed prep"]
  },
  {
    id: "garden-clearance",
    name: "Full Garden Clearances & Renovations",
    description: "Overgrown wilderness? We carry out absolute transformation clearances. We cut back brambles, remove weeds, load green waste, and restore functionality.",
    iconName: "Trash2",
    category: "garden",
    details: ["Bramble and wild ivy clearing", "Site level-down and rubbish sorting", "Green waste disposal", "Foundation prep for lawn laying or patios"]
  },
  {
    id: "one-off-cleans",
    name: "One Off Cleans",
    description: "A comprehensive burst of garden and outer space cleanup, perfect for landlords, tenancies, spring starts, or prior to putting your property on the market.",
    iconName: "Sparkles",
    category: "both",
    details: ["Rapid 1-day garden rejuvenation", "Leaves and storm debris collection", "Power sweeps of walkways and hard standings", "Complete reset of messy lawns and borders"]
  },
  {
    id: "maintenance-cuts",
    name: "Maintenance Cuts",
    description: "Flexible, routine visits to keep your properties looking immaculate. Tailored frequency options so you never have to pick up a tool.",
    iconName: "Calendar",
    category: "both",
    details: ["Scheduled visits (weekly/fortnightly/monthly)", "Rotational prioritization of gardening chores", "Regular check-ins on guttering and fencing stability", "Peace of mind for busy homeowners and commercial landlords"]
  },
  {
    id: "picket-fences",
    name: "Picket Fences Repairs & Installs",
    description: "Charming timber picket fences constructed to standard and custom specifications. We repair rotten posts, replace slats, and build durable fences.",
    iconName: "Fence",
    category: "property",
    details: ["Traditional timber picket designs", "Sturdy high-quality pressure-treated timber", "Gate installation and latching hardware", "Damaged post and panel replacements"]
  },
  {
    id: "planters",
    name: "Bespoke Timber Planters",
    description: "Custom planters crafted from premium pressure-treated timber, custom-sized for patios, flowerbeds, cafes, driveways, or window sills.",
    iconName: "Box",
    category: "garden",
    details: ["Durable decking-board or sleeper construction", "Lined with drainage protection", "Built to exact dimensions", "Ideal for flowers, shrubs, or vertical herb gardens"]
  },
  {
    id: "jet-washing",
    name: "Patio, Decking & Driveway Jet Washing",
    description: "High-pressure wash to strip off black lichen, dense moss, algae, and ground-in grime. Restores non-slip timber and leaves stonework looking brand new.",
    iconName: "Droplet",
    category: "property",
    details: ["High-power commercial petrol wash", "Sanding joints (patio/block paving block)", "Treatments for algae prevention", "Timber decking preparation for oils and stains"]
  },
  {
    id: "window-cleaning",
    name: "Professional Window Cleaning",
    description: "Squeaky-clean pane restoration and frame wipe-down. We clear off cobwebs, road films, and dirt, ensuring crystal clear views.",
    iconName: "GlassWater",
    category: "property",
    details: ["Regular pure-water reach system or squeegee cleaning", "Debris-free frames, sills, and ledges", "Conservatory glass cleaning", "High-reach capability for multi-story buildings"]
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Clearing & Maintenance",
    description: "Prevent costly water damage and leaks. We clear sediment, moss, and leaves, clean downspouts, and inspect joins for structural failure.",
    iconName: "ArrowDownToLine",
    category: "property",
    details: ["Complete vacuum or manual moss clearout", "Downspout water-flow testing", "Leak check and localized sealing repairs", "Fascia & soffit washing on request"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Overgrown Lawns Restored",
    description: "A complete overhaul of a wild Bristol back garden. Cut down, border strimmed, and mulched into a pristine family turf.",
    category: "lawn",
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?q=80&w=800", // Overgrown wild weeds
    afterImage: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=800", // Perfect mown lawn
    isBeforeAfter: true
  },
  {
    id: "gal-2",
    title: "Precision Hedge Shaping",
    description: "Conifer and laurel hedge reduction. Trimmed straight and squared off to open up maximum garden sunlight.",
    category: "hedge",
    image: "https://images.unsplash.com/photo-1584483769114-2ecdf308e402?q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800", // Messy bushes
    afterImage: "https://images.unsplash.com/photo-1584483769114-2ecdf308e402?q=80&w=800", // Neatly trimmed
    isBeforeAfter: true
  },
  {
    id: "gal-3",
    title: "Sandstone Patio Jet Washing",
    description: "Aggressive removal of black spot lichen and moss buildup, revealing the gorgeous natural sandstone colours underneath.",
    category: "jetwash",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800", // Dirt ground
    afterImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=800", // Spotless patio setup
    isBeforeAfter: true
  },
  {
    id: "gal-4",
    title: "Garden Clearance & Leveling",
    description: "Total disposal of multi-year waste mounds, old sheds, brambles, and decayed decking. Leveled and seeded.",
    category: "clearance",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800",
    isBeforeAfter: true
  },
  {
    id: "gal-5",
    title: "Custom Planters & Border Fence",
    description: "Design and deployment of modular timber planters alongside a picket divider, painted with weatherproof stains.",
    category: "fences-planters",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800",
    isBeforeAfter: false
  },
  {
    id: "gal-6",
    title: "Fortnightly Maintenance Routine",
    description: "A garden kept in constant exhibition status. Pristine lines, weedless beds, and expertly clipped small tree canopies.",
    category: "other",
    image: "https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?q=80&w=800",
    isBeforeAfter: false
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    author: "Eleanor Finch",
    role: "Homeowner in Clifton, Bristol",
    content: "D&M have completely transformed my garden! Direct communication, timely arrivals, and incredibly tidy work. They cleared out a huge conifer wall that was stealing all our light and left the lawn in a spotless state. Highly recommended!",
    stars: 5,
    date: "March 2026"
  },
  {
    id: "test-2",
    author: "Richard Davies",
    role: "Property Manager in Keynsham",
    content: "The level of reliability they provide is rare in the trade. For over a year, D&M have handled gutter cleaning and hedge maintenance across all our properties. Professional, insured, and very reasonable quotes.",
    stars: 5,
    date: "April 2026"
  },
  {
    id: "test-3",
    author: "Sarah and Mark",
    role: "Homeowners in Kingswood",
    content: "Outstanding job with the jet washing and picket panels. Our rotten conifer border was replaced with gorgeous pickets and matching custom planters, which they made on site. Fair price and brilliant craftsmanship.",
    stars: 5,
    date: "May 2026"
  }
];

export const USPS = [
  {
    id: "usp-1",
    title: "Free Quotes",
    description: "We supply transparent, no-obligation quotes with zero pressure. Our team visits, assesses, and responds with clear breakdowns on the same day.",
    iconName: "FileCheck"
  },
  {
    id: "usp-2",
    title: "Professional & Reliable",
    description: "Punctuality and thoroughness are core. We respect your schedule, arrive equipped, fully clean up all green waste, and operate with maximum liability insurance.",
    iconName: "ShieldCheck"
  },
  {
    id: "usp-3",
    title: "Quality Results",
    description: "No shortcuts. We use industrial-grade equipment for perfect conifer hedges, neat lawn stripes, and stain-busting high-pressure pathway washings.",
    iconName: "Sparkles"
  }
];
