import Box from "@mui/material/Box";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { colors } from "../../theme";

interface ProjectLinkProps {
  href: string;
  label: string;
  icon?: string;
  emphasis?: boolean;
}

export default function ProjectLink({
  href,
  label,
  icon,
  emphasis = false,
}: ProjectLinkProps) {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.6,
        px: 2.25,
        py: 1,
        borderRadius: 999,
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textDecoration: "none",
        color: "#fff",
        bgcolor: emphasis ? "primary.main" : "#3a3a46",
        border: "1px solid",
        borderColor: emphasis ? "primary.main" : "#3a3a46",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          bgcolor: emphasis ? "#7a35e8" : colors.dark,
          borderColor: emphasis ? "#7a35e8" : colors.dark,
          color: "#fff",
        },
      }}
    >
      {icon ? (
        <>
          {label}
          <Box
            component="span"
            aria-hidden
            sx={{
              width: 16,
              height: 16,
              bgcolor: "currentColor",
              maskImage: `url("${icon}")`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </>
      ) : (
        <>
          {label}
          <ArrowOutwardIcon sx={{ fontSize: 18 }} />
        </>
      )}
    </Box>
  );
}
