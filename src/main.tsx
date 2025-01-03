import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme.ts';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
