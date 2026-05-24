/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../../data';
import { Grid, Image as ImageIcon, ArrowLeftRight, HelpCircle } from 'lucide-react';

interface GalleryItemSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

// Inline component for the premium interactive before-after sliding panel
function BeforeAfterSlider({ beforeImage, afterImage, title }: GalleryItemSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm select-none border border-cream-dark">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`${title} - After`}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute right-4 bottom-4 bg-forest-light text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10 shadow-xs uppercase tracking-wider">
        After D&M
      </div>

      {/* Before Image (Revealed Overlay / Clip) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Before`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
          style={{ width: '100%', height: '100%', scale: '1' }}
        />
      </div>
      <div className="absolute left-4 bottom-4 bg-gray-800 text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10 shadow-xs uppercase tracking-wider">
        Before
      </div>

      {/* The slider divider bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md text-forest-dark font-sans text-xs">
          ↔
        </div>
      </div>

      {/* Interactive Range Input overlay */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label={`Slide to compare before and after photos of ${title}`}
      />
    </div>
  );
}

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryCategories = [
    { value: 'all', label: 'All Projects' },
    { value: 'lawn', label: 'Lawn Mowing' },
    { value: 'hedge', label: 'Hedge Reductions' },
    { value: 'jetwash', label: 'Jet Washing' },
    { value: 'clearance', label: 'Clearances' },
    { value: 'fences-planters', label: 'Fencing & Planters' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-forest-light tracking-widest uppercase mb-2 block">
            Our Work Speaks For Itself
          </span>
          <h1 className="font-serif text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Transformations & Craftsmanship
          </h1>
          <p className="text-gray-600 text-base">
            Every conifer line, pristine stripe, cleared garden, and cleaned driveway displays our attention to details. Explore real transformations by moving the interactive sliders in the before-after blocks!
          </p>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`py-2 px-4 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  activeFilter === cat.value
                    ? 'bg-forest-light text-white border-forest-light shadow-xs'
                    : 'text-gray-600 border-gray-200 hover:border-gray-300 bg-cream/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Display Banner Tip */}
        <div className="bg-cream-dark p-4 rounded-xl border border-cream-dark flex items-center justify-center gap-3 max-w-md mx-auto mb-12 text-center">
          <ArrowLeftRight className="w-5 h-5 text-forest-light flex-shrink-0" />
          <span className="text-xs font-semibold text-gray-700">
            Tip: Drag or click anywhere on the before-after block images!
          </span>
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={item.id}
                className="bg-cream rounded-2xl p-6 border border-cream-dark flex flex-col justify-between"
              >
                <div>
                  {item.isBeforeAfter && item.beforeImage && item.afterImage ? (
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      title={item.title}
                    />
                  ) : (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-cream-dark shadow-xs">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute left-4 bottom-4 bg-forest-light text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                        Feature Project
                      </span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl font-bold text-forest-dark mt-6 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-cream-dark/60 flex items-center justify-between text-xxs font-mono text-gray-400 uppercase tracking-widest font-semibold">
                  <span>D&M Bristol Project</span>
                  <span className="text-forest-light font-bold">#{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
