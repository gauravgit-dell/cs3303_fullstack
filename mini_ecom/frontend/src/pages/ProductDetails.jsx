import { useEffect, useState } from "react";
import {
  Link,
  useParams
} from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(
      `http://localhost:5001/api/products/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Product does not exist."
          );
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container loading">
        <div className="loader"></div>

        <h2>Loading product...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container error-page">
        <h1>Product Not Found</h1>

        <p>{error}</p>

        <Link
          to="/products"
          className="shop-button"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link
        to="/products"
        className="back-link"
      >
        ← Back to Products
      </Link>

      <div className="details">
        <div className="details-image">
          <span>🛍️</span>
        </div>

        <div className="details-info">
          <p className="category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="price">
            ₹
            {product.price.toLocaleString(
              "en-IN"
            )}
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <div className="stock-info">
            <strong>
              Available Stock:
            </strong>{" "}
            {product.stock}
          </div>

          <button
            className="large-button"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock > 0
              ? "Add to Cart"
              : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;