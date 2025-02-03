import * as React from "react";
import { Card } from "react-bootstrap";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Testimonials() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Testimonials</h2>
      <div className="text-center mb-4">
        <span className="fa fa-quote-left" style={{ fontSize: '3rem', color: '#f00' }}></span>
        <h5 className="d-inline-block mx-3">What our students have to say</h5>
        <span className="fa fa-quote-right" style={{ fontSize: '3rem', color: '#f00' }}></span>
      </div>
      <p className="text-center mb-4">
        More than 3000 students have been helped by the Mentor-Mentee Program.
      </p>

      <Carousel
        plugins={[plugin.current]}
        className="w-100"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {[...Array(3)].map((_, index) => (
            <CarouselItem key={index}>
              <div className="card mb-3" style={{ borderRadius: '1rem' }}>
                <Card.Body className="p-4">
                  <blockquote className="blockquote">
                    <p className="mb-3">
                      “Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”
                    </p>
                    <footer className="blockquote-footer">
                      <strong>Resky Fernanda</strong> <br />
                      Product Designer at Tokopedia
                    </footer>
                  </blockquote>
                </Card.Body>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="position-absolute" style={{ left: '10px' }}>
          <FaArrowLeft />
        </CarouselPrevious>
        <CarouselNext className="position-absolute" style={{ right: '10px' }}>
          <FaArrowRight />
        </CarouselNext>
      </Carousel>
    </section>
  );
}

export default Testimonials;



