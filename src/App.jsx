import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { items } from './components/Data';
import Cart from './components/Cart';
import Testi from './Pages/Testi';
import PromoSection from './Pages/PromoSection';
import AllPromo from './Pages/AllPromo';
import CoffeeInsights from "./Pages/CoffeeInsights";
import EventWorkshop from "./Pages/EventWorkshop";
import Footer from "./components/Footer";

// Layout biar atur tampilannya
const Layout = ({ children, cart, setData }) => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const isPromoPage = location.pathname === "/promo";

  const hideExtraSections = isCartPage || isPromoPage;

  return (
    <>
      {!isCartPage && <Navbar cart={cart} setData={setData} />}
      <main>{children}</main>
      {!hideExtraSections && (
        <>
          <CoffeeInsights />
          <Testi />
          <PromoSection />
          <EventWorkshop />
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Layout cart={cart} setData={setData}>
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/promo"
            element={<AllPromo />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
