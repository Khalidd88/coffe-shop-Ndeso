import React from "react";
import gambar from '../assets/images/best1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const items = [
  { id: 1, title: "Cappuccino", imgSrc: gambar, description: 'Perpaduan espresso dan susu dengan foam lembut di atasnya.', price: '25.000' },
  { id: 2, title: "Americano", imgSrc: gambar, description: 'Espresso yang disajikan dengan tambahan air panas, rasa ringan.', price: '20.000' },
  { id: 3, title: "Latte", imgSrc: gambar, description: 'Espresso dicampur susu hangat, creamy dan nikmat.', price: '28.000' },
  { id: 4, title: "Mocha", imgSrc: gambar, description: 'Kopi cokelat manis dengan kombinasi espresso dan cokelat.', price: '30.000' },
  { id: 5, title: "Flat White", imgSrc: gambar, description: 'Espresso dengan susu steamed tipis tanpa foam tebal.', price: '27.000' },
  { id: 6, title: "Macchiato", imgSrc: gambar, description: 'Espresso shot dengan sedikit foam susu di atasnya.', price: '22.000' },
  { id: 7, title: "Affogato", imgSrc: gambar, description: 'Espresso panas disiram ke atas es krim vanilla.', price: '32.000' },
  { id: 8, title: "Piccolo", imgSrc: gambar, description: 'Mini latte dengan perbandingan espresso lebih kuat.', price: '23.000' },
  { id: 9, title: "Irish Coffee", imgSrc: gambar, description: 'Kopi campur whiskey & krim, khas dan hangat.', price: '35.000' },
];


const ItemCard = ({ title, imgSrc, description, price }) => (
  <div
    className="bg-white rounded-xl shadow-lg p-5 max-w-xs mx-auto"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
    <div className="text-center">
      <span className="text-lg font-bold text-amber-600">{price} IDR</span>
    </div>
  </div>
);

const ItemList = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <h2
        className="text-4xl font-bold text-center mb-10"
        style={{ fontFamily: 'sans-serif', color: '#1f2937' }}
        data-aos="fade-down"
      >
        Daftar Menu Gemessss 🍹
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
