import { useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { gsap } from "../../lib/gsap";
import ProfilImage from "../../assets/img/Presentation.jpeg";
import { colors } from "../../theme";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".hero-tag", { opacity: 0, y: 20, duration: 0.5 })
        .from(
          ".hero-name-line",
          {
            opacity: 0,
            y: 60,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(".hero-role", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-bio", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(
          ".hero-btn",
          { opacity: 0, y: 20, duration: 0.4, stagger: 0.1 },
          "-=0.2",
        )
        .from(
          ".hero-photo-ring",
          { opacity: 0, scale: 0.85, duration: 0.9, ease: "back.out(1.2)" },
          "-=0.8",
        )
        .from(
          ".hero-social",
          { opacity: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3",
        )
        .from(".scroll-indicator", { opacity: 0, duration: 0.5 }, "-=0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={heroRef}
      id="home"
      component="section"
      sx={{
        minHeight: "calc(100vh - 64px)",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 0 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: { md: "0 0 58%" },
              pr: { md: 8 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {["KYLIANN", "LEVESQUE"].map((word) => (
              <Typography
                key={word}
                component="span"
                className="hero-name-line"
                sx={{
                  display: "block",
                  fontFamily: "Monument",
                  fontSize: { xs: "3.2rem", sm: "4.5rem", md: "6rem" },
                  lineHeight: 0.98,
                  color: colors.dark,
                  letterSpacing: "0.04em",
                }}
              >
                {word}
              </Typography>
            ))}

            <Typography
              className="hero-role"
              sx={{
                mt: 2.5,
                fontSize: "0.85rem",
                fontWeight: 500,
                color: colors.dark,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack Engineer · React & .NET
            </Typography>

            <Typography
              className="hero-bio"
              sx={{
                mt: 2.5,
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: colors.body,
                maxWidth: { xs: "100%", md: 450 },
              }}
            >
              I develop{" "}
              <Box
                component="span"
                sx={{ color: colors.lavender, fontWeight: 600 }}
              >
                clean, scalable applications
              </Box>{" "}
              that integrate robust back-end architectures with{" "}
              <Box
                component="span"
                sx={{ color: colors.lavender, fontWeight: 600 }}
              >
                intuitive, user-centred
              </Box>{" "}
              front-end experiences.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { md: "0 0 42%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="hero-photo-ring"
              sx={{
                width: { xs: 220, md: 300 },
                height: { xs: 220, md: 300 },
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8f44fd 0%, #0d6efd 100%)",
                padding: "3px",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={ProfilImage}
                  alt="Kyliann Levesque"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        className="scroll-indicator"
        sx={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 0.8,
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: colors.lilac,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </Typography>
        <Box className="scroll-line" />
      </Box>
    </Box>
  );
};
