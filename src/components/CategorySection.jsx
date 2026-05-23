import { useNavigate } from "react-router-dom";
import "../styles/CategorySection.css";

import skirtImg from "../assets/skirt.jpg";
import topImg from "../assets/top.jpg";
import trouserImg from "../assets/touser.jpg";
import dressImg from "../assets/dress.jpg";

function CategorySection() {

  const navigate = useNavigate();

  const categories = [

    {
      name: "skirts",
      label: "Skirts",
      image: skirtImg
    },

    {
      name: "tops",
      label: "Tops",
      image: topImg
    },

    {
      name: "trousers",
      label: "Trousers",
      image: trouserImg
    },

    {
      name: "dresses",
      label: "Dresses",
      image: dressImg
    }

  ];

  return (

    <div id="trending" className="category-section">

      <h2 className="category-title">
        TRENDING NOW
      </h2>

      <div className="category-grid unique-category-grid">

        {categories.map((cat, index) => (

          <div
            key={index}
            className="category-card"
            onClick={() => navigate(`/${cat.name}`)}
          >

            <img
              src={cat.image}
              alt={cat.label}
            />

            <h3 className="category-label">
              {cat.label}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CategorySection;