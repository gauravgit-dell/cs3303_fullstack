import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            WELCOME TO MINISHOP
          </p>

          <h1>
            Everything You Need,
            <br />
            All in One Place
          </h1>

          <p className="hero-description">
            Discover quality electronics,
            accessories, clothing and more
            at affordable prices.
          </p>

          <Link
            to="/products"
            className="shop-button"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">
            🛒
          </div>

          <h3>Easy Shopping</h3>

          <p>
            Browse products and add them
            to your cart easily.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            📦
          </div>

          <h3>Quality Products</h3>

          <p>
            Choose from our collection
            of quality products.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            🔒
          </div>

          <h3>Secure Orders</h3>

          <p>
            Login securely before placing
            your order.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;