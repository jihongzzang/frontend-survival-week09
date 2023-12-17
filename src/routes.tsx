import Layout from './components/Layout';

import {
  HomePage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
} from './pages';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
    ],
  },
];

export default routes;
