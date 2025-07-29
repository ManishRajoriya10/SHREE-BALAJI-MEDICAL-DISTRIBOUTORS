import React from 'react';
import { FaHandshake, FaWarehouse, FaRocket, FaUsers, FaCertificate, FaHeart } from 'react-icons/fa';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

// Initialize AOS animations
AOS.init();

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section" data-aos="fade-up" data-aos-duration="800">
      <div className="why-choose-us-container">
        {/* Header */}
        <div className="why-choose-us-hero" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="why-choose-us-title">Why Choose Us</h1>
          <p className="why-choose-us-subtitle">
            Partner with Shree Balaji Medical Distributors for Unmatched Quality and Reliability
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="why-choose-us-reasons">
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="reason-icon">
              <FaHandshake size={40} />
            </div>
            <h3 className="reason-title">Trusted Partnerships</h3>
            <p className="reason-text">
              We collaborate with leading manufacturers to deliver authentic and high-quality medical products you can rely on.
            </p>
          </div>
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="reason-icon">
              <FaWarehouse size={40} />
            </div>
            <h3 className="reason-title">Extensive Inventory</h3>
            <p className="reason-text">
              Our vast catalog includes generic, ethical, and ayurvedic medicines, plus advanced medical equipment for all your needs.
            </p>
          </div>
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="reason-icon">
              <FaRocket size={40} />
            </div>
            <h3 className="reason-title">Fast Delivery</h3>
            <p className="reason-text">
              Our streamlined logistics ensure swift and secure delivery, keeping your operations running smoothly.
            </p>
          </div>
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="reason-icon">
              <FaUsers size={40} />
            </div>
            <h3 className="reason-title">Expert Team</h3>
            <p className="reason-text">
              Our knowledgeable team provides expert guidance and support, ensuring a seamless experience.
            </p>
          </div>
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="500">
            <div className="reason-icon">
              <FaCertificate size={40} />
            </div>
            <h3 className="reason-title">Regulatory Compliance</h3>
            <p className="reason-text">
              We adhere to strict industry standards, ensuring all products meet regulatory requirements for safety and quality.
            </p>
          </div>
          <div className="reason-card" data-aos="zoom-in" data-aos-delay="600">
            <div className="reason-icon">
              <FaHeart size={40} />
            </div>
            <h3 className="reason-title">Customer-Centric Approach</h3>
            <p className="reason-text">
              Your satisfaction is our priority, with 24/7 support and tailored solutions to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
       <div className="why-choose-us-cta" data-aos="fade-up" data-aos-delay="700">
        </div>
    </section>
  );
};

export default WhyChooseUs;



