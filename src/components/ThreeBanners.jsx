
import "../styles/ThreeBanners.css";
import { useNavigate } from "react-router-dom";

import workImg from "../assets/work_banner.png";
import everydayImg from "../assets/everyday_banner.png";
import eveningImg from "../assets/evg_banner.png";

function ThreeBanners() {

  const navigate = useNavigate();

  const banners = [
    {
      title: "WORK WEAR",
      image: workImg,
      link: "/tops",
    },

    {
      title: "EVERYDAY STYLE",
      image: everydayImg,
      link: "/dresses",
    },

    {
      title: "EVENING ESSENTIALS",
      image: eveningImg,
      link: "/skirts",
    },
  ];

  return (
    <div className="three-banners">

      {banners.map((item, index) => (

        <div key={index} className="banner-card">

          <img src={item.image} alt={item.title} />

          <div className="banner-overlay">

            <button onClick={() => navigate(item.link)}>
              SHOP NOW →
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ThreeBanners;