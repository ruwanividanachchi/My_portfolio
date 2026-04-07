import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="py-5 text-center border-top border-secondary">
    <Container>
      <p>&copy; 2026 Ruwani Vidanachchi. All Rights Reserved.</p>
      <p className="text-secondary small">
        Built with React, Bootstrap & Framer Motion • Hosted on Vercel
      </p>
    </Container>
  </footer>
);

export default Footer;