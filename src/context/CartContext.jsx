import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ✅ REMOVE
  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item._id === id && item.size === size))
    );
  };

  // ✅ CLEAR CART (after success)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;