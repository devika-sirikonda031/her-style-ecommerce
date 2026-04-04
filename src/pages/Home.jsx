import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ThreeBanners from "../components/ThreeBanners";

function Home() {
  const [products, setProducts] = useState([]);

  // ✅ Fetch products from backend
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>

      {/* 🔥 Banner */}
      <HomeBanner />

      {/* 🔥 Categories Section */}
      <Categories />
      <ThreeBanners /> 

      {/* 🔥 Footer */}
      <Footer />

    </div>
  );
}

export default Home;