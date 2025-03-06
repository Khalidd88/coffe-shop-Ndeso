import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import about from '../assets/images/about.jpg'

const TentangKami = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <section id="about" className="bg-[#2b0d04] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            OUR <span className="text-[#bc9667]">HISTORY</span>
          </h2>
          <p className="text-[#d3bba1] mt-4 text-lg max-w-2xl mx-auto">
            Cerita dibalik secangkir kopi terbaik kami, dibuat penuh cinta dan dedikasi.
          </p>
        </div>

        {/* Konten */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Foto */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
          >
            <img
              src={about}
              alt="Tentang Kami"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Teks */}
          <div
            className="w-full md:w-1/2 text-[#f5f5f5]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-bold mb-6">
              What Makes Our Coffee Special?
            </h3>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                ✅ Biji kopi pilihan, dipanen dari perkebunan terbaik dengan teknik berkelanjutan.
              </li>
              <li>
                ✅ Proses pemanggangan modern, dipandu roaster berpengalaman untuk rasa sempurna.
              </li>
              <li>
                ✅ Komitmen menghadirkan pengalaman kopi yang memuaskan, dari biji hingga cangkir.
              </li>
            </ul>
            <button
              className="mt-8 px-8 py-3 bg-[#bc9667] text-white rounded-full shadow-lg hover:bg-[#a57f56] hover:scale-105 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TentangKami
