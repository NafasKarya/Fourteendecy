import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Impor gambar-gambar produk Anda
import blazerImage from '../../assets/images/card-1.jpeg';
import totebagImage from '../../assets/images/card-1.jpeg';
import tshirtImage from '../../assets/images/card-1.jpeg';
import eyeguyImage from '../../assets/images/card-1.jpeg';
import shoesImage from '../../assets/images/card-1.jpeg'; // Contoh item tambahan

// Data produk (nama variabel juga disesuaikan untuk konsistensi)
const newSaleData = [
  { name: 'BLEZER', price: 899, image: blazerImage },
  { name: 'TOTBEG', price: 199, image: totebagImage },
  { name: 'T-SHIRT', price: 200, image: tshirtImage },
  { name: 'EYEGUY', price: 299, image: eyeguyImage },
  { name: 'SNEAKER', price: 450, image: shoesImage },
  { name: 'COOL HAT', price: 150, image: blazerImage },
];

// 1. Nama komponen diubah
const NewSaleForYou = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount =
        direction === 'left'
          ? -slider.clientWidth / 2
          : slider.clientWidth / 2;
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Seksi */}
        <div className="flex justify-between items-center mb-8">
          {/* 2. Judul diubah sesuai nama baru */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-gray-900">
            NEW SALE FOR YOU
          </h2>
          {/* Tombol Navigasi Slider */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => slide('left')}
              className="border border-gray-300 rounded p-2 hover:bg-gray-100 transition"
              aria-label="Scroll Left"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => slide('right')}
              className="border border-gray-300 rounded p-2 hover:bg-gray-100 transition"
              aria-label="Scroll Right"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Slider untuk Kartu Produk */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {newSaleData.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="group flex flex-col h-full">
                {/* Gambar Produk */}
                <div className="bg-zinc-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Detail Produk */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm font-semibold text-gray-700 tracking-wider">
                    {product.name}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Nama export diubah
export default NewSaleForYou;