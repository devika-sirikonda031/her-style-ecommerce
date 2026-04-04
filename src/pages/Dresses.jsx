import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductSection.css";

function Dresses() {
  return (
    <section className="products">
      <h2>DRESSES COLLECTION</h2>

      <div className="product-grid">
        {products.dresses.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}   // ✅ ADD THIS LINE
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

export default Dresses;