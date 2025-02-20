import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, {Loader as ProductsLoader} from './pages/Products';
import NewProduct, {action as newProductAction} from './pages/NewProduct';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: ProductsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
        ],
    },
]);
