import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./styles/ProductSection.css";

function ProductSection() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        console.log(data); // 👈 check in console
        setProducts(data.products); // ✅ IMPORTANT
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="products">
      <h2>TRENDING NOW</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            image1={item.image1}
            image2={item.image2}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;