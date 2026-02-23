import { useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  githubLink,
  liveLink,
}: ProjectCardProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: 5 }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          overflow: "hidden",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "scale(1.05) rotateY(1.5deg)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
          },
        }}
        onMouseEnter={() => {
          if (overlayRef.current) overlayRef.current.style.opacity = "1";
        }}
        onMouseLeave={() => {
          if (overlayRef.current) overlayRef.current.style.opacity = "0";
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: 250,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />

        <Box
          ref={overlayRef}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 0,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            color: "#fff",
            opacity: 0,
            transition: "opacity 0.35s ease",
          }}
        >
          <Box
            sx={{
              position: "relative",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                mt: 1,
                mr: 1.5,
              }}
            >
              {technologies.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #6a00a3, #0050a3)",
                    color: "#fff",
                    borderRadius: "0.8rem",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                    height: "auto",
                    py: 0.5,
                  }}
                />
              ))}
            </Box>

            <Box sx={{ p: 1.5, textAlign: "left" }}>
              <Typography
                component="h5"
                sx={{ fontWeight: "bold", fontSize: "0.875rem", m: 0 }}
              >
                {title}
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 1.5,
              }}
            >
              <Typography
                component="p"
                sx={{
                  mb: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.4,
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  fontFamily: "Gill Sans, sans-serif",
                  m: 0,
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              {githubLink && (
                <IconButton
                  component="a"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  sx={{
                    bgcolor: "background.default",
                    boxShadow: 2,
                    "&:hover": { bgcolor: "background.paper" },
                  }}
                >
                  <Box
                    component="img"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github"
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
              )}
              {liveLink && (
                <IconButton
                  component="a"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  sx={{
                    bgcolor: "background.default",
                    boxShadow: 2,
                    "&:hover": { bgcolor: "background.paper" },
                  }}
                >
                  <Box
                    component="img"
                    src="https://cdn-icons-png.flaticon.com/512/841/841364.png"
                    alt="Live"
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
