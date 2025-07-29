import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Medicine from "./medicines/Medicine";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Meters from "./Divices/Meters";
import Machines from "./Divices/Machines";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TeamSection from "./TeamSection";
import FAQs from "./FAQs";
import CounterSection from "./CounterSection";
import FeaturedBrands from "./FeaturedBrands";
import FinalCTA from "./FinalCTA";
import BlogPosts from "./BlogPosts";
import CoverageMap from "./CoverageMap";
import ContactUs from "./Contact";
import WhatsAppFloatButton from "./WhatsAppFloatButton";

const preloadImages = [
  "./assets/Images/HomeImg.avif",
  "./assets/Images/pexels-karolina-grabowska-4021809.jpg",
  "./assets/Images/pexels-shvetsa-3844581.jpg",
];

const Home = () => {
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="home-carousel-wrapper">
      <Carousel
        // fade
        interval={3800}
        controls={false}
        indicators={true}
        wrap={true}
        pause={false}
        className="home-carousel"
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="slide bg-slide-1">
            <div className="overlay">
              <div className="caption text-center text-white animate-caption">
                <h1>Trusted Medical Distributors</h1>
                <p>Serving Pharmacies & Hospitals Nationwide</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="slide bg-slide-2">
            <div className="overlay">
              <div className="caption text-center text-white animate-caption">
                <h1>One-Stop Wholesale Partner</h1>
                <p>Generic, Ethical & Ayurvedic Medicines</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="slide bg-slide-3">
            <div className="overlay">
              <div className="caption text-center text-white animate-caption">
                <h1>
                  Advanced Medical <br /> Devices
                </h1>
                <p>Glucometers, Nebulizers & Diagnostic Machines</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div>
        <About />
           <CounterSection/>
         <Services />
        <WhyChooseUs />
        <Medicine />

        <div className=" container mt-5">
          <h2 className="why-choose-us-title text-center mb-4">
            Medical Devices
          </h2>
          <p className="text-center text-muted" style={{ fontWeight: "500" }}>
            Discover a Wide Range of Smart Medical <br />
            Devices Designed to Deliver Accuracy, Safety, and Trust in Every
            Diagnosis.
          </p>
          <Tabs
            defaultActiveKey="meters"
            id="device-tabs"
            className="mb-4 my-5"
          >
            <Tab eventKey="meters" title="Meters">
              <Meters />
            </Tab>
            <Tab eventKey="machines" title="Machines">
              <Machines />
            </Tab>
          </Tabs>
        </div>

       
        <Testimonials />
        <TeamSection />
        <FAQs />
        <FeaturedBrands/>
        <FinalCTA/>
        <BlogPosts/>
        <CoverageMap/>
        <ContactUs/>
        <WhatsAppFloatButton/>
     
      </div>
    </div>
  );
};

export default Home;




