import './App.css';
import { ColorModeContextProvider } from './context';
import { MainRouter } from './routes';
import './global.d.ts';

function App() {
  return (
    <ColorModeContextProvider>
      <MainRouter />
    </ColorModeContextProvider>
  );
}

export default App;
