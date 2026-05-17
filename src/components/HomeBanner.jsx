import "../styles/HomeBanner.css";
import banner from "../assets/Home_Banner.png";

function HomeBanner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />

      {/* TEXT OVER IMAGE */}
      <div className="banner-text">
        <h5>NEW ARRIVALS</h5>
        <h1>SPRING SUMMER 2026</h1>
        <p>TIMELESS FASHION FOR MODERN WOMEN</p>
        <button>SHOP NOW →</button>
      </div>
    </div>
  );
}

export default HomeBanner;