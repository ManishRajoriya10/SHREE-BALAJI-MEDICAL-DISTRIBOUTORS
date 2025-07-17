import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Medicine from "./medicines/Medicine";

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
                <Link to="/products" className="btn btn-warning shadow-sm">
                  Explore Products
                </Link>
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
                <Link to="/products" className="btn btn-warning shadow-sm">
                  View Categories
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="slide bg-slide-3">
            <div className="overlay">
              <div className="caption text-center text-white animate-caption">
                <h1>Advanced Medical <br /> Devices</h1>
                <p>Glucometers, Nebulizers & Diagnostic Machines</p>
                <Link to="/products/machines" className="btn btn-warning shadow-sm">
                  Shop Devices
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    

      <div>
        <About/>
        <WhyChooseUs/>
        <Medicine/>
      </div>
    

    </div>
  );
};

export default Home;
