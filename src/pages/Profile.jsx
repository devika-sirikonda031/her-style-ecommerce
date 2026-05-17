import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const storedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* AVATAR */}
        <div className="profile-top">

          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

        </div>

        {/* DETAILS */}
        <div className="profile-details">

          {/* NAME */}
          <div className="detail-row">
            <span>Full Name</span>

            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            ) : (
              <strong>{user.name}</strong>
            )}
          </div>

          {/* EMAIL */}
          <div className="detail-row">
            <span>Email</span>

            <strong>{user.email}</strong>
          </div>

          {/* PHONE */}
          <div className="detail-row">
            <span>Phone</span>

            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            ) : (
              <strong>
                {user.phone || "+91 XXXXX XXXXX"}
              </strong>
            )}
          </div>

          {/* ADDRESS */}
          <div className="detail-row">
            <span>Address</span>

            {isEditing ? (
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            ) : (
              <strong>
                {user.address || "Hyderabad, India"}
              </strong>
            )}
          </div>

        </div>

        {/* BUTTONS */}
        <div className="profile-buttons">

          {isEditing ? (
            <button
              className="edit-btn"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}

          <button
            className="orders-btn"
            onClick={() => navigate("/orders")}
          >
            My Orders
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;