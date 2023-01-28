import { ThemeProvider } from '@mui/material';
import './App.css';
import { ThemeMui } from './components/styles/mui/ThemeMui';
import { MainRouter } from './routes';

function App() {
  return (
    <ThemeProvider theme={ThemeMui}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
