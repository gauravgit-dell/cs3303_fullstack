import { Link } from "react-router-dom";

function Navbar({ cartCount, user, logout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MiniShop
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

        {user && (
          <Link to="/orders">
            Orders
          </Link>
        )}

        {!user ? (
          <Link to="/login">
            Login
          </Link>
        ) : (
          <button
            className="logout-button"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;