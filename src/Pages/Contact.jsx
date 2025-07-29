import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Info & Form */}
        <div className="contact-info">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have questions or need help? Get in touch with us for quick support.
          </p>

          <div className="contact-details">
            <p><FaPhoneAlt /> +91 9876543210</p>
            <p><FaEnvelope /> support@shreebalajidistributors.com</p>
            <p><FaMapMarkerAlt /> Narayanpur, Alwar, Rajasthan</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Phone" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>

          <a 
            href="https://wa.me/918209226015" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* Right: Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.0043424475965!2d76.29974302471061!3d27.507641340726593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d65c38676ef69%3A0x9cf5b0f8245c7746!2sShree%20Balaji%20Distributors!5e1!3m2!1sen!2sin!4v1753804588039!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Contact Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
