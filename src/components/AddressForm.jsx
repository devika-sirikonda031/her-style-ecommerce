import { useState } from "react";
import "../styles/Address.css";

const AddressForm = ({ close, onSave }) => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    addressLine: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, phone, pincode, city, state, addressLine } = address;

    // 🔥 VALIDATION
    if (!name || !phone || !pincode || !city || !state || !addressLine) {
      alert("Please fill all fields ❗");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Enter valid 10-digit phone number ❗");
      return;
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      alert("Enter valid pincode ❗");
      return;
    }

    // ✅ SAVE
    localStorage.setItem("address", JSON.stringify(address));

    onSave(address);   // 🔥 update parent
    close();           // close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add New Address</h2>

        <div className="form-grid">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="state" placeholder="State" onChange={handleChange} />
          <textarea name="addressLine" placeholder="Full Address" onChange={handleChange} />
        </div>

        <div className="modal-buttons">
          <button onClick={close}>Cancel</button>
          <button className="save-btn" onClick={handleSubmit}>
            SAVE ADDRESS
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddressForm;