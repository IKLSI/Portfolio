import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { projects } from "../../data/projects";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="projects"
      sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}
    >
      <Container>
        <Box className="projects-header" sx={{ mb: { xs: 4, md: 7 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <Box
              sx={{
                width: 3,
                height: 20,
                bgcolor: "primary.main",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "primary.main",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Selected Work
            </Typography>
          </Box>
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            PROJECTS
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              technologies={project.technologies || []}
              onOpen={() => openProject(i)}
            />
          ))}
        </Grid>
      </Container>

      <ProjectModal
        projects={projects}
        index={selectedIndex}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setSelectedIndex}
      />
    </Box>
  );
}

export default ProjectsSection;
