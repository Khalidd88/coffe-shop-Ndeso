import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AllPromo = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const promos = [
    {
      title: "🥤 Es Kopi Susu Gula Aren",
      desc: "Diskon 30% setiap pembelian kedua!",
      price: "Rp. 15.000",
      oldPrice: "Rp. 21.000",
    },
    {
      title: "🍰 Paket Coffee & Cake",
      desc: "Hanya Rp. 35.000 untuk kopi + cake favorit!",
      price: "Rp. 35.000",
    },
    {
      title: "☕ Beli 2 Gratis 1 Americano",
      desc: "Spesial weekday jam 12.00 - 15.00 WIB.",
      price: "Rp. 28.000",
    },
    {
      title: "🍩 Free Donat Manis",
      desc: "Gratis donat setiap transaksi di atas Rp. 50.000.",
      price: "FREE",
    },
    {
      title: "🔥 Flash Sale Cappuccino",
      desc: "Hanya Rp. 10.000 di jam tertentu.",
      price: "Rp. 10.000",
    },
    {
      title: "🎉 Member Exclusive",
      desc: "Diskon 50% buat member baru!",
      price: "Cek di aplikasi",
    },
  ];

  return (
    <section className="bg-[#f7f3ed] py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#5d3a23] mb-4"
          data-aos="fade-down"
        >
          Promo Spesial KopiNdeso ☕✨
        </h1>
        <p
          className="text-[#8b6d4c] mb-12 text-lg"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Buruan nikmati promo menarik ini sebelum kehabisan! 🎊
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="bg-[#fffaf5] rounded-3xl shadow-md hover:shadow-xl p-6 border border-[#e7d8c5] hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
              data-aos-delay={`${300 + index * 100}`}
            >
              <h3 className="text-2xl font-bold text-[#5d3a23] mb-2">
                {promo.title}
              </h3>
              <p className="text-[#8b6d4c] mb-4">{promo.desc}</p>
              <p className="text-[#bc855b] font-bold text-xl">
                {promo.price}{" "}
                {promo.oldPrice && (
                  <span className="line-through text-gray-400 text-base">
                    {promo.oldPrice}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        <Link to="/" data-aos="fade-up" data-aos-delay="800">
          <button className="mt-16 px-10 py-3 bg-[#ee7f2a] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#a6734c] transition-all duration-300">
            ⬅️ Kembali ke Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AllPromo;
