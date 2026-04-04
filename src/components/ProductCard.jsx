import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  if (!item) return null; // safety

  return (
    <div className="product-card">
      <img src={item.image1} alt={item.title} />
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;