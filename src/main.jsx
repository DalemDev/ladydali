import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import NotFound from './components/404';
import TikToks from './pages/TikToks/index.jsx';
import Listas from './pages/Listas/index.jsx';
import Links from './pages/Links/index.jsx';
import Login from './pages/Login/index.jsx';
import DiaEspecial from './pages/Especial/index.jsx';
import FloresAmarillas from './pages/Especial/pages/FloresAmarillas/index.jsx';
import RosaEterna from './pages/Especial/pages/Eterno/index.jsx';
import ProtectedRoute from './firebase/ProtectedRoute.jsx';
import Loader from './components/Loader/index.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './firebase/Auth/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css'

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
    path: '/links',
    element: <ProtectedRoute element={<Links />} />,
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
