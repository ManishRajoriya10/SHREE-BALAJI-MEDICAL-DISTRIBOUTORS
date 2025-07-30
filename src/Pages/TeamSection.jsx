import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Owner from "../assets/Meet Our Teem Image/opm.jpg";
import manoj from '../assets/Meet Our Teem Image/Manoj.jpg';
import Goutam from '../assets/Meet Our Teem Image/Goutam.jpg';
import ManishImg from '../assets/Meet Our Teem Image/Manish.jpg';

const teamMembers = [
  {
    name: "Drx Manoj",
    role: "Manager & Of Owner MG PHARMA",
    image: manoj,
    bio: "Oversees daily operations, ensuring reliable supply and the highest quality distribution of medicines for all our clients."
  },
  {
    name: "Drx Goutam",
    role: "Inventory Management",
    image: Goutam,
    bio: "Manages stock efficiently to ensure every pharmacy gets timely and accurate medicine deliveries without shortages."
  },
  {
    name: "Manish",
    role: "Account Manager",
    image: ManishImg,
    bio: "Dedicated to maintaining strong client relationships, handling orders smoothly, and ensuring complete customer satisfaction."
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const owner = {
    name: "Mr. Omprakash Saini",
    role: "Founder & Owner",
    image: Owner,
    bio: "Founder of Shree Balaji Distributors with 15+ years of experience in pharmaceutical wholesale. Dedicated to providing quality healthcare products with trust, commitment, and excellence in service across the region.",
  };

  return (
    <div className="team-wrapper">
      <h2 className="why-choose-us-title">Meet Our Team</h2>

      {/* Owner Section */}
      <div className="owner-section">
        <div className="owner-card">
          <div className="img-circle">
            <img
              src={owner.image}
              alt={`Profile of ${owner.name}`}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x300.png?text=Image+Not+Found";
              }}
            />
          </div>
          <h3>{owner.name}</h3>
          <p>{owner.bio}</p>
          <h4>{owner.role}</h4>
        </div>
      </div>

      {/* Team Members Slider */}
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div className="team-card-wrapper" key={index}>
            <div className="team-card">
              <div className="img-circle">
                <img
                  src={member.image}
                  alt={`Profile of ${member.name}`}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x300.png?text=Image+Not+Found";
                  }}
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
              <h4>{member.role}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
