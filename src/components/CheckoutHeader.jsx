import { useLocation } from "react-router-dom";
import "../styles/CheckoutHeader.css";

const CheckoutHeader = () => {
  const location = useLocation();

  return (
    <div className="checkout-header">
      <h2 className={location.pathname === "/cart" ? "active" : ""}>BAG</h2>
      <span>--------</span>
      <h2 className={location.pathname === "/address" ? "active" : ""}>ADDRESS</h2>
      <span>--------</span>
      <h2 className={location.pathname === "/payment" ? "active" : ""}>PAYMENT</h2>

      <p className="secure">🔒 100% SECURE</p>
    </div>
  );
};

export default CheckoutHeader;