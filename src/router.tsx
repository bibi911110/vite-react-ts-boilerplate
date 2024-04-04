import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/basic';
import Home from './pages/common/Home';
import Login from './pages/auth/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
        ],
    },
]);

export default router;
