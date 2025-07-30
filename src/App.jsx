// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "aos/dist/aos.css";
// import "./App.css";
// import AOS from "aos";

// import Navbar from "./Pages/common/Navbar";
// import Footer from "./Pages/common/Footer"
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Services from "./Pages/Services";
// import Medicine from "./Pages/medicines/Medicine";
// import Generic from "./Pages/medicines/Generic";
// import Ethical from "./Pages/medicines/Ethical";
// import Ayurvedic from "./Pages/medicines/Ayurvedic";
// import ProductDetails from "./Pages/medicines/ProductDetails";
// import Meters from "./Pages/Divices/Meters";
// import Machines from "./Pages/Divices/Machines";

// const App = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <Router>
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           backgroundColor: "#F9FAFB",
//         }}
//       >
//         <Navbar />
//         <main className="app-content" style={{ flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/medicines" element={<Medicine />} />{" "}
//             {/* Main Medicines page with tabs */}
//             <Route path="/medicines/generic" element={<Generic />} />
//             <Route path="/medicines/ethical" element={<Ethical />} />
//             <Route path="/medicines/ayurvedic" element={<Ayurvedic />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/devices/meters" element={<Meters />} />
//             <Route path="/devices/machines" element={<Machines />} />
//             <Route
//               path="/medicines/:category/:company"
//               element={<ProductDetails />}
//             />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Common Components
import Navbar from "./Pages/common/Navbar.jsx";
import Footer from "./Pages/common/Footer.jsx";
import Preloader from "./Preloader.jsx";  // ✅ Loader Component

// Pages
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";

// Medicines
import Medicine from "./Pages/medicines/Medicine.jsx";
import Generic from "./Pages/medicines/Generic.jsx";
import Ethical from "./Pages/medicines/Ethical.jsx";
import Ayurvedic from "./Pages/medicines/Ayurvedic.jsx";
import ProductDetails from "./Pages/medicines/ProductDetails.jsx";

// Devices
import Meters from "./Pages/Divices/Meters.jsx";
import Machines from "./Pages/Divices/Machines.jsx";
import WhatsAppFloatButton from "./Pages/WhatsAppFloatButton.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F9FAFB",
        }}
      >
        <Navbar />
        <WhatsAppFloatButton/>
        <main className="app-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Medicines */}
            <Route path="/medicines" element={<Medicine />} />
            <Route path="/medicines/generic" element={<Generic />} />
            <Route path="/medicines/ethical" element={<Ethical />} />
            <Route path="/medicines/ayurvedic" element={<Ayurvedic />} />
            <Route
              path="/medicines/:category/:company"
              element={<ProductDetails />}
            />

            {/* Devices */}
            <Route path="/devices/meters" element={<Meters />} />
            <Route path="/devices/machines" element={<Machines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
