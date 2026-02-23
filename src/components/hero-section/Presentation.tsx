import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfilImage from "../../assets/img/Presentation.jpeg";

export const Presentation = () => {
  return (
    <Container
      component="section"
      id="about"
      sx={{
        mb: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", mx: "auto", columnSpacing: 5 }}
        className="col-xl-10"
      >
        <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ px: 1.5 }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 4,
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            About Me <Box component="span">👋🏼</Box>
          </Typography>

          <Box
            sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.7 }}
          >
            <Typography component="p" sx={{ mb: 1 }}>
              Software Engineer &amp;{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>
                Full-Stack Developer
              </Box>{" "}
              at&nbsp;
              <Box
                component="a"
                href="https://www.ftel.fr/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: "relative",
                  fontWeight: 700,
                  color: "primary.main",
                  textDecoration: "none",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -2,
                    width: "0%",
                    height: "2px",
                    bgcolor: "primary.main",
                    transition: "width 0.4s ease",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                FTEL
              </Box>
              .
            </Typography>

            <Typography component="p" sx={{ mb: 0 }}>
              I develop{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>
                clean, scalable, and production-ready applications
              </Box>{" "}
              that seamlessly integrate{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>
                robust back-end architectures
              </Box>{" "}
              with{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>
                intuitive, user-centered front-end experiences
              </Box>
              .
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
            <Box
              component="a"
              href="https://github.com/IKLSI"
              target="_blank"
              rel="noreferrer"
              sx={{ display: "inline-block", lineHeight: 0 }}
            >
              <Box
                component="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github"
                sx={{ width: 36, height: 36, opacity: 0.8 }}
              />
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/in/kyliann-levesque-87711a277/"
              target="_blank"
              rel="noreferrer"
              sx={{ display: "inline-block", lineHeight: 0 }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384046.png"
                alt="LinkedIn"
                sx={{ width: 36, height: 36, opacity: 0.8 }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 5 }}
          sx={{ textAlign: "center", mt: { xs: 4, md: 0 } }}
        >
          <Box sx={{ display: "inline-block", p: 3 }}>
            <Box
              component="img"
              src={ProfilImage}
              alt="Personal Photo"
              sx={{
                maxWidth: "70%",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
