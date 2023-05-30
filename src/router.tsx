import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/common/home/Home';
import Login from '@/pages/auth/login/Login';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';

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
