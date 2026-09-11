import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container not-found">
      <div className="not-found-number">
        404
      </div>

      <h1>Page Not Found</h1>

      <p>
        Sorry, the page you are looking for
        does not exist.
      </p>

      <Link
        to="/"
        className="shop-button"
      >
        ← Go Home
      </Link>
    </div>
  );
}

export default NotFound;