import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="column">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>

        <div className="column">
          <h3>Support</h3>
          <p>Help Centre</p>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>

        <div className="column">
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Cookie Preferences</p>
        </div>

      </div>

      <p className="copyright">
        © 2026 Netflix Clone
      </p>
    </footer>
  );
}

export default Footer;
