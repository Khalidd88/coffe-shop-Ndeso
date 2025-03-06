import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fun from "../assets/images/fun.jpg";
import kopi from "../assets/images/kopi.jpg";
import benefit from "../assets/images/benefit.jpg"

const CoffeeInsights = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="insights"
      className="relative bg-gradient-to-br from-[#4b2e1f] via-[#6b3f26] to-[#4b2e1f] py-16 md:py-24 px-5 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern-coffee.svg')] bg-repeat z-0"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-[#f5eee6] mb-6 tracking-wide"
          data-aos="fade-down"
        >
          ☕ Coffee Insights
        </h2>
        <p
          className="text-[#e0d3c2] mb-10 md:mb-16 text-base md:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Temukan fakta unik, tips spesial, dan manfaat tersembunyi dari kopi favoritmu.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://www.omela.com/id/tips-and-trick/5-cara-menyeduh-kopi-dengan-benar-ala-barista-cobain-yuk"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#fff9f3] rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <img
              src= {kopi}
              alt="Tips Seduh"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-[#4b2e1f] mb-3 group-hover:text-[#bc9667] transition">
              🎯 Tips Seduh Manual
            </h3>
            <p className="text-[#6b4e3d]">
              Biar bisa bikin kopi enak ala barista cukup di rumah, coba cara ini!
            </p>
          </a>

          <a
            href="https://partikelir.id/pengetahuan/sejarah-kopi-fakta-menarik/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#fff9f3] rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <img
              src= {fun}
              alt="Fakta Kopi"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-[#4b2e1f] mb-3 group-hover:text-[#bc9667] transition">
              📜 Fun Fact Kopi
            </h3>
            <p className="text-[#6b4e3d]">
              Ternyata kopi udah jadi teman setia manusia sejak abad ke-9!
            </p>
          </a>
          
          <a
            href="https://hellosehat.com/nutrisi/fakta-gizi/manfaat-kopi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#fff9f3] rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <img
              src= {benefit}
              alt="Manfaat Kopi"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-[#4b2e1f] mb-3 group-hover:text-[#bc9667] transition">
              💡 Manfaat Kopi
            </h3>
            <p className="text-[#6b4e3d]">
              Selain nikmat, kopi punya manfaat kesehatan yang luar biasa!
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoffeeInsights;
