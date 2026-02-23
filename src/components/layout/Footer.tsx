import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        color: "text.secondary",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 5,
          }}
        >
          <Box sx={{ maxWidth: 300 }}>
            <Typography
              component="h3"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                mb: 1.5,
                pb: 1,
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                color: "text.primary",
              }}
            >
              Réseaux sociaux
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 1,
              }}
            >
              {[
                {
                  href: "https://github.com/IKLSI",
                  alt: "GitHub",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                },
                {
                  href: "https://www.linkedin.com/in/kyliann-levesque-87711a277/",
                  alt: "LinkedIn",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                },
                {
                  href: "https://medium.com/@kyliannlvs2",
                  alt: "Medium",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/2048px-Medium_logo_Monogram.svg.png",
                },
              ].map(({ href, alt, src }) => {
                const [hover, setHover] = useState(false);
                return (
                  <Box component="li" key={alt}>
                    <Box
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lien ${alt}`}
                      sx={{ display: "inline-block", color: "inherit" }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={alt}
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: 1,
                          transform: hover ? "scale(1.2)" : "scale(1)",
                          transition: "transform 0.4s ease-in-out",
                        }}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ maxWidth: 300 }}>
            <Typography
              component="h3"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                mb: 1.5,
                pb: 1,
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                color: "text.primary",
              }}
            >
              Localisation
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                fontSize: "16px",
                color: "text.primary",
              }}
            >
              <LocationOnIcon sx={{ mr: 1, fontSize: "1.3rem" }} />
              France
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
