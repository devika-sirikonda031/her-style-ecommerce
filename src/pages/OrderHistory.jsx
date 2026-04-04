import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: ""
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {

    if (cart.length === 0) {
      alert("Your cart is empty 😔");
      return;
    }

    // ✅ CREATE ORDER
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      total: totalAmount,
      address: form
    };

    // ✅ SAVE IN LOCAL STORAGE
    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...oldOrders])
    );

    // ✅ CLEAR CART
    setCart([]);

    alert("Order placed successfully 🎉");

    navigate("/order-success");
  };

  return (
    <div className="checkout-container">

      {/* LEFT */}
      <div className="checkout-left">
        <h2>Delivery Address</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Pincode"
          value={form.pincode}
          onChange={(e) =>
            setForm({ ...form, pincode: e.target.value })
          }
        />
      </div>

      {/* RIGHT */}
      <div className="checkout-right">
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            <span>₹{item.price} x {item.qty}</span>
          </div>
        ))}

        <h3>Total: ₹{totalAmount}</h3>

        <button onClick={handleOrder}>
          PLACE ORDER
        </button>
      </div>

    </div>
  );
}

export default Checkout;