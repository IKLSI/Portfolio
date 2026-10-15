import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProjectLink from "./ProjectLink";
import GithubIcon from "../../assets/icons/github.svg";
import { colors } from "../../theme";
import type { Project } from "../../data/projects";

interface ProjectModalProps {
  projects: Project[];
  index: number;
  open: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const roundButtonSx = {
  width: 36,
  height: 36,
  color: "text.primary",
  border: "1px solid rgba(0,0,0,0.12)",
  transition:
    "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    bgcolor: "primary.main",
    borderColor: "primary.main",
    color: "#fff",
  },
};

export default function ProjectModal({
  projects,
  index,
  open,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const project = projects[index];
  const total = projects.length;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % total);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, index, total, onNavigate]);

  if (!project) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="lg"
      transitionDuration={reducedMotion ? 0 : 300}
      aria-labelledby="project-modal-title"
      slotProps={{
        backdrop: { sx: { bgcolor: "rgba(10,10,15,0.55)" } },
        paper: {
          sx: { borderRadius: fullScreen ? 0 : 3, overflow: "auto" },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Fermer"
        sx={{
          ...roundButtonSx,
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          bgcolor: "#fff",
        }}
      >
        <CloseIcon sx={{ fontSize: 18 }} />
      </IconButton>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.7fr 1fr" },
          minHeight: { md: 460 },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{ display: "block", width: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="project-modal-title"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.6rem", md: "2.1rem" },
                letterSpacing: "0.02em",
                color: "text.primary",
                pr: 5,
              }}
            >
              {project.title}
            </Typography>

            {project.technologies && project.technologies.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  columnGap: 1,
                  rowGap: 0.25,
                  mt: 1.5,
                }}
              >
                {project.technologies.map((technology, technologyIndex) => (
                  <Box
                    key={technology}
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "primary.main",
                    }}
                  >
                    {technologyIndex > 0 && (
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          bgcolor: colors.lavender,
                        }}
                      />
                    )}
                    {technology}
                  </Box>
                ))}
              </Box>
            )}

            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              {project.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.liveLink && (
                <ProjectLink
                  href={project.liveLink}
                  label={project.liveLinkLabel ?? "Live Demo"}
                  emphasis
                />
              )}
              {project.githubLink && (
                <ProjectLink
                  href={project.githubLink}
                  label="GitHub"
                  icon={GithubIcon}
                />
              )}
            </Box>

            <Box sx={{ display: "flex", gap: 0.75 }}>
              <IconButton
                onClick={() => onNavigate((index - 1 + total) % total)}
                aria-label="Projet précédent"
                sx={roundButtonSx}
              >
                <ChevronLeftIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                onClick={() => onNavigate((index + 1) % total)}
                aria-label="Projet suivant"
                sx={roundButtonSx}
              >
                <ChevronRightIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
