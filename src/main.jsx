import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/404';
import Recuerdos from './pages/Recuerdos/index.jsx';
import Galeria from './pages/Galeria/index.jsx';
import TikToks from './pages/TikToks/index.jsx';
import Listas from './pages/Listas/index.jsx';
import Login from './pages/Login/index.jsx';
import DiaEspecial from './pages/Especial/index.jsx';
import FloresAmarillas from './pages/Especial/pages/FloresAmarillas/index.jsx';
import RosaEterna from './pages/Especial/pages/Eterno/index.jsx';
import ProtectedRoute from './firebase/ProtectedRoute.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './firebase/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Loader from './components/Loader/index.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <ProtectedRoute element={<App />} />,
  },
  {
    path: '/recuerdos',
    element: <ProtectedRoute element={<Recuerdos />} />,
  },
  {
    path: '/galeria',
    element: <ProtectedRoute element={<Galeria />} />,
  },
  {
    path: '/tiktoks',
    element: <ProtectedRoute element={<TikToks />} />,
  },
  {
    path: '/listas',
    element: <ProtectedRoute element={<Listas />} />,
  },
  {
    path: '/dia_especial',
    element: <ProtectedRoute element={<DiaEspecial />} />,
  },
  {
    path: '/dia_especial/flores_amarillas',
    element: <ProtectedRoute element={<FloresAmarillas />} />,
  },
  {
    path: '/dia_especial/rosa_eterna',
    element: <ProtectedRoute element={<RosaEterna />} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    <Loader />
  </AuthProvider>
)
