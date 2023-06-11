import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/basic/BasicLayout';
import Home from './pages/common/home/Home';
import Login from './pages/auth/login/Login';

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
