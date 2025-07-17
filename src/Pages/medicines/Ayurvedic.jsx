import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'; // Use Medicine.css instead of App.css

const Ayurvedic = () => {
  const companies = [
    { name: 'Himalaya', image: 'https://content3.jdmagicbox.com/v2/comp/yamunanagar/q4/9999p1732.1732.190212154527.n4q4/catalogue/the-himalaya-drug-company-model-town-yamunanagar-ayurvedic-product-dealers-cod4eg65zt.jpg', path: '/medicines/ayurvedic/himalaya' },
    { name: 'Patanjali', image: 'https://media.licdn.com/dms/image/v2/C5612AQFOkkKJJuVMCA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1633960657746?e=2147483647&v=beta&t=eevLBcjWui3FUwAkHkCs6tzN8F0_v6_9-zWmtoxrMc4', path: '/medicines/ayurvedic/patanjali' },
    { name: 'Dabur', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png', path: '/medicines/ayurvedic/dabur' },
    { name: 'Nice Pharma', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PBTv-CfCeo09-2ljLLc0oQs5TbmoLlaPtDoI3Lev_M5Ha2ZE8rxsmMEBkMhl5qxawyQ&usqp=CAU' },
    { name: 'Saptrishi Ayurvedic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQNysF2slgue4kdHRVYnjp_XZFXB4wjb3rA&s' },
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

export default Ayurvedic;