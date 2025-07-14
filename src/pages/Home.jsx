/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

// Impor komponen konten
import MainCard from './components/MainCard';
import BrowseCategories from './components/BrowseCategories';
import CategoriesNew from './components/CategoriesNew';
import SaleIsOn from './components/SaleIsOn';
import NewArrivals from './components/NewArrivals';
import BannerAdds from './components/BannerAdds';
import NewSaleForYou from './components/NewSaleForYou';
import ArticleShirt from './components/ArticleShirt';
import Footer from './components/Footer';

// Komponen Header Responsif
const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
          {/* tombol menu (mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 hover:text-black"
            >
              <FiMenu size={24} />
            </button>
          </div>

          {/* logo */}
          <div className="text-2xl md:text-3xl font-bold tracking-widest text-gray-900 flex-1">
            <a href="/" className="hidden lg:block">
              Fourteendecy
            </a>
          </div>

          {/* search (desktop) */}
          <div className="relative w-full max-w-sm hidden sm:block mx-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <FiSearch className="text-gray-500" size={18} />
            </div>
          </div>

          {/* ikon kanan */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-gray-700 hover:text-black sm:hidden">
              <FiSearch size={22} />
            </button>
            <button className="text-gray-700 hover:text-black">
              <FiShoppingBag size={24} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                <FiUser size={18} />
              </div>
              <span className="font-medium text-gray-800 hidden sm:block">
                MorganK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* nav (desktop) */}
      <nav className="container mx-auto justify-center py-3 px-6 hidden lg:flex">
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              NEW ARRIVAL
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              MOST PICK
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-bold text-red-600 hover:text-red-700 tracking-wider"
            >
              SALE
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              WOMEN
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              MEN
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              SNEAKERS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              STORE LOCATION
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black tracking-wider"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>

      {/* sidebar (mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform z-60 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-2xl tracking-widest">Fourteendecy</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              <FiX size={24} />
            </button>
          </div>
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="block py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded"
                >
                  NEW ARRIVAL
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded"
                >
                  MOST PICK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-lg font-bold text-red-600 hover:bg-gray-100 rounded"
                >
                  SALE
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Halaman Home dengan animasi masuk
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppHeader />

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <MainCard />
        <BrowseCategories />
        <CategoriesNew />
        <SaleIsOn />
        <NewArrivals />
        <BannerAdds />
        <NewSaleForYou />
        <ArticleShirt />
      </motion.main>

      <Footer />
    </div>
  );
}
