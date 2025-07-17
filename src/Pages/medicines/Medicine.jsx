import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import Ayurvedic from "./Ayurvedic";
import Ethical from "./Ethical";
import Generic from "./Generic";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations
AOS.init();

const Medicine = () => {
  const [activeTab, setActiveTab] = useState("ethical");

  return (
    <section
      className="medicine-section"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="medicine-container">
        <h1 className="medicines_title text-center">Our Medicines</h1>
        <p className="text-center text-muted py-2">
          We offer a wide range of medicines across Generic,<br /> Ethical, and
          Ayurvedic categories. Select a company below to explore its products.
        </p>
        {/* Tabs */}
        <div className="medicine-tabs py-5 pb-0">
          <button
            className={`tab-button ${activeTab === "ethical" ? "active" : ""}`}
            onClick={() => setActiveTab("ethical")}
          >
            Ethical
          </button>
          <button
            className={`tab-button ${activeTab === "generic" ? "active" : ""}`}
            onClick={() => setActiveTab("generic")}
          >
            Generic
          </button>
          <button
            className={`tab-button ${
              activeTab === "ayurvedic" ? "active" : ""
            }`}
            onClick={() => setActiveTab("ayurvedic")}
          >
            Ayurvedic
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "ethical" && <Ethical />}
          {activeTab === "generic" && <Generic />}
          {activeTab === "ayurvedic" && <Ayurvedic />}
        </div>
      </div>
    </section>
  );
};

export default Medicine;
