import React from 'react';

// Impor gambar-gambar yang dibutuhkan dari folder assets Anda
import articleImg1 from '../../assets/images/card-1.jpeg';
import articleImg2 from '../../assets/images/card-1.jpeg';
import articleImg3 from '../../assets/images/card-1.jpeg';

// Data untuk artikel, dipisah agar mudah di-layout
const articlesData = [
  {
    title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY',
    description: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
    image: articleImg1,
    alt: 'Woman in long-sleeve shirt sitting on stairs',
    isLarge: false,
  },
  {
    title: 'DAILY X SPORT BACKPACK',
    description: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
    image: articleImg2,
    alt: 'Two people with backpacks',
    isLarge: false,
  },
  {
    title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY',
    description: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
    image: articleImg3,
    alt: 'Person in t-shirt and shorts standing outdoors',
    isLarge: true,
  },
];

// Pisahkan artikel besar dan kecil untuk kemudahan layout
const smallArticles = articlesData.filter(article => !article.isLarge);
const largeArticle = articlesData.find(article => article.isLarge);

const ArticleShirt = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Seksi */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900">ARTICLE YOUR SHIRT</h2>
          <p className="md:max-w-sm text-gray-600 md:text-right">
            Discover quality of our blog, that reflects your style and makes everyday living more enjoyable.
          </p>
        </div>

        {/* Grid untuk Artikel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kolom Kiri (untuk 2 artikel kecil) */}
          <div className="flex flex-col gap-8">
            {smallArticles.map((article, index) => (
              <div key={index}>
                {/* --- PERUBAHAN DI SINI --- */}
                {/* Ganti 'aspect-[4/3]' dengan tinggi tetap, misal 'h-64' */}
                <div className="bg-zinc-100 rounded-lg overflow-hidden h-64">
                  <img src={article.image} alt={article.alt} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.description}</p>
                  <a href="#" className="mt-4 inline-block text-sm font-bold tracking-wider border-b-2 border-black">DETAILS</a>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan (untuk 1 artikel besar) */}
          {largeArticle && (
            <div>
              {/* --- PERUBAHAN DI SINI --- */}
              {/* Ganti 'aspect-video' dengan tinggi yang sama dengan total 2 kartu kecil + gap */}
              <div className="bg-zinc-100 rounded-lg overflow-hidden h-[34rem]">
                <img src={largeArticle.image} alt={largeArticle.alt} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">{largeArticle.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{largeArticle.description}</p>
                <a href="#" className="mt-4 inline-block text-sm font-bold tracking-wider border-b-2 border-black">DETAILS</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleShirt;