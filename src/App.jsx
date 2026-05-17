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
import Orders from "./pages/Order";
import ResetPassword from "./pages/ResetPassword";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";
import Address from "./pages/Address";


// Protected Components
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {

  const location = useLocation();

  const hideNavbarRoutes = [
    "/login",
    "/signup",
    "/admin",
    "/forgot-password"
  ];

  return (
    <>

      {/* NAVBAR */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* RESET PASSWORD */}
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* CATEGORY PAGES */}
        <Route
          path="/tops"
          element={<CategoryPage category="tops" />}
        />

        <Route
          path="/dresses"
          element={<CategoryPage category="dresses" />}
        />

        <Route
          path="/skirts"
          element={<CategoryPage category="skirts" />}
        />

        <Route
          path="/trousers"
          element={<CategoryPage category="trousers" />}
        />

        {/* OLD CATEGORY ROUTE */}
        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* ADDRESS */}
        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          }
        />

        {/* PAYMENT */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ORDER SUCCESS */}
        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />

        

      </Routes>
    </>
  );
}

export default App;