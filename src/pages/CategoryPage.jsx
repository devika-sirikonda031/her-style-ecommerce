import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/CategoryPage.css";

function CategoryPage({ category: propCategory }) {

  const params = useParams();

  const category =
    propCategory || params.category;

  const navigate = useNavigate();

  const [products, setProducts] =
    useState([]);

  const [visible, setVisible] =
    useState(6);

  // ✅ SIZE FILTER
  const [selectedSize, setSelectedSize] =
    useState("All");

  // ✅ PRICE FILTER
  const [selectedPrice, setSelectedPrice] =
    useState(10000);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/products")

      .then((res) => {

        const filtered =
          res.data.filter(
            (item) =>
              item.category?.toLowerCase() ===
              category?.toLowerCase()
          );

        console.log(filtered);

        setProducts(filtered);

      })

      .catch((err) => {

        console.log(
          "CATEGORY ERROR:",
          err
        );

      });

  }, [category]);

  // ✅ FILTER PRODUCTS
  const filteredProducts =
    products.filter((item) => {

      // ✅ SIZE FILTER
      const sizeMatch =

        selectedSize === "All"

          ? true

          : item.sizes?.includes(
              selectedSize
            );

      // ✅ PRICE FILTER
      const priceMatch =
        item.price <= selectedPrice;

      return sizeMatch && priceMatch;

    });

  return (

    <div className="category-container">

      {/* BREADCRUMB */}
      <p className="breadcrumb">
        Home / {category}
      </p>

      {/* TITLE */}
      <h1 className="category-heading">
        {category}
      </h1>

      {/* ✅ FILTERS */}
      <div className="filters">

        {/* SIZE FILTER */}
        <select
          value={selectedSize}

          onChange={(e) =>
            setSelectedSize(e.target.value)
          }
        >

          <option value="All">
            All Sizes
          </option>

          <option value="S">
            S
          </option>

          <option value="M">
            M
          </option>

          <option value="L">
            L
          </option>

          <option value="XL">
            XL
          </option>

        </select>

        {/* PRICE FILTER */}
        <select
          value={selectedPrice}

          onChange={(e) =>
            setSelectedPrice(
              Number(e.target.value)
            )
          }
        >

          <option value="10000">
            Under ₹10000
          </option>

          <option value="5000">
            Under ₹5000
          </option>

          <option value="3000">
            Under ₹3000
          </option>

          <option value="1000">
            Under ₹1000
          </option>

        </select>

      </div>

      {/* PRODUCTS */}
      <div className="category-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts

            .slice(0, visible)

            .map((item) => (

              <div
                key={item._id}
                className="product-card"
              >

                <div className="image-box">

                  <img
                    src={item.image1}
                    className="img1"
                    alt=""
                  />

                  <img
                    src={item.image2}
                    className="img2"
                    alt=""
                  />

                  <div
                    className="quick-view"

                    onClick={() =>
                      navigate(
                        `/product/${item._id}`
                      )
                    }
                  >
                    QUICK VIEW
                  </div>

                </div>

                <h3 className="title">
                  {item.title}
                </h3>

                <p className="price">
                  ₹{item.price.toLocaleString()}
                </p>

              </div>

            ))

        ) : (

          <div className="no-products">

            No products found

          </div>

        )}

      </div>

      {/* LOAD MORE */}
      {visible < filteredProducts.length && (

        <div className="load-more-container">

          <button
            className="load-more-btn"

            onClick={() =>
              setVisible((prev) => prev + 6)
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