// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Basepage from './Components/Basepage';
import Footer from './Components/Footer';

function App() {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  return (
    <>
      <Navbar />
      <Basepage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Basepage>
      {!isCartPage && <Footer />}
    </>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
