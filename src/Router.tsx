import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/Auth.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
