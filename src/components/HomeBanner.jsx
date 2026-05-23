import "../styles/HomeBanner.css";
import banner from "../assets/Home_Banner.png";
import { useNavigate } from "react-router-dom";

function HomeBanner() {
    const navigate = useNavigate();
  return (
    <div className="banner">
      <img src={banner} alt="banner" />

      {/* TEXT OVER IMAGE */}
      <div className="banner-text">
        <h5>NEW ARRIVALS</h5>
        <h1>SPRING SUMMER 2026</h1>
        <p>TIMELESS FASHION FOR MODERN WOMEN</p>
        
        {/* BUTTON */}
       <button
          className="shop-btn"
          onClick={() => navigate("/categories")}
        >
          SHOP NOW →
        </button>
      </div>
    </div>
  );
}

export default HomeBanner;