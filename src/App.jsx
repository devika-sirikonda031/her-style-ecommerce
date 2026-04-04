import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Wishlist from "./pages/Wishlist";
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Admin from "./pages/Admin";
import AdminRoute from "./components/AdminRoute";

function App() {
  const location = useLocation(); // 🔥 IMPORTANT

  return (
    <>
      {/* ❌ HIDE NAVBAR IN ADMIN */}
      {location.pathname !== "/admin" && <Navbar />}

      <Routes>

        {/* ✅ PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* CATEGORY */}
        <Route path="/category/:type" element={<CategoryPage />} />

        {/* PRODUCT */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* 🔐 PROTECTED */}
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />

        {/* OTHER */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route 
  path="/admin" 
  element={
    <AdminRoute>
      <Admin />
    </AdminRoute>
  } 
/>
        

        {/* 🔥 FALLBACK */}
        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;