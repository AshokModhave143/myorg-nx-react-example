import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import MainPageLayout from './app/main-page-layout/MainPageLayout';
import { theme } from './theme';

function MainApp() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageLayout>
        <App />
        <CssBaseline />
      </MainPageLayout>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
