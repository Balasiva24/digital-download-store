import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product.name, product.price)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
