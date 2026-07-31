import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const greeting = "Hi,";
  const name = "I'm Ruwani Vidanachchi";
  const title = "Software Engineer";
  const description = "Bachelor of Engineering graduate from Oulu University of Applied Sciences with strong skills in full-stack development, cloud services, and AI-assisted applications. Actively seeking Graduate Software Engineer and Full-Stack Developer opportunities.";

  return (
    <section className="min-vh-100 d-flex align-items-center pt-5" id="hero">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Typing Effects */}
          <div className="mb-3" style={{ minHeight: "90px" }}>
            <h1 className="display-2 fw-bold">
              {greeting.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.06, delay: 0.4 + index * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}

              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                &nbsp;
              </motion.span>

              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.06, delay: 1.6 + index * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="mb-5" style={{ minHeight: "70px" }}>
            <motion.p 
              className="lead fs-3 text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            >
              {title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.07, delay: 4.1 + index * 0.045 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="mb-5" style={{ minHeight: "140px" }}>
            <motion.p 
              className="fs-5 text-secondary"
              style={{ maxWidth: "720px", margin: "0 auto", lineHeight: "1.65" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }}
            >
              {description.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.07, delay: 6.9 + index * 0.045 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
            <Button variant="primary" size="lg" href="#projects" className="px-5">
              View My Projects <ArrowRight className="ms-2" />
            </Button>
            <Button variant="outline-light" size="lg" href="#contact">
              Contact Me
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mt-5 d-flex justify-content-center gap-5">
            <a 
              href="https://github.com/ruwanividanachchi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={36} />
            </a>
            
            <a 
              href="https://linkedin.com/in/ruwani-vidanachchi-815ab0294" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={36} />
            </a>
            
            <a 
              href="mailto:ruwanividanachchi@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope size={36} />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;