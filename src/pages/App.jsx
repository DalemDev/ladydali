import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Presentacion from "../components/Presentacion";
import Logout from '../components/Logout';
import SnowfallBackground from "../components/SnowFallBackground";

function App() {

  return (
    <>
      <Logout />
      <SnowfallBackground />

      <div className="container">
        <Presentacion />
        <Menu />
      </div>

      <Footer />
    </>
  )
}

export default App
