import React from 'react';
import '../Stylesheets/Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  return (
    <nav className={`sticky-navbar ${isProductsPage ? 'products-page' : ''}`}>
      <NavLink to="/home" className="logo">
        ShopMe
      </NavLink>
      <ul className="items">
        <li className="item">
          <NavLink activeClassName='active' to="/">Home</NavLink>
        </li>
        <li className="item">
          <NavLink activeClassName='active' to="/products">Products</NavLink>
        </li>
        <li className="item">
          <NavLink activeClassName='active' to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
