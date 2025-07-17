import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';

import Navbar from "./pages/common/Navbar";
import Footer from "./pages/common/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Medicine from "./Pages/medicines/Medicine";
import Generic from "./Pages/medicines/Generic";
import Ethical from "./Pages/medicines/Ethical";
import Ayurvedic from "./Pages/medicines/Ayurvedic";
import ProductDetails from "./pages/medicines/ProductDetails";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9FAFB' }}>
        <Navbar />
        <main className="app-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/medicines" element={<Medicine />} /> {/* Main Medicines page with tabs */}
            <Route path="/medicines/generic" element={<Generic />} />
            <Route path="/medicines/ethical" element={<Ethical />} />
            <Route path="/medicines/ayurvedic" element={<Ayurvedic />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/medicines/:category/:company" element={<ProductDetails />} /> {/* Product details route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;