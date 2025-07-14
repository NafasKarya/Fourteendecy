// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900">
      {/* ────── NEWSLETTER ────── */}
      {/* …bagian newslettermu, kalau ada… */}

      {/* ────── MAIN FOOTER ────── */}
      <div className="bg-black text-white dark:bg-neutral-800 overflow-hidden relative">
        {/* NAV MENU */}
        <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-sm tracking-wider">
              {[
                'NEW ARRIVAL',
                'MOST PICK',
                'SALE',
                'MEN',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`duration-150 ${
                      item === 'SALE'
                        ? 'text-red-500 font-semibold hover:text-red-400'
                        : 'hover:text-gray-300'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* GIANT TEXT “SINKING” */}
        <div className="relative overflow-hidden">
          {/* tinggi container responsif */}
          <div className="h-24 sm:h-32 md:h-40 lg:h-52 xl:h-64" />
          <h1
            className="absolute inset-x-0 top-0 text-center font-extrabold text-white
                       pointer-events-none select-none tracking-widest leading-none"
            /* gunakan clamp supaya ukuran adaptif - tidak terlalu besar di mobile */
            style={{
              fontSize: 'clamp(12rem, 33vw, 28rem)',
              transform: 'translateY(-20%)', // naik ~8 %
            }}
          >
            FOURTEENDECY
          </h1>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 dark:border-neutral-700 mt-6 relative z-10">
          <p className="text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 py-4 tracking-wide">
            &copy; {new Date().getFullYear()} Fourteendecy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
