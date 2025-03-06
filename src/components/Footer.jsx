import React from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#3b2414] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#bc9667] mb-4">
            kopiNdeso
          </h2>
          <p className="text-[#e8d9c4]">
            Tempat terbaik untuk menikmati kopi premium dengan suasana nyaman
            dan layanan terbaik.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com/oceannn.19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#bc9667] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#bc9667] transition-all"
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#bc9667] transition-all"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#bc9667] mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-[#bc9667] transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#promo" className="hover:text-[#bc9667] transition-all">
                Promo
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-[#bc9667] transition-all">
                Event & Workshop
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#bc9667] transition-all">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#bc9667] mb-4">
            Lokasi Kami
          </h3>
          <p className="text-[#e8d9c4]">
            Jl. Kopi Premium No. 123<br />
            Bekasi Utara, Indonesia<br />
            ☎️ (021) 123-4567
          </p>
        </div>

      </div>

      <div className="mt-10 border-t border-[#5d3a23] pt-6 text-center text-[#d6c3a1] text-sm">
        © {new Date().getFullYear()} kopiNdeso. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
