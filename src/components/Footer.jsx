import "../styles/Footer.css";
import { Link } from "react-router-dom";

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

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/categories">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* CATEGORIES */}
        <div className="footer-category">

          <h3>Categories</h3>

          <ul>

            <li>
              <Link to="/skirts">
                Skirts
              </Link>
            </li>

            <li>
              <Link to="/tops">
                Tops
              </Link>
            </li>

            <li>
              <Link to="/trousers">
                Trousers
              </Link>
            </li>

            <li>
              <Link to="/dresses">
                Dresses
              </Link>
            </li>

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