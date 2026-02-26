import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../theme";

export const WelcomeToast = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={{
        "& .MuiSnackbarContent-root": { p: 0 },
      }}
    >
      <Box
        sx={{
          bgcolor: colors.dark,
          border: "1px solid rgba(143,68,253,0.25)",
          borderRadius: 3,
          px: 2.5,
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          minWidth: 280,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "#22c55e",
            flexShrink: 0,
            boxShadow: "0 0 8px rgba(34,197,94,0.6)",
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#fff",
              lineHeight: 1.4,
            }}
          >
            Welcome to my portfolio
          </Typography>
          <Typography
            sx={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.5)",
              mt: 0.25,
            }}
          >
            SCROLL DOWN. THINGS GET INTERESTING.
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => setOpen(false)}
          sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#fff" }, p: 0.5 }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Snackbar>
  );
};
