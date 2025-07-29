import React from "react";
import { FaMapMarkerAlt, FaTruck, FaHospital } from "react-icons/fa";
import "../App.css";

const CoverageMap = () => {
  const locations = [
    { city: "Narayanpur", delivery: "Same Day Delivery", pharmacies: "40+ Pharmacies", icon: <FaHospital /> },
    { city: "Thanagazi", delivery: "24 Hours Delivery", pharmacies: "22+ Pharmacies", icon: <FaTruck /> },
    { city: "Ajabgarh", delivery: "24 Hours Delivery", pharmacies: "32+ Pharmacies", icon: <FaTruck /> },
    { city: "Mundawara", delivery: "Same Day Delivery", pharmacies: "14+ Pharmacies", icon: <FaTruck /> },
    { city: "Kotputali", delivery: "24 Hours Delivery", pharmacies: "8+ Pharmacies", icon: <FaMapMarkerAlt /> },
    { city: "Paota & Pragpura", delivery: "24 Hours Delivery", pharmacies: "46+ Pharmacies", icon: <FaTruck /> },
    { city: "Viratnagar", delivery: "Same Day Delivery", pharmacies: "18+ Pharmacies", icon: <FaTruck /> },
  ];

  return (
    <section className="coverage-section">
      <div className="coverage-container">
        {/* Left Side: Map */}
        <div className="coverage-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.0043424475965!2d76.29974302471061!3d27.507641340726593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d65c38676ef69%3A0x9cf5b0f8245c7746!2sShree%20Balaji%20Distributors!5e1!3m2!1sen!2sin!4v1753804588039!5m2!1sen!2sin"
            width="100%"
            height="600px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Coverage Map"
          ></iframe>
        </div>

        {/* Right Side: Locations */}
        <div className="coverage-info">
          <h2 className="coverage-title">Our Coverage Map</h2>
          <p className="coverage-subtitle">
            Delivering trusted medicines and healthcare products across multiple towns and local pharmacies.
          </p>

          <ul className="coverage-list">
            {locations.map((loc, index) => (
              <li key={index} className="coverage-item">
                <span className="coverage-icon">{loc.icon}</span>
                <div>
                  <h4 className="coverage-city">{loc.city}</h4>
                  <p className="coverage-detail">
                    ⏱ {loc.delivery} | 🏪 {loc.pharmacies}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
