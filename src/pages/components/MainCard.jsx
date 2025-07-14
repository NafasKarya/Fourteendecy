import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

// 1. Import gambar dari folder assets
import fashionModel from '../../assets/images/card-1.jpeg';
import exclusiveOffer from '../../assets/images/card-1.jpeg';
import glasses from '../../assets/images/card-1.jpeg';

const MainCard = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
        
        {/* Card Besar (Kiri) */}
        <div className="relative lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden min-h-[400px] lg:min-h-0">
          <img 
            src={fashionModel} // 2. Gunakan variabel hasil import
            alt="Fashion Model" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="relative h-full flex flex-col justify-between p-8 text-white">
            <div>
              <p className="tracking-[0.4em] text-sm">LIMITED OFFER!</p>
              <p className="font-mono text-2xl">||| || ||||| |||| ||</p>
            </div>
            <div>
              <h2 className="text-7xl md:text-8xl font-bold">50%<span className="text-5xl md:text-6xl font-semibold align-top">OFF</span></h2>
              <p className="mt-2 max-w-sm text-gray-200">
                Discover quality fashion that reflects your style and makes everyday living more enjoyable.
              </p>
              <button className="mt-6 bg-white/90 text-black font-bold py-3 px-6 rounded-md flex items-center gap-3 hover:bg-white transition">
                EXPLORE PRODUCT <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Card Kanan Atas */}
        <div className="relative rounded-lg overflow-hidden min-h-[250px]">
          <img 
            src={exclusiveOffer} // 2. Gunakan variabel hasil import
            alt="Exclusive Offer" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-pink-100 bg-opacity-70"></div>
          <div className="relative h-full flex flex-col justify-between p-6">
            <div>
              <span className="bg-white text-pink-600 font-semibold text-xs py-1 px-3 rounded">FOR NEW COMMERCE</span>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">EXCLUSIVE OFFER</h3>
            </div>
            <div>
              <p className="text-sm text-gray-800">welcome for newcommerce, we have special offer! claim now!</p>
              <button className="mt-3 w-full bg-black text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                CLAIM NOW <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Card Kanan Bawah */}
        <div className="bg-blue-100 rounded-lg p-6 flex flex-col justify-between min-h-[250px]">
          <div className="flex justify-between items-center text-gray-800">
            <p className="font-semibold">NEW ARRIVAL</p>
            <p className="font-mono">2024</p>
          </div>
          <div className="text-center">
            <img 
              src={glasses} // 2. Gunakan variabel hasil import
              alt="Accesories" 
              className="w-full max-w-[200px] mx-auto"
            />
            <h3 className="text-3xl font-bold mt-2 text-gray-900">BROWSE ACCESORIES</h3>
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="border border-gray-800 p-2 rounded hover:bg-gray-800 hover:text-white transition"><FiArrowLeft /></button>
            <button className="border border-gray-800 p-2 rounded hover:bg-gray-800 hover:text-white transition"><FiArrowRight /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainCard;