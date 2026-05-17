import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import AddressForm from "../components/AddressForm";
import { CartContext } from "../context/CartContext";
import "../styles/Address.css";

const Address = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [addresses, setAddresses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("address"));
    if (saved) {
      setAddresses([saved]);
      setSelected(saved);
    }
  }, []);

  const handleSave = (newAddress) => {
    setAddresses([newAddress]);
    setSelected(newAddress);
    localStorage.setItem("address", JSON.stringify(newAddress));
  };

  const finalOrder = JSON.parse(localStorage.getItem("finalOrder")) || [];
  const items = finalOrder.length > 0 ? finalOrder : cart;

  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <CheckoutHeader />

      <div className="address-container">
        <div className="address-left">
          <h2>Select Delivery Address</h2>

          {addresses.map((addr, i) => (
            <div key={i} className="address-card">
              <input
                type="radio"
                checked={selected === addr}
                onChange={() => setSelected(addr)}
              />

              <div className="address-info">
                <h4>{addr.name}</h4>
                <p>{addr.addressLine}</p>
                <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                <p>Mobile: {addr.phone}</p>
              </div>
            </div>
          ))}

          <p className="add-new" onClick={() => setShowForm(true)}>
            + Add New Address
          </p>
        </div>

        <div className="address-right">
          <h3>PRICE DETAILS</h3>

          <p>Total MRP: ₹{total}</p>
          <p>Platform Fee: ₹20</p>

          <h4>Total Amount: ₹{total + 20}</h4>

          <button
            className="continue-btn"
            onClick={() => {
              if (!selected) {
                alert("Select address ❗");
                return;
              }

              localStorage.setItem("finalOrder", JSON.stringify(items));
              navigate("/payment");
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>

      {showForm && (
        <AddressForm
          close={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default Address;