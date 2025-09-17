import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import theme from "./styles/muiTheme.tsx"
import './styles/main.css'

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppRoutes from './routes/AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
