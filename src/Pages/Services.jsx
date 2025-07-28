import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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
  return (
    <section className="py-5" style={{ backgroundColor: "#f7fafc" }}>
      <Container>
        <h2 className="why-choose-us-title text-center mb-5 fw-bold" style={{ color: "#2c5282", fontSize: "2.5rem" }}>
          Our Services
        </h2>
        <Row className="g-4">
          {servicesData.map((service) => (
            <Col md={6} lg={3} key={service.id} className="p-3">
              <Card
                className="text-center h-100 border-0 shadow-sm"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >
                <div className="p-4">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "2.5rem",
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
