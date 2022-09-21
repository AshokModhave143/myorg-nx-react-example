import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ThemeContext, getTheme, ThemeType } from './theme';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function MainApp() {
  const [mode, setMode] = useState<ThemeType>('light');

  const colorMode = React.useMemo(
    () => ({
      themeName: mode,
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </ThemeContext.Provider>
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
