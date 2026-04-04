import "../styles/Login.css";
import logo from "../assets/Her_Style_Logo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);
      navigate("/"); // go to login

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-card">
        <img src={logo} alt="logo" className="logo" />

        <h2>Create your account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSignup}>Sign Up</button>

        <p className="extra-text">
          Already have an account?{" "}
          <Link to="/" style={{ color: "#ff4d8d", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;