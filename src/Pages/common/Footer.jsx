import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1 - About */}
        <div className="footer-col">
          <h3 className="footer-title">Shree Balaji Distributors</h3>
          <p className="footer-text">
            Your trusted partner for genuine medicines, medical devices, and healthcare supplies,
            delivering across multiple locations with quality assurance.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/medicines">Medicines</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <p><FaPhoneAlt /> +91 9660601614</p>
          <p><FaEnvelope /> support@shreebalajidistributors.com</p>
          <p><FaMapMarkerAlt /> Narayanpur, Alwar, Rajasthan</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="manishrajoriya "><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="Manish_rajoriya10"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="manish-rajoriya-b00641377"><FaLinkedin /></a>
            <a href="https://wa.me/918209226015" target="_blank" rel="Manish saini"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shree Balaji Distributors | All Rights Reserved.</p>

        Created BY @TheTechestManish
      </div>
    </footer>
  );
};

export default Footer;
