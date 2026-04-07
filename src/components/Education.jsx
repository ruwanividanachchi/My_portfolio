import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Education = () => (
  <section id="education" className="py-5">
    <Container>
      <h2 className="section-title text-center display-5 fw-bold mb-5 accent-gradient">
        Education
      </h2>
      <div className="glass p-5 rounded-4">
        <h3>Bachelor of Engineering (BEng) in Information Technology</h3>
        <p className="text-primary fs-5">Oulu University of Applied Sciences, Finland</p>
        <p><strong>Aug 2023 – July 2026</strong> | Current GPA: 4.25 / 5.0</p>
        <p><strong>Specialization:</strong> Web Development</p>
        <p className="mt-3">
          Relevant courses: Software Engineering, Mobile Development, Cloud Services, IoT Applications, 
          Data Storage & Analysis, Operating Systems, Advanced Web Applications, Applied Mathematics & Physics.
        </p>
      </div>
    </Container>
  </section>
);

export default Education;