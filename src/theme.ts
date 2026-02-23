import { createTheme } from "@mui/material/styles";

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
      secondary: "#6c757d",
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
