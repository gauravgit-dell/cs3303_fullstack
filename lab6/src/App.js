import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expressions
    const usernameRegex = /^[A-Za-z0-9_]{3,15}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let valid = true;

    // Username validation
    if (!usernameRegex.test(username)) {
      setUsernameError(
        "Username must be 3-15 characters and contain only letters, numbers, or underscore."
      );

      toast.error("Invalid username");

      valid = false;
    } else {
      setUsernameError("");
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must have 8+ characters, uppercase, lowercase, number and special character."
      );

      toast.error("Invalid password");

      valid = false;
    } else {
      setPasswordError("");
    }

    // Stop if validation fails
    if (!valid) {
      return;
    }

    // Display in console
    console.log("Username:", username);
    console.log("Password:", password);

    // Save to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Success toast
    toast.success("Login successful!");
  };

  return (
    <div className="form-container">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Username */}
        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError("");
            }}
            required
          />

          {usernameError && (
            <p className="error">{usernameError}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            required
          />

          {passwordError && (
            <p className="error">{passwordError}</p>
          )}
        </div>

        <button type="submit">Login</button>

      </form>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;