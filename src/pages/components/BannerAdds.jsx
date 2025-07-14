import React from 'react';

// Impor gambar-gambar yang dibutuhkan dari folder assets Anda
import bannerMan from '../../assets/images/card-1.jpeg'; // Pastikan Anda punya gambar ini
import bannerBag from '../../assets/images/card-1.jpeg'; // Pastikan Anda punya gambar ini

const BannerAdds = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          {/* Gambar Latar Kiri (Hanya di layar besar) */}
          <img 
            src={bannerMan} 
            alt="Man in beige outfit" 
            className="absolute top-0 left-0 h-full w-auto object-cover hidden lg:block opacity-40"
          />
          {/* Gambar Latar Kanan (Hanya di layar besar) */}
          <img 
            src={bannerBag} 
            alt="Orange woven bag" 
            className="absolute top-0 right-0 h-full w-auto object-cover hidden lg:block opacity-40"
          />

          {/* Konten Teks di Tengah */}
          <div className="relative z-10 flex flex-col items-center text-center py-16 px-6">
            <p className="text-sm font-medium tracking-widest text-gray-300">
              LAST CHANCE
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              END OF SEASON SALE
            </h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-200">
              UP TO 50% OFF
            </p>
            <a 
              href="#" 
              className="mt-8 inline-block bg-white text-black font-bold py-3 px-10 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              CHECK IT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAdds;