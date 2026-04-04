import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductSection.css";

function Skirts() {
  return (
    <section className="products">
      <h2>SKIRTS COLLECTION</h2>

      <div className="product-grid">
        {products.skirts.map((item) => (
          <ProductCard
            key={item.id}
            image1={item.image1}   // ✅ FIX
            image2={item.image2}   // ✅ FIX
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Skirts;