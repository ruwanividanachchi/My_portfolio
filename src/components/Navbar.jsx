import { Navbar as BSNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Moon, Sun, Download } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const resumeUrl = "/resume.pdf";

  return (
    <BSNavbar expand="lg" fixed="top" className="glass py-3 shadow-sm">
      <Container>
        <BSNavbar.Brand href="#" className="fw-bold fs-4 accent-gradient">
          Ruwani.
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="navbar" />

        <BSNavbar.Collapse id="navbar">
          <Nav className="ms-auto align-items-center gap-4">
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>

            {/* Resume Button - Visible in both modes */}
            <Button 
              variant={theme === 'dark' ? "outline-light" : "outline-dark"} 
              href={resumeUrl} 
              target="_blank" 
              className="d-flex align-items-center gap-2"
            >
              <Download size={18} /> Resume
            </Button>

            {/* Theme Toggle - Visible in both modes */}
            <Button 
              variant="link" 
              onClick={toggleTheme} 
              className="p-2"
              style={{ color: theme === 'dark' ? '#e2e8f0' : '#0f172a' }}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;