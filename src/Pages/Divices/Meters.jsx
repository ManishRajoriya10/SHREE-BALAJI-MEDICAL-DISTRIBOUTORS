import React, { useState } from "react";
import { Card, Button, Row, Col, Offcanvas, Container } from "react-bootstrap";
import '../../App.css';

// 🖼️ Images
import Glucometer from '../../assets/Producs _list/metters/glucometter.png';
import BPMonitor from '../../assets/Producs _list/metters/bpmiiter4.jpg';
import PulsiOximetter from '../../assets/Producs _list/metters/oximetter2.jpg';
import Thermometer from '../../assets/Producs _list/metters/thermometter.png';
import CholesterolMeter from '../../assets/Producs _list/metters/cholostrol.png';
import UricAcidMeter from '../../assets/Producs _list/metters/bone check.png';
import HemoglobinMeter from '../../assets/Producs _list/metters/hemoglobin.png';
import PeakFlowMeter from '../../assets/Producs _list/metters/peak flow metter.png';

// 📦 Devices Data
const metersData = [
  {
    id: 1,
    title: "Glucometer",
    description: "Check blood sugar levels instantly.",
    image:   Glucometer
  },
  {
    id: 2,
    title: "BP Monitor",
    description: "Monitor blood pressure with ease.",
    image: BPMonitor,
  },
  {
    id: 3,
    title: "Pulsi-Oximeter",
    description: "For checking your pulse accurately.",
    image: PulsiOximetter,
  },
  {
    id: 4,
    title: "Thermometer",
    description: "Check body temperature accurately",
    image: Thermometer,
  },
  {
    id: 5,
    title: "Cholesterol Meter",
    description: "Check HDL, LDL, Triglycerides,  cholesterol",
    image: CholesterolMeter,
  },
  {
    id: 6,
    title: "Uric Acid Meter	",
    description: "Detect high uric acid levels to prevent gout",
    image: UricAcidMeter	,
  },
  {
    id: 7,
    title: "Hemoglobin Meter",
    description: "Detect anemia quickly",
    image: HemoglobinMeter		,
  },
  {
    id: 8,
    title: "Peak Flow Meter	",
    description: "Asthma patients' lung capacity",
    image: PeakFlowMeter			,
  },
];

const Meters = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  return (
    <>
    <Container> 
      <Row  >
        {metersData?.map((meter) => (
          <Col key={meter.id} xs={12} sm={6} md={4} lg={3} className="p-2" >
            <Card className="h-100 device-card w-100 text-center p-2">
              <Card.Img
                variant="top"
                src={meter.image}
                height="200px"
                style={{ objectFit: "contain ", width:'100%' }}
              />
              <Card.Body>
                <Card.Title>{meter.title}</Card.Title>
                <Card.Text>{meter.description}</Card.Text>
                <Button variant="outline-primary" onClick={handleShow}>
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

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
            📞 <strong>+91-XXXXXXXXXX</strong>
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-2"
          >
            WhatsApp Us
          </a>
        </Offcanvas.Body>
      </Offcanvas>

      </Container>
    </>
  );
};

export default Meters;
