import { themeMode } from '@/types';

export const getDesignTokens = (mode: themeMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#ffffff',
          },
          secondary: {
            main: '#ffffff',
            contrastText: '#121212',
          },
          border: {
            main: '#DBDBDB',
          },
        }
      : {
          primary: {
            main: '#121212',
          },
          secondary: {
            main: '#262626',
            contrastText: '#ffffff',
          },
          border: {
            main: '#303030',
          },
        }),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 18,
    fontWeightBold: 500,
  },
});
