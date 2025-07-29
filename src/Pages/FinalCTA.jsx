import React from "react";
import "../App.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="final-cta-advanced">
      <div className="final-cta-glass">
        <h2 className="final-cta-heading">
          Need a Reliable Medical Distributor?
        </h2>
        <p className="final-cta-desc">
          We supply quality medicines, devices & fast delivery services across the region.  
          Trusted by hundreds of pharmacies and healthcare providers.
        </p>
        <div className="final-cta-buttons">
          <a href="tel:+919876543210" className="cta-btn new-call-btn">
            <FaPhoneAlt /> Call Us Now
          </a>
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20enquire%20about%20medical%20supplies."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn new-whatsapp-btn"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
