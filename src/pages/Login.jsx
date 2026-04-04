import "../styles/Login.css";
import logo from "../assets/Her_Style_Logo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert(res.data.message);

      // 👉 Save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/home");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-card">
        <img src={logo} alt="logo" className="logo" />

        <h2>Login to your account</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <button onClick={handleLogin}>Login</button>
        <p
          style={{
            marginTop: "10px",
            cursor: "pointer",
            color: "#ff4d8d",
            fontSize: "14px"
          }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
        <p className="extra-text">
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#ff4d8d", fontWeight: "bold" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;