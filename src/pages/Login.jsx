import "../styles/Login.css";
import logo from "../assets/Her_Style_Logo.png";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

function Login() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate = useNavigate();

  /* ================= LOGIN ================= */

  const handleLogin = async () => {

    setError("");

    const trimmedEmail =
      email.trim();

    const trimmedPassword =
      password.trim();

    if (
      !trimmedEmail ||
      !trimmedPassword
    ) {

      setError(
        "Enter email & password ❌"
      );

      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(

        "https://her-style-backend-rs3l.onrender.com/api/auth/login",

        {
          email: trimmedEmail,
          password: trimmedPassword,
        }
      );

      console.log(
        "LOGIN SUCCESS:",
        res.data
      );

      /* ✅ SAVE USER */

      localStorage.setItem(

        "user",

        JSON.stringify(
          res.data.user
        )
      );

      alert(
        "Login successful ✅"
      );

      navigate("/");

    } catch (err) {

      console.log(

        "LOGIN ERROR:",

        err.response?.data ||
          err.message
      );

      setError(

        err.response?.data
          ?.message ||

          "Login failed ❌"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        {/* LOGO */}

        <img
          src={logo}
          alt="logo"
        />

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        {/* PASSWORD */}

        <div className="password-box">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <span
            className="eye-icon"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >

            {showPassword
              ? "🙈"
              : "👁️"}

          </span>

        </div>

        {/* ERROR */}

        {error && (

          <p className="error-text">
            {error}
          </p>

        )}

        {/* LOGIN BUTTON */}

        <button
          onClick={handleLogin}
          disabled={loading}
        >

          {loading
            ? "Logging..."
            : "Login"}

        </button>

        {/* SIGNUP */}

        <p className="extra-text">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="signup-link"
          >
            Sign up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;