import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { career } from "../../data/career";
import { colors } from "../../theme";

const INACTIVE = [
  { x: -26, y: 14,  rotate: -8  },
  { x:  22, y: -10, rotate:  6  },
  { x: -16, y: 18,  rotate: -4  },
  { x:  24, y:  6,  rotate:  9  },
];

const TAPE_ANGLES = [-2, 3, -1.5, 2.5];

export const CareerTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

      ScrollTrigger.create({
        trigger: ".timeline-container",
        start: "top 70%",
        end: "bottom 70%",
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * career.length),
            career.length - 1
          );
          setActiveIndex(index);
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
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 0, md: 8 },
            alignItems: "start",
          }}
        >
          <Box
            className="timeline-container"
            sx={{ position: "relative", pl: { xs: 5, md: 7 } }}
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
                className={`timeline-item timeline-item-${index}`}
                sx={{ position: "relative", mb: index < career.length - 1 ? 6 : 0 }}
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
                    bgcolor: item.type === "work" ? "primary.main" : "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                    zIndex: 2,
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
                  <Typography sx={{ fontSize: "0.75rem", color: colors.muted, letterSpacing: "0.05em" }}>
                    {item.period}
                  </Typography>
                  <Chip
                    icon={
                      item.type === "work"
                        ? <WorkOutlineIcon sx={{ fontSize: "0.7rem !important" }} />
                        : <SchoolOutlinedIcon sx={{ fontSize: "0.7rem !important" }} />
                    }
                    label={item.type === "work" ? "Work" : "Education"}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      bgcolor: item.type === "work" ? "rgba(143,68,253,0.08)" : "rgba(13,110,253,0.08)",
                      color: item.type === "work" ? "#7a35e8" : "secondary.main",
                      border: `1px solid ${item.type === "work" ? "rgba(143,68,253,0.2)" : "rgba(13,110,253,0.2)"}`,
                      "& .MuiChip-icon": {
                        color: item.type === "work" ? "#7a35e8" : "secondary.main",
                        ml: 0.5,
                      },
                    }}
                  />
                </Box>

                <Typography
                  component="h4"
                  sx={{ fontWeight: 700, fontSize: "1rem", color: colors.dark, mb: 0.25, letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.82rem", fontWeight: 600, color: "primary.main", mb: 1 }}>
                  {item.subtitle}
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", lineHeight: 1.75, color: colors.body, maxWidth: 520 }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              position: "sticky",
              top: "120px",
              height: "460px",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "340px",
                height: "280px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(0,0,0,0.07) 0%, transparent 72%)",
                left: "50%",
                top: "58%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              },
            }}
          >
            {career.map((item, i) => {
              const isActive = activeIndex === i;
              const state = INACTIVE[i];
              const dist = Math.abs(activeIndex - i);
              const zIndex = isActive ? 10 : Math.max(1, 4 - dist);

              return (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "260px",
                    zIndex,
                    transform: isActive
                      ? "translate(-50%, -50%) rotate(0deg) scale(1)"
                      : `translate(calc(-50% + ${state.x}px), calc(-50% + ${state.y}px)) rotate(${state.rotate}deg) scale(0.93)`,
                    transition: "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease",
                    willChange: "transform",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      left: "50%",
                      width: 64,
                      height: 20,
                      bgcolor: "rgba(255,238,170,0.82)",
                      transform: `translateX(-50%) rotate(${TAPE_ANGLES[i]}deg)`,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      zIndex: 2,
                      /* lignes de texture ruban */
                      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 3px, transparent 3px, transparent 7px)",
                    }}
                  />

                  <Box
                    sx={{
                      bgcolor: "#fefefe",
                      p: "10px 10px 48px",
                      boxShadow: isActive
                        ? "0 24px 64px rgba(0,0,0,0.24), 0 6px 20px rgba(0,0,0,0.14)"
                        : "0 8px 28px rgba(0,0,0,0.13)",
                      transition: "box-shadow 0.5s ease",
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.subtitle}
                        sx={{
                          width: "100%",
                          height: "190px",
                          objectFit: "cover",
                          display: "block",
                          filter: isActive ? "none" : "brightness(0.8) saturate(0.85)",
                          transition: "filter 0.55s ease",
                        }}
                      />
                    </Box>

                    <Box sx={{ textAlign: "center", pt: "10px", px: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#1a1a1a",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          color: "#aaa",
                          mt: 0.3,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.period}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerTimeline;
