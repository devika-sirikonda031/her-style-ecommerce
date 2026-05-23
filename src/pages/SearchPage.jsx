import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function SearchPage() {

  const { keyword } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {

        const filteredProducts = data.filter((item) =>

  item.title
    .toLowerCase()
    .includes(keyword.toLowerCase())

  ||

  item.category
    .toLowerCase()
    .includes(keyword.toLowerCase())

);

        setProducts(filteredProducts);

      })
      .catch((err) => console.log(err));

  }, [keyword]);

  return (

    <div className="category-page">

      <h1>
        Search Results : {keyword}
      </h1>

      <div className="products-grid">

        {products.length > 0 ? (

          products.map((product) => (

            <ProductCard
              key={product._id}
              item={product}
            />

          ))

        ) : (

          <h2>No Products Found</h2>

        )}

      </div>

    </div>
  );
}

export default SearchPage;