import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navabr from './components/Navabr';
import Program from './components/Program';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navabr />
        <Home />
        <Program />
      </BrowserRouter>
    </>
  );
}

export default App;
