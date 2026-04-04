import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  // 🔥 TEMP REMOVE ADMIN CHECK
  // if (user.email !== "admin@gmail.com") {
  //   return <Navigate to="/" />;
  // }

  return children;
}

export default AdminRoute;