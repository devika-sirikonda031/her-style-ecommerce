import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ LOAD FROM LOCAL STORAGE
  const [cart, setCart] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  });

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❌ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // ❤️ ADD TO WISHLIST
  const addToWishlist = (product) => {
    const exist = wishlist.find((item) => item._id === product._id);

    if (!exist) {
      setWishlist([...wishlist, product]);
    }
  };

  // ❌ REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};