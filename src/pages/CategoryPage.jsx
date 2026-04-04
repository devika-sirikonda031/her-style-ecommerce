import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import "../styles/CategoryPage.css";

function CategoryPage() {
  const { type } = useParams();
  const navigate = useNavigate(); // ✅ ADD
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const filtered = data.filter(
        (item) =>
          item.category?.toLowerCase() === type?.toLowerCase()
      );
      setProducts(filtered);
    });
  }, [type]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {type.toUpperCase()}
      </h2>

      <h2 className="category-title">NEW COLLECTION</h2>

      <div className="product-grid">
        {products.map((item) => (
          
          // ✅ CLICK CARD → GO TO DETAILS PAGE
          <div
            key={item._id}
            className="product-card"
            onClick={() => navigate(`/product/${item._id}`)}
          >

            <div className="image-wrapper">
              <img src={item.image1} className="img1" alt="img1" />
              <img src={item.image2} className="img2" alt="img2" />
            </div>

            <div className="product-info">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;