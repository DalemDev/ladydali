import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/404';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Recuerdos from './pages/Recuerdos/index.jsx';
import Galeria from './pages/Galeria/index.jsx';
import TikToks from './pages/TikToks/index.jsx';
import Listas from './pages/Listas/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recuerdos',
    element: <Recuerdos />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/tiktoks',
    element: <TikToks />
  },
  {
    path: '/listas',
    element: <Listas />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
