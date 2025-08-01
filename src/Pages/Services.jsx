import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    title: "Device Calibration & Repair",
    description: "Expert maintenance and calibration services for all medical devices.",
    icon: "🛠️",
  },
  {
    id: 2,
    title: "Free Home Delivery & Installation",
    description: "Doorstep delivery and professional setup of your medical devices.",
    icon: "🚚",
  },
  {
    id: 3,
    title: "Device Usage Training",
    description: "Comprehensive training sessions for patients and healthcare staff.",
    icon: "🎓",
  },
  {
    id: 4,
    title: "Medical Device Rental",
    description: "Affordable short-term rental options for high-cost devices.",
    icon: "📅",
  },
];

const Services = () => {
  React.useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      className="py-5 bg-light"
    
    >
      <Container  >
        <h2
          className="why-choose-us-title text-center mb-5 fw-bold"
          style={{ color: "#2c5282", fontSize: "2.5rem" }}
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p className="mb-3 text-center text-muted fs-5">Your One-Stop Solution for Medical Devices and Healthcare Services.</p>
        <Row className="g-4">
          {servicesData.map((service) => (
            <Col md={6} lg={3} key={service.id} className="p-3" data-aos="fade-up">
              <Card
                className="text-center w-100  border-0 shadow-sm service-card"
              >
                <div className="p-4">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "2.8rem",
                      color: "#38a169",
                    }}
                  >
                    {service.icon}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-semibold" style={{ color: "#2d3748" }}>
                      {service.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#4a5568", fontSize: "0.95rem" }}>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
