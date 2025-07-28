import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../App.css";
import Logo from '../../assets/Logo/5.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      label: "Medicines",
      subLinks: [
        { to: "/medicines/generic", label: "Generic" },
        { to: "/medicines/ethical", label: "Ethical" },
        { to: "/medicines/ayurvedic", label: "Ayurvedic" },
      ],
    },
    {
      label: "Devices",
      subLinks: [
        // { to: "/products", label: "All Products" },
        { to: "/Devices/meters", label: "Meters" },
        { to: "/Devices/machines", label: "Machines" },
      ],
    },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="800">
      <div className="navbar-container ">
        <div className="navbar-content  ">
          {/* Logo */}
          <div className="navbar-logo-container">
            <NavLink to="/" className="navbar-logo">
              <img src={Logo} alt="MediDistributors Logo" className="navbar-logo-img" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {navLinks.map((link, index) => (
              <div key={index} className="navbar-item">
                {link.subLinks ? (
                  <>
                    <button
                      className="navbar-link navbar-dropdown-toggle"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <svg
                        className={`navbar-dropdown-arrow ${
                          activeDropdown === link.label ? "open" : ""
                        }`}
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`navbar-dropdown ${
                        activeDropdown === link.label ? "visible" : "hidden"
                      }`}
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subLink.to}
                          className={({ isActive }) =>
                            `navbar-dropdown-item ${isActive ? "active" : ""}`
                          }
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMenu}
              className="navbar-hamburger"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`navbar-mobile-menu ${isOpen ? "visible" : "hidden"}`}
        >
          <div className="navbar-mobile-content">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subLinks ? (
                  <>
                    <button
                      className="navbar-mobile-link navbar-mobile-dropdown-toggle"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <svg
                        className={`navbar-dropdown-arrow ${
                          activeDropdown === link.label ? "open" : ""
                        }`}
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`navbar-mobile-dropdown ${
                        activeDropdown === link.label ? "visible" : "hidden"
                      }`}
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subLink.to}
                          className={({ isActive }) =>
                            `navbar-mobile-dropdown-item ${isActive ? "active" : ""}`
                          }
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;