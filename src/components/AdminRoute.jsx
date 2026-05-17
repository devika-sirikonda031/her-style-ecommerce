import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ Not admin
  if (user.email !== "admin@gmail.com") {
    alert("Access Denied ❌ Admin Only");
    return <Navigate to="/" />;
  }

  // ✅ Admin allowed
  return children;
}

export default AdminRoute;