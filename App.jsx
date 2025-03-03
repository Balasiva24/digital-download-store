// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import Login from './login'; // Import the Login component

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Handle add product to cart
  const addToCart = (productName, productPrice) => {
    setCart([...cart, { name: productName, price: productPrice }]);
    setTotalAmount(totalAmount + productPrice);
  };

  // Handle login status
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        // Render the login page if the user is not logged in
        <Login onLogin={handleLogin} />
      ) : (
        // Render the main app if the user is logged in
        <>
          <Header />
          <ProductList addToCart={addToCart} />
          <Cart cart={cart} totalAmount={totalAmount} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
