import * as React from "react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
  return (
    <Container fluid className="py-3">
      <h2 className="text-center mb-4 fw-bold" style={{ fontSize: "3rem" }}>
        Testimonials
      </h2>
      <div
        className="text-center"
        style={{
          borderBottom: "0.25rem solid #a01212",
          width: "25%",
          margin: "0 auto",
        }}
      ></div>

      <Row className="align-items-center mt-5">
        <Col xs={12} md={5} className="text-left px-5">
          <div className="mb-4">
            <FaQuoteLeft className="text-danger" style={{ fontSize: "4rem" }} />{" "}
            {/* Increased icon size */}
            <h5
              className="d-inline-block mx-3"
              style={{ fontSize: "3.5rem", fontWeight: "bold" }} // Increased font size
            >
              What our <br /> students have to say
            </h5>
          </div>
          <p className="mb-4" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            {" "}
            {/* Increased font size */}
            More than 3000 students have been helped by <br /> Mentor-Mentee
            Program.
          </p>
        </Col>

        <Col xs={12} md={7} className="d-flex justify-content-center">
          <div
            className="text-center"
            style={{ width: "100%", maxWidth: "750px" }}
          >
            <Carousel
              interval={3000}
              pause="hover"
              style={{
                backgroundColor: "#f8d7da",
                height: "25rem",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              {[...Array(3)].map((_, index) => (
                <Carousel.Item key={index}>
                  <Card
                    className="mb-3 shadow-sm"
                    style={{ borderRadius: "1rem" }}
                  >
                    <Card.Body className="p-4">
                      <blockquote className="blockquote text-center">
                        <p className="mb-3">
                          “Studying at WOC is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
