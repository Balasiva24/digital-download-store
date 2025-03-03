import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Digital Download Store</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;