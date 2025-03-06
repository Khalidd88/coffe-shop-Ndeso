import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const PromoSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="promo"
      className="relative bg-gradient-to-r from-yellow-50 via-amber-100 to-yellow-50 py-20 px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide"
          data-aos="fade-down"
        >
          🌟 Promo & Special Offer 🌟
        </h2>
        <p
          className="text-gray-700 mb-12 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Buruan nikmati promo spesial kami! Diskon menarik untuk para pecinta
          kopi sejati yang suka momen santai sambil ngopi ☕✨
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          {/* Card 1 */}
          <div className="group bg-white rounded-3xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-500 transition">
              🎁 Friday Latte Deal
            </h3>
            <p className="text-gray-600 mb-4">
              Diskon 20% untuk <b>Kopi Latte</b> favorit tiap hari Jumat!
            </p>
            <p className="text-amber-600 font-extrabold text-2xl">
              Rp. 18.000{" "}
              <span className="line-through text-gray-400 text-base">
                Rp. 22.500
              </span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-500 transition">
              🍩 Free Donut Combo
            </h3>
            <p className="text-gray-600 mb-4">
              Gratis <b>1 Donat</b> untuk belanja minimal Rp50.000!
            </p>
            <p className="text-amber-600 font-extrabold text-2xl">
              Berlaku Setiap Hari!
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-500 transition">
              🔥 Happy Hour Deal
            </h3>
            <p className="text-gray-600 mb-4">
              Beli 1 Gratis 1 semua kopi jam 14.00 - 16.00 WIB.
            </p>
            <p className="text-amber-600 font-extrabold text-2xl">
              Hemat Ganda!
            </p>
          </div>
        </div>

        {/* BUTTON UPGRADE PAKAI LINK */}
        <Link to="/promo">
          <button
            className="mt-14 px-10 py-4 bg-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-amber-600 hover:scale-105 transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            🎉 Lihat Semua Promo 🎉
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PromoSection;
