// src/components/Cart.js
import React from 'react';
import '../assets/css/Card.css'

function Cart({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
