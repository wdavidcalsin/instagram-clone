import { getDesignTokens } from '@/styles';
import { themeMode } from '@/types';
import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: themeMode;
}

interface Props {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => null,
  mode: 'light',
});

export const ColorModeContextProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = React.useState<themeMode>('light');

  const colorMode = React.useMemo(
    (): IColorModeContext => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
