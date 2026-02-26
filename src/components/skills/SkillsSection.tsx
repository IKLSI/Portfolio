import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { gsap } from "../../lib/gsap";
import { skills } from "../../data/skills";

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".skill-group", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
      id="skills"
      sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}
    >
      <Container>
        <Box className="skills-header" sx={{ mb: { xs: 4, md: 8 } }}>
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
                fontWeight: 500,
                color: "primary.main",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              My Tech Stack
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
            SKILLS & EXPERTISE
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: { xs: 1.5, md: 2.5 },
          }}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              className="skill-group"
              sx={{
                borderRadius: 4,
                p: { xs: 3, sm: 3.5 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                bgcolor: "background.default",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 36px rgba(143,68,253,0.14)",
                  borderColor: "rgba(143,68,253,0.25)",
                },
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{
                  width: 56,
                  height: 56,
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
