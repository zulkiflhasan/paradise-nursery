import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
export default function CartItem({onContinueShopping}) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const change = (item, delta) => {
    if (item.quantity + delta <= 0) dispatch(removeItem(item.id));
    else dispatch(updateQuantity({id:item.id, quantity:item.quantity+delta}));
  };
  return <section className="cart"><h2>Your Shopping Cart</h2>
    <p className="cart-summary">Total Items: <strong>{count}</strong></p>
    {items.length === 0 ? <p>Your cart is empty. Add some plants to get started!</p> :
      <div className="cart-list">{items.map(item =>
        <article className="cart-row" key={item.id}>
          <img src={item.image} alt={item.name}/><div className="cart-details">
            <h3>{item.name}</h3><p>Unit Cost: ${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button aria-label={'Decrease '+item.name} onClick={() => change(item,-1)}>−</button>
              <span aria-label="Quantity">{item.quantity}</span>
              <button aria-label={'Increase '+item.name} onClick={() => change(item,1)}>+</button>
            </div>
            <strong>Subtotal: ${(item.price*item.quantity).toFixed(2)}</strong>
            <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </article>)}</div>}
    <h3 className="cart-total">Total Cost: ${total.toFixed(2)}</h3>
    <div className="cart-actions">
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button disabled={items.length === 0} onClick={() => window.alert('Checkout coming soon!')}>Checkout</button>
    </div>
  </section>;
}
