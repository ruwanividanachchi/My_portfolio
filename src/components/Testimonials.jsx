import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Testimonials = () => (
  <section className="py-5">
    <Container>
      <h2 className="section-title text-center display-5 fw-bold mb-5 accent-gradient">
        Reference
      </h2>

      <Row className="justify-content-center">
        <Col md={9} lg={7}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-0 p-5 text-center">
              <Card.Body>
                <div className="mb-4">
                  <h4 className="mb-2" style={{ color: 'var(--text)' }}>
                    Meija Lohiniva
                  </h4>
                  <p className="mb-1 fs-5" style={{ color: 'var(--primary)' }}>
                    Senior Lecturer & International Academic Coordinator
                  </p>
                  <p className="text-secondary">
                    Oulu University of Applied Sciences, Finland
                  </p>
                </div>

                <hr className="border-secondary my-4" />

                <div>
                  <p className="mb-3" style={{ color: 'var(--text)' }}>
                    <strong>Contact Information</strong>
                  </p>
                  <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Phone: <span style={{ color: 'var(--text)' }}>+358 50 562 77 98</span>
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Email: {' '}
                    <a 
                      href="mailto:meija.lohiniva@oamk.fi" 
                      className="text-decoration-none"
                      style={{ color: 'var(--accent)' }}
                    >
                      meija.lohiniva@oamk.fi
                    </a>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;