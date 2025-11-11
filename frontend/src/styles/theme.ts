import { createTheme, alpha } from "@mui/material/styles";

const taupePrimary = "#B7A99A";
const taupePrimaryDark = "#9E8F80";
const taupeSecondary = "#6B7280";

const taupeMinimalismTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F9F8F6",
      paper: "#FFFFFF",
    },
    primary: {
      main: taupePrimary,
      dark: taupePrimaryDark,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: taupeSecondary,
    },
    text: {
      primary: "#1F1F1F",
      secondary: "#4B5563",
    },
    divider: "#E5E5E5",
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      color: "#1F1F1F",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            transition: "all 0.2s ease",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.text.primary, 0.12),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.primary.main, 0.28),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: 12,
          boxShadow: "0 6px 26px rgba(0,0,0,0.08)",
        }),
        listbox: ({ theme }) => ({
          // ensure vertical only scroll and wrapping inside options
          overflowX: "hidden",
          padding: theme.spacing(0.5),
          "& .MuiAutocomplete-option": {
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          height: 28,
          fontFamily: theme.typography.fontFamily,
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
          transition: "all 0.25s ease",
          "&:hover": {
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            // keep hover bg handled by component-specific sx to match contrast needs
          },
        },
      },
    },
  },
});

export default taupeMinimalismTheme;
