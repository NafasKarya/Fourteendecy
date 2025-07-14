import React from 'react';

export default function CategoryItem({ name, image }) {
  return (
    <div
      className="flex flex-col items-center gap-3 text-center flex-shrink-0"
      style={{ scrollSnapAlign: 'start' }}
    >
      <a href="#" className="group">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                     rounded-full overflow-hidden bg-zinc-100
                     shadow-sm group-hover:shadow-md transition-shadow"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
                       transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 tracking-wider group-hover:text-black">
          {name}
        </p>
      </a>
    </div>
  );
}
