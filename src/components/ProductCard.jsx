import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/ProductCard.css";

function ProductCard({ item }) {

  const navigate = useNavigate();

  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const isWishlisted = wishlist.some(
    (p) => p._id === item._id
  );

  return (

    <div className="product-card">

      {/* IMAGE */}
      <div
        className="image-box"
        onClick={() => navigate(`/product/${item._id}`)}
      >

        <img
          src={item.image1}
          alt=""
          className="img1"
        />

        <img
          src={item.image2}
          alt=""
          className="img2"
        />

        <div className="quick-view">
          QUICK VIEW
        </div>

      </div>

      

      {/* DETAILS */}
      <h3 className="title">
        {item.title}
      </h3>

      <p className="price">
        ₹{item.price}
      </p>

    </div>
  );
}

export default ProductCard;