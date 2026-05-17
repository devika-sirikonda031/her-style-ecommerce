import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import "../styles/Payment.css";

const Payment = () => {
  const [method, setMethod] = useState("cod");
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ Address
  const address = JSON.parse(localStorage.getItem("address")) || {};

  // ✅ Items source
  const finalOrder = JSON.parse(localStorage.getItem("finalOrder")) || [];
  const items = finalOrder.length > 0 ? finalOrder : cart;

  // ✅ Total calculation
  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ Handle Payment
  const handlePayment = () => {
    if (items.length === 0) {
      alert("No items to order ❗");
      return;
    }

    if (!address?.name) {
      alert("Please add address ❗");
      return;
    }

    // 🔥 Generate Order ID
    const orderId = "HS" + Date.now();

    const newOrder = {
      id: orderId,
      date: new Date().toLocaleString(),
      items: items,
      total: total + 20,
      address: address,
      method: method,
    };

    // 🔥 Save orders
    const existing =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...existing])
    );

    // 🔥 Save last order (for success page)
    localStorage.setItem("lastOrder", JSON.stringify(newOrder));

    // ✅ Clear cart
    clearCart();
    localStorage.removeItem("finalOrder");
    localStorage.removeItem("cart");

    // ✅ Navigate
    navigate("/order-success");
  };

  return (
    <>
      <CheckoutHeader />

      <div className="payment-container">

        {/* LEFT */}
        <div className="payment-left">
          <h2>Choose Payment Method</h2>

          {["cod", "upi", "card"].map((type) => (
            <div
              key={type}
              className={`pay-card ${method === type ? "active" : ""}`}
              onClick={() => setMethod(type)}
            >
              <input
                type="radio"
                checked={method === type}
                readOnly
              />
              <span>
                {type === "cod" && "💵 Cash on Delivery"}
                {type === "upi" && "📱 UPI / GPay / PhonePe"}
                {type === "card" && "💳 Credit / Debit Card"}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="payment-right">

          <h3>Price Details</h3>

          <div className="price-box">
            <p>Items Total</p>
            <p>₹{total}</p>
          </div>

          <div className="price-box">
            <p>Platform Fee</p>
            <p>₹20</p>
          </div>

          <div className="total-box">
            <h4>Total Amount</h4>
            <h4>₹{total + 20}</h4>
          </div>

          {address?.name && (
            <div className="address-box">
              <p><b>Deliver to:</b> {address.name}</p>
              <p>{address.city}, {address.state}</p>
            </div>
          )}

          <button className="pay-btn" onClick={handlePayment}>
            PLACE ORDER
          </button>

        </div>
      </div>
    </>
  );
};

export default Payment;