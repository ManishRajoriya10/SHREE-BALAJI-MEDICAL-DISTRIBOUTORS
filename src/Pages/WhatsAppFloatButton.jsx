import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";

const WhatsAppFloatButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"   
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppFloatButton;
