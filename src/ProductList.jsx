import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
export const products = [
  {id:1,name:'Snake Plant',price:15,category:'Air Purifying Plants',image:'https://images.unsplash.com/photo-1593482892290-f54927ae1bb2?w=600&auto=format&fit=crop',description:'Resilient, upright foliage that thrives indoors.'},
  {id:2,name:'Spider Plant',price:12,category:'Air Purifying Plants',image:'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&auto=format&fit=crop',description:'Arching leaves, ideal for bright indirect light.'},
  {id:3,name:'Peace Lily',price:18,category:'Air Purifying Plants',image:'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600&auto=format&fit=crop',description:'Elegant foliage and graceful white blooms.'},
  {id:4,name:'Lavender',price:14,category:'Aromatic Plants',image:'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&auto=format&fit=crop',description:'Fragrant purple blossoms for sunny corners.'},
  {id:5,name:'Rosemary',price:11,category:'Aromatic Plants',image:'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&auto=format&fit=crop',description:'A culinary herb with fragrant needle-like leaves.'},
  {id:6,name:'Mint',price:9,category:'Aromatic Plants',image:'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600&auto=format&fit=crop',description:'Fresh scented leaves for home and kitchen.'},
  {id:7,name:'Monstera',price:25,category:'Decorative Plants',image:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop',description:'A tropical statement plant with dramatic leaves.'},
  {id:8,name:'ZZ Plant',price:22,category:'Decorative Plants',image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop',description:'Glossy foliage and easy-going care.'},
  {id:9,name:'Boston Fern',price:19,category:'Decorative Plants',image:'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&auto=format&fit=crop',description:'Soft arching fronds bring lush texture.'}
];
export default function ProductList() {
  const dispatch = useDispatch();
  const added = useSelector(state => state.cart.items.map(item => item.id));
  return <section className="catalog"><h2>Our Beautiful Plants</h2><p>Find the perfect green companion for your space.</p>
    {[...new Set(products.map(p => p.category))].map(category =>
      <section key={category} className="category"><h3>{category}</h3><div className="products">
        {products.filter(p => p.category === category).map(product =>
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} loading="lazy" />
            <h4>{product.name}</h4><p>{product.description}</p><strong>${product.price.toFixed(2)}</strong>
            <button type="button" disabled={added.includes(product.id)} onClick={() => dispatch(addItem(product))}>
              {added.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </article>)}
      </div></section>)}
  </section>;
}
