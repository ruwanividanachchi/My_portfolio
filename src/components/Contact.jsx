import { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_q4xs11r',
      'template_gl9d5bk',
      form.current,
      '2JJGm5mySAfAs6O1E'
    )
      .then(() => {
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent successfully! I will reply to you soon.' 
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus({ 
          type: 'danger', 
          message: '❌ Failed to send message. Please try again later.' 
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="section-title text-center display-5 fw-bold mb-5 accent-gradient">
          Get In Touch
        </h2>

        <Row className="g-5">
          {/* Contact Info */}
          <Col md={5}>
            <div className="glass p-5 h-100">
              <h4 className="mb-4" style={{ color: 'var(--text)' }}>Contact Information</h4>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3">
                  <Mail size={26} className="text-primary mt-1" />
                  <div>
                    <strong style={{ color: 'var(--text)' }}>Email</strong><br />
                    <a 
                      href="mailto:ruwanividanachchi@gmail.com" 
                      className="text-decoration-none"
                      style={{ color: 'var(--accent)' }}
                    >
                      ruwanividanachchi@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Phone size={26} className="text-primary mt-1" />
                  <div>
                    <strong style={{ color: 'var(--text)' }}>Phone</strong><br />
                    <span style={{ color: 'var(--text)' }}>+358 417 270 289</span>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <MapPin size={26} className="text-primary mt-1" />
                  <div>
                    <strong style={{ color: 'var(--text)' }}>Location</strong><br />
                    <span style={{ color: 'var(--text)' }}>Oulu, Finland</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <div className="glass p-5">
              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--text)' }}>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--text)' }}>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="your@email.com" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: 'var(--text)' }}>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={6} 
                    name="message" 
                    placeholder="Write your message here..." 
                    required 
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-3 fw-bold"
                  disabled={loading}
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;