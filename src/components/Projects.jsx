import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "HLC BIM Platform - HVAC Design Studio",
    category: "Web",
    description: "Currently developing a full-stack web-based HVAC Design Studio with real-time Heat Load Calculation. Features interactive 2D room layout design using Canvas API, dynamic heat load analysis, user authentication with Supabase, and professional engineering workflow.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Canvas API", "Google OAuth"],
    github: "https://github.com/t3idma00/hlc-bim-platform",
    live: "#",
    date: "March 2026 – Present"
  },
  {
    id: 2,
    title: "Smooth Transitions - Agentic AI Workflow Platform",
    category: "AI",
    description: "Currently researching and developing an AI-powered platform that enables seamless transitions between tasks, meetings, and digital/physical workspaces using Agentic AI to understand context and reduce cognitive overload.",
    tech: ["Agentic AI", "AI Research", "Task Management"],
    github: "https://github.com/Demola-Projects/team-2229",
    live: "#",
    date: "March 2026 – Present"
  },
  {
    id: 3,
    title: "AI-Assisted Job Application Tracker",
    category: "AI",
    description: "Developed a full-stack proof-of-concept web application that tracks job applications and uses AI (Google Gemini) to analyze job descriptions, extract required skills, calculate match scores, and generate personalized improvement suggestions.",
    tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "Recharts", "React Context"],
    github: "https://github.com/jmadusanka/job-application-tracker",
    live: "https://job-application-tracker-virid-eight.vercel.app/",
    date: "Jan 2026 – Feb 2026"
  },
  {
    id: 4,
    title: "Automated Distribution Warehouse - Robotics System",
    category: "Robotics",
    description: "Designed and implemented a distributed robotics simulation for warehouse automation. Integrated drones, cobots, and mobile robots that collaborate in real-time to fulfill orders using ROS.",
    tech: ["Python", "ROS", "Universal Robot Arm", "GoPiGo", "Tello EDU Drone"],
    github: "https://github.com/Robotics-project-2025-DIN23SP",
    live: "#",
    date: "Sep 2025 – Dec 2025"
  },
  {
    id: 5,
    title: "AstroTrack - Android Application",
    category: "Mobile",
    description: "Built a native Android educational application that fetches real-time space and astronomy data from NASA APIs. Implemented secure authentication, background processing with WorkManager, and clean MVVM architecture using Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "REST API", "MVVM", "WorkManager", "NASA API"],
    github: "https://github.com/t3komu00/Mobile-App-Group-7",
    live: "#",
    date: "Mar 2025 – Apr 2025"
  },
  {
    id: 6,
    title: "OAMKINO - Full-Stack Movie Application",
    category: "Web",
    description: "Developed a complete full-stack movie information and booking platform with secure user authentication, RESTful backend, and external API integration (Finnkino).",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Finnkino API"],
    github: "https://github.com/HelmiGr/OAMKINO-Client",
    live: "#",
    date: "Oct 2024 – Dec 2024"
  },
  {
    id: 7,
    title: "Travel Blog Website",
    category: "Web",
    description: "Created a fully functional database-driven blog platform with user authentication, content management system (CRUD), and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/t3weja00/travelblog",
    live: "#",
    date: "Mar 2024 – May 2024"
  }
];

const Projects = ({ filter, setFilter }) => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === filter));
    }
  }, [filter]);

  const categories = ['All', 'Web', 'Mobile', 'AI', 'Robotics'];

  return (
    <section id="projects" className="py-5">
      <Container>
        <motion.h2 
          className="text-center mb-5 display-5 fw-bold accent-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "primary" : "outline-light"}
              onClick={() => setFilter(cat)}
              className="px-4 py-2"
            >
              {cat}
            </Button>
          ))}
        </div>

        <Row className="g-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <Col md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Card className="project-card glass h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Badge bg="primary" className="px-3 py-2">{project.category}</Badge>
                        <small style={{ color: 'var(--text-secondary)' }}>{project.date}</small>
                      </div>

                      <Card.Title className="fs-4 fw-bold mb-3" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </Card.Title>
                      <Card.Text className="flex-grow-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </Card.Text>

                      <div className="mb-4">
                        {project.tech.map((t, i) => (
                          <Badge key={i} bg="secondary" className="me-1 mb-1">{t}</Badge>
                        ))}
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        <Button 
                          variant="outline-light" 
                          size="sm" 
                          href={project.github} 
                          target="_blank"
                          className="d-flex align-items-center gap-2"
                        >
                          <FaGithub size={18} /> GitHub
                        </Button>

                        {project.live && project.live !== "#" && (
                          <Button 
                            variant="primary" 
                            size="sm" 
                            href={project.live} 
                            target="_blank"
                            className="d-flex align-items-center gap-2"
                          >
                            Live Demo <ExternalLink size={18} />
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;