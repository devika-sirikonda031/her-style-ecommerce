import "../styles/Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>HER STYLE</h2>

          <p>
            Elevate your wardrobe with modern fashion trends,
            premium collections, and timeless elegance made
            for every woman.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-social">

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaPinterestP />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-category">
          <h3>Categories</h3>

          <ul>
            <li><a href="/category/skirts">Skirts</a></li>
            <li><a href="/category/tops">Tops</a></li>
            <li><a href="/category/trousers">Trousers</a></li>
            <li><a href="/category/dresses">Dresses</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: herstyle@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Hyderabad, India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 HER STYLE — Designed with elegance ✨
      </div>

    </footer>
  );
}

export default Footer;