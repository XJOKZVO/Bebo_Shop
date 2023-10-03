import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import product from'../src/assets/images/1.jpg'
import About from './components/About';
import Contact from './components/Contact';
function App() {
  const products = [
    // Sample product data
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },
    { id: 1, name: 'Product 1', price: 20, imageUrl: product },

    // Add more products
  ];

  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      <About></About>

      <Contact></Contact>
    </div>
  );
}

export default App;
