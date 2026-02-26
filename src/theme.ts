import { createTheme } from "@mui/material/styles";

export const colors = {
  dark: "#0a0a0f",
  body: "#6b6b80",
  muted: "#9ca3af",
  lavender: "#a78bfa",
  lilac: "#c4b5fd",
} as const;

const theme = createTheme({
  palette: {
    primary: {
      main: "#8f44fd",
    },
    secondary: {
      main: "#0d6efd",
    },
    text: {
      primary: "#212529",
      secondary: "#6b6b80",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
