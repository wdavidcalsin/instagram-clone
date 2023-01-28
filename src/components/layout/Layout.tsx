import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { NavbarLeft } from '../navbar-left';
import { SidebarRight } from '../sidebar-right';
import { Container } from '../styles';

const Layout = () => {
  return (
    <Container>
      <NavbarLeft />
      <Box sx={{ flex: 2, marginLeft: '22%' }}>
        <Outlet />
      </Box>
      <SidebarRight />
    </Container>
  );
};

export default Layout;
