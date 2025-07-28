import React, { useState } from "react";
import { Card, Button, Row, Col, Offcanvas } from "react-bootstrap";
import "../../App.css";
import nabulizer from "../../assets/Producs _list/machines/nabulizer1.webp";
import XrayMachine from "../../assets/Producs _list/machines/x-ray-machine1-255.jpg";
import CompleteBloodCount from "../../assets/Producs _list/machines/cbc.png";
import InfusionPump from "../../assets/Producs _list/machines/infusion pump.png";

const machinesData = [
  {
    id: 1,
    title: "Nebulizer",
    description: "Effective respiratory therapy machine.",
    image: nabulizer,
  },
  {
    id: 2,
    title: "X-ray Machine",
    description: "Advanced testing & X-ray.",
    image: XrayMachine,
  },
  {
    id: 3,
    title: " Complete Blood Count",
    description: "Automatic blood analysis for infections, anemia, and overall health check",
    image: CompleteBloodCount,
  },
  {
    id: 4,
    title: "Infusion Pump",
    description: "Automated IV fluid or drug delivery",
    image: InfusionPump,
  },
];

const Machines = () => {
  const [showCanvas, setShowCanvas] = useState(false); // State for Offcanvas

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  return (
    <Row>
      {machinesData.map((machine) => (
        <Col md={6} lg={3} key={machine.id} className="p-2">
          <Card className=" device-card h-100 p-2">
            <Card.Img
              variant="top"
              src={machine.image}
              height="200px"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{machine.title}</Card.Title>
              <Card.Text>{machine.description}</Card.Text>
              <Button variant="outline-primary" onClick={handleShow}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* 🛒 Offcanvas */}
      <Offcanvas show={showCanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Buy Now</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            <strong>Buy now is currently unavailable.</strong>
          </p>
          <p>Please contact us or WhatsApp to place your order.</p>
          <p>
            📞 <strong>+91-XXXXXXXXXX</strong>{" "}
            {/* Replace with actual number */}
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-2"
          >
            WhatsApp Us
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </Row>
  );
};

export default Machines;