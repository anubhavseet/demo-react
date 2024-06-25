import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems([...items, item]);
  };

  const removeFromCart = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>Add to Cart</button>
    </div>
  );
};

export default Cart;
