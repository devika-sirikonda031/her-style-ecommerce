import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Categories.css";

// Images
import img1 from "../assets/top.jpg";
import img2 from "../assets/dress.jpg";
import img3 from "../assets/skirt.jpg";
import img4 from "../assets/touser.jpg";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="categories">

      <h2 className="category-title">SHOP BY STYLE</h2>

      <div className="category-grid">

        {/* Tops */}
        <div className="card" onClick={() => navigate("/category/tops")}>
          <img src={img1} alt="Tops" />
          <p>TOPS</p>
        </div>

        {/* Dresses */}
        <div className="card" onClick={() => navigate("/category/dresses")}>
          <img src={img2} alt="Dresses" />
          <p>DRESSES</p>
        </div>

        {/* Skirts */}
        <div className="card" onClick={() => navigate("/category/skirts")}>
          <img src={img3} alt="Skirts" />
          <p>SKIRTS</p>
        </div>

        {/* Trousers */}
        <div className="card" onClick={() => navigate("/category/trousers")}>
          <img src={img4} alt="Trousers" />
          <p>TROUSERS</p>
        </div>
      </div>

    </section>
  );
};

export default Categories;