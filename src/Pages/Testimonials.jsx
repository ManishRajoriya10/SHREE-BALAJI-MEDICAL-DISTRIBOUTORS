// import React from 'react';
// import { Card, CardBody } from 'react-bootstrap';
// import { FaStar } from "react-icons/fa";
// import '../App.css'

// const testimonials = [
//   {
//     name: "Dr. Neha Sharma",
//     clinic: "Sharma Clinic",
//     location: "Agra, India",
//     review: "Very reliable and fast service. Medicines are always genuine and well-packed.",
//     image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     rating: 5
//   },
//   {
//     name: "Rajeev Verma",
//     clinic: "Verma Medicos",
//     location: "Delhi, India",
//     review: "Highly professional team. Best supplier for generic medicines.",
//     image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     rating: 4
//   },
//   {
//     name: "Dr. Sameer Khan",
//     clinic: "Khan Health Care",
//     location: "Jaipur, India",
//     review: "Always on time delivery and responsive support. Impressed!",
//     image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     rating: 5
//   }
// ];

// const Testimonials = () => {
//   return (
//     <div className="bg-light py-5">
//       <div className="container text-center">
//         <h2 className="why-choose-us-title mb-5">💬 What Our Customers Say</h2>
//         <div className="row">
//           {testimonials.map((item, idx) => (
//             <div className="col-md-4 mb-4 p-3" key={idx}>
//               <Card className="h-100 shadow testimonial-card p-3">
//                 <div className="d-flex flex-column align-items-center">
//                   <img src={item.image} alt={item.name} className="testimonial-image  rounded-circle mb-3"/>
//                   <h5 className="mb-0">{item.name}</h5>
//                   <small className="text-muted">{item.clinic}</small>
//                   <small className="text-muted mb-2">{item.location}</small>
//                 </div>
//                 <CardBody>
//                   <p className="text-muted fst-italic">"{item.review}"</p>
//                   <div className="text-warning">
//                     {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
//                   </div>
//                 </CardBody>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
 
import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import '../App.css';

const testimonials = [
  {
    name: "Dr. Neha Sharma",
    clinic: "Sharma Clinic",
    location: "Agra, India",
    review: "Exceptionally reliable and fast service. Medicines are always genuine, well-packed, and of top quality.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    rating: 5
  },
  {
    name: "Rajeev Verma",
    clinic: "Verma Medicos",
    location: "Delhi, India",
    review: "Highly professional team with an extensive range of generic medicines. Unmatched service quality.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    rating: 4
  },
  {
    name: "Dr. Sameer Khan",
    clinic: "Khan Health Care",
    location: "Jaipur, India",
    review: "Punctual delivery and outstanding customer support. A trusted partner in healthcare distribution.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="why-choose-us-title mb-5">💬 What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((item, idx) => (
            <div className="col-md-4 mb-4 p-3" key={idx}>
              <Card className="h-100 shadow testimonial-card p-4 border-0 rounded" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex align-items-center">
                  <div className="testimonial-image-wrapper">
                    <img src={item.image} alt={item.name} className="testimonial-image  " style={{ width: '120px', height: '120px', objectFit: 'cover', borderWidth: '4px' }} />
                  </div>
                  <div className="ms-4 flex-grow-1 text-start">
                    <h5 className="mb-0 font-weight-bold  Name">{item.name}</h5>
                    <small className="text-muted d-block">{item.clinic}</small>
                    <small className="text-muted d-block">{item.location}</small>
                    <div className="mt-2" style={{ borderBottom: '2px solid #007bff', width: '50px' }}></div>
                  </div>
                </div>
                <CardBody className="text-start mt-3">
                  <p className="text-muted fst-italic lead">" {item.review} "</p>
                  <div className="text-warning d-flex justify-content-start">
                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                    {[...Array(5 - item.rating)].map((_, i) => <FaStar key={i + 5} className="text-secondary" />)}
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;