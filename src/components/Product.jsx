import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Pages from "../Pages/Pages";


const Product = ({ items, cart, setCart }) => {

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ", cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }



  return (
    <>

      <Pages />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col bg-[#371308] py-16" id="menu">
        <div className="flex justify-center mb-12">
          <h1 className='text-white text-4xl md:text-5xl font-extrabold tracking-wide'>
            OUR <span className='text-[#bc9667]'>MENU</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mx-4 md:mx-20 gap-8">
          {items.map((product) => {
            return (
              <div
                key={product.id}
                className="relative bg-[#4b2e19] text-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 max-w-xs p-6 group"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h1 className="mt-4 text-2xl font-bold group-hover:text-[#bc9667]">
                  {product.title}
                </h1>
                <p className="mt-2 text-[#e8d9c4] text-sm">
                  {product.description}
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-lg font-semibold">
                    Rp.<span>{product.price}</span>
                  </p>
                  <button
                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                    className="bg-[#bc9667] text-white p-2 rounded-full hover:bg-[#a1794f] transition-all"
                    title="Add to Cart"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
