import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { FaEye } from 'react-icons/fa';
import faqImage from '../assets/FAQ/67Z_2201.w012.n001.28C.p6.28-Photoroom.png'
const FAQs = () => {
  // Placeholder image; replace with your actual image path
  

  return (
    <div className="faq-container py-5">
      <Container>
        <h2 className="why-choose-us-title   text-center mb-5 fw-bold">Frequently Asked Questions</h2>
        <Row className="align-items-start">
          <Col md={6} className="mb-4">
            <div className="faq-image-wrapper">
              <img
                src={faqImage}
                alt="Medical FAQs"
                className="FAQIMG FAQIMG-fluid " 
              />
            </div>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0" flush className="faq-accordion">
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>
                  <FaEye className="eye-icon me-3" />
                  Do you deliver across India?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we provide PAN India delivery for all medicines and products.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>
                  <FaEye className="eye-icon me-3" />
                  What types of medicines do you offer?
                </Accordion.Header>
                <Accordion.Body>
                  We deal in Generic, Ethical, and Ayurvedic medicines from certified companies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mb-3">
                <Accordion.Header>
                  <FaEye className="eye-icon me-3" />
                  Is there a minimum order quantity (MOQ)?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, certain products require a minimum order quantity. Please contact us for details.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mb-3">
                <Accordion.Header>
                  <FaEye className="eye-icon me-3" />
                  How long does delivery take?
                </Accordion.Header>
                <Accordion.Body>
                  Delivery typically takes 2 to 7 working days depending on your location.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mb-3">
                <Accordion.Header>
                  <FaEye className="eye-icon me-3" />
                  Do you provide GST bills?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we provide official GST invoices for every order.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQs;