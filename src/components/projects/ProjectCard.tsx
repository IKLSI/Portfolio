import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { colors } from "../../theme";

interface ProjectCardProps {
  title: string;
  image: string;
  technologies?: string[];
  onOpen: () => void;
}

export default function ProjectCard({
  title,
  image,
  technologies = [],
  onOpen,
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
          boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        }}
      >
        <IconButton
          onClick={onOpen}
          aria-label={`Voir le détail de ${title}`}
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 2,
            width: 40,
            height: 40,
            color: "#fff",
            bgcolor: "rgba(10,10,15,0.75)",
            border: "1px solid rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translate(0, 0) scale(1)"
              : "translate(6px, -6px) scale(0.8)",
            transition:
              "opacity 0.3s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease, border-color 0.3s ease",
            "& svg": { transition: "transform 0.3s ease" },
            "&:hover": { bgcolor: "primary.main", borderColor: "primary.main" },
            "&:hover svg": { transform: "scale(1.15)" },
            "&:focus-visible": {
              opacity: 1,
              transform: "none",
              outline: "2px solid #a78bfa",
              outlineOffset: 2,
            },
            "@media (hover: none)": { opacity: 1, transform: "none" },
          }}
        >
          <OpenInFullIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <Box
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
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
            height: "140px",
            background: `linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.6) 55%, transparent)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 2.5,
          }}
        >
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

              {technologies.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    columnGap: 1,
                    rowGap: 0.25,
                    mt: 0.75,
                  }}
                >
                  {technologies.map((tech, techIndex) => (
                    <Box
                      key={tech}
                      component="span"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: colors.lilac,
                      }}
                    >
                      {techIndex > 0 && (
                        <Box
                          component="span"
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            bgcolor: colors.lavender,
                            opacity: 0.6,
                          }}
                        />
                      )}
                      {tech}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
