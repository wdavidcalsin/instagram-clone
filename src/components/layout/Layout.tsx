import { Outlet } from 'react-router';
import { NavbarLeft } from '../navbar-left';
import { SidebarRight } from '../sidebar-right';

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
