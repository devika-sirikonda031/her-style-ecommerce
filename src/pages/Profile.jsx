import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [edit, setEdit] = useState(true);

  // 👉 Load profile if exists
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsProfileCreated(true);
      setEdit(false);
    }
  }, []);

  // 👉 Handle input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 👉 Save profile
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setIsProfileCreated(true);
    setEdit(false);
    alert("Profile created successfully ✅");
  };

  // 👉 Logout
  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    window.location.href = "/";
  };

  return (
    <div className="profile-page">
      <h2>MY PROFILE</h2>

      <div className="profile-card">

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          disabled={!edit}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          disabled={!edit}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {/* Phone */}
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          disabled={!edit}
          onChange={handleChange}
          placeholder="Enter your phone"
        />

        {/* Address */}
        <label>Address</label>
        <textarea
          name="address"
          value={user.address}
          disabled={!edit}
          onChange={handleChange}
          placeholder="Enter your address"
        />

        <div className="profile-buttons">

          {/* 👉 CREATE / EDIT BUTTON */}
          {edit ? (
            <button onClick={handleSave}>
              {isProfileCreated ? "Update Profile" : "Create Profile"}
            </button>
          ) : (
            <button onClick={() => setEdit(true)}>Edit Profile</button>
          )}
          <button onClick={() => navigate("/orders")}>
  My Orders
</button>

          {/* 👉 LOGOUT ONLY AFTER CREATED */}
          {isProfileCreated && (
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default Profile;