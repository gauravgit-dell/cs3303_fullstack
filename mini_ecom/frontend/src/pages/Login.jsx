import { useState } from "react";
import {
  Navigate,
  useNavigate
} from "react-router-dom";

function Login({ login, user }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");

  // If already logged in
  if (user) {
    return (
      <Navigate
        to="/products"
        replace
      />
    );
  }

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    // Validate name
    if (!formData.name.trim()) {
      setError(
        "Name is required."
      );
      return;
    }

    // Validate email
    if (!formData.email.trim()) {
      setError(
        "Email is required."
      );
      return;
    }

    // Validate email format
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(
        formData.email
      )
    ) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    // Save user
    login({
      name: formData.name.trim(),
      email:
        formData.email
          .trim()
          .toLowerCase()
    });

    // Go to products
    navigate("/products");
  };

  return (
    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <div className="login-icon">
          👤
        </div>

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue shopping.
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <label>
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <button type="submit">
          Login
        </button>

        <p className="login-note">
          Basic authentication for
          assignment purposes.
        </p>

      </form>

    </div>
  );
}

export default Login;