import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import foto
import barista from "../assets/images/barista.jpg";
import latte from "../assets/images/latte.jpg";
import music from "../assets/images/music.jpg";

const EventWorkshop = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200,   
        once: false,      
        mirror: true,    
      });
    }, []);

  return (
    <section
      id="event"
      className="py-20 px-6 bg-[#4b2e19] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          data-aos="fade-up"
        >
          🎉 Event & Workshop
        </h2>
        <p
          className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 text-[#d6c3a1]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Gabung di acara seru kami! Mulai dari kelas barista, workshop kopi,
          sampai event spesial buat pecinta kopi. Yuk seru-seruan bareng!
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-[#5d3a23] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <img
              src={barista}
              alt="Barista Class"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#bc9667]">
              ☕ Barista Class
            </h3>
            <p className="text-[#e8d9c4]">
              Belajar langsung cara bikin kopi ala barista profesional dengan
              teknik yang seru dan mudah.
            </p>
          </div>

          <div className="bg-[#5d3a23] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <img
              src= {latte}
              alt="Latte Art Workshop"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#bc9667]">
              🎨 Latte Art Workshop
            </h3>
            <p className="text-[#e8d9c4]">
              Kreasikan latte art-mu sendiri, cocok buat yang suka eksplorasi
              seni di secangkir kopi!
            </p>
          </div>

          <div className="bg-[#5d3a23] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <img
              src= {music}
              alt="Coffee Tasting"
              className="rounded-xl mb-5 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#bc9667]">
            🎶 Live Music Night
            </h3>
            <p className="text-[#e8d9c4]">
            Nikmati malam santai ditemani live music akustik dan secangkir kopi hangat, 
            bikin suasana makin chill~
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventWorkshop;
