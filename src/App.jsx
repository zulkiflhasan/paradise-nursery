import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
export default function App() {
  const [page,setPage] = useState('home');
  const count = useSelector(state => state.cart.items.reduce((sum,item)=>sum+item.quantity,0));
  return <div className="app">
    {page !== 'home' && <header className="topbar">
      <button className="brand" onClick={() => setPage('home')}>🌿 Paradise Nursery</button>
      <nav><button onClick={() => setPage('products')}>Plants</button>
      <button aria-label={'Shopping cart with '+count+' items'} onClick={() => setPage('cart')}>🛒 Cart ({count})</button></nav>
    </header>}
    {page === 'home' && <main className="landing">
      <div className="landing-panel"><h1>Paradise Nursery</h1><p>Where Green Meets Serenity</p>
      <p>Bring nature's beauty into your home with our handpicked plants.</p>
      <button className="start-button" onClick={() => setPage('products')}>Get Started</button></div>
      <AboutUs/>
    </main>}
    {page === 'products' && <ProductList/>}
    {page === 'cart' && <CartItem onContinueShopping={() => setPage('products')}/>}
  </div>;
}
