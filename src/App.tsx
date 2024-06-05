import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';
import { Layout } from './components/Layout';
import { Produto } from './pages/produto';
import { FimCompra } from './pages/FimCompra';

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
      },
      {
        path: '/compra-finalizada',
        element: <FimCompra />
      }
    ]
  }
  
])

export { router }