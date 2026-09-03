import React, { useState } from "react";
import "./App.css";

// Reusable Header Component
function Header() {
  return (
    <header className="header">
      <h1>My Store</h1>
      <button>Login</button>
    </header>
  );
}

// Reusable Product Component
function ProductCard({ name, price, onAdd }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <button onClick={() => onAdd(name)}>
        Add to Cart
      </button>
    </div>
  );
}

// Reusable Cart Component
function Cart({ items }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
    </div>
  );
}

// Main App Component
function App() {
  const [cart, setCart] = useState([]);

  // State update function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />

      <main className="container">
        <h1>Products</h1>

        <div className="products">
          <ProductCard
            name="Laptop"
            price={50000}
            onAdd={addToCart}
          />

          <ProductCard
            name="Mobile"
            price={25000}
            onAdd={addToCart}
          />

          <ProductCard
            name="Headphones"
            price={3000}
            onAdd={addToCart}
          />
        </div>

        <Cart items={cart} />
      </main>
    </div>
  );
}

export default App;