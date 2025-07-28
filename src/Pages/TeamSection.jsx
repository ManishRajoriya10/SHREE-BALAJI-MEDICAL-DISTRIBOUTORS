// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../App.css'; // Advanced styling

// const teamMembers = [
//   {
//     name: "Alex Smith",
//     role: "Creative Leader",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "May Brown",
//     role: "Sales Manager",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Ann Richmond",
//     role: "Web Developer",
//     image: "https://randomuser.me/api/portraits/women/47.jpg",
//   },
//   {
//     name: "Roxie Swanson",
//     role: "Web Designer",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//   },
//   {
//     name: "Rajeev Saini",
//     role: "Pharma Advisor",
//     image: "https://randomuser.me/api/portraits/men/61.jpg",
//   },
// ];

// const TeamSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     centerMode: true,
//     centerPadding: "0px",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   };

//   return (
//     <div className="team-wrapper">
//       <h2 className="medicines_title ">Meet Our Team</h2>
//       <Slider {...settings}>
//         {teamMembers.map((member, index) => (
//           <div className="team-card-wrapper" key={index}>
//             <div className="team-card">
//               <div className="img-circle">
//                 <img
//                   src={member.image}
//                   alt={`Profile of ${member.name}`}
//                   onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} // Fallback image
//                 />
//               </div>
//               <h3>{member.name}</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//               <h4>{member.role}</h4>
//               <div className="social-icons">
//                 <i className="fab fa-facebook-f" aria-label="Facebook"></i>
//                 <i className="fab fa-twitter" aria-label="Twitter"></i>
//                 <i className="fab fa-instagram" aria-label="Instagram"></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TeamSection;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Owner from "../assets/Meet Our Teem Image/opm.jpg";
import manoj from '../assets/Meet Our Teem Image/Manoj.jpg';
import Goutam from '../assets/Meet Our Teem Image/Goutam.jpg';
import Manish from '../assets/Meet Our Teem Image/Manish.jpg'

const teamMembers = [
  {
    name: "Drx Manoj",
    role: "Manager",
    image: manoj,
  },
  {
    name: "Drx Goutam",
    role: "Inventory Management",
    image: Goutam
  },
  {
    name: "Manish",
    role: "Account Manager",
    image: Manish, 
  },
  
 
];

const TeamSection = () => {
  const settings = {
    dots: true, // Added dots for navigation
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
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
      <h2 className="why-choose-us-title  ">Meet Our Team</h2>
      <div className="owner-section">
        <div className="owner-card">
          <div className="img-circle">
            <img
              src={owner.image}
              alt={`Profile of ${owner.name}`}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x300.png?text=Image+Not+Found";
              }}
            />
          </div>
          <h3>{owner.name}</h3>
          <p>{owner.bio}</p>
          <h4>{owner.role}</h4>
          {/* <div className="social-icons">
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
            <i className="fab fa-twitter" aria-label="Twitter"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
          </div> */}
        </div>
      </div>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div className="team-card-wrapper" key={index}>
            <div className="team-card">
              <div className="img-circle">
                <img
                  src={member.image}
                  alt={`Profile of ${member.name}`}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300.png?text=Image+Not+Found";
                  }}
                />
              </div>
              <h3>{member.name}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <h4>{member.role}</h4>
              {/* <div className="social-icons">
                <i className="fab fa-facebook-f" aria-label="Facebook"></i>
                <i className="fab fa-twitter" aria-label="Twitter"></i>
                <i className="fab fa-instagram" aria-label="Instagram"></i>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
