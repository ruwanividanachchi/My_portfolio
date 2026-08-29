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
              Bachelor of Engineering (Information Technology) graduate from Oulu University of Applied Sciences with strong software engineering skills in backend development, web technologies, cloud services, and mobile applications.
            </p>

            <p>
              Experienced in designing and building full-stack applications using 
              <strong> JavaScript, Python, TypeScript, React, Next.js, Kotlin, PostgreSQL, and REST APIs</strong>.
            </p>
            
            <p>
              Passionate about clean code, scalable software, cloud technologies, AI-assisted applications, and solving real-world engineering problems. 
              Actively seeking Graduate Software Engineer and Full-Stack Developer opportunities.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;