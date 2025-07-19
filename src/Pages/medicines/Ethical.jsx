import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'; // Only import Medicine.css

const Ethical = () => {
  const companies = [
    { name: 'Cipla Lab', image: 'https://s3-symbol-logo.tradingview.com/cipla--600.png', path: '/medicines/ethical/ciplalab' },
    // { name: 'Sun Pharma', image: 'https://www.indianpharmajobs.com/getimage/4d86a740-6fa5-4fd9-8fd8-de627130a20f_325x325_exact.jpeg', path: '/medicines/ethical/sunpharma' },
    // { name: 'Dr Reddy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOFuC1zA8SUgMVgggYD30Imi02hUhSz1LVw&s', path: '/medicines/ethical/drreddy' },
    { name: 'Zydus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSO01RVpuYFY7igivcnOTCvMLMBZVjIVKTPg&s', path: '/medicines/ethical/zydus' },
    { name: 'Aristo', image: 'https://www.indianpharmajobs.com/getimage/ca957a1b-89d3-47d0-a9f1-3dc8ee2d0929_325x325_exact.jpg', path: '/medicines/ethical/aristo' },
    { name: 'Mankind Pharma', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1L3DsMkW7H4iuGf1MsI1-8bSNeJXvMeGe7g&s', path: '/medicines/ethical/mankindpharma' },
  ];

  return (
    <div className="company-cards shadow">
      {companies.map((company, index) => (
        <div className="company-card" key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
          <div className="company-content">
            <img src={company.image} alt={company.name} className="company-image" />
            <div className="company-info">
              <h3 className="company-name">{company.name}</h3>
              <NavLink
                to={company.path}
                className="view-button"
                onClick={(e) => e.stopPropagation()} // Prevent parent interference
              >
                View Products
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ethical;