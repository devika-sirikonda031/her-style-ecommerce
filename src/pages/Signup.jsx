import "../styles/Login.css";
import logo from "../assets/Her_Style_Logo.png";

import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import axios from "axios";

function Signup() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate = useNavigate();

  /* ================= SIGNUP ================= */

  const handleSignup = async () => {

    setError("");

    const trimmedName =
      name.trim();

    const trimmedEmail =
      email.trim();

    const trimmedPassword =
      password.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedPassword
    ) {

      setError(
        "Fill all fields ❌"
      );

      return;
    }

    try {

      setLoading(true);

      // ✅ FIXED ROUTE

      const res = await axios.post(

        "https://her-style-backend-rs3l.onrender.com/api/auth/signup",

        {
          name: trimmedName,
          email: trimmedEmail,
          password: trimmedPassword,
        }
      );

      console.log(
        "SIGNUP SUCCESS:",
        res.data
      );

      alert(
        "Signup successful ✅"
      );

      navigate("/login");

    } catch (err) {

      console.log(
        "SIGNUP ERROR:",
        err.response?.data ||
          err.message
      );

      setError(

        err.response?.data
          ?.message ||

          "Signup failed ❌"
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

        {/* NAME */}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
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

        {/* SIGNUP BUTTON */}

        <button
          onClick={handleSignup}
          disabled={loading}
        >

          {loading
            ? "Signing..."
            : "Sign Up"}

        </button>

        {/* LOGIN */}

        <p className="extra-text">

          Already have an account?{" "}

          <Link
            to="/login"
            className="signup-link"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;