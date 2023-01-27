import { Outlet } from 'react-router-dom';
import NavbarLeft from '../navbar-left/navbarLeft';
import SidebarRight from '../sidebar-right/sidebarRight';

const Layout = () => {
  return (
    <div>
      <NavbarLeft />
      <Outlet />
      <SidebarRight />
    </div>
  );
};

export default Layout;
