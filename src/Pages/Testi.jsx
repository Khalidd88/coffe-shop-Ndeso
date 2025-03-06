import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";

const TestimonialCard = ({ name, image, testimonial }) => {
  const isFemale = ["Jesslyn", "Grace", "Patricia", "Kayla"].includes(name);

  return (
    <div
      className="w-[300px] h-[300px] bg-white rounded-xl shadow-lg p-6 flex-shrink-0 mx-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="w-20 h-20 rounded-full bg-[#d6c3b8] overflow-hidden flex items-center justify-center mb-4 shadow-inner"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        ) : isFemale ? (
          <FaUserCircle className="text-4xl text-white" />
        ) : (
          <FaUserAlt className="text-3xl text-white" />
        )}
      </div>
      <h1 className="text-center font-semibold text-lg">{name}</h1>
      <p className="mt-3 text-center text-sm text-gray-600">{testimonial}</p>
    </div>
  );
};

const Testi = () => {
  const testimonials = [
    { name: "Raka", image: "", testimonial: "Layanan yang sangat baik dan cepat!" },
    { name: "Fajar", image: "", testimonial: "Kopinya enak banget, nagih!" },
    { name: "Patricia", image: "", testimonial: "Saya sangat merekomendasikan tempat ini." },
    { name: "Abdurrohman", image: "", testimonial: "Proses pesen cepat dan sesuai harapan." },
    { name: "Grace", image: "", testimonial: "Timnya sangat profesional dan ramah!" },
    { name: "Jesslyn", image: "", testimonial: "Pelayanan terbaik yang pernah aku coba." },
    { name: "Jeky", image: "", testimonial: "Sangat puas sama kopinya!" },
    { name: "Hafidz", image: "", testimonial: "Kopi mereka enak banget, dan wajib orang lain coba!" },
    { name: "Pandu", image: "", testimonial: "Gokil, Paling enak di bekut!" },
    { name: "Kayla", image: "", testimonial: "Aku suka banget sih sama kopi nya!" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#f4efeb] py-12">
      <h2
        className="text-4xl font-bold text-center mb-10"
        style={{ color: "#1f2937", fontFamily: "sans-serif" }}
      >
        Apa Kata Mereka? 💬
      </h2>

      <div
        className="flex"
        style={{
          display: "flex",
          animation: "marquee 25s linear infinite",
          width: "fit-content",
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            image={item.image}
            testimonial={item.testimonial}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testi;
