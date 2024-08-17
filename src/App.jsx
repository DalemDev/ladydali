import Footer from "./components/footer"
import SnowfallBackground from "./components/SnowFallBackground"
import './app.css';
import Presentacion from "./components/Presentacion";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <SnowfallBackground />

      <div className="main-content">
        {/* presentacion */}
        <Presentacion />

        {/* menu */}
        <Menu />
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default App
