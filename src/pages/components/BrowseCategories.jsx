import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CategoryItem from './CategoryItem';

import accesoriesImage from '../../assets/images/card-1.jpeg';
import shoesImage      from '../../assets/images/card-1.jpeg';
import topImage        from '../../assets/images/card-1.jpeg';
import bottomImage     from '../../assets/images/card-1.jpeg';
import jacketImage     from '../../assets/images/card-1.jpeg';
import pantsImage      from '../../assets/images/card-1.jpeg';
import dressImage      from '../../assets/images/card-1.jpeg';
import bagImage        from '../../assets/images/card-1.jpeg';

const categoryData = [
  { name: 'ACCESORIES', image: accesoriesImage },
  { name: 'SHOES',      image: shoesImage      },
  { name: 'TOP',        image: topImage        },
  { name: 'BOTTOM',     image: bottomImage     },
  { name: 'JACKETS',    image: jacketImage     },
  { name: 'PANTS',      image: pantsImage      },
  { name: 'DRESSES',    image: dressImage      },
  { name: 'BAGS',       image: bagImage        },
];

export default function BrowseCategories() {
  const [activeTab, setActiveTab]  = useState('men');
  const [hasOverflow, setHasOverflow] = useState(false);
  const sliderRef = useRef(null);

  /* cek overflow tiap mount & resize */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const check = () =>
      setHasOverflow(slider.scrollWidth > slider.clientWidth);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* fungsi scroll */
  const slide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const delta = direction === 'left'
      ? -slider.offsetWidth * 0.75
      :  slider.offsetWidth * 0.75;
    slider.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto py-16 px-4 sm:px-6">
      {/* heading + tab */}
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-gray-900">
          BROWSE CATEGORIES
        </h2>
        <div className="flex items-center border border-gray-300 rounded-md shrink-0">
          {['men', 'woman'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-black text-white rounded-md'
                  : 'text-gray-600'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* slider */}
      <div className="relative group">
        {hasOverflow && (
          <button
            onClick={() => slide('left')}
            className="absolute top-1/2 -translate-y-1/2 -left-4 z-10
                       bg-white/80 backdrop-blur-sm shadow-md rounded-full p-2
                       hidden sm:flex items-center justify-center text-gray-800
                       opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll Left"
          >
            <FiChevronLeft size={24} />
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex items-start gap-6 md:gap-8 overflow-x-auto
                     pb-4 scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categoryData.map((cat) => (
            <CategoryItem key={cat.name} {...cat} />
          ))}
        </div>

        {hasOverflow && (
          <button
            onClick={() => slide('right')}
            className="absolute top-1/2 -translate-y-1/2 -right-4 z-10
                       bg-white/80 backdrop-blur-sm shadow-md rounded-full p-2
                       hidden sm:flex items-center justify-center text-gray-800
                       opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll Right"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
}

/*
  scrollbar-hide plugin opsional:
  npm i -D tailwind-scrollbar-hide
  lalu tambahkan di tailwind.config.js -> plugins: [require('tailwind-scrollbar-hide')]
*/
