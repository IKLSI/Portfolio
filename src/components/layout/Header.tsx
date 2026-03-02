import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { gsap } from "../../lib/gsap";
import { navLinks } from "../../data/navigation";

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 0 },
      ease: "power2.inOut",
    });
  }
};

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setDrawerOpen(false);
    scrollTo(e, href);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.default",
          zIndex: 3,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 1.5 }}>
          <Typography
            component="div"
            className="header-logo"
            sx={{
              fontFamily: "'WanoQuin', sans-serif",
              fontSize: "1.8rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "text.primary",
              cursor: "pointer",
            }}
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0 },
                ease: "power2.inOut",
              })
            }
          >
            KLS
          </Typography>

          <Box
            component="nav"
            sx={{ display: { xs: "none", md: "flex" }, gap: "2.5rem" }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                fontSize="0.85rem"
                underline="none"
                className="menu-link"
                sx={{ color: "text.primary", letterSpacing: "0.08em" }}
                onClick={(e) => scrollTo(e, href)}
              >
                {label}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "text.primary" }}
              aria-label="Ouvrir le menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box className="animated-border" sx={{ display: { xs: "none", md: "block" } }} />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "75vw",
            maxWidth: 300,
            bgcolor: "background.default",
            px: 3,
            py: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "text.primary" }} aria-label="Fermer le menu">
            <CloseIcon />
          </IconButton>
        </Box>

        {navLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            underline="none"
            className="menu-link"
            sx={{
              color: "text.primary",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              py: 1.5,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-of-type": { borderBottom: "none" },
            }}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </Link>
        ))}
      </Drawer>
    </>
  );
};
