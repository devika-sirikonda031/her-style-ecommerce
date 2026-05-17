import { useParams, useNavigate } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext,
} from "react";

import axios from "axios";

import "../styles/ProductDetails.css";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } =
    useContext(CartContext);

  const {
    wishlist,
    toggleWishlist,
  } = useContext(WishlistContext);

  const [product, setProduct] =
    useState(null);

  const [qty, setQty] = useState(1);

  const [size, setSize] =
    useState(null);

  // ✅ RELATED PRODUCTS
  const [relatedProducts, setRelatedProducts] =
    useState([]);

  /* ================= PRODUCT FETCH ================= */

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/api/products/${id}`
      )

      .then((res) => {

        setProduct(res.data);

      })

      .catch((err) =>
        console.log(err)
      );

  }, [id]);

  /* ================= RELATED PRODUCTS ================= */

  useEffect(() => {

    if (!product) return;

    axios
      .get(
        "http://localhost:5000/api/products"
      )

      .then((res) => {

        const related = res.data.filter(

          (item) =>

            item.category?.toLowerCase() ===
              product.category?.toLowerCase() &&

            item._id !== product._id
        );

        // ✅ ONLY 4 PRODUCTS
        const onlyFour =
          related.slice(0, 4);

        setRelatedProducts(onlyFour);

      })

      .catch((err) =>
        console.log(err)
      );

  }, [product]);

  if (!product)
    return <h2>Loading...</h2>;

  /* ❤️ CHECK */

  const isWishlisted =
    wishlist.some(
      (item) =>
        item._id === product._id
    );

  return (

    <>

      <div className="product-page">

        {/* LEFT IMAGES */}

        <div className="image-section">

          {[
            product.image1,
            product.image2,
            product.image3,
            product.image4,
          ]
            .filter(Boolean)
            .map((img, i) => (

              <div
                key={i}
                className="img-box"
              >

                <img
                  src={img}
                  alt=""
                />

              </div>

            ))}

        </div>

        {/* RIGHT DETAILS */}

        <div className="details-section">

          <p className="brand">
            Her Style
          </p>

          {/* TITLE + WISHLIST */}

          <div className="title-row">

            <h1 className="title">
              {product.title}
            </h1>

            <span
              className={`wishlist-icon ${
                isWishlisted
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleWishlist(product)
              }
            >
              {isWishlisted
                ? "♥"
                : "♡"}
            </span>

          </div>

          {/* ⭐ RATING */}

          <div className="rating-box">

            <span className="stars">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="rating-text">
              4.8 | 124 Reviews
            </span>

          </div>

          {/* PRICE */}

          <p className="price">

            ₹
            {product.price.toLocaleString()}

          </p>

          {/* TAX */}

          <p className="tax">

            Inclusive of all taxes.
            Shipping calculated at checkout.

          </p>

          {/* SIZE */}

          <div className="sizes">

            <p className="label">
              Select Size
            </p>

            <div className="size-buttons">

              {["S", "M", "L", "XL"].map(
                (s) => (

                  <button
                    key={s}
                    className={
                      size === s
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setSize(s)
                    }
                  >
                    {s}
                  </button>

                )
              )}

            </div>

          </div>

          {/* QUANTITY */}

          <div className="qty">

            <button
              onClick={() =>
                setQty(
                  qty > 1
                    ? qty - 1
                    : 1
                )
              }
            >
              -
            </button>

            <span>{qty}</span>

            <button
              onClick={() =>
                setQty(qty + 1)
              }
            >
              +
            </button>

          </div>

          {/* BUTTONS */}

          <div className="actions">

            {/* ADD TO CART */}

            <button
              className="cart-btn"
              onClick={() => {

                if (!size) {

                  alert(
                    "Please select size ❗"
                  );

                  return;
                }

                addToCart({

                  _id: product._id,

                  title: product.title,

                  price: product.price,

                  image: product.image1,

                  size,

                  qty,

                });

                alert(
                  "Added to cart ✅"
                );

              }}
            >
              Add to Cart
            </button>

            {/* BUY NOW */}

            <button
              className="buy-btn"
              onClick={() => {

                if (!size) {

                  alert(
                    "Please select size ❗"
                  );

                  return;
                }

                const order = [

                  {

                    _id: product._id,

                    title: product.title,

                    price: product.price,

                    image: product.image1,

                    size,

                    qty,

                  },

                ];

                localStorage.setItem(

                  "finalOrder",

                  JSON.stringify(order)
                );

                navigate("/address");

              }}
            >
              Buy Now
            </button>

          </div>

          {/* ================= REVIEWS ================= */}

          <div className="reviews-section">

            <h2 className="reviews-heading">
              Customer Reviews
            </h2>

            {/* REVIEW 1 */}

            <div className="review-card">

              <div className="review-top">

                <h4>Priya</h4>

                <span>
                  ⭐⭐⭐⭐⭐
                </span>

              </div>

              <p>
                Amazing quality and very
                comfortable. Worth buying ❤️
              </p>

            </div>

            {/* REVIEW 2 */}

            <div className="review-card">

              <div className="review-top">

                <h4>Sneha</h4>

                <span>
                  ⭐⭐⭐⭐
                </span>

              </div>

              <p>
                Dress fitting is perfect and
                material is very soft.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= RELATED PRODUCTS ================= */}

      {relatedProducts.length > 0 && (

        <div className="related-section">

          <h2>
            You May Also Like
          </h2>

          <div className="related-products">

            {relatedProducts.map(
              (item) => (

                <div
                  key={item._id}
                  className="related-card"
                  onClick={() =>
                    navigate(
                      `/product/${item._id}`
                    )
                  }
                >

                  <img
                    src={item.image1}
                    alt=""
                  />

                  <h4>
                    {item.title}
                  </h4>

                  <p>

                    ₹
                    {item.price.toLocaleString()}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      )}

    </>

  );
};

export default ProductDetails;