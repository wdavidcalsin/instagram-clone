import { ThemeProvider } from '@mui/material';
import './App.css';
import { MainRouter } from './routes';
import { ThemeMui } from './styles';

function App() {
  return (
    <ThemeProvider theme={ThemeMui}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
