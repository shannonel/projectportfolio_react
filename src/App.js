import logo from './logo.svg';
import './css/App.scss';
import LandingPage from './shared/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import createRoutes from './shared/Router'

const routes = createRoutes();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
