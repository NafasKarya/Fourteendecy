import React from 'react';

// Impor gambar-gambar yang dibutuhkan dari folder assets
import manSaleImage from '../../assets/images/card-1.jpeg';
import womanSaleImage from '../../assets/images/card-1.jpeg';

// Data untuk kartu sale, agar mudah dikelola
const saleData = [
  {
    collection: 'MAN COLLECTION',
    dueDate: 'DUE AUG 24',
    titleLine1: 'CLEARANCE',
    titleLine2: 'SUMMER',
    image: manSaleImage,
    alt: 'Man wearing a floral shirt',
  },
  {
    collection: 'WOMAN SALE',
    dueDate: 'DUE AUG 24',
    titleLine1: 'HIGH BOOTS',
    titleLine2: 'ANKLE',
    image: womanSaleImage,
    alt: 'High ankle boots',
  },
];

const SaleIsOn = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Judul Seksi (Dibuat responsif) */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900 mb-8 text-center md:text-left">
          SALE IS ON!
        </h2>

        {/* Grid untuk Kartu Sale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {saleData.map((item, index) => (
            // Kartu individual
            <div key={index} className="bg-zinc-100 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
              
              {/* Kolom Teks (menjadi order ke-2 di HP) */}
              <div className="flex-1 text-center sm:text-left w-full order-2 sm:order-1">
                <div className="flex justify-between items-center text-xs text-gray-500 font-medium tracking-wider">
                  <span>{item.collection}</span>
                  <span>{item.dueDate}</span>
                </div>
                <h3 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                  {item.titleLine1}
                  <br />
                  {item.titleLine2}
                </h3>
                <a 
                  href="#"
                  className="mt-6 inline-block bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors text-sm"
                >
                  CHECK IT NOW
                </a>
              </div>

              {/* Kolom Gambar (menjadi order ke-1 di HP) */}
              <div className="w-full h-48 sm:w-1/3 sm:h-full flex-shrink-0 order-1 sm:order-2">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleIsOn;