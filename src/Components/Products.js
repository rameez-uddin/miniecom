import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Products.css';



function Products() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        // Initialize cartItems state with an object where each key is the product ID and value is false (not in cart)
        const initialCartState = responseData.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setCartItems(initialCartState);
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleCart = (itemId) => {
    setCartItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId] // Toggle the cart status of the item
    }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
    <div className="products-container">
      {data.map(item => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-details">
            <h2>{item.title}</h2>
            <p className="price">Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
            <button 
              type="button" 
              className="addtocart"
              onClick={() => toggleCart(item.id)}
            >
              {cartItems[item.id] ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
  
    </div>
    </>
  );
}

export default Products;
