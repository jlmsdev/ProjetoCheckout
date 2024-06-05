import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';
import { Layout } from './components/Layout';
import { Produto } from './pages/produto';

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/carrinho',
        element: <Carrinho />
      },

      {
        path: '/produto/:id',
        element: <Produto />
      }
    ]
  }
  
])

export { router }