import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { gsap } from "../../lib/gsap";
import { services } from "../../data/services";
import { colors } from "../../theme";

export const WhatIDoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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
      id="services"
      sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}
    >
      <Container>
        <Box className="services-header" sx={{ mb: { xs: 4, md: 7 } }}>
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
              What I Build
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
            MY SERVICES
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {services.map(({ title, description, tags }) => (
            <Box
              key={title}
              className="service-card"
              sx={{
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.07)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px rgba(17,12,34,0.06)",
              }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, md: "32px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  flexGrow: 1,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.25rem", md: "1.35rem" },
                    color: colors.dark,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.25,
                    whiteSpace: "pre-line",
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.88rem",
                    lineHeight: 1.85,
                    color: colors.body,
                    flexGrow: 1,
                  }}
                >
                  {description}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  px: { xs: 3.5, md: "32px" },
                  py: 2.25,
                  bgcolor: "#fafafb",
                  borderTop: "1px solid rgba(143,68,253,0.15)",
                }}
              >
                {tags.map((tag) => (
                  <Typography
                    key={tag}
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "primary.main",
                      bgcolor: "#fff",
                      border: "1px solid rgba(143,68,253,0.18)",
                      px: 1.25,
                      py: 0.5,
                      borderRadius: "8px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      "&::before": {
                        content: '""',
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        opacity: 0.6,
                      },
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
