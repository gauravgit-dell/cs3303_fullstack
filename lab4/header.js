import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">NETFLIX</div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </nav>

      <button className="sign-in">Sign In</button>
    </header>
  );
}

export default Header;
