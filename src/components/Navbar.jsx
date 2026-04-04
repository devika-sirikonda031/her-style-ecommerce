import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Her_Style_Logo.png";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const context = useContext(CartContext);
  const cart = context?.cart || [];
  const wishlist = context?.wishlist || [];

  // 🔽 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishCount = wishlist.length;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>

      {/* MENU */}
      <ul className="nav-center">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/category/tops")}>Tops</li>
        <li onClick={() => navigate("/category/dresses")}>Dresses</li>
        <li onClick={() => navigate("/category/skirts")}>Skirts</li>
        <li onClick={() => navigate("/category/trousers")}>Trousers</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* CART */}
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <FaCartPlus />
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </div>

        {/* WISHLIST */}
        <div className="wishlist-icon" onClick={() => navigate("/wishlist")}>
          ❤️
          {wishCount > 0 && (
            <span className="wish-count">{wishCount}</span>
          )}
        </div>

        {/* PROFILE */}
        {user ? (
          <div className="profile-box">

            {/* PROFILE CLICK */}
            <div
              className="profile-icon"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
            >
              <FaUser />
              <span className="username">Hi, {user.name}</span>
            </div>

            {/* DROPDOWN */}
            {showMenu && (
              <div
                className="dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <p onClick={() => navigate("/profile")}>👤 Profile</p>
                <p onClick={() => navigate("/orders")}>🛍 Orders</p>

                {/* 🔥 ADMIN PANEL */}
                {user?.email === "admin@gmail.com" && (
                  <p onClick={() => navigate("/admin")}>
                    ⚙️ Admin Panel
                  </p>
                )}

                <p onClick={handleLogout}>🚪 Logout</p>
              </div>
            )}

          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FaUser />
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;