import { createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';

export const ThemeContext = React.createContext({
  themeName: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export type ThemeType = 'light' | 'dark';

export const getTheme = (mode: ThemeType) => {
  let theme = createTheme({ palette: { mode } });
  theme = responsiveFontSizes(theme);
  return theme;
};
