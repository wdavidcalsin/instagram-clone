import './App.css';
import { ColorModeContextProvider } from './context';
import { MainRouter } from './routes';

function App() {
  return (
    <ColorModeContextProvider>
      <MainRouter />
    </ColorModeContextProvider>
  );
}

export default App;
