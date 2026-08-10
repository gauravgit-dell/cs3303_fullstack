import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="app">
      <h1>Product Cards</h1>

      <div className="card-container">
        <Card
          title="iPhone 15"
          price={69999}
          description="Apple iPhone with a powerful processor and excellent camera."
        />

        <Card
          title="MacBook Air"
          price={99999}
          description="Lightweight laptop powered by Apple Silicon."
        />

        <Card
          title="AirPods Pro"
          price={24999}
          description="Wireless earbuds with active noise cancellation."
        />
      </div>
    </div>
  );
}

export default App;
