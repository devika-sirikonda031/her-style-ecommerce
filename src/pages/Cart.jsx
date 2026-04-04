import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {

  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 💰 PRICE CALCULATIONS
  const totalMRP = cart.reduce((sum, item) => sum + 1999 * item.qty, 0);

  const discount = cart.reduce(
    (sum, item) => sum + (1999 - item.price) * item.qty,
    0
  );

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-main">

      {/* LEFT SIDE */}
      <div className="cart-left">

        <div className="delivery-box">
          Check delivery time & services
          <button>ENTER PIN CODE</button>
        </div>

        <h3>{cart.length} ITEMS SELECTED</h3>

        {/* 🛒 CART ITEMS */}
        {cart.map((item) => (
          <div key={item._id} className="cart-card">

            <img src={item.image1} alt="" />

            <div className="cart-info">
              <h4>{item.title}</h4>

              <p>Size: M</p>

              {/* ✅ QUANTITY CONTROLS */}
              <div className="qty-box">
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item._id)}>+</button>
              </div>

              {/* 💰 PRICE */}
              <p className="price">
                ₹{item.price}
                <span> ₹1999</span>
                <span className="off"> (50% OFF)</span>
              </p>

              {/* ❌ REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
              >
                REMOVE
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="cart-right">

        <h3>COUPONS</h3>
        <div className="coupon">
          Apply Coupons <button>APPLY</button>
        </div>

        <h3>PRICE DETAILS</h3>

        <div className="price-row">
          <span>Total MRP</span>
          <span>₹{totalMRP}</span>
        </div>

        <div className="price-row discount">
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>

        <div className="price-row">
          <span>Platform Fee</span>
          <span>₹20</span>
        </div>

        <hr />

        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>

        {/* ✅ FIXED BUTTON */}
        <button
          className="place-order"
          onClick={() => navigate("/checkout")}
        >
          PLACE ORDER
        </button>

      </div>

    </div>
  );
}

export default Cart;