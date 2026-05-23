import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Her_Style_Logo.png";

import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  // SEARCH STATE
  const [search, setSearch] = useState("");

  return (

    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">

        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />

      </div>

      {/* MIDDLE */}
      <div className="nav-middle">

        {/* MENU */}
        <ul className="nav-center">

          <li onClick={() => navigate("/")}>
            Home
          </li>

          <li onClick={() => navigate("/tops")}>
            Tops
          </li>

          <li onClick={() => navigate("/dresses")}>
            Dresses
          </li>

          <li onClick={() => navigate("/skirts")}>
            Skirts
          </li>

          <li onClick={() => navigate("/trousers")}>
            Trousers
          </li>

        </ul>

        {/* SEARCH */}
        <div className="search-wrapper">

          <div className="search-bar">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  navigate(`/search/${search}`);

                }

              }}
            />

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* CART */}
        <Link to="/cart">

          <div className="nav-icon">

            <FaShoppingCart />

          </div>

        </Link>

        {/* WISHLIST */}
        <Link to="/wishlist">

          <div className="nav-icon">

            <FaHeart />

          </div>

        </Link>

        {/* PROFILE */}
        <div className="profile-box">

          {/* CLICK PROFILE */}
          <div
            className="profile-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >

            <FaUser />

            <span className="username">
              Hi, Devika Sirikonda
            </span>

          </div>

          {/* DROPDOWN */}
          {showDropdown && (

            <div className="dropdown">

              <p onClick={() => navigate("/admin")}>
                Dashboard
              </p>

              <p onClick={() => navigate("/profile")}>
                My Profile
              </p>

              <p onClick={() => navigate("/orders")}>
                My Orders
              </p>

              <p onClick={() => navigate("/wishlist")}>
                Wishlist
              </p>

              <p onClick={() => navigate("/login")}>
                Logout
              </p>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;