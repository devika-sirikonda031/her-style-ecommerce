import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  // ✅ IMPORTANT
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      const found = data.find((p) => p._id === id);
      setProduct(found);
    });
  }, [id]);

  if (!product) return <h2 style={{ marginTop: "100px" }}>Loading...</h2>;

  return (
    <>
      <div className="pd-container">

        <div className="pd-left">
          <img src={product.image1} alt="" />
          <img src={product.image2} alt="" />
        </div>

        <div className="pd-right">

          <h2>HerStyle</h2>
          <p>{product.title}</p>

          <div>⭐ 4.3 | 2.5k Ratings</div>

          <div>
            ₹{product.price}
            <span style={{ textDecoration: "line-through", marginLeft: "5px" }}>
              ₹1999
            </span>
          </div>

          <p>inclusive of all taxes</p>

          <div>
            <p>SELECT SIZE</p>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>

          <div className="buttons">

            {/* 🛒 ADD TO CART */}
            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              ADD TO BAG
            </button>

            {/* ❤️ WISHLIST */}
            <button
              className="wish-btn"
              onClick={() => addToWishlist(product)}
            >
              ♥ WISHLIST
            </button>
            

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;