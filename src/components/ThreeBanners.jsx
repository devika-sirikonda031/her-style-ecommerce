import React from "react";
import "../styles/ThreeBanners.css";

import everyday from "../assets/everyday_banner.png";
import work from "../assets/work_banner.png";
import evening from "../assets/evg_banner.png";

function ThreeBanners() {
  return (
    <div>

      {/* Everyday */}
      <div className="full-banner">
        <img src={everyday} alt="Everyday" />
       
      </div>

      {/* Work */}
      <div className="full-banner">
        <img src={work} alt="Work" />
        
      </div>

      {/* Evening */}
      <div className="full-banner">
        <img src={evening} alt="Evening" />
      </div>

    </div>
  );
}

export default ThreeBanners;