import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = ({ cart }) => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
      if (nav) setNav(false);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nav]);

  const menuItems = [
    { name: 'HOME', to: 'hero' },
    { name: 'BERITA', to: 'berita' },
    { name: 'ABOUT US', to: 'about' },
    { name: 'MENU', to: 'menu' },
    { name: 'TESTIMONIALS', to: 'testimonials' },
    { name: 'CONTACT', to: 'contact' },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scroll ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        <a href="/" className="text-3xl font-bold text-white">
          Kopi<sup className="text-green-400">Ndeso</sup>
        </a>

        <ul className="hidden lg:flex gap-8 text-white">
          {menuItems.map((item) => (
            <li key={item.to} className="hover:text-green-400">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <BsFillCartCheckFill size={25} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
          <button onClick={handleNav} className="text-white lg:hidden">
            {nav ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black text-white transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 lg:hidden`}
      >
        <div className="p-6">
          <button onClick={handleNav} className="mb-6">
            <IoMdClose size={30} />
          </button>
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeNav}
                  className="cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
