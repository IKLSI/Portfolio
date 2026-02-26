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
            gap: { xs: 2, md: 3 },
          }}
        >
          {services.map(({ number, icon, title, description, tags }) => (
            <Box
              key={number}
              className="service-card"
              sx={{
                bgcolor: "background.default",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
                transition:
                  "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(143,68,253,0.3)",
                  boxShadow: "0 16px 48px rgba(143,68,253,0.12)",
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    bgcolor: "rgba(143,68,253,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "WanoQuin, sans-serif",
                    fontSize: "2.8rem",
                    color: "rgba(0,0,0,0.18)",
                    lineHeight: 1,
                  }}
                >
                  {number}
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: colors.dark,
                    mb: 1.5,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    color: colors.body,
                  }}
                >
                  {description}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.75,
                  mt: "auto",
                }}
              >
                {tags.map((tag) => (
                  <Typography
                    key={tag}
                    component="span"
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "primary.main",
                      bgcolor: "rgba(143,68,253,0.07)",
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "100px",
                      letterSpacing: "0.04em",
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
