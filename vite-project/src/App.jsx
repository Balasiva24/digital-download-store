// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import Login from './login'; // Import the Login component
import Signup from './signup'; // Import the Signup component
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Import router components

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check if the user is logged in based on localStorage
  const checkLoginStatus = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return username && password; // User exists in localStorage
  };

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
    <Router>
      <div className="App">
        <Switch>
          {/* If the user is not logged in, show Login or Signup */}
          <Route path="/login">
            {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            <Signup onSignup={handleLogin} /> {/* Redirect to login after signup */}
          </Route>

          {/* Render the main app if the user is logged in */}
          <Route exact path="/">
            {checkLoginStatus() ? (
              <>
                <Header />
                <ProductList addToCart={addToCart} />
                <Cart cart={cart} totalAmount={totalAmount} />
                <Footer />
              </>
            ) : (
              <Redirect to="/login" /> // Redirect to login page if not logged in
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
