import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { gsap } from "../../lib/gsap";
import { career } from "../../data/career";
import { colors } from "../../theme";

export const CareerTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(".timeline-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 85%",
          scrub: 1,
        },
      });

      gsap.from(".timeline-item", {
        opacity: 0,
        x: -24,
        duration: 0.6,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".timeline-dot", {
        scale: 0,
        duration: 0.4,
        stagger: 0.18,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 72%",
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
      id="career"
      sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}
    >
      <Container>
        <Box className="timeline-header" sx={{ mb: { xs: 4, md: 7 } }}>
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
              My Journey
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
            EXPERIENCE & EDUCATION
          </Typography>
        </Box>

        <Box
          className="timeline-container"
          sx={{
            maxWidth: 660,
            mx: "auto",
            position: "relative",
            pl: { xs: 5, md: 7 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: { xs: 18, md: 24 },
              top: 8,
              bottom: 8,
              width: "1px",
              bgcolor: "rgba(0,0,0,0.08)",
            }}
          />
          <Box
            className="timeline-progress"
            sx={{
              position: "absolute",
              left: { xs: 18, md: 24 },
              top: 8,
              width: "1px",
              height: "0%",
              bgcolor: "primary.main",
              zIndex: 1,
            }}
          />

          {career.map((item, index) => (
            <Box
              key={index}
              className="timeline-item"
              sx={{
                position: "relative",
                mb: index < career.length - 1 ? 6 : 0,
              }}
            >
              <Box
                className="timeline-dot"
                sx={{
                  position: "absolute",
                  left: { xs: -32, md: -38 },
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor:
                    item.type === "work"
                      ? "primary.main"
                      : "background.default",
                  border: "2px solid",
                  borderColor: "primary.main",
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 0.75,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: colors.muted,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.period}
                </Typography>
                <Chip
                  icon={
                    item.type === "work" ? (
                      <WorkOutlineIcon sx={{ fontSize: "0.7rem !important" }} />
                    ) : (
                      <SchoolOutlinedIcon
                        sx={{ fontSize: "0.7rem !important" }}
                      />
                    )
                  }
                  label={item.type === "work" ? "Work" : "Education"}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    bgcolor:
                      item.type === "work"
                        ? "rgba(143,68,253,0.08)"
                        : "rgba(13,110,253,0.08)",
                    color: item.type === "work" ? "#7a35e8" : "secondary.main",
                    border: `1px solid ${item.type === "work" ? "rgba(143,68,253,0.2)" : "rgba(13,110,253,0.2)"}`,
                    "& .MuiChip-icon": {
                      color:
                        item.type === "work" ? "#7a35e8" : "secondary.main",
                      ml: 0.5,
                    },
                  }}
                />
              </Box>

              <Typography
                component="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: colors.dark,
                  mb: 0.25,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                {item.subtitle}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: colors.body,
                  maxWidth: 520,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CareerTimeline;
