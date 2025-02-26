import * as React from "react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Testimonials() {
  return (
    <Container fluid className="py-3">
      {/* Section Title */}
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
        {/* Left Side Content */}
        <Col xs={12} md={5} className="text-left px-5">
          <div className="mb-4">
            <FaQuoteLeft
              className="text-danger"
              style={{ fontSize: "4rem", marginBottom: "1rem" }}
            />
            <h5
              className="d-inline-block mx-3"
              style={{ fontSize: "3.5rem", fontWeight: "bold" }}
            >
              What our <br /> students have to say
            </h5>
          </div>
          <p className="mb-4" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            More than 3000 students have been helped by <br /> Mentor-Mentee
            Program.
          </p>
        </Col>

        {/* Right Side: Testimonial Carousel */}
        <Col xs={12} md={7} className="d-flex justify-content-center">
          <div
            className="text-center position-relative"
            style={{ width: "100%", maxWidth: "850px" }}
          >
            <Carousel
              interval={3000}
              pause="hover"
              indicators={true}
              nextIcon={<FaChevronRight className="text-dark fs-3" />}
              prevIcon={<FaChevronLeft className="text-dark fs-3" />}
              className="testimonial-carousel"
            >
              {[...Array(3)].map((_, index) => (
                <Carousel.Item key={index}>
                  <Card
                    className="p-5 shadow-lg position-relative"
                    style={{
                      backgroundColor: "#a01212",
                      borderRadius: "1rem",
                      textAlign: "left",
                    }}
                  >
                    <h5
                      className="text-black fw-bold fs-9 position-absolute"
                      style={{
                        top: "1rem",
                        left: "1rem",
                        margin: 0,
                        padding: "0.5rem 1rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      What they say
                    </h5>

                    <Card.Body style={{ marginTop: "3rem" }}>
                      <blockquote className="blockquote mb-4">
                        <p className="text-white fs-5 fw-semibold">
                          “Studying at WOC is fun, the curriculum is complete,
                          the instructors are competent, and the assignments
                          given are also relevant to the current scope of work.”
                        </p>
                      </blockquote>
                      <footer>
                        <p className="text-white fw-bold mb-0 fs-5">Resky Fernanda</p>
                        <p className="text-white">Product Designer at Tokopedia</p>
                      </footer>
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
