import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductSection.css";

function Tops() {
  return (
    <section className="products">
      <h2>TOPS COLLECTION</h2>

      <div className="product-grid">
        {products.tops.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}   // ✅ ADD THIS
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

export default Tops;