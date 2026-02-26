import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
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
  return (
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

        <Box className="animated-border" />
      </Toolbar>
    </AppBar>
  );
};
