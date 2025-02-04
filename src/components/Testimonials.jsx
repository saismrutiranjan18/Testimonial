import * as React from "react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export function Testimonials() {
  return (
    <Container
      fluid
      className="py-5"
      style={{ fontFamily: 'Inter, sans-serif' }}  // Applied Inter font here
    >
      <h2
        className="text-center mb-4 fw-bold"
        style={{ fontSize: "3rem", fontFamily: 'Inter, sans-serif' }}  // Applied Inter font to h2
      >
        Testimonials
      </h2>
      <div
        className="text-center"
        style={{
          borderBottom: "4px solid red",
          width: "10%",
          margin: "0 auto",
        }}
      ></div>

      <Row className="align-items-center mt-5">
        <Col xs={12} md={4} className="text-left px-5">
          <div className="mb-4">
            <FaQuoteLeft className="text-danger" style={{ fontSize: "3rem" }} />
            <h5
              className="d-inline-block mx-3"
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
              What our students have to say
            </h5>
          </div>
          <p className="mb-4">
            More than 3000 students have been helped by the Mentor-Mentee Program.
          </p>
        </Col>
        <Col xs={12} md={8} style={{ fontSize: "1.5rem", padding: "0 2rem" }}>
          <Carousel interval={3000} pause="hover">
            {[...Array(3)].map((_, index) => (
              <Carousel.Item key={index}>
                <Card className="mb-3 shadow-sm" style={{ borderRadius: "1rem" }}>
                  <Card.Body className="p-4">
                    <blockquote className="blockquote text-center">
                      <p className="mb-3">
                        “Studying at WOC is fun, the curriculum is complete, the
                        instructors are competent, and the assignments given are
                        also relevant to the current scope of work.”
                      </p>
                      <footer className="blockquote-footer">
                        <strong>Resky Fernanda</strong> <br />
                        Product Designer at Tokopedia
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
