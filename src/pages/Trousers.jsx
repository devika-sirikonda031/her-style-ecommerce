import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductSection.css";

function Trousers() {
  return (
    <section className="products">
      <h2>TROUSERS COLLECTION</h2>

      <div className="product-grid">
        {products.trousers.map((item) => (
          <ProductCard
            key={item.id}
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

export default Trousers;