import { createTheme } from '@mui/material/styles';

export const taupeMinimalismTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F9F8F6',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#B7A99A', // Taupe accent
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B7280', // Subtle gray for secondary elements
    },
    text: {
      primary: '#1F1F1F',
      secondary: '#4B5563',
    },
    divider: '#E5E5E5',
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      color: '#1F1F1F',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            backgroundColor: '#B7A99A',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});
