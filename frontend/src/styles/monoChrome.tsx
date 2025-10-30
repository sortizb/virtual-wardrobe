import { createTheme, alpha } from "@mui/material/styles";

export const monochromeTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E0E0E0",
      light: "#F5F5F5",
      dark: "#9E9E9E",
      contrastText: "#000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FAFAFA",
      secondary: alpha("#FAFAFA", 0.65),
    },
    divider: alpha("#FAFAFA", 0.15),
  },
  typography: {
    fontFamily: "var(--font-body)",
    h5: { fontFamily: "var(--font-logo)" },
  },
});
