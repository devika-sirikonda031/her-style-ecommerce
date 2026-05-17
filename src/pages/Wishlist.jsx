import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../styles/Wishlist.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="wishlist-page">

      <h1 className="wishlist-heading">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">
          <h2>Your wishlist is empty ♡</h2>
          <p>Add your favorite styles here.</p>

          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((item) => (

            <div className="wishlist-card" key={item._id}>

              {/* IMAGE */}
              <div
                className="wishlist-image"
                onClick={() =>
                  navigate(`/product/${item._id}`)
                }
              >
                <img src={item.image1} alt="" />
              </div>

              {/* REMOVE */}
              <button
                className="remove-btn"
                onClick={() => toggleWishlist(item)}
              >
                ✕
              </button>

              {/* DETAILS */}
              <div className="wishlist-details">

                <h3>{item.title}</h3>

                <p className="wishlist-price">
                  ₹{item.price.toLocaleString()}
                </p>

                <button
                  className="wishlist-cart-btn"
                  onClick={() => {
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      price: item.price,
                      image: item.image1,
                      qty: 1,
                    });

                    alert("Added to cart ✅");
                  }}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      )}
    </div>
  );
};

export default Wishlist;