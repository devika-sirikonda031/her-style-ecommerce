import bannerVideo from "../assets/hero_banner.mp4";
import "../styles/HomeBanner.css";

function HomeBanner() {
  return (
    <div className="banner">
      
      <video src={bannerVideo} autoPlay loop muted />

      <div className="banner-content">
        <h1>New Fashion Collection</h1>
        <p>Up to 50% OFF 🔥</p>
        <button>Shop Now</button>
      </div>

    </div>
  );
}

export default HomeBanner;