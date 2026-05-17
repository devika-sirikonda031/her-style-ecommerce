import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Her_Style_Logo.png";

import {
  FaCartPlus,
  FaUser,
  FaSearch
} from "react-icons/fa";

import {
  useEffect,
  useState,
  useContext
} from "react";

import axios from "axios";

import { CartContext } from "../context/CartContext";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [showMenu, setShowMenu] =
    useState(false);

  /* SEARCH */
  const [search, setSearch] =
    useState("");

  const [products, setProducts] =
    useState([]);

  const [filteredProducts,
    setFilteredProducts] =
    useState([]);

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const {
    cart = [],
    wishlist = []
  } = useContext(CartContext);

  /* CART COUNT */
  const totalItems = cart.reduce(
    (sum, item) =>
      sum + (item.qty || 1),
    0
  );

  const wishCount = wishlist.length;

  /* SCROLL */
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* CLOSE MENU */
  useEffect(() => {

    const handleClickOutside =
      () => setShowMenu(false);

    window.addEventListener(
      "click",
      handleClickOutside
    );

    return () =>
      window.removeEventListener(
        "click",
        handleClickOutside
      );

  }, []);

  /* FETCH PRODUCTS */
  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/products"
      )

      .then((res) => {

        setProducts(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  /* LOGOUT */
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  /* SEARCH */
  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    if (value.trim() === "") {

      setFilteredProducts([]);

      return;

    }

    const filtered =
      products.filter((item) =>

        item.title
          ?.toLowerCase()
          .includes(value.toLowerCase())

        ||

        item.category
          ?.toLowerCase()
          .includes(value.toLowerCase())

      );

    setFilteredProducts(filtered);

  };

  return (

    <nav
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >

      {/* LEFT */}
      <div
        className="nav-left"
        onClick={() =>
          navigate("/")
        }
      >
        <img
          src={logo}
          alt="logo"
        />
      </div>

      {/* CENTER */}
      <div className="nav-middle">

        {/* MENU */}
        <ul className="nav-center">

          <li
            onClick={() =>
              navigate("/")
            }
          >
            Home
          </li>

          <li
            onClick={() =>
              navigate(
                "/category/tops"
              )
            }
          >
            Tops
          </li>

          <li
            onClick={() =>
              navigate(
                "/category/dresses"
              )
            }
          >
            Dresses
          </li>

          <li
            onClick={() =>
              navigate(
                "/category/skirts"
              )
            }
          >
            Skirts
          </li>

          <li
            onClick={() =>
              navigate(
                "/category/trousers"
              )
            }
          >
            Trousers
          </li>

        </ul>

        {/* SEARCH */}
        <div className="search-wrapper">

          <div className="search-bar">

            <FaSearch
              className="search-icon"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
            />

          </div>

          {/* SEARCH DROPDOWN */}
          {search && (

            <div className="search-dropdown">

              {filteredProducts
                .slice(0, 5)
                .map((item) => (

                <div
                  key={item._id}

                  className="search-item"

                  onClick={() => {

                    navigate(
                      `/product/${item._id}`
                    );

                    setSearch("");

                  }}
                >

                  <img
                    src={item.image1}
                    alt=""
                  />

                  <div>

                    <p>
                      {item.title}
                    </p>

                    <span>
                      ₹{item.price}
                    </span>

                  </div>

                </div>

              ))}

              {/* NO PRODUCTS */}
              {filteredProducts.length === 0 && (

                <div className="no-search">

                  No products found

                </div>

              )}

              {/* VIEW ALL */}
              {filteredProducts.length > 0 && (

                <p className="view-all">

                  View All Results

                </p>

              )}

            </div>

          )}

        </div>

      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* CART */}
        <div
          className="nav-icon"
          onClick={() =>
            navigate("/cart")
          }
        >

          <FaCartPlus />

          {totalItems > 0 && (
            <span className="badge">
              {totalItems}
            </span>
          )}

        </div>

        {/* WISHLIST */}
        <div
          className="nav-icon"
          onClick={() =>
            navigate("/wishlist")
          }
        >

          ❤️

          {wishCount > 0 && (
            <span className="badge">
              {wishCount}
            </span>
          )}

        </div>

        {/* PROFILE */}
        {user ? (

          <div className="profile-box">

            <div
              className="profile-icon"

              onClick={(e) => {

                e.stopPropagation();

                setShowMenu(!showMenu);

              }}
            >

              <FaUser />

              <span className="username">
                Hi, {user.name}
              </span>

            </div>

            {/* DROPDOWN */}
            {showMenu && (

              <div
                className="dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <p
                  onClick={() =>
                    navigate("/profile")
                  }
                >
                  👤 Profile
                </p>

                <p
                  onClick={() =>
                    navigate("/orders")
                  }
                >
                  🛍 Orders
                </p>

                {user?.email ===
                  "admin@gmail.com" && (

                  <p
                    onClick={() =>
                      navigate("/admin")
                    }
                  >
                    ⚙️ Admin Panel
                  </p>

                )}

                <p onClick={handleLogout}>
                  🚪 Logout
                </p>

              </div>

            )}

          </div>

        ) : (

          <div
            onClick={() =>
              navigate("/login")
            }

            className="profile-icon"
          >
            <FaUser />
          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;