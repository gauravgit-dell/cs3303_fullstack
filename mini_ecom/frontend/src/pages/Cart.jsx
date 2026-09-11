import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  user
}) {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);

  // Calculate total number of products
  const itemCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // Calculate total price dynamically
  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  // ==========================================
  // PLACE ORDER
  // ==========================================

  const placeOrder = async () => {
    setMessage("");

    // Check login
    if (!user) {
      navigate("/login");
      return;
    }

    // Check empty cart
    if (cart.length === 0) {
      setMessage(
        "Your cart is empty."
      );
      return;
    }

    try {
      setPlacingOrder(true);

      const response = await fetch(
        "http://localhost:5001/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${localStorage.getItem(
                "token"
              )}`
          },

          body: JSON.stringify({
            user: user,

            items: cart.map((item) => ({
              id: item.id,
              quantity: item.quantity
            }))
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Order could not be placed."
        );
      }

      // Clear cart after successful order
      clearCart();

      // Go to Orders page
      navigate("/orders");

    } catch (error) {
      setMessage(error.message);

    } finally {
      setPlacingOrder(false);
    }
  };

  // ==========================================
  // EMPTY CART
  // ==========================================

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">

        <div className="empty-cart-icon">
          🛒
        </div>

        <h1>
          Your Cart is Empty
        </h1>

        <p>
          You haven't added anything
          to your cart yet.
        </p>

        <Link
          to="/products"
          className="shop-button"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  // ==========================================
  // CART PAGE
  // ==========================================

  return (
    <div className="container">

      <div className="page-heading">

        <p className="section-label">
          SHOPPING CART
        </p>

        <h1>
          Your Cart
        </h1>

      </div>

      {message && (
        <div className="error-message">
          {message}
        </div>
      )}

      <div className="cart-layout">

        {/* CART PRODUCTS */}

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-product-icon">
                🛍️
              </div>

              <div className="cart-product-info">

                <p className="category">
                  {item.category}
                </p>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹
                  {item.price.toLocaleString(
                    "en-IN"
                  )}
                </p>

              </div>

              {/* QUANTITY CONTROLS */}

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>

              {/* ITEM TOTAL */}

              <div className="cart-item-total">

                ₹
                {(
                  item.price *
                  item.quantity
                ).toLocaleString(
                  "en-IN"
                )}

              </div>

              {/* REMOVE */}

              <button
                className="remove-button"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        {/* ORDER SUMMARY */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {itemCount}
            </span>

          </div>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹
              {subtotal.toLocaleString(
                "en-IN"
              )}
            </span>

          </div>

          <hr />

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₹
              {subtotal.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>

          <button
            className="checkout-button"
            onClick={placeOrder}
            disabled={placingOrder}
          >
            {placingOrder
              ? "Placing Order..."
              : user
              ? "Place Order"
              : "Login to Place Order"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;