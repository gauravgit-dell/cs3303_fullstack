import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch("http://localhost:5001/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container loading">
        <div className="loader"></div>

        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container error-page">
        <h1>Unable to Load Products</h1>

        <p>{error}</p>

        <button
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-heading">
        <p className="section-label">
          OUR COLLECTION
        </p>

        <h1>Products</h1>

        <p>
          Explore our range of carefully
          selected products.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h2>No products available</h2>

          <p>
            Please check back later.
          </p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;