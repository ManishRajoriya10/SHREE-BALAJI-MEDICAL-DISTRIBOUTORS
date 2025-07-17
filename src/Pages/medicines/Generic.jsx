import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'; // Use the provided Medicine.css instead of App.css

const Generic = () => {
  const companies = [
    { name: 'Intas Pharma', image: 'https://media.licdn.com/dms/image/v2/C560BAQFppicnmrvGLw/company-logo_200_200/company-logo_200_200/0/1631382389259?e=2147483647&v=beta&t=atjFLL-DeZbdagZysz_eXhoO2yA6GkdAPUrpjHrUxFU', path: '/medicines/generic/intas' },
    { name: 'Lupin Pharma\s', image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGnS4rNceXDRg/company-logo_200_200/company-logo_200_200/0/1630656145991/lupin_pharmaceuticals_logo?e=2147483647&v=beta&t=y6OXHNwbO-f4SNCOQTmL8pBfrYpGEqYI7VEP5SYtNcg', path: '/medicines/generic/lupin' },
    { name: 'Dr. Reddy\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz1c4_n0smveOSWBIhbl00QfObVGBZyoyGA&s', path: '/medicines/generic/drreddys' },
    { name: 'Glenmark\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmG2w-Cdh402uLd2Bfh1ZbXSuemSDuGpaoQ&s' },
    { name: 'Alkem\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE0RyR24G0fD7xzDkFkrdOjeLFL0s1QnnFQ&s' },
    { name: 'Laborate Pharma\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAadw1IATX9VmZXZlF6ycGbhfez6iF3HbNVQ&s' },
    { name: 'Galfa Lab\'s', image: 'https://media.licdn.com/dms/image/v2/C560BAQF1-EybY_3zuQ/company-logo_200_200/company-logo_200_200/0/1630652837260/galpha_laboratories_limited_mumbai__logo?e=2147483647&v=beta&t=7IUeA6aOiMpkYgOAJ5GBeajN4uN2nt7vqG0wLqnb9UY' },
    { name: 'Zanlab Pharma\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7CiSD7groANL9zjk1WCwxnmWZLWCa9YiEa4UYDIevofhdhGmExMzPFTFC-f-4LeLV7Q&usqp=CAU' },
    { name: 'BioChem\'s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2NVBrkkpfVtAgMlAAvLEY9i0_pB9cdJrMw&s' },
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

export default Generic;