import React from 'react';

// Impor gambar dari folder assets Anda
import categoryImage from '../../assets/images/card-1.jpeg'; // Pastikan Anda punya gambar ini

const CategoriesNew = () => {
  return (
    <section className="bg-white">
      {/* ==================== PERBAIKAN DI SINI ==================== */}
      {/* Ganti 'container' dengan 'max-w-6xl' untuk mengurangi lebar maksimum */}
      <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Kolom Teks (Kiri di desktop, Bawah di HP) */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              BROWSE
              <br />
              CATEGORIES
            </h2>
            <p className="mt-4 max-w-md mx-auto md:mx-0 text-gray-600">
              our categories match by your taste
            </p>
            <a 
              href="#" 
              className="mt-8 inline-block bg-black text-white font-semibold py-3 px-10 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              CHECK IT NOW
            </a>
          </div>

          {/* Kolom Gambar (Kanan di desktop, Atas di HP) */}
          <div className="order-1 md:order-2">
            <img 
              src={categoryImage} 
              alt="Browse Categories" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
      {/* ==================== AKHIR PERBAIKAN ==================== */}
    </section>
  );
};

export default CategoriesNew;