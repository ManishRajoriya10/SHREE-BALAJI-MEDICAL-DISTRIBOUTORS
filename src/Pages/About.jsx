import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShieldAlt, FaBoxOpen, FaTruck, FaHeadset, FaGlobe, FaLightbulb } from 'react-icons/fa';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animations
AOS.init();

const About = () => {
  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Your Trusted Partner in Shree Balaji Medical Distribution
          </p>
        </div>

        {/* Company Overview */}
        <div className="about-overview">
          <p className="about-text">
            At MediDistributors, we are committed to delivering high-quality medical supplies, including generic, ethical, and ayurvedic medicines, as well as advanced medical equipment. With years of experience in the healthcare industry, our mission is to ensure timely and reliable access to essential products for healthcare providers and patients alike.
          </p>
          <p className="about-text">
            Our dedication to quality, affordability, and customer satisfaction sets us apart. We work closely with trusted manufacturers and leverage a robust supply chain to meet the diverse needs of our clients across the globe.
          </p>
        </div>

        {/* Key Features/Values */}
        <div className="about-features">
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-icon">
              <FaShieldAlt size={40} />
            </div>
            <h3 className="feature-title">Quality Assurance</h3>
            <p className="feature-text">
              We source products from certified manufacturers, ensuring the highest standards of safety and efficacy.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-icon">
              <FaBoxOpen size={40} />
            </div>
            <h3 className="feature-title">Wide Product Range</h3>
            <p className="feature-text">
              From medicines to medical devices, we offer a comprehensive catalog to meet all your healthcare needs.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-icon">
              <FaTruck size={40} />
            </div>
            <h3 className="feature-title">Timely Delivery</h3>
            <p className="feature-text">
              Our efficient logistics ensure that your orders reach you on time, every time.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="feature-icon">
              <FaHeadset size={40} />
            </div>
            <h3 className="feature-title">Customer Support</h3>
            <p className="feature-text">
              Our dedicated team is available 24/7 to assist with inquiries and provide personalized solutions.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="500">
            <div className="feature-icon">
              <FaGlobe size={40} />
            </div>
            <h3 className="feature-title">Global Reach</h3>
            <p className="feature-text">
              We serve healthcare providers worldwide, ensuring access to quality medical supplies across borders.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="600">
            <div className="feature-icon">
              <FaLightbulb size={40} />
            </div>
            <h3 className="feature-title">Innovation</h3>
            <p className="feature-text">
              We embrace cutting-edge solutions to streamline distribution and enhance healthcare delivery.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <NavLink to="/contact" className="cta-button">
            Get in Touch
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;