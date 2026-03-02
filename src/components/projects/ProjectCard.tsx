import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { colors } from "../../theme";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  liveLinkLabel?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  githubLink,
  liveLink,
  liveLinkLabel = "Live Demo",
  index,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: hovered
            ? "0 20px 48px rgba(0,0,0,0.18)"
            : "0 4px 16px rgba(0,0,0,0.07)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: 260,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: hovered ? "100%" : "100px",
            background: hovered
              ? `linear-gradient(to top, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.78) 55%, rgba(10,10,15,0.3) 100%)`
              : `linear-gradient(to top, rgba(10,10,15,0.9), rgba(10,10,15,0.3) 70%, transparent)`,
            transition: "height 0.4s ease, background 0.4s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 2.5,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  bgcolor: "rgba(143,68,253,0.22)",
                  color: colors.lilac,
                  border: "1px solid rgba(143,68,253,0.3)",
                  height: 20,
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                {title}
              </Typography>

              <Box
                sx={{
                  overflow: "hidden",
                  maxHeight: hovered ? "120px" : "0px",
                  transition: "max-height 0.4s ease",
                  mt: hovered ? 1 : 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.08)",
                fontFamily: "WanoQuin, sans-serif",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              overflow: "hidden",
              maxHeight: hovered ? "40px" : "0px",
              transition: "max-height 0.4s ease",
            }}
          >
            {githubLink && (
              <Box
                component="a"
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    color: "rgba(255,255,255,1)",
                    transform: "translateX(2px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  sx={{
                    width: 14,
                    height: 14,
                    filter: "invert(1)",
                    opacity: 0.7,
                    transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                GitHub
              </Box>
            )}
            {liveLink && (
              <Box
                component="a"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.4,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    color: "rgba(255,255,255,1)",
                    transform: "translateX(2px)",
                  },
                }}
              >
                ↗ {liveLinkLabel}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
