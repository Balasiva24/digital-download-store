import React from 'react';
import ProductItem from './ProductItem';

// Import images directly
import learnJsImage from './assets/learn-js.jpeg';
import masteringPyImage from './assets/mastering-py.jpeg';
import htmlCssImage from './assets/html-css.jpeg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Learning JavaScript', price: 10.99, image: learnJsImage },
    { id: 2, name: 'Mastering Python', price: 12.99, image: masteringPyImage },
    { id: 3, name: 'Introduction to HTML & CSS', price: 8.99, image: htmlCssImage },
  ];

  return (
    <section id="products">
      <h2>Our Best Selling Books</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
