import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      { password }
    );

    alert(res.data.msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Reset Password</button>
    </form>
  );
}