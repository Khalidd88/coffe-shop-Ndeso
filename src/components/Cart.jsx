import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formatRupiah = (angka) =>
    angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

  const handleQuantityChange = (index, type) => {
    const updatedCart = [...cart];
    if (!updatedCart[index].quantity) updatedCart[index].quantity = 1;
    if (type === "increase") {
      updatedCart[index].quantity += 1;
    } else if (type === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

  const calculateTotal = () =>
    cart.reduce((total, product) => {
      const price =
        typeof product.price === "string"
          ? parseInt(product.price.replace(/\D/g, ""))
          : product.price;
      return total + price * (product.quantity || 1);
    }, 0);

  const handleCheckout = () => setShowPayment(true);

  const confirmPayment = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setShowPayment(false);
      setOrderSuccess(false);
      setPaymentDetails({
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f9f4ef] flex flex-col items-center py-12 px-6">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#5d3a23] mb-4">
            Keranjang Kosong
          </h1>
          <Link
            to="/"
            className="px-8 py-3 bg-[#bc9667] text-white rounded-full shadow-md hover:bg-[#a67c52] transition-all duration-300"
          >
            Belanja Dulu Yuk~
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-[#5d3a23] mb-8">
            Keranjang
          </h1>
          {cart.map((product, index) => {
            const price =
              typeof product.price === "string"
                ? parseInt(product.price.replace(/\D/g, ""))
                : product.price;
            const quantity = product.quantity || 1;
            return (
              <div
                key={index}
                className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mb-6 border border-[#e8d9c4]"
              >
                <div className="w-full md:w-1/3">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                  <h5 className="text-2xl font-bold text-[#5d3a23]">
                    {product.title}
                  </h5>
                  <p className="text-[#8d6b4a] my-3">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-[#bc9667]">
                      {formatRupiah(price * quantity)}
                    </span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(index, "decrease")}
                        className="px-3 py-1 bg-[#e8d9c4] rounded-full"
                      >
                        -
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(index, "increase")}
                        className="px-3 py-1 bg-[#e8d9c4] rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg border border-[#e8d9c4] flex flex-col md:flex-row justify-between items-center mt-6">
            <h3 className="text-2xl font-bold text-[#5d3a23]">
              Total: {formatRupiah(calculateTotal())}
            </h3>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleCheckout}
                className="px-8 py-3 bg-[#bc9667] text-white rounded-full"
              >
                Checkout
              </button>
              <button
                onClick={() => setCart([])}
                className="px-8 py-3 bg-red-500 text-white rounded-full"
              >
                Hapus Semua
              </button>
            </div>
          </div>
        </>
      )}

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Metode Pembayaran</h2>
            <div className="flex gap-4 mb-4">
              {["ShopeePay", "GoPay", "Dana"].map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedPayment(method)}
                  className={`px-4 py-2 rounded-full ${
                    selectedPayment === method
                      ? "bg-[#bc9667] text-white"
                      : "bg-[#e8d9c4]"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
            {selectedPayment && (
              <div className="space-y-3">
                <input
                  type="text"
                  name="phone"
                  value={paymentDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Nomor Telepon"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={paymentDetails.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="password"
                  name="password"
                  value={paymentDetails.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={paymentDetails.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Konfirmasi Password"
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={confirmPayment}
                  className="w-full py-3 bg-green-500 text-white rounded-full"
                >
                  Bayar Sekarang
                </button>
              </div>
            )}
            <button
              onClick={() => setShowPayment(false)}
              className="mt-4 text-red-500"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {orderSuccess && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full">
          Pemesanan Berhasil!
        </div>
      )}
    </div>
  );
};

export default Cart;
