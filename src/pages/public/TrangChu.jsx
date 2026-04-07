import React from 'react';
import { Link } from 'react-router-dom';

// Import ảnh local
import bannerImg from '../../assets/images/banner-home.png';

const HomePage = () => {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* === HERO BANNER === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="relative rounded-xl overflow-hidden">
          <div
            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center items-center justify-center p-6 text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bannerImg})`
            }}
          >
            <div className="flex flex-col gap-4 max-w-3xl z-10">
              <h1 className="text-white text-4xl font-black tracking-tight md:text-6xl">
                Bộ Sưu Tập Mùa Hè 2025
              </h1>
              <p className="text-white/90 text-base md:text-lg font-medium">
                Tỏa Sáng Dưới Nắng Vàng — Giảm giá 30%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;