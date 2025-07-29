import React from "react";
import "./App.css";
import { FaCapsules } from "react-icons/fa";

const Preloader = () => {
  return (
    <div className="medical-loader-container">
      <div className="heartbeat"></div>
      <div className="capsule-icon">
        <FaCapsules />
      </div>
      <h3>Loading Healthcare Solutions...</h3>
    </div>
  );
};

export default Preloader;
