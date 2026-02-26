import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { socials } from "../../data/navigation";
import { colors } from "../../theme";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "background.default",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                fontFamily: "WanoQuin, sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "2px",
                color: "text.primary",
              }}
            >
              KLS
            </Typography>
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: colors.muted,
              }}
            >
              © {new Date().getFullYear()} Kyliann Levesque · France
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {socials.map(({ href, label, icon }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  display: "inline-flex",
                  opacity: 0.5,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 },
                }}
              >
                <Box component="img" src={icon} alt={label} sx={{ width: 22, height: 22 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
