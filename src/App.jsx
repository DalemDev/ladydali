import SnowfallBackground from "./components/SnowFallBackground";
import './app.css';
import Footer from "./components/Footer";
import Presentacion from "./components/Presentacion";
import Menu from "./components/Menu";

function App() {
  return (
    <>
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
