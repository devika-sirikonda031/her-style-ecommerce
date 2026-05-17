import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const last = JSON.parse(localStorage.getItem("lastOrder"));
    setOrder(last);
  }, []);

  return (
    <div className="success-wrapper">

      <div className="success-card">

        <div className="success-icon">🎉</div>

        <h1>Order Placed Successfully</h1>

        <p className="success-sub">
          Thank you for shopping with us!
        </p>

        {order && (
          <div className="order-info">
            <p><span>Order ID</span> {order.id}</p>
            <p><span>Total Paid</span> ₹{order.total}</p>
          </div>
        )}

        <div className="success-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/orders")}
          >
            View Orders
          </button>
        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;