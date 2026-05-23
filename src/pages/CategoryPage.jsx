import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/CategoryPage.css";

function CategoryPage({ category: propCategory }) {

  const { category: urlCategory } = useParams();

  const category = propCategory || urlCategory;

  const [products, setProducts] = useState([]);

  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")

      .then((res) => res.json())

      .then((data) => {

        const filteredProducts = data.filter(
          (item) =>
            item.category?.toLowerCase().trim() ===
            category?.toLowerCase().trim()
        );

        setProducts(filteredProducts);
      })

      .catch((err) => console.log(err));

  }, [category]);

  return (

    <div className="category-page">

      <h1 className="category-title">
        {category}
      </h1>

      <div className="products-grid">

        {products
          .slice(0, visibleCount)
          .map((product) => (

            <ProductCard
              key={product._id}
              item={product}
            />

        ))}

      </div>

      {/* LOAD MORE */}
      {visibleCount < products.length && (

        <div className="load-more-wrapper">

          <button
            className="load-more-btn"
            onClick={() =>
              setVisibleCount(visibleCount + 3)
            }
          >
            Load More
          </button>

        </div>

      )}

    </div>
  );
}

export default CategoryPage;