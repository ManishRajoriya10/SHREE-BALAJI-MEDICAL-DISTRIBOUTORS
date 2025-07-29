import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";

const WhatsAppFloatButton = () => {
  return (
    <a
      href="https://wa.me/918209226015"  // यहां अपना WhatsApp नंबर डालें (country code के साथ)
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppFloatButton;
