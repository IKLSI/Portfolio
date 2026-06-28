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
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.09)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
              }}
            >
              {/* Chrome terminal */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  px: "16px",
                  py: "12px",
                  bgcolor: "rgba(0,0,0,0.03)",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {[["#ff5f57", "#e0443e"], ["#ffbd2e", "#dfa023"], ["#28c840", "#1faa34"]].map(
                  ([fill, stroke], i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 11,
                        height: 11,
                        borderRadius: "50%",
                        bgcolor: fill,
                        boxShadow: `inset 0 0 0 0.5px ${stroke}`,
                        flexShrink: 0,
                      }}
                    />
                  )
                )}
              </Box>

              {/* Contenu */}
              <Box
                sx={{
                  p: { xs: 3, md: "28px 32px 32px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flexGrow: 1,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: colors.dark,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
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

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mt: 0.5 }}>
                  {tags.map((tag) => (
                    <Typography
                      key={tag}
                      component="span"
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "primary.main",
                        bgcolor: "rgba(143,68,253,0.07)",
                        px: 1.1,
                        py: 0.4,
                        borderRadius: "6px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
