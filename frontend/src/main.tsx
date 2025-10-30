import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppRoutes from './routes/AppRoutes.tsx';
import { taupeMinimalismTheme } from './styles/taupeMinimalist.tsx';
import { monochromeTheme } from './styles/monoChrome.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={monochromeTheme}>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
