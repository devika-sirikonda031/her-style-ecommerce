import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  // 🎯 RANDOM ORDER ID
  const orderId = Math.floor(100000 + Math.random() * 900000);

  // 🔥 AUTO REDIRECT AFTER 3 SEC
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-wrapper">
      <div className="success-container">

        <div className="success-box">

          <h2>✅ Order Confirmed!</h2>

          <p>Your order has been placed successfully 🎉</p>

          <h3>Order ID: #{orderId}</h3>

          {/* 🔥 BUTTON CLICK */}
          <button onClick={() => navigate("/")}>
            CONTINUE SHOPPING
          </button>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;