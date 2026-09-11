const express = require("express");
const cors = require("cors");

const products = require("./data/products");

const app = express();

const PORT = 5001;

app.use(cors());
app.use(express.json());

let orders = [];

const validToken = "mini-shop-token";

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "Mini E-Commerce API is running successfully!"
  });
});

// ==========================================
// GET ALL PRODUCTS
// GET /api/products
// ==========================================

app.get("/api/products", (req, res) => {
  res.json(products);
});

// ==========================================
// GET PRODUCT BY ID
// GET /api/products/:id
// ==========================================

app.get("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found."
    });
  }

  res.json(product);
});

// ==========================================
// CREATE ORDER
// POST /api/orders
// ==========================================

app.post("/api/orders", (req, res) => {
  const authorizationHeader =
    req.headers.authorization;

  // Authentication check
  if (
    authorizationHeader !==
    `Bearer ${validToken}`
  ) {
    return res.status(401).json({
      message:
        "Please login before placing an order."
    });
  }

  const { user, items } = req.body;

  // Validate user
  if (!user || !user.name || !user.email) {
    return res.status(400).json({
      message:
        "Name and email are required."
    });
  }

  // Validate cart
  if (!items || !Array.isArray(items)) {
    return res.status(400).json({
      message: "Invalid cart data."
    });
  }

  if (items.length === 0) {
    return res.status(400).json({
      message: "Cart cannot be empty."
    });
  }

  // ========================================
  // VALIDATE EVERY CART ITEM
  // ========================================

  for (const cartItem of items) {
    const product = products.find(
      (item) =>
        item.id === Number(cartItem.id)
    );

    // Product does not exist
    if (!product) {
      return res.status(404).json({
        message:
          `Product with ID ${cartItem.id} does not exist.`
      });
    }

    // Quantity validation
    if (
      !Number.isInteger(cartItem.quantity) ||
      cartItem.quantity <= 0
    ) {
      return res.status(400).json({
        message:
          `Invalid quantity for ${product.name}.`
      });
    }

    // Stock validation
    if (
      cartItem.quantity > product.stock
    ) {
      return res.status(400).json({
        message:
          `Insufficient stock for ${product.name}. Only ${product.stock} available.`
      });
    }
  }

  // ========================================
  // CALCULATE TOTAL
  // ========================================

  let total = 0;

  const orderItems = items.map(
    (cartItem) => {
      const product = products.find(
        (item) =>
          item.id === Number(cartItem.id)
      );

      const itemTotal =
        product.price *
        cartItem.quantity;

      total += itemTotal;

      // Reduce available stock
      product.stock -= cartItem.quantity;

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: cartItem.quantity,
        itemTotal: itemTotal
      };
    }
  );

  // ========================================
  // CREATE ORDER
  // ========================================

  const newOrder = {
    id: orders.length + 1,
    user: {
      name: user.name,
      email: user.email
    },
    items: orderItems,
    total: total,
    date: new Date().toLocaleString(),
    status: "Order Placed"
  };

  orders.push(newOrder);

  res.status(201).json({
    message: "Order placed successfully!",
    order: newOrder
  });
});

// ==========================================
// GET ALL ORDERS
// GET /api/orders
// ==========================================

app.get("/api/orders", (req, res) => {
  const authorizationHeader =
    req.headers.authorization;

  if (
    authorizationHeader !==
    `Bearer ${validToken}`
  ) {
    return res.status(401).json({
      message:
        "Please login to view your orders."
    });
  }

  res.json(orders);
});

// ==========================================
// INVALID API ROUTE
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    message: "API route not found."
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `Backend server running at http://localhost:${PORT}`
  );
});