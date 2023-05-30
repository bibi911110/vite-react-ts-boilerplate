import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';

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
