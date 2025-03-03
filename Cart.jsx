import React from 'react';

const Cart = ({ cart, totalAmount }) => {
  return (
    <section id="cart">
      <h2>Your Cart</h2>
      <ul id="cart-items">
        {cart.length === 0 ? <li>No items in cart</li> : (
          cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))
        )}
      </ul>
      <p id="total-price">Total: ${totalAmount.toFixed(2)}</p>
      <button id="checkout-button">Proceed to Checkout</button>
    </section>
  );
};

export default Cart;