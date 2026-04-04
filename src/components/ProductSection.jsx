import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductSection.css";

import p1 from "../assets/dress.jpg";
import p2 from "../assets/top.jpg";
import p3 from "../assets/skirt.jpg";
import p4 from "../assets/touser.jpg";

function ProductSection() {
  return (
    <section className="products">
      <h2>TRENDING NOW</h2>

      <div className="product-grid">
        <ProductCard
        id = {1}
          image1={p1} 
          image2={p1}   // same for now
          title="Party Wear Dress" 
          price={1899} 
        />

        <ProductCard 
        id = {2}
          image1={p2} 
          image2={p2} 
          title="Casual Denim Top" 
          price={899} 
        />

        <ProductCard 
        id = {3}
          image1={p3} 
          image2={p3} 
          title="Pleated Midi Skirt" 
          price={1399} 
        />

        <ProductCard 
        id = {4}
          image1={p4} 
          image2={p4} 
          title="Office Fit Trousers" 
          price={1999} 
        />
      </div>
    </section>
  );
}

export default ProductSection;