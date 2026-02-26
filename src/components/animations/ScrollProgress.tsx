import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "4px",
        left: 0,
        width: "100%",
        zIndex: 3,
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "6px",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
        }}
      />
    </Box>
  );
};
