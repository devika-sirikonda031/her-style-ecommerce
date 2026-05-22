import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import "../styles/Checkout.css";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const handleOrder = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, {
        items: cart,
        total: totalAmount,
        address: form,
      });

      setCart([]);

      // ✅ PASS ORDER ID
      navigate("/order-success", {
        state: { orderId: res.data.orderId },
      });

    } catch (err) {
      console.log(err);
      alert("Order failed ❌");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Delivery Address</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="phone" placeholder="Mobile Number" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      </div>

      <div className="checkout-right">
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            <span>₹{item.price} x {item.qty || 1}</span>
          </div>
        ))}

        <h2>Total: ₹{totalAmount}</h2>

        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;