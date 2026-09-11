import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        🛍️
      </div>

      <p className="category">
        {product.category}
      </p>

      <h3>{product.name}</h3>

      <p className="description">
        {product.description}
      </p>

      <h3>
        ₹
        {product.price.toLocaleString("en-IN")}
      </h3>

      <p>
        Stock:{" "}
        {product.stock > 0
          ? product.stock
          : "Out of stock"}
      </p>

      <div className="product-buttons">
        <Link
          to={`/products/${product.id}`}
          className="details-button"
        >
          View Details
        </Link>

        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;