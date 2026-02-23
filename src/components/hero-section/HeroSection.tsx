import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const HeroSection = () => {
  return (
    <Box
      id="home"
      className="hero-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component="h1"
          className="name-title"
          sx={{
            mb: "0.25rem",
            fontFamily: "Monument",
            fontSize: { xs: "2rem", md: "7rem" },
            lineHeight: 1,
            fontWeight: "inherit",
          }}
        >
          KYLIANN LEVESQUE
        </Typography>
        <Typography
          component="h2"
          className="hero-subtitle"
          sx={{
            display: "inline-block",
            position: "relative",
            fontSize: "1.35rem",
            fontWeight: 300,
          }}
        >
          FULL-STACK DEVELOPER
        </Typography>
      </Box>
    </Box>
  );
};
