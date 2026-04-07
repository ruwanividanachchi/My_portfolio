import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => (
  <section id="skills" className="py-5">
    <Container>
      <h2 className="section-title text-center display-5 fw-bold mb-5 accent-gradient">
        Skills
      </h2>

      <Row className="g-4">
        {/* Languages & Frameworks */}
        <Col lg={4}>
          <div className="glass p-4 h-100">
            <h5 className="mb-4">Languages & Frameworks</h5>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2"><span>JavaScript / TypeScript</span><small>90%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"90%"}} viewport={{once:true}} /></div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2"><span>Python</span><small>85%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"85%"}} viewport={{once:true}} /></div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2"><span>Kotlin</span><small>80%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"80%"}} viewport={{once:true}} /></div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2"><span>React / Next.js</span><small>88%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"88%"}} viewport={{once:true}} /></div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2"><span>Node.js & Express</span><small>82%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"82%"}} viewport={{once:true}} /></div>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-2"><span>Android (Jetpack Compose)</span><small>78%</small></div>
              <div className="skill-bar"><motion.div className="skill-progress" initial={{width:0}} whileInView={{width:"78%"}} viewport={{once:true}} /></div>
            </div>
          </div>
        </Col>

        {/* Tools & Platforms */}
        <Col lg={4}>
          <div className="glass p-4 h-100">
            <h5 className="mb-4">Tools & Platforms</h5>
            <ul className="list-unstyled">
              <li className="mb-3">• PostgreSQL</li>
              <li className="mb-3">• Firebase</li>
              <li className="mb-3">• ROS (Robotics Operating System)</li>
              <li className="mb-3">• Git & Linux</li>
              <li className="mb-3">• Android Studio</li>
              <li className="mb-3">• AWS (Generative AI)</li>
              <li className="mb-3">• Supabase</li>
            </ul>
          </div>
        </Col>

        {/* Development Practices */}
        <Col lg={4}>
          <div className="glass p-4 h-100">
            <h5 className="mb-4">Development Practices</h5>
            <ul className="list-unstyled">
              <li className="mb-3">• Agile / Scrum</li>
              <li className="mb-3">• REST API Development</li>
              <li className="mb-3">• Clean Code & Testing</li>
              <li className="mb-3">• Modular Architecture</li>
              <li className="mb-3">• AI-assisted Workflows</li>
              <li className="mb-3">• Technical Documentation</li>
              <li className="mb-3">• Data Analysis & Visualization</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Skills;