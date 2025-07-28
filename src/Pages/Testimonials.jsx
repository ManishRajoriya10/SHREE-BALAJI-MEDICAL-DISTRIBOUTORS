import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import '../App.css'

const testimonials = [
  {
    name: "Dr. Neha Sharma",
    clinic: "Sharma Clinic",
    location: "Agra, India",
    review: "Very reliable and fast service. Medicines are always genuine and well-packed.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    rating: 5
  },
  {
    name: "Rajeev Verma",
    clinic: "Verma Medicos",
    location: "Delhi, India",
    review: "Highly professional team. Best supplier for generic medicines.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    rating: 4
  },
  {
    name: "Dr. Sameer Khan",
    clinic: "Khan Health Care",
    location: "Jaipur, India",
    review: "Always on time delivery and responsive support. Impressed!",
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
              <Card className="h-100 shadow testimonial-card p-3">
                <div className="d-flex flex-column align-items-center">
                  <img src={item.image} alt={item.name} className="testimonial-image  rounded-circle mb-3"/>
                  <h5 className="mb-0">{item.name}</h5>
                  <small className="text-muted">{item.clinic}</small>
                  <small className="text-muted mb-2">{item.location}</small>
                </div>
                <CardBody>
                  <p className="text-muted fst-italic">"{item.review}"</p>
                  <div className="text-warning">
                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
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
