import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        background: 'url("/Hero_Desktop_Large.webp") center/cover no-repeat',
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">
          Book <br /> Beautiful Stays
        </h1>

        {/* === Search Bar === */}
        <div className="search-bar">
          <div className="search-item">
            <FaMapMarkerAlt className="icon" />
            <span>City</span>
          </div>

          <div className="divider" />

          <div className="search-item">
            <FaCalendarAlt className="icon" />
            <span>Dates</span>
          </div>

          <div className="divider" />

          <div className="search-item guests">
            <FaUser className="icon" />
            <button>-</button>
            <span>1 Guest</span>
            <button>+</button>
          </div>

          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
