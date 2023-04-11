import { Outlet } from 'react-router-dom';
import Header from './header';

const MainRouting = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
export default MainRouting;