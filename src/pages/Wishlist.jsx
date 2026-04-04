import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Wishlist.css";

function Wishlist() {
    const { wishlist, setWishlist, addToCart } = useContext(CartContext);

    // ❌ REMOVE ITEM
    const removeItem = (id) => {
        setWishlist(wishlist.filter((item) => item._id !== id));
    };

    // 🛒 MOVE TO CART
    const moveToCart = (item) => {
        addToCart(item);
        removeItem(item._id);
    };

    return (
        <div className="wishlist-container">

            <h2>My Wishlist {wishlist.length} items</h2>

            {wishlist.length === 0 ? (
                <p className="empty">No items in wishlist ❤️</p>
            ) : (
                <div className="wishlist-grid">

                    {wishlist.map((item) => (
                        <div key={item._id} className="wish-card">

                            {/* ❌ REMOVE BUTTON */}
                            <button
                                className="remove-btn"
                                onClick={() => removeItem(item._id)}
                            >
                                ✕
                            </button>

                            <img src={item.image1} alt="" />

                            <p className="title">{item.title}</p>

                            <p className="price">
                                ₹{item.price}
                                <span className="old"> ₹1999</span>
                            </p>

                            {/* 🛒 MOVE TO BAG */}
                            <button
                                className="move-btn"
                                onClick={() => moveToCart(item)}
                            >
                                MOVE TO BAG
                            </button>

                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

export default Wishlist;