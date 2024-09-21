import './app.css';
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Presentacion from "./components/Presentacion";
import SnowfallBackground from "./components/SnowFallBackground";
import Logout from './components/Logout';

function App() {

  return (
    <>
      <Logout />
      <SnowfallBackground />

      <div className="main-content">
        <Presentacion />
        <Menu />
      </div>

      <Footer />
    </>
  )
}

export default App
