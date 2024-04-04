import { Outlet } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const BasicLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default BasicLayout;
