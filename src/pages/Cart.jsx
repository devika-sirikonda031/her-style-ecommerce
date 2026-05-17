import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import "../styles/Cart.css";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const savedAddress =
    JSON.parse(localStorage.getItem("address"));

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <CheckoutHeader />

      <div className="cart-page">

        {/* LEFT SIDE */}
        <div className="cart-left">

          {/* ADDRESS */}
          {savedAddress && (
            <div className="address-card">

              <div className="address-left">

                <h4>
                  Deliver to:
                  <span>
                    {" "}
                    {savedAddress.name},{" "}
                    {savedAddress.pincode}
                  </span>
                </h4>

                <p>
                  {savedAddress.city}
                </p>

              </div>

              <button
                className="change-btn"
                onClick={() => navigate("/address")}
              >
                CHANGE ADDRESS
              </button>

            </div>
          )}

          {/* ITEMS */}
          <div className="items-header">

            <h2>
              {cart.length}/{cart.length} ITEMS SELECTED
            </h2>

          </div>

          {/* CART ITEMS */}
          {cart.map((item, i) => (

            <div
              key={i}
              className="cart-item"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="cart-image"
              />

              {/* DETAILS */}
              <div className="cart-details">

                <h3>{item.title}</h3>

                <p className="seller">
                  Her Style Fashion
                </p>

                <div className="size-qty">

                  <span>
                    Size: {item.size}
                  </span>

                  <span>
                    Qty: {item.qty}
                  </span>

                </div>

                <div className="price-section">

                  <span className="price">
                    ₹{item.price}
                  </span>

                  <span className="old-price">
                    ₹{item.price + 1200}
                  </span>

                  <span className="discount">
                    40% OFF
                  </span>

                </div>

                <p className="delivery">
                  Delivery in 3-5 days
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item._id,
                      item.size
                    )
                  }
                >
                  REMOVE
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">

          {/* COUPONS */}
          <div className="coupon-box">

            <h3>COUPONS</h3>

            <div className="coupon-row">

              <span>
                Apply Coupons
              </span>

              <button>
                APPLY
              </button>

            </div>

          </div>

          {/* PRICE DETAILS */}
          <div className="price-box">

            <h3>PRICE DETAILS</h3>

            <div className="price-row">
              <span>Total MRP</span>
              <span>₹{total}</span>
            </div>

            <div className="price-row">
              <span>Discount</span>
              <span className="green">
                - ₹0
              </span>
            </div>

            <div className="price-row">
              <span>Platform Fee</span>
              <span>₹20</span>
            </div>

            <div className="price-row">
              <span>Delivery Charges</span>
              <span className="green">
                FREE
              </span>
            </div>

            <div className="price-row total">
              <span>Total Amount</span>
              <span>₹{total + 20}</span>
            </div>

            <button
              className="place-order-btn"
              onClick={() => {

                if (cart.length === 0) {
                  alert("Cart is empty ❌");
                  return;
                }

                localStorage.removeItem("buyNow");

                navigate("/address");

              }}
            >
              PLACE ORDER
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Cart;