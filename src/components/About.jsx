import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <Row className="align-items-center g-5">
        <Col lg={5}>
          <motion.img
            src="/images/ruwani-profile.png"
            alt="Ruwani Vidanachchi"
            className="img-fluid rounded-4 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
        </Col>

        <Col lg={7}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title display-5 fw-bold mb-4">About Me</h2>
            
            <p className="lead text-secondary mb-4">
              Final-year Information Technology student at Oulu University of Applied Sciences (GPA 4.25) with strong foundations in software engineering, backend and web development, and system-level programming.
            </p>

            <p>
              I have hands-on experience building production-style applications using 
              <strong> Python, JavaScript/TypeScript, Kotlin, REST APIs, databases, and Linux environments</strong>.
            </p>
            
            <p>
              Strong focus on clean code, testing, debugging, and problem solving. 
              Growing interest in secure software development, cloud platforms, and AI-assisted systems. 
              Highly motivated to learn and contribute to real-world engineering teams.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;