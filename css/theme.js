import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4C75",
    },
    secondary: {
      main: "#BBE1FA",
    },
    error: {
      main: red.A400,
    },
    background: {
      main: "#FFFFFF",
      light: "#eeeee4",
    },
    ascents: {
      light: "#FFCAB1",
      medium: "#210124",
      gray: "#7B7263",
    },
    text: {
      primary: "#0F4C75",
      secondary: "#BBE1FA",
    },
  },
});

export default theme;
