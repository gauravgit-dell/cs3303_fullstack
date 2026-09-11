import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "token"
        )}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Unable to fetch orders."
          );
        }

        return response.json();
      })
      .then((data) => {
        setOrders(data);
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

        <h2>Loading orders...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container error-page">
        <h1>Unable to Load Orders</h1>

        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-heading">
        <p className="section-label">
          ORDER HISTORY
        </p>

        <h1>My Orders</h1>
      </div>

      {orders.length === 0 ? (
        <div className="empty-state">
          <div className="empty-cart-icon">
            📦
          </div>

          <h2>No Orders Yet</h2>

          <p>
            Your placed orders will appear here.
          </p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >
              <div className="order-header">
                <div>
                  <p className="section-label">
                    ORDER
                  </p>

                  <h2>#{order.id}</h2>
                </div>

                <div className="order-status">
                  {order.status}
                </div>
              </div>

              <div className="order-date">
                {order.date}
              </div>

              <div className="order-customer">
                <strong>Customer:</strong>{" "}
                {order.user.name}

                <br />

                <strong>Email:</strong>{" "}
                {order.user.email}
              </div>

              <div className="order-products">
                {order.items.map((item) => (
                  <div
                    className="order-item"
                    key={item.id}
                  >
                    <div>
                      <strong>
                        {item.name}
                      </strong>

                      <p>
                        ₹
                        {item.price.toLocaleString(
                          "en-IN"
                        )}{" "}
                        × {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹
                      {item.itemTotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>Order Total</span>

                <strong>
                  ₹
                  {order.total.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;