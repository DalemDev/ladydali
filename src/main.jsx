import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import NotFound from './components/404';
import TikToks from './pages/TikToks/index.jsx';
import Listas from './pages/Listas/index.jsx';
import Links from './pages/Links/index.jsx';
import Login from './pages/Login/index.jsx';
import DiaEspecial from './pages/Especial/pages/index.jsx';
import FloresAmarillas from './pages/Especial/pages/FloresAmarillas/index.jsx';
import RosaEterna from './pages/Especial/pages/Eterno/index.jsx';
import DiaEspecialLayout from './pages/Especial/DiaEspecialLayout.jsx';
import Notas from './pages/Notas/index.jsx';
import ProtectedRoute from './firebase/ProtectedRoute.jsx';
import Loader from './components/Loader/index.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './firebase/Auth/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css'

export const rutas = [
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
    element: <ProtectedRoute element={<DiaEspecialLayout />} />,
    children: [
      {
        index: true,
        element: <DiaEspecial />,
      },
      {
        path: '21-09-2024_flores_amarillas',
        element: <FloresAmarillas />,
      },
      {
        path: 'rosa_eterna',
        element: <RosaEterna />,
      },
    ]
  },
  {
    path: '/notas',
    element: <ProtectedRoute element={<Notas />} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(rutas);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    <Loader />
  </AuthProvider>
)
