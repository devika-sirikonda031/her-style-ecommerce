import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      alert(res.data.msg);
    } catch (err) {
      alert("Error sending email");
      console.log(err);
    }
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2 style={{ color: "black" }}>Forgot Password</h2>

        <form onSubmit={handleSubmit} style={form}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <button type="submit" style={button}>
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

// 🎨 Styles (VISIBLE GUARANTEED)
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
};

const box = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "10px",
};

const input = {
  padding: "10px",
  fontSize: "16px",
  width: "250px",
};

const button = {
  padding: "10px",
  backgroundColor: "pink",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};